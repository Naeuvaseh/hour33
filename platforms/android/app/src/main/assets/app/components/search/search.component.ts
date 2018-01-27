import { Component, OnInit, ViewChild } from '@angular/core';
import { Theme, Debug } from '../../settings';
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode, ListViewItemSnapMode } from 'nativescript-pro-ui/listview';
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
import { SearchStatusCode } from '../../enums/search-status.enum';
import { forEach } from '@angular/router/src/utils/collection';
import { generate } from 'rxjs/observable/generate';
import { RadListViewComponent } from 'nativescript-pro-ui/listview/angular';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('vendorList') listViewComponent: RadListViewComponent;

  private theme;
  private debug;
  private searchStatusCode: SearchStatusCode;
  private nextPageFlag: boolean;
  private loadingFlag: boolean;
  private items: ObservableArray<Vendor>;
  private userLocation: Location;

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
    // Check if data exists
    if (this.googleLocationService.setCurrentLocation && this.googleLocationService.vendors) {
      console.log("Data exists already");
      this.searchResults = this.googleLocationService.searchResults;
      this.vendors = this.googleLocationService.vendors;
      this.searchStatusCode = SearchStatusCode.OK;
    }
    else {
      this.loadingFlag = true;
      // Get location
      this.googleLocationService
        .search(SearchMode.Default, false)
        .then((response: SearchResult) => {
          this.loadingFlag = false;
          switch (response.status) {
            case SearchStatusCode.OK:
              // Set data at both service level and component level
              this.setNextPageFlag(response);
              if (!this.nextPageFlag) this.listViewComponent.listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
              this.searchResults = this.googleLocationService.searchResults = response;
              this.vendors = this.googleLocationService.vendors = <Vendor[]>response.results;
              this.searchStatusCode = SearchStatusCode.OK;
              break;
            case SearchStatusCode.ZERO_RESULTS:
              this.searchStatusCode = SearchStatusCode.ZERO_RESULTS;
              break;
            case SearchStatusCode.INVALID_REQUEST:
              console.log('SearchComponent.ngOnInit(SearchStatusCode.INVALID_REQUEST) Message: ' + response.error_message);
              alert('Something went wrong. Please try again.');
              break;
            case SearchStatusCode.UNKNOWN_ERROR:
              console.log('SearchComponent.ngOnInit(SearchStatusCode.UNKNOWN_ERROR) Message: ' + response.error_message);
              alert('Something went wrong. Please try again.');
              break;
            default:
              console.log('SearchComponent.ngOnInit(DEFAULT)');
              alert('The default search had an error. Please try again.');
              break;
          }
        });
    }
  }

  onFilter() {
    console.log("Filter button tapped.");
  }

  onListMapToggle() {
    console.log("ListMap toggle tapped.");
    this.listViewVisible = !this.listViewVisible;
  }

  refresh(args: ListViewEventData, insideRadListView: boolean) {
    args.object.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.Manual];
    // Clear curent data
    this.googleLocationService.searchResults = this.googleLocationService.vendors = undefined;
    // API Call
    this.googleLocationService
      .search(SearchMode.Default, false)
      .then((response: SearchResult) => {
        switch (response.status) {
          case SearchStatusCode.OK:
            // Set data at both service level and component level
            this.setNextPageFlag(response);
            if (!this.nextPageFlag) this.listViewComponent.listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
            this.searchResults = this.googleLocationService.searchResults = response;
            this.vendors = this.googleLocationService.vendors = <Vendor[]>response.results;
            this.searchStatusCode = SearchStatusCode.OK;            
            break;
          case SearchStatusCode.ZERO_RESULTS:
            this.searchStatusCode = SearchStatusCode.ZERO_RESULTS;
            break;
          case SearchStatusCode.INVALID_REQUEST:
            console.log('SearchComponent.refresh(SearchStatusCode.INVALID_REQUEST) Message: ' + response.error_message);
            alert('Something went wrong. Please try again.');
            break;
          case SearchStatusCode.UNKNOWN_ERROR:
            console.log('SearchComponent.refresh(SearchStatusCode.UNKNOWN_ERROR) Message: ' + response.error_message);
            alert('Something went wrong. Please try again.');
            break;
          default:
            console.log('SearchComponent.refresh(DEFAULT)');
            alert('The default search had an error. Please try again.');
            break;
        }
       if (insideRadListView) args.object.notifyPullToRefreshFinished();
      },
      (error) => {
        console.log('SearchComponent.refresh() ERROR: ' + error);
      });
  }

  onVendorTap(args: ListViewEventData) {
    let view = args.object as RadListView;
    let data = view.getSelectedItems() as Vendor[];


    console.log(JSON.stringify(data[0]));
    // let vendor: Vendor = this.vendors.find(vendor => vendor.place_id === args.data.place_id);
    // console.log("Vendor ID:", vendor.place_id);
    // //this.vendorService.setSelectedVendor(vendor);
    // this.router.navigate(["search/vendor", vendor.place_id], );
  }

  onLoadMoreItemsRequested(args: ListViewEventData) {
    if (this.searchResults.next_page_token) {
      this.googleLocationService
        .search(SearchMode.Default, true, this.searchResults)
        .then((response) => {
          switch (response.status) {
            case SearchStatusCode.OK:
              // Set data at both service level and component level
              this.setNextPageFlag(response);
              if (!this.nextPageFlag) args.object.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
              this.searchResults = this.googleLocationService.searchResults = response;
              let tempIndex = this.vendors.length-1;
              for (let vendor of response.results) {
                this.vendors.push(<Vendor>vendor);
              }
              // Set data of new data page
              this.googleLocationService.vendors = this.vendors;
              // Scroll to new data
              this.listViewComponent.listView.scrollToIndex(tempIndex, false, ListViewItemSnapMode.End);
              // Display results
              this.searchStatusCode = SearchStatusCode.OK;              
              break;
            case SearchStatusCode.ZERO_RESULTS:
              this.searchStatusCode = SearchStatusCode.ZERO_RESULTS;
              break;
            case SearchStatusCode.INVALID_REQUEST:
              console.log('SearchComponent.onLoadMoreItemsRequested(SearchStatusCode.INVALID_REQUEST) Message: ' + response.error_message);
              alert('Something went wrong. Please try again.');
              break;
            case SearchStatusCode.UNKNOWN_ERROR:
              console.log('SearchComponent.onLoadMoreItemsRequested(SearchStatusCode.UNKNOWN_ERROR) Message: ' + response.error_message);
              alert('Something went wrong. Please try again.');
              break;
            default:
              console.log('SearchComponent.onLoadMoreItemsRequested(DEFAULT)');
              alert('The default search had an error. Please try again.');
              break;
           }
          //args.object.notifyLoadOnDemandFinished();
        },
        (error) => {
          console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
        });
    }
    if (!this.nextPageFlag) args.object.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
    args.object.notifyLoadOnDemandFinished();
    args.returnValue = true;
  }

  setNextPageFlag(response: SearchResult) {
    this.nextPageFlag = (response.next_page_token) ? true : false;
    console.log("Next Page Flag: " + this.nextPageFlag);
  }

  calcDistance(loc1: Location, loc2: Location){
    return geolocation.distance(loc1, loc2) / 1609.34; // convert to miles.
  }
}