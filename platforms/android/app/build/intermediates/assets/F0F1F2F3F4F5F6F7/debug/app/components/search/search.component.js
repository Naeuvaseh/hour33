"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
var absolute_layout_1 = require("tns-core-modules/ui/layouts/absolute-layout");
var text_field_1 = require("ui/text-field");
var slider_1 = require("tns-core-modules/ui/slider/slider");
var angular_1 = require("nativescript-pro-ui/listview/angular");
// Plugins
var geolocation = require("nativescript-geolocation");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var radius_enum_1 = require("../../enums/radius.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        this.filterMenuVisible = false;
        this.filterSearchBtnProgress = false;
        this.showFilterCriteria = true;
        this.distance = this.convertToMiles(radius_enum_1.Radius.mi5).toFixed(2);
        this.listViewVisible = true;
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.filterCriteria = JSON.stringify(this.googleLocationService.searchFilter);
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
            this.search(false, this.googleLocationService.searchFilter);
        }
    };
    // Local component "search" method that uses the service's Search method.
    SearchComponent.prototype.search = function (nextPage, filter) {
        var _this = this;
        this.googleLocationService
            .search(nextPage, filter)
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
            _this.filterSearchBtnProgress = false;
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
            .search(false)
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
                .search(true, null, this.searchResults) // 'null' for filter because the original search criteria has been requested
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
        console.log('SearchComponent.onReset() TAPPED');
        // Reset service filter
        this.googleLocationService.searchFilter = {
            distance: radius_enum_1.Radius.mi5
        };
        // Reset filter menu controls
        this.filterSearchBtnProgress = false;
        this.searchTxt.text = '';
        this.distance = this.convertToMiles(this.googleLocationService.searchFilter.distance).toFixed(2);
    };
    SearchComponent.prototype.onSearchTap = function () {
        // Display progres circle
        this.filterSearchBtnProgress = true;
        console.log('SearchComponent.onSearchTap()');
        this.search(false, this.googleLocationService.searchFilter);
    };
    SearchComponent.prototype.onfilterCriteriaTap = function () {
        this.filterCriteria = JSON.stringify(this.googleLocationService.searchFilter);
    };
    SearchComponent.prototype.onSearchTextChange = function (event) {
        var field = event.object;
        // Update search text in service
        this.googleLocationService.searchFilter.keyword = field.text;
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
        core_1.ViewChild('search'),
        __metadata("design:type", text_field_1.TextField)
    ], SearchComponent.prototype, "searchTxt", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQTZEO0FBQzdELDJDQUE4QztBQUM5Qyx5REFBOEg7QUFFOUgsMENBQXlFO0FBT3pFLCtFQUE0RTtBQUU1RSw0Q0FBMEM7QUFDMUMsNERBQTJEO0FBQzNELGdFQUE0RTtBQUM1RSxVQUFVO0FBQ1Ysc0RBQXdEO0FBQ3hELFdBQVc7QUFDWCxnRUFBOEQ7QUFDOUQsa0ZBQStFO0FBTy9FLHVEQUFpRDtBQUNqRCxxRUFBa0U7QUFNbEU7SUF5QkUseUJBQW9CLE1BQWMsRUFDeEIsYUFBNEIsRUFDNUIscUJBQTRDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQWI5QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFJcEMsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBQ3pDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxhQUFRLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUtyQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIs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aWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUsIExpc3RWaWV3SXRlbVNuYXBNb2RlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9nZW5lcmF0ZSc7XHJcbi8vIE5hdGl2ZVNjcmlwdFxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSAndWkvZW51bXMnO1xyXG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXQnXHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyJztcclxuLy8gUGx1Z2luc1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi8uLi9lbnVtcy9kYXkuZW51bSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoU3RhdHVzQ29kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1zdGF0dXMuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3ZlbmRvckxpc3QnKSBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmlsdGVyTWVudScpIGZpbHRlck1lbnU6IEFic29sdXRlTGF5b3V0O1xyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaFR4dDogVGV4dEZpZWxkO1xyXG4gIEBWaWV3Q2hpbGQoJ2Rpc3RhbmNlU2xpZGVyJykgZGlzdGFuY2VTbGlkZXI6IFNsaWRlcjtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwcml2YXRlIGRlYnVnO1xyXG4gIHByaXZhdGUgc2VhcmNoU3RhdHVzQ29kZTogU2VhcmNoU3RhdHVzQ29kZTtcclxuICBwcml2YXRlIG5leHRQYWdlRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGxvYWRpbmdGbGFnOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXRlbXM6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+O1xyXG4gIHByaXZhdGUgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBwcml2YXRlIGZpbHRlck1lbnVWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG4gIHB1YmxpYyBmaWx0ZXJTZWFyY2hCdG5Qcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93RmlsdGVyQ3JpdGVyaWE6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBmaWx0ZXJDcml0ZXJpYTogc3RyaW5nO1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXN0YW5jZTogc3RyaW5nID0gdGhpcy5jb252ZXJ0VG9NaWxlcyhSYWRpdXMubWk1KS50b0ZpeGVkKDIpO1xyXG4gIHB1YmxpYyBsaXN0Vmlld1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy5kZWJ1ZyA9IERlYnVnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIHRoaXMuc2V0RGlzdGFuY2VTbGlkZXJWYWx1ZSgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgZGF0YSBleGlzdHNcclxuICAgIGlmICh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZXRDdXJyZW50TG9jYXRpb24gJiYgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZXhpc3RzIGFscmVhZHlcIik7XHJcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHM7XHJcbiAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnM7XHJcbiAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICB9XHJcbiAgICAvLyBsb2FkIGRlZmF1bHRcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmdGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWFyY2goZmFsc2UsIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIExvY2FsIGNvbXBvbmVudCBcInNlYXJjaFwiIG1ldGhvZCB0aGF0IHVzZXMgdGhlIHNlcnZpY2UncyBTZWFyY2ggbWV0aG9kLlxyXG4gIHNlYXJjaChuZXh0UGFnZT86IGJvb2xlYW4sIGZpbHRlcj86IEZpbHRlcikge1xyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgLnNlYXJjaChuZXh0UGFnZSwgZmlsdGVyKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0ZsYWcgPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBcIkxvYWQgTW9yZVwiIGF0IGJvdHRvbSBvZiBsaXN0IGlmIHRoZXJlIGlzIG5vdCBhIG5leHRfcGFnZV90b2tlbiBpbiByZXN1bHQgc2V0LlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc2VhcmNoIHJlc3VsdHMgdG8gY29tcG9uZW50IGFuZCBzZXJ2aWNlXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgLy8gU2V0IFZlbmRvcnMgbGlzdCBmcm9tIHJlc3VsdHNcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdHVzIGNvZGUgdG8gZGlzcGxheSByZXN1bHRzXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQubmdPbkluaXQoU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZWFyY2hCdG5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIENsb3NlIGZpbHRlciBtZW51IHZpc2liaWxpdHkgaWYgb3BlblxyXG4gICAgICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpIHtcclxuICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSAhdGhpcy5maWx0ZXJNZW51VmlzaWJsZTtcclxuICAgIHRoaXMuc2V0VGl0bGUoKTsgICAgXHJcbiAgICAvLyB0aGlzLmZpbHRlck1lbnUuYW5pbWF0ZSh7XHJcbiAgICAvLyAgIHRyYW5zbGF0ZTogeyB4OiAxMDAsIHk6IDEwMCB9LFxyXG4gICAgLy8gICBkdXJhdGlvbjogMzAwMFxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RNYXBUb2dnbGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxpc3RNYXAgdG9nZ2xlIHRhcHBlZC5cIik7XHJcbiAgICB0aGlzLmxpc3RWaWV3VmlzaWJsZSA9ICF0aGlzLmxpc3RWaWV3VmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goYXJnczogTGlzdFZpZXdFdmVudERhdGEsIGluc2lkZVJhZExpc3RWaWV3OiBib29sZWFuKSB7XHJcbiAgICBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5NYW51YWxdO1xyXG4gICAgLy8gQ2xlYXIgY3VyZW50IGRhdGFcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQVBJIENhbGxcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZWFyY2goZmFsc2UpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSA8VmVuZG9yW10+cmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSzsgICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTOlxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goREVGQVVMVCknKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBkZWZhdWx0IHNlYXJjaCBoYWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgIGlmIChpbnNpZGVSYWRMaXN0VmlldykgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVmVuZG9yVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBsZXQgZGF0YSA9ICgoYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXcpLmdldFNlbGVjdGVkSXRlbXMoKSBhcyBWZW5kb3JbXSlbMF07XHJcbiAgICBsZXQgdmVuZG9yOiBWZW5kb3IgPSB0aGlzLnZlbmRvcnMuZmluZCh2ZW5kb3IgPT4gdmVuZG9yLnBsYWNlX2lkID09PSBkYXRhLnBsYWNlX2lkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNlYXJjaC92ZW5kb3JcIiwgdmVuZG9yLnBsYWNlX2lkXSk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHMubmV4dF9wYWdlX3Rva2VuKSB7XHJcbiAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLnNlYXJjaCh0cnVlLCBudWxsLCB0aGlzLnNlYXJjaFJlc3VsdHMpIC8vICdudWxsJyBmb3IgZmlsdGVyIGJlY2F1c2UgdGhlIG9yaWdpbmFsIHNlYXJjaCBjcml0ZXJpYSBoYXMgYmVlbiByZXF1ZXN0ZWRcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgbGV0IHRlbXBJbmRleCA9IHRoaXMudmVuZG9ycy5sZW5ndGgtMTtcclxuICAgICAgICAgICAgICBmb3IgKGxldCB2ZW5kb3Igb2YgcmVzcG9uc2UucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzLnB1c2goPFZlbmRvcj52ZW5kb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBvZiBuZXcgZGF0YSBwYWdlXHJcbiAgICAgICAgICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IHRoaXMudmVuZG9ycztcclxuICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gbmV3IGRhdGFcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgodGVtcEluZGV4LCBmYWxzZSwgTGlzdFZpZXdJdGVtU25hcE1vZGUuRW5kKTtcclxuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHJlc3VsdHNcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC8vYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIGFyZ3Mub2JqZWN0LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpIHtcclxuICAgIHRoaXMubmV4dFBhZ2VGbGFnID0gKHJlc3BvbnNlLm5leHRfcGFnZV90b2tlbikgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5leHQgUGFnZSBGbGFnOiBcIiArIHRoaXMubmV4dFBhZ2VGbGFnKTtcclxuICB9XHJcbiAgXHJcbiAgb25EaXN0YW5jZVNsaWRlckNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5jb252ZXJ0VG9NaWxlcyhldmVudC52YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZSA9IGV2ZW50LnZhbHVlO1xyXG4gIH1cclxuICBcclxuICBzZXREaXN0YW5jZVNsaWRlclZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmRpc3RhbmNlO1xyXG4gIH1cclxuICBcclxuICBvbkNhbmNlbFRhcCgpe1xyXG4gICAgdGhpcy5maWx0ZXJNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gIH1cclxuICBcclxuICBvblJlc2V0VGFwKCl7XHJcbiAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uUmVzZXQoKSBUQVBQRUQnKTtcclxuICAgIC8vIFJlc2V0IHNlcnZpY2UgZmlsdGVyXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIgPSB7XHJcbiAgICAgIGRpc3RhbmNlOiBSYWRpdXMubWk1IFxyXG4gICAgfVxyXG4gICAgLy8gUmVzZXQgZmlsdGVyIG1lbnUgY29udHJvbHNcclxuICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VhcmNoVHh0LnRleHQgPSAnJztcclxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmNvbnZlcnRUb01pbGVzKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZSkudG9GaXhlZCgyKTtcclxuICB9XHJcbiAgXHJcbiAgb25TZWFyY2hUYXAoKXtcclxuICAgIC8vIERpc3BsYXkgcHJvZ3JlcyBjaXJjbGVcclxuICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vblNlYXJjaFRhcCgpJyk7XHJcbiAgICB0aGlzLnNlYXJjaChmYWxzZSwgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICB9XHJcblxyXG4gIG9uZmlsdGVyQ3JpdGVyaWFUYXAoKXtcclxuICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpO1xyXG4gIH1cclxuICBcclxuICBvblNlYXJjaFRleHRDaGFuZ2UoZXZlbnQpe1xyXG4gICAgbGV0IGZpZWxkID0gPFRleHRGaWVsZD4gZXZlbnQub2JqZWN0O1xyXG4gICAgLy8gVXBkYXRlIHNlYXJjaCB0ZXh0IGluIHNlcnZpY2VcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5rZXl3b3JkID0gZmllbGQudGV4dDtcclxuICB9XHJcbiAgXHJcbiAgY29udmVydFRvTWlsZXMobWV0ZXJzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1ldGVycyAvIDE2MDkuMzQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNhbGNEaXN0YW5jZShsb2MxOiBMb2NhdGlvbiwgbG9jMjogTG9jYXRpb24pe1xyXG4gICAgcmV0dXJuIGdlb2xvY2F0aW9uLmRpc3RhbmNlKGxvYzEsIGxvYzIpIC8gMTYwOS4zNDsgLy8gY29udmVydCB0byBtaWxlcy5cclxuICB9XHJcbiAgXHJcbiAgc2V0VGl0bGUoKXtcclxuICAgIHN3aXRjaCh0aGlzLmZpbHRlck1lbnVWaXNpYmxlKXtcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICB0aGlzLnRpdGxlID0gJ0ZpbHRlcmVkIFNlYXJjaCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICB0aGlzLnRpdGxlID0gJ1RvZGF5XFwncyBIYXBweSBIb3Vycyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICB0aGlzLnRpdGxlID0gJ1RvZGF5XFwncyBIYXBweSBIb3Vycyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==