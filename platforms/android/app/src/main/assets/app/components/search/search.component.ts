import { Component, OnInit } from '@angular/core';
import { Theme, Debug } from '../../settings';
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-pro-ui/listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
// Services
import { VendorService } from '../../services/vendor.service';
import { GoogleLocationService } from '../../services/google-location.service';
// Interfaces
import { Vendor } from '../../interfaces/vendor.interface';
// Enums
import { Day } from '../../enums/day.enum';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent implements OnInit {

  private theme;
  private debug;
  private _numberOfAddedItems;
  private items: ObservableArray<Vendor>;
  
  public listViewVisible: boolean = true;

  constructor(private router: Router, 
              private vendorService: VendorService,
              private googleLocationService: GoogleLocationService) {
    this.theme = Theme;
    this.debug = Debug;
  }

  ngOnInit() {  
    this.items = this.vendorService.getVendors();
  }

  onFilter(){
    console.log("Filter button tapped.");
  }

  onListMapToggle(){
    console.log("ListMap toggle tapped.");
    this.googleLocationService.onGooglePlaces();
    this.googleLocationService.onPickPlace();
    this.listViewVisible = !this.listViewVisible;
  }

  refresh(args: ListViewEventData){
    setTimeout(function () {
      // API Data Request goes here.
      console.log("Pull down initiated.");
      args.object.notifyPullToRefreshFinished();
    }, 500);
  }

  onVendorTap(args: ListViewEventData){
    let vendor: Vendor = this.items.getItem(args.index);
    console.log("Vendor ID:", vendor.id);
    this.vendorService.setSelectedVendor(vendor);
    this.router.navigate(["search/vendor", vendor.id], );
  }

  onLoadMoreItemsRequested(args: ListViewEventData){
    var that = new WeakRef(this);
    setTimeout(function () {
      var listView: RadListView = args.object;
      var initialNumberOfItems = that.get()._numberOfAddedItems;
      for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
          // Check if there are any more pages
          if (i > this.items.names.length - 1) {
              listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
              break;
          }
          //Get next page and push onto array.
          //that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
          //that.get()._numberOfAddedItems++;
      }
      listView.notifyLoadOnDemandFinished();
    }, 500);
    args.returnValue = true;
  }
}