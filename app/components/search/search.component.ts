import { Component, OnInit } from '@angular/core';
import { Theme, Debug } from '../../settings';
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-pro-ui/listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { Location } from 'nativescript-geolocation';
import * as geolocation from 'nativescript-geolocation';
import { Accuracy } from 'ui/enums';
// Services
import { VendorService } from '../../services/vendor.service';
import { GoogleLocationService } from '../../services/google-location.service';
// Interfaces
import { Vendor } from '../../interfaces/search-result/vendor.interface';
import { SearchResult } from '../../interfaces/search-result/search-result.interface';
// Enums
import { Day } from '../../enums/day.enum';
import { Observable } from 'rxjs/Observable';
import { Radius } from '../../enums/radius.enum';
import { SearchMode } from '../../enums/search-mode.enum';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent implements OnInit {

  private theme;
  private debug;
  private nextPageFlag: boolean;
  private items: ObservableArray<Vendor>;
  
  public listViewVisible: boolean = true;
  public searchResults: SearchResult;
  public vendors: Vendor[];

  constructor(private router: Router, 
              private vendorService: VendorService,
              private googleLocationService: GoogleLocationService) {
    this.theme = Theme;
    this.debug = Debug;
  }

  ngOnInit() {  
    // Get location
    let tempLocation: Location;
    this.googleLocationService
        .search(SearchMode.Default, false)
        .then((response: SearchResult) => {
          this.setNextPageFlag(response);
          this.searchResults = response;
          this.vendors = <Vendor[]> response.results;
        });
  }

  onFilter(){
    console.log("Filter button tapped.");
  }

  onListMapToggle(){
    console.log("ListMap toggle tapped.");
    this.listViewVisible = !this.listViewVisible;
  }

  refresh(args: ListViewEventData){
    this.googleLocationService
        .search(SearchMode.Default, false)
        .then((response: SearchResult) => {
          this.setNextPageFlag(response);
          this.searchResults = response;
          this.vendors = <Vendor[]> response.results;
          args.object.notifyPullToRefreshFinished();
        }, 
        (error) => {
          console.log('SearchComponent.refresh() ERROR: ' + error);
        });
  }

  onVendorTap(args: ListViewEventData){
    let vendor: Vendor;// = this.vendors.find();
    console.log("Vendor ID:", vendor.place_id);
    //this.vendorService.setSelectedVendor(vendor);
    this.router.navigate(["search/vendor", vendor.place_id], );
  }

  onLoadMoreItemsRequested(args: ListViewEventData) {
    if (this.searchResults.next_page_token) {
      this.googleLocationService
        .search(SearchMode.Default, true, this.searchResults)
        .then((response) => {
          this.setNextPageFlag(response);
          this.searchResults = response;
          for (let vendor of response.results) {
            this.vendors.push(<Vendor>vendor);
          }
          args.object.notifyLoadOnDemandFinished();
        },
        (error) => {
          console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
        });
    }
  }

  setNextPageFlag(response: SearchResult){
    this.nextPageFlag = (response.next_page_token) ? true : false;
  }
}