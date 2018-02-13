"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
var absolute_layout_1 = require("tns-core-modules/ui/layouts/absolute-layout");
var slider_1 = require("tns-core-modules/ui/slider/slider");
var angular_1 = require("nativescript-pro-ui/listview/angular");
// Plugins
var geolocation = require("nativescript-geolocation");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var radius_enum_1 = require("../../enums/radius.enum");
var search_mode_enum_1 = require("../../enums/search-mode.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        this.filterMenuVisible = false;
        this.distance = this.convertToMiles(radius_enum_1.Radius.mi5).toFixed(2);
        this.listViewVisible = true;
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.setTitle();
        this.setDistanceSliderValue();
        // Check if data exists
        if (this.googleLocationService.setCurrentLocation && this.googleLocationService.vendors) {
            console.log("Data exists already");
            this.searchResults = this.googleLocationService.searchResults;
            this.vendors = this.googleLocationService.vendors;
            this.searchStatusCode = search_status_enum_1.SearchStatusCode.OK;
        }
        else {
            this.loadingFlag = true;
            this.search(search_mode_enum_1.SearchMode.Nearby, false, this.googleLocationService.searchFilter);
        }
    };
    // Local component "search" method that uses the service's Search method.
    SearchComponent.prototype.search = function (mode, nextPage, filter) {
        var _this = this;
        this.googleLocationService
            .search(mode, nextPage, filter)
            .then(function (response) {
            _this.loadingFlag = false;
            switch (response.status) {
                case search_status_enum_1.SearchStatusCode.OK:
                    // Set data at both service level and component level
                    _this.setNextPageFlag(response);
                    // Remove "Load More" at bottom of list if there is not a next_page_token in result set.
                    if (!_this.nextPageFlag)
                        _this.listViewComponent.listView.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
                    // Update search results to component and service
                    _this.searchResults = _this.googleLocationService.searchResults = response;
                    // Set Vendors list from results
                    _this.vendors = _this.googleLocationService.vendors = response.results;
                    // Update status code to display results
                    _this.searchStatusCode = search_status_enum_1.SearchStatusCode.OK;
                    break;
                case search_status_enum_1.SearchStatusCode.ZERO_RESULTS:
                    _this.searchStatusCode = search_status_enum_1.SearchStatusCode.ZERO_RESULTS;
                    break;
                case search_status_enum_1.SearchStatusCode.INVALID_REQUEST:
                    console.log('SearchComponent.ngOnInit(SearchStatusCode.INVALID_REQUEST) Message: ' + response.error_message);
                    alert('Something went wrong. Please try again.');
                    break;
                case search_status_enum_1.SearchStatusCode.UNKNOWN_ERROR:
                    console.log('SearchComponent.ngOnInit(SearchStatusCode.UNKNOWN_ERROR) Message: ' + response.error_message);
                    alert('Something went wrong. Please try again.');
                    break;
                default:
                    console.log('SearchComponent.ngOnInit(DEFAULT)');
                    alert('The default search had an error. Please try again.');
                    break;
            }
            // Close filter menu visibility if open
            _this.filterMenuVisible = false;
        });
    };
    SearchComponent.prototype.onFilter = function () {
        this.filterMenuVisible = !this.filterMenuVisible;
        this.setTitle();
        // this.filterMenu.animate({
        //   translate: { x: 100, y: 100 },
        //   duration: 3000
        // });
    };
    SearchComponent.prototype.onListMapToggle = function () {
        console.log("ListMap toggle tapped.");
        this.listViewVisible = !this.listViewVisible;
    };
    SearchComponent.prototype.refresh = function (args, insideRadListView) {
        var _this = this;
        args.object.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.Manual];
        // Clear curent data
        this.googleLocationService.searchResults = this.googleLocationService.vendors = undefined;
        // API Call
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Nearby, false)
            .then(function (response) {
            switch (response.status) {
                case search_status_enum_1.SearchStatusCode.OK:
                    // Set data at both service level and component level
                    _this.setNextPageFlag(response);
                    if (!_this.nextPageFlag)
                        _this.listViewComponent.listView.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
                    _this.searchResults = _this.googleLocationService.searchResults = response;
                    _this.vendors = _this.googleLocationService.vendors = response.results;
                    _this.searchStatusCode = search_status_enum_1.SearchStatusCode.OK;
                    break;
                case search_status_enum_1.SearchStatusCode.ZERO_RESULTS:
                    _this.searchStatusCode = search_status_enum_1.SearchStatusCode.ZERO_RESULTS;
                    break;
                case search_status_enum_1.SearchStatusCode.INVALID_REQUEST:
                    console.log('SearchComponent.refresh(SearchStatusCode.INVALID_REQUEST) Message: ' + response.error_message);
                    alert('Something went wrong. Please try again.');
                    break;
                case search_status_enum_1.SearchStatusCode.UNKNOWN_ERROR:
                    console.log('SearchComponent.refresh(SearchStatusCode.UNKNOWN_ERROR) Message: ' + response.error_message);
                    alert('Something went wrong. Please try again.');
                    break;
                default:
                    console.log('SearchComponent.refresh(DEFAULT)');
                    alert('The default search had an error. Please try again.');
                    break;
            }
            if (insideRadListView)
                args.object.notifyPullToRefreshFinished();
        }, function (error) {
            console.log('SearchComponent.refresh() ERROR: ' + error);
        });
    };
    SearchComponent.prototype.onVendorTap = function (args) {
        var data = args.object.getSelectedItems()[0];
        var vendor = this.vendors.find(function (vendor) { return vendor.place_id === data.place_id; });
        this.router.navigate(["search/vendor", vendor.place_id]);
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        if (this.searchResults.next_page_token) {
            this.googleLocationService
                .search(search_mode_enum_1.SearchMode.Nearby, true, null, this.searchResults) // 'null' for filter because the original search criteria has been requested
                .then(function (response) {
                switch (response.status) {
                    case search_status_enum_1.SearchStatusCode.OK:
                        // Set data at both service level and component level
                        _this.setNextPageFlag(response);
                        if (!_this.nextPageFlag)
                            args.object.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
                        _this.searchResults = _this.googleLocationService.searchResults = response;
                        var tempIndex = _this.vendors.length - 1;
                        for (var _i = 0, _a = response.results; _i < _a.length; _i++) {
                            var vendor = _a[_i];
                            _this.vendors.push(vendor);
                        }
                        // Set data of new data page
                        _this.googleLocationService.vendors = _this.vendors;
                        // Scroll to new data
                        _this.listViewComponent.listView.scrollToIndex(tempIndex, false, listview_1.ListViewItemSnapMode.End);
                        // Display results
                        _this.searchStatusCode = search_status_enum_1.SearchStatusCode.OK;
                        break;
                    case search_status_enum_1.SearchStatusCode.ZERO_RESULTS:
                        _this.searchStatusCode = search_status_enum_1.SearchStatusCode.ZERO_RESULTS;
                        break;
                    case search_status_enum_1.SearchStatusCode.INVALID_REQUEST:
                        console.log('SearchComponent.onLoadMoreItemsRequested(SearchStatusCode.INVALID_REQUEST) Message: ' + response.error_message);
                        alert('Something went wrong. Please try again.');
                        break;
                    case search_status_enum_1.SearchStatusCode.UNKNOWN_ERROR:
                        console.log('SearchComponent.onLoadMoreItemsRequested(SearchStatusCode.UNKNOWN_ERROR) Message: ' + response.error_message);
                        alert('Something went wrong. Please try again.');
                        break;
                    default:
                        console.log('SearchComponent.onLoadMoreItemsRequested(DEFAULT)');
                        alert('The default search had an error. Please try again.');
                        break;
                }
                //args.object.notifyLoadOnDemandFinished();
            }, function (error) {
                console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
            });
        }
        if (!this.nextPageFlag)
            args.object.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
        args.object.notifyLoadOnDemandFinished();
        args.returnValue = true;
    };
    SearchComponent.prototype.setNextPageFlag = function (response) {
        this.nextPageFlag = (response.next_page_token) ? true : false;
        console.log("Next Page Flag: " + this.nextPageFlag);
    };
    SearchComponent.prototype.onDistanceSliderChange = function (event) {
        this.distance = this.convertToMiles(event.value).toFixed(2);
        this.googleLocationService.searchFilter.distance = event.value;
    };
    SearchComponent.prototype.setDistanceSliderValue = function () {
        return this.googleLocationService.searchFilter.distance;
    };
    SearchComponent.prototype.onCancelTap = function () {
        this.filterMenuVisible = false;
        this.setTitle();
    };
    SearchComponent.prototype.onResetTap = function () {
        this.googleLocationService.searchFilter = {
            mode: search_mode_enum_1.SearchMode.Nearby,
            distance: radius_enum_1.Radius.mi5,
            searchText: null
        };
    };
    SearchComponent.prototype.onSearchTap = function () {
        console.log('Current Search Filters: ' + JSON.stringify(this.googleLocationService.searchFilter));
        switch (this.googleLocationService.searchFilter.mode) {
            case search_mode_enum_1.SearchMode.Nearby:
                {
                    console.log('SearchComponent.onSearchTap(SearchMode.Nearby)');
                    this.search(this.googleLocationService.searchFilter.mode, false, this.googleLocationService.searchFilter);
                }
                break;
            case search_mode_enum_1.SearchMode.Text:
                {
                    console.log('SearchComponent.onSearchTap(SearchMode.Text)');
                }
                break;
            default:
                {
                    console.log('SearchComponent.onSearch(): ERROR. Something went wrong with the search mode selection.');
                }
                break;
        }
    };
    SearchComponent.prototype.onSearchTextChange = function (event) {
        var field = event.object;
        console.log(JSON.stringify(field.text));
        // Update SearchMode
        switch (field.text) {
            case null || undefined || '':
                {
                    this.googleLocationService.searchFilter.mode = search_mode_enum_1.SearchMode.Nearby;
                    console.log('SearchMode: ' + this.googleLocationService.searchFilter.mode);
                }
                break;
            default:
                {
                    this.googleLocationService.searchFilter.mode = search_mode_enum_1.SearchMode.Text;
                    console.log('SearchMode: ' + this.googleLocationService.searchFilter.mode);
                }
                break;
        }
    };
    SearchComponent.prototype.convertToMiles = function (meters) {
        return meters / 1609.34;
    };
    SearchComponent.prototype.calcDistance = function (loc1, loc2) {
        return geolocation.distance(loc1, loc2) / 1609.34; // convert to miles.
    };
    SearchComponent.prototype.setTitle = function () {
        switch (this.filterMenuVisible) {
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
    };
    __decorate([
        core_1.ViewChild('vendorList'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], SearchComponent.prototype, "listViewComponent", void 0);
    __decorate([
        core_1.ViewChild('filterMenu'),
        __metadata("design:type", absolute_layout_1.AbsoluteLayout)
    ], SearchComponent.prototype, "filterMenu", void 0);
    __decorate([
        core_1.ViewChild('distanceSlider'),
        __metadata("design:type", slider_1.Slider)
    ], SearchComponent.prototype, "distanceSlider", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: './components/search/search.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            vendor_service_1.VendorService,
            google_location_service_1.GoogleLocationService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQTZEO0FBQzdELDJDQUE4QztBQUM5Qyx5REFBOEg7QUFFOUgsMENBQXlFO0FBT3pFLCtFQUE0RTtBQUc1RSw0REFBMkQ7QUFDM0QsZ0VBQTRFO0FBQzVFLFVBQVU7QUFDVixzREFBd0Q7QUFDeEQsV0FBVztBQUNYLGdFQUE4RDtBQUM5RCxrRkFBK0U7QUFPL0UsdURBQWlEO0FBQ2pELGlFQUEwRDtBQUMxRCxxRUFBa0U7QUFNbEU7SUFxQkUseUJBQW9CLE1BQWMsRUFDeEIsYUFBNEIsRUFDNUIscUJBQTRDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVY5QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFLcEMsYUFBUSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFLckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5Qix1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENB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QUssR0FBRyxzQkFBc0IsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUF0UndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFvQiw4QkFBb0I7OERBQUM7SUFDeEM7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsZ0NBQWM7dURBQUM7SUFDdkI7UUFBNUIsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztrQ0FBaUIsZUFBTTsyREFBQztJQUp6QyxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMkNBQTJDO1NBQ3pELENBQUM7eUNBc0I0QixlQUFNO1lBQ1QsOEJBQWE7WUFDTCwrQ0FBcUI7T0F2QjNDLGVBQWUsQ0F5UjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpSRCxJQXlSQztBQXpSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLCBMaXN0Vmlld0l0ZW1TbmFwTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgZ2VuZXJhdGUgfSBmcm9tICdyeGpzL29ic2VydmFibGUvZ2VuZXJhdGUnO1xyXG4vLyBOYXRpdmVTY3JpcHRcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gJ3VpL2VudW1zJztcclxuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0J1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhcic7XHJcbi8vIFBsdWdpbnNcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vLi4vZW51bXMvZGF5LmVudW0nO1xyXG5pbXBvcnQgeyBSYWRpdXMgfSBmcm9tICcuLi8uLi9lbnVtcy9yYWRpdXMuZW51bSc7XHJcbmltcG9ydCB7IFNlYXJjaE1vZGUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWFyY2gtbW9kZS5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoU3RhdHVzQ29kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1zdGF0dXMuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3ZlbmRvckxpc3QnKSBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmlsdGVyTWVudScpIGZpbHRlck1lbnU6IEFic29sdXRlTGF5b3V0O1xyXG4gIEBWaWV3Q2hpbGQoJ2Rpc3RhbmNlU2xpZGVyJykgZGlzdGFuY2VTbGlkZXI6IFNsaWRlcjtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwcml2YXRlIGRlYnVnO1xyXG4gIHByaXZhdGUgc2VhcmNoU3RhdHVzQ29kZTogU2VhcmNoU3RhdHVzQ29kZTtcclxuICBwcml2YXRlIG5leHRQYWdlRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGxvYWRpbmdGbGFnOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXRlbXM6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+O1xyXG4gIHByaXZhdGUgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBwcml2YXRlIGZpbHRlck1lbnVWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXN0YW5jZTogc3RyaW5nID0gdGhpcy5jb252ZXJ0VG9NaWxlcyhSYWRpdXMubWk1KS50b0ZpeGVkKDIpO1xyXG4gIHB1YmxpYyBsaXN0Vmlld1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy5kZWJ1ZyA9IERlYnVnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB0aGlzLnNldERpc3RhbmNlU2xpZGVyVmFsdWUoKTtcclxuICAgIC8vIENoZWNrIGlmIGRhdGEgZXhpc3RzXHJcbiAgICBpZiAodGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2V0Q3VycmVudExvY2F0aW9uICYmIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJEYXRhIGV4aXN0cyBhbHJlYWR5XCIpO1xyXG4gICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzO1xyXG4gICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzO1xyXG4gICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LO1xyXG4gICAgfVxyXG4gICAgLy8gbG9hZCBkZWZhdWx0XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VhcmNoKFNlYXJjaE1vZGUuTmVhcmJ5LCBmYWxzZSwgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gTG9jYWwgY29tcG9uZW50IFwic2VhcmNoXCIgbWV0aG9kIHRoYXQgdXNlcyB0aGUgc2VydmljZSdzIFNlYXJjaCBtZXRob2QuXHJcbiAgc2VhcmNoKG1vZGU6IFNlYXJjaE1vZGUsIG5leHRQYWdlPzogYm9vbGVhbiwgZmlsdGVyPzogRmlsdGVyKSB7XHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgLnNlYXJjaChtb2RlLCBuZXh0UGFnZSwgZmlsdGVyKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IGZhbHNlO1xyXG4gICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAvLyBSZW1vdmUgXCJMb2FkIE1vcmVcIiBhdCBib3R0b20gb2YgbGlzdCBpZiB0aGVyZSBpcyBub3QgYSBuZXh0X3BhZ2VfdG9rZW4gaW4gcmVzdWx0IHNldC5cclxuICAgICAgICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAvLyBVcGRhdGUgc2VhcmNoIHJlc3VsdHMgdG8gY29tcG9uZW50IGFuZCBzZXJ2aWNlXHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAvLyBTZXQgVmVuZG9ycyBsaXN0IGZyb20gcmVzdWx0c1xyXG4gICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgLy8gVXBkYXRlIHN0YXR1cyBjb2RlIHRvIGRpc3BsYXkgcmVzdWx0c1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQubmdPbkluaXQoU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChERUZBVUxUKScpO1xyXG4gICAgICAgICAgYWxlcnQoJ1RoZSBkZWZhdWx0IHNlYXJjaCBoYWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvLyBDbG9zZSBmaWx0ZXIgbWVudSB2aXNpYmlsaXR5IGlmIG9wZW5cclxuICAgICAgdGhpcy5maWx0ZXJNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpIHtcclxuICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSAhdGhpcy5maWx0ZXJNZW51VmlzaWJsZTtcclxuICAgIHRoaXMuc2V0VGl0bGUoKTsgICAgXHJcbiAgICAvLyB0aGlzLmZpbHRlck1lbnUuYW5pbWF0ZSh7XHJcbiAgICAvLyAgIHRyYW5zbGF0ZTogeyB4OiAxMDAsIHk6IDEwMCB9LFxyXG4gICAgLy8gICBkdXJhdGlvbjogMzAwMFxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RNYXBUb2dnbGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxpc3RNYXAgdG9nZ2xlIHRhcHBlZC5cIik7XHJcbiAgICB0aGlzLmxpc3RWaWV3VmlzaWJsZSA9ICF0aGlzLmxpc3RWaWV3VmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goYXJnczogTGlzdFZpZXdFdmVudERhdGEsIGluc2lkZVJhZExpc3RWaWV3OiBib29sZWFuKSB7XHJcbiAgICBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5NYW51YWxdO1xyXG4gICAgLy8gQ2xlYXIgY3VyZW50IGRhdGFcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQVBJIENhbGxcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5OZWFyYnksIGZhbHNlKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuT0s6XHJcbiAgICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gPFZlbmRvcltdPnJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICBpZiAoaW5zaWRlUmFkTGlzdFZpZXcpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblZlbmRvclRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgbGV0IGRhdGEgPSAoKGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3KS5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgVmVuZG9yW10pWzBdO1xyXG4gICAgbGV0IHZlbmRvcjogVmVuZG9yID0gdGhpcy52ZW5kb3JzLmZpbmQodmVuZG9yID0+IHZlbmRvci5wbGFjZV9pZCA9PT0gZGF0YS5wbGFjZV9pZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2gvdmVuZG9yXCIsIHZlbmRvci5wbGFjZV9pZF0pO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHRzLm5leHRfcGFnZV90b2tlbikge1xyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5OZWFyYnksIHRydWUsIG51bGwsIHRoaXMuc2VhcmNoUmVzdWx0cykgLy8gJ251bGwnIGZvciBmaWx0ZXIgYmVjYXVzZSB0aGUgb3JpZ2luYWwgc2VhcmNoIGNyaXRlcmlhIGhhcyBiZWVuIHJlcXVlc3RlZFxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIGFyZ3Mub2JqZWN0LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICBsZXQgdGVtcEluZGV4ID0gdGhpcy52ZW5kb3JzLmxlbmd0aC0xO1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IHZlbmRvciBvZiByZXNwb25zZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMucHVzaCg8VmVuZG9yPnZlbmRvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIFNldCBkYXRhIG9mIG5ldyBkYXRhIHBhZ2VcclxuICAgICAgICAgICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gdGhpcy52ZW5kb3JzO1xyXG4gICAgICAgICAgICAgIC8vIFNjcm9sbCB0byBuZXcgZGF0YVxyXG4gICAgICAgICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuc2Nyb2xsVG9JbmRleCh0ZW1wSW5kZXgsIGZhbHNlLCBMaXN0Vmlld0l0ZW1TbmFwTW9kZS5FbmQpO1xyXG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgcmVzdWx0c1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBkZWZhdWx0IHNlYXJjaCBoYWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLy9hcmdzLm9iamVjdC5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgYXJncy5vYmplY3QubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICBhcmdzLm9iamVjdC5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgYXJncy5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXROZXh0UGFnZUZsYWcocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkge1xyXG4gICAgdGhpcy5uZXh0UGFnZUZsYWcgPSAocmVzcG9uc2UubmV4dF9wYWdlX3Rva2VuKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKFwiTmV4dCBQYWdlIEZsYWc6IFwiICsgdGhpcy5uZXh0UGFnZUZsYWcpO1xyXG4gIH1cclxuICBcclxuICBvbkRpc3RhbmNlU2xpZGVyQ2hhbmdlKGV2ZW50KXtcclxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmNvbnZlcnRUb01pbGVzKGV2ZW50LnZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmRpc3RhbmNlID0gZXZlbnQudmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIHNldERpc3RhbmNlU2xpZGVyVmFsdWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIuZGlzdGFuY2U7XHJcbiAgfVxyXG4gIFxyXG4gIG9uQ2FuY2VsVGFwKCl7XHJcbiAgICB0aGlzLmZpbHRlck1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uUmVzZXRUYXAoKXtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlciA9IHtcclxuICAgICAgbW9kZTogU2VhcmNoTW9kZS5OZWFyYnksXHJcbiAgICAgIGRpc3RhbmNlOiBSYWRpdXMubWk1LFxyXG4gICAgICBzZWFyY2hUZXh0OiBudWxsICAgICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBvblNlYXJjaFRhcCgpe1xyXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgU2VhcmNoIEZpbHRlcnM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpKTtcclxuICAgIHN3aXRjaCh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIubW9kZSl7XHJcbiAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uU2VhcmNoVGFwKFNlYXJjaE1vZGUuTmVhcmJ5KScpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5tb2RlLCBmYWxzZSwgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uU2VhcmNoVGFwKFNlYXJjaE1vZGUuVGV4dCknKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25TZWFyY2goKTogRVJST1IuIFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHNlYXJjaCBtb2RlIHNlbGVjdGlvbi4nKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgb25TZWFyY2hUZXh0Q2hhbmdlKGV2ZW50KXtcclxuICAgIGxldCBmaWVsZCA9IDxUZXh0RmllbGQ+IGV2ZW50Lm9iamVjdDtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZpZWxkLnRleHQpKTtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIFNlYXJjaE1vZGVcclxuICAgIHN3aXRjaChmaWVsZC50ZXh0KXtcclxuICAgICAgY2FzZSBudWxsIHx8IHVuZGVmaW5lZCB8fCAnJzoge1xyXG4gICAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5tb2RlID0gU2VhcmNoTW9kZS5OZWFyYnk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaE1vZGU6ICcgKyB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIubW9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIubW9kZSA9IFNlYXJjaE1vZGUuVGV4dDtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoTW9kZTogJyArIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5tb2RlKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29udmVydFRvTWlsZXMobWV0ZXJzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1ldGVycyAvIDE2MDkuMzQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNhbGNEaXN0YW5jZShsb2MxOiBMb2NhdGlvbiwgbG9jMjogTG9jYXRpb24pe1xyXG4gICAgcmV0dXJuIGdlb2xvY2F0aW9uLmRpc3RhbmNlKGxvYzEsIGxvYzIpIC8gMTYwOS4zNDsgLy8gY29udmVydCB0byBtaWxlcy5cclxuICB9XHJcbiAgXHJcbiAgc2V0VGl0bGUoKXtcclxuICAgIHN3aXRjaCh0aGlzLmZpbHRlck1lbnVWaXNpYmxlKXtcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICB0aGlzLnRpdGxlID0gJ0ZpbHRlcmVkIFNlYXJjaCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICB0aGlzLnRpdGxlID0gJ1RvZGF5XFwncyBIYXBweSBIb3Vycyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICB0aGlzLnRpdGxlID0gJ1RvZGF5XFwncyBIYXBweSBIb3Vycyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==