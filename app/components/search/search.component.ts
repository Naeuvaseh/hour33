// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { Theme, Debug } from '../../settings';
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode, ListViewItemSnapMode } from 'nativescript-pro-ui/listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import { generate } from 'rxjs/observable/generate';
// NativeScript
import { Location } from 'nativescript-geolocation';
import { Accuracy } from 'ui/enums';
import { AbsoluteLayout } from 'tns-core-modules/ui/layouts/absolute-layout'
import { AnimationCurve } from "ui/enums";
import { TextField } from "ui/text-field";
import { Slider } from 'tns-core-modules/ui/slider/slider';
import { RadListViewComponent } from 'nativescript-pro-ui/listview/angular';
// Plugins
import * as geolocation from 'nativescript-geolocation';
// Services
import { VendorService } from '../../services/vendor.service';
import { GoogleLocationService } from '../../services/google-location.service';
// Interfaces
import { Vendor } from '../../interfaces/search-result/vendor.interface';
import { SearchResult } from '../../interfaces/search-result/search-result.interface';
import { Filter } from '../../interfaces/filter.interface';
// Enums
import { Day } from '../../enums/day.enum';
import { Radius } from '../../enums/radius.enum';
import { SearchStatusCode } from '../../enums/search-status.enum';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('vendorList') listViewComponent: RadListViewComponent;
  @ViewChild('filterMenu') filterMenu: AbsoluteLayout;
  @ViewChild('search') searchTxt: TextField;
  @ViewChild('distanceSlider') distanceSlider: Slider;

  private theme;
  private debug;
  private searchStatusCode: SearchStatusCode;
  private nextPageFlag: boolean;
  private loadingFlag: boolean;
  private items: ObservableArray<Vendor>;
  private userLocation: Location;
  private filterMenuVisible: boolean = false;

  public searchResults: SearchResult;
  public vendors: Vendor[];
  public filterSearchBtnProgress: boolean = false;
  public showFilterCriteria: boolean = true;
  public filterCriteria: string;
  public title: string;
  public distance: string = this.convertToMiles(Radius.mi5).toFixed(2);
  public listViewVisible: boolean = true;

  constructor(private router: Router,
    private vendorService: VendorService,
    private googleLocationService: GoogleLocationService) {
    this.theme = Theme;
    this.debug = Debug;
  }

  ngOnInit() {
    this.filterCriteria = JSON.stringify(this.googleLocationService.searchFilter);
    this.setTitle();
    this.setDistanceSliderValue();
    // Check if data exists
    if (this.googleLocationService.setCurrentLocation && this.googleLocationService.vendors) {
      console.log("Data exists already");
      this.searchResults = this.googleLocationService.searchResults;
      this.vendors = this.googleLocationService.vendors;
      this.searchStatusCode = SearchStatusCode.OK;
    }
    // load default
    else {
      this.loadingFlag = true;
      this.search(false, this.googleLocationService.searchFilter);
    }
  }
  // Local component "search" method that uses the service's Search method.
  search(nextPage?: boolean, filter?: Filter) {
    this.googleLocationService
      .search(nextPage, filter)
      .then((response: SearchResult) => {
        this.loadingFlag = false;
        switch (response.status) {
          case SearchStatusCode.OK:
            // Set data at both service level and component level
            this.setNextPageFlag(response);
            // Remove "Load More" at bottom of list if there is not a next_page_token in result set.
            if (!this.nextPageFlag) this.listViewComponent.listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
            // Update search results to component and service
            this.searchResults = this.googleLocationService.searchResults = response;
            // Set Vendors list from results
            this.vendors = this.googleLocationService.vendors = <Vendor[]>response.results;
            // Update status code to display results
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
        this.filterSearchBtnProgress = false;
        // Close filter menu visibility if open
        this.filterMenuVisible = false;
      });
  }

  onFilter() {
    this.filterMenuVisible = !this.filterMenuVisible;
    this.setTitle();    
    // this.filterMenu.animate({
    //   translate: { x: 100, y: 100 },
    //   duration: 3000
    // });
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
      .search(false, this.googleLocationService.searchFilter)
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
    let data = ((args.object as RadListView).getSelectedItems() as Vendor[])[0];
    let vendor: Vendor = this.vendors.find(vendor => vendor.place_id === data.place_id);
    this.router.navigate(["search/vendor", vendor.place_id]);
  }

  onLoadMoreItemsRequested(args: ListViewEventData) {
    if (this.searchResults.next_page_token) {
      this.googleLocationService
        .search(true, null, this.searchResults) // 'null' for filter because the original search criteria has been requested
        .then((response) => {
          switch (response.status) {
            case SearchStatusCode.OK:
              // Set data at both service level and component level
              this.setNextPageFlag(response);
              if (!this.nextPageFlag) args.object.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
              this.searchResults = this.googleLocationService.searchResults = response;
              let tempIndex = this.vendors.length - 1;
              // Add vendors to UI
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
  
  onDistanceSliderChange(event){
    this.distance = this.convertToMiles(event.value).toFixed(2);
    this.googleLocationService.searchFilter.distance = event.value;
  }
  
  setDistanceSliderValue(): number {
    return this.googleLocationService.searchFilter.distance;
  }
  
  onCancelTap(){
    this.filterMenuVisible = false;
    this.setTitle();
  }
  
  onResetTap(){
    console.log('SearchComponent.onReset() TAPPED');
    // Reset service filter
    this.googleLocationService.searchFilter = {
      distance: Radius.mi5 
    }
    // Reset filter menu controls
    this.filterSearchBtnProgress = false;
    this.searchTxt.text = '';
    this.distance = this.convertToMiles(this.googleLocationService.searchFilter.distance).toFixed(2);
  }
  
  onSearchTap(){
    // Display progres circle
    this.filterSearchBtnProgress = true;
    console.log('SearchComponent.onSearchTap()');
    this.search(false, this.googleLocationService.searchFilter);
  }

  onfilterCriteriaTap(){
    this.filterCriteria = JSON.stringify(this.googleLocationService.searchFilter);
  }
  
  onSearchTextChange(event){
    let field = <TextField> event.object;
    // Update search text in service
    this.googleLocationService.searchFilter.keyword = field.text;
  }
  
  convertToMiles(meters: number): number {
    return meters / 1609.34;
  }
  
  calcDistance(loc1: Location, loc2: Location){
    return geolocation.distance(loc1, loc2) / 1609.34; // convert to miles.
  }
  
  setTitle(){
    switch(this.filterMenuVisible){
      case true:
      this.title = 'Filtered Search';
      break;
      case false:
      this.title = 'Today\'s Happy Hours';
      break;
      default:
      this.title = 'Today\'s Happy Hours';
      break;
    }
  }
}