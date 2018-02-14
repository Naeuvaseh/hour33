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
var search_mode_enum_1 = require("../../enums/search-mode.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        this.filterMenuVisible = false;
        this.filterSearchBtnProgress = false;
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
        console.log('SearchComponent.onReset() TAPPED');
        // Reset service filter
        this.googleLocationService.searchFilter = {
            mode: search_mode_enum_1.SearchMode.Nearby,
            distance: radius_enum_1.Radius.mi5,
            searchText: null
        };
        // Reset filter menu controls
        this.filterSearchBtnProgress = false;
        this.searchTxt.text = '';
        this.distance = this.convertToMiles(this.googleLocationService.searchFilter.distance).toFixed(2);
    };
    SearchComponent.prototype.onSearchTap = function () {
        this.filterSearchBtnProgress = true;
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
        // Update search text in service
        this.googleLocationService.searchFilter.searchText = field.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQTZEO0FBQzdELDJDQUE4QztBQUM5Qyx5REFBOEg7QUFFOUgsMENBQXlFO0FBT3pFLCtFQUE0RTtBQUU1RSw0Q0FBMEM7QUFDMUMsNERBQTJEO0FBQzNELGdFQUE0RTtBQUM1RSxVQUFVO0FBQ1Ysc0RBQXdEO0FBQ3hELFdBQVc7QUFDWCxnRUFBOEQ7QUFDOUQsa0ZBQStFO0FBTy9FLHVEQUFpRDtBQUNqRCxpRUFBMEQ7QUFDMUQscUVBQWtFO0FBTWxFO0lBdUJFLHlCQUFvQixNQUFjLEVBQ3hCLGFBQTRCLEVBQzVCLHFCQUE0QztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFYOUMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBSXBDLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUV6QyxhQUFRLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUtyQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLHVCQUF1QjtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFD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d0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUsIExpc3RWaWV3SXRlbVNuYXBNb2RlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9nZW5lcmF0ZSc7XHJcbi8vIE5hdGl2ZVNjcmlwdFxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSAndWkvZW51bXMnO1xyXG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXQnXHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyJztcclxuLy8gUGx1Z2luc1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi8uLi9lbnVtcy9kYXkuZW51bSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hTdGF0dXNDb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VhcmNoLXN0YXR1cy5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgndmVuZG9yTGlzdCcpIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdmaWx0ZXJNZW51JykgZmlsdGVyTWVudTogQWJzb2x1dGVMYXlvdXQ7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoVHh0OiBUZXh0RmllbGQ7XHJcbiAgQFZpZXdDaGlsZCgnZGlzdGFuY2VTbGlkZXInKSBkaXN0YW5jZVNsaWRlcjogU2xpZGVyO1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgZGVidWc7XHJcbiAgcHJpdmF0ZSBzZWFyY2hTdGF0dXNDb2RlOiBTZWFyY2hTdGF0dXNDb2RlO1xyXG4gIHByaXZhdGUgbmV4dFBhZ2VGbGFnOiBib29sZWFuO1xyXG4gIHByaXZhdGUgbG9hZGluZ0ZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpdGVtczogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcbiAgcHJpdmF0ZSB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG4gIHByaXZhdGUgZmlsdGVyTWVudVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcbiAgcHVibGljIGZpbHRlclNlYXJjaEJ0blByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc3RhbmNlOiBzdHJpbmcgPSB0aGlzLmNvbnZlcnRUb01pbGVzKFJhZGl1cy5taTUpLnRvRml4ZWQoMik7XHJcbiAgcHVibGljIGxpc3RWaWV3VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIHRoaXMuc2V0RGlzdGFuY2VTbGlkZXJWYWx1ZSgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgZGF0YSBleGlzdHNcclxuICAgIGlmICh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZXRDdXJyZW50TG9jYXRpb24gJiYgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZXhpc3RzIGFscmVhZHlcIik7XHJcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHM7XHJcbiAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnM7XHJcbiAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICB9XHJcbiAgICAvLyBsb2FkIGRlZmF1bHRcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmdGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWFyY2goU2VhcmNoTW9kZS5OZWFyYnksIGZhbHNlLCB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBMb2NhbCBjb21wb25lbnQgXCJzZWFyY2hcIiBtZXRob2QgdGhhdCB1c2VzIHRoZSBzZXJ2aWNlJ3MgU2VhcmNoIG1ldGhvZC5cclxuICBzZWFyY2gobW9kZTogU2VhcmNoTW9kZSwgbmV4dFBhZ2U/OiBib29sZWFuLCBmaWx0ZXI/OiBGaWx0ZXIpIHtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAuc2VhcmNoKG1vZGUsIG5leHRQYWdlLCBmaWx0ZXIpXHJcbiAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmdGbGFnID0gZmFsc2U7XHJcbiAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgIC8vIFJlbW92ZSBcIkxvYWQgTW9yZVwiIGF0IGJvdHRvbSBvZiBsaXN0IGlmIHRoZXJlIGlzIG5vdCBhIG5leHRfcGFnZV90b2tlbiBpbiByZXN1bHQgc2V0LlxyXG4gICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgIC8vIFVwZGF0ZSBzZWFyY2ggcmVzdWx0cyB0byBjb21wb25lbnQgYW5kIHNlcnZpY2VcclxuICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgIC8vIFNldCBWZW5kb3JzIGxpc3QgZnJvbSByZXN1bHRzXHJcbiAgICAgICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gPFZlbmRvcltdPnJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAvLyBVcGRhdGUgc3RhdHVzIGNvZGUgdG8gZGlzcGxheSByZXN1bHRzXHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQubmdPbkluaXQoU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KERFRkFVTFQpJyk7XHJcbiAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgLy8gQ2xvc2UgZmlsdGVyIG1lbnUgdmlzaWJpbGl0eSBpZiBvcGVuXHJcbiAgICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmZpbHRlck1lbnVWaXNpYmxlID0gIXRoaXMuZmlsdGVyTWVudVZpc2libGU7XHJcbiAgICB0aGlzLnNldFRpdGxlKCk7ICAgIFxyXG4gICAgLy8gdGhpcy5maWx0ZXJNZW51LmFuaW1hdGUoe1xyXG4gICAgLy8gICB0cmFuc2xhdGU6IHsgeDogMTAwLCB5OiAxMDAgfSxcclxuICAgIC8vICAgZHVyYXRpb246IDMwMDBcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0TWFwVG9nZ2xlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhLCBpbnNpZGVSYWRMaXN0VmlldzogYm9vbGVhbikge1xyXG4gICAgYXJncy5vYmplY3QubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTWFudWFsXTtcclxuICAgIC8vIENsZWFyIGN1cmVudCBkYXRhXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IHVuZGVmaW5lZDtcclxuICAgIC8vIEFQSSBDYWxsXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAuc2VhcmNoKFNlYXJjaE1vZGUuTmVhcmJ5LCBmYWxzZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgaWYgKGluc2lkZVJhZExpc3RWaWV3KSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25WZW5kb3JUYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGxldCBkYXRhID0gKChhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldykuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIFZlbmRvcltdKVswXTtcclxuICAgIGxldCB2ZW5kb3I6IFZlbmRvciA9IHRoaXMudmVuZG9ycy5maW5kKHZlbmRvciA9PiB2ZW5kb3IucGxhY2VfaWQgPT09IGRhdGEucGxhY2VfaWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2VhcmNoL3ZlbmRvclwiLCB2ZW5kb3IucGxhY2VfaWRdKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0cy5uZXh0X3BhZ2VfdG9rZW4pIHtcclxuICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgICAuc2VhcmNoKFNlYXJjaE1vZGUuTmVhcmJ5LCB0cnVlLCBudWxsLCB0aGlzLnNlYXJjaFJlc3VsdHMpIC8vICdudWxsJyBmb3IgZmlsdGVyIGJlY2F1c2UgdGhlIG9yaWdpbmFsIHNlYXJjaCBjcml0ZXJpYSBoYXMgYmVlbiByZXF1ZXN0ZWRcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgbGV0IHRlbXBJbmRleCA9IHRoaXMudmVuZG9ycy5sZW5ndGgtMTtcclxuICAgICAgICAgICAgICBmb3IgKGxldCB2ZW5kb3Igb2YgcmVzcG9uc2UucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzLnB1c2goPFZlbmRvcj52ZW5kb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBvZiBuZXcgZGF0YSBwYWdlXHJcbiAgICAgICAgICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IHRoaXMudmVuZG9ycztcclxuICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gbmV3IGRhdGFcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgodGVtcEluZGV4LCBmYWxzZSwgTGlzdFZpZXdJdGVtU25hcE1vZGUuRW5kKTtcclxuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHJlc3VsdHNcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC8vYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIGFyZ3Mub2JqZWN0LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpIHtcclxuICAgIHRoaXMubmV4dFBhZ2VGbGFnID0gKHJlc3BvbnNlLm5leHRfcGFnZV90b2tlbikgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5leHQgUGFnZSBGbGFnOiBcIiArIHRoaXMubmV4dFBhZ2VGbGFnKTtcclxuICB9XHJcbiAgXHJcbiAgb25EaXN0YW5jZVNsaWRlckNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5jb252ZXJ0VG9NaWxlcyhldmVudC52YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZSA9IGV2ZW50LnZhbHVlO1xyXG4gIH1cclxuICBcclxuICBzZXREaXN0YW5jZVNsaWRlclZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmRpc3RhbmNlO1xyXG4gIH1cclxuICBcclxuICBvbkNhbmNlbFRhcCgpe1xyXG4gICAgdGhpcy5maWx0ZXJNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gIH1cclxuICBcclxuICBvblJlc2V0VGFwKCl7XHJcbiAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uUmVzZXQoKSBUQVBQRUQnKTtcclxuICAgIC8vIFJlc2V0IHNlcnZpY2UgZmlsdGVyXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIgPSB7XHJcbiAgICAgIG1vZGU6IFNlYXJjaE1vZGUuTmVhcmJ5LFxyXG4gICAgICBkaXN0YW5jZTogUmFkaXVzLm1pNSxcclxuICAgICAgc2VhcmNoVGV4dDogbnVsbCAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8gUmVzZXQgZmlsdGVyIG1lbnUgY29udHJvbHNcclxuICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VhcmNoVHh0LnRleHQgPSAnJztcclxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmNvbnZlcnRUb01pbGVzKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZSkudG9GaXhlZCgyKTtcclxuICB9XHJcbiAgXHJcbiAgb25TZWFyY2hUYXAoKXtcclxuICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgU2VhcmNoIEZpbHRlcnM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpKTtcclxuICAgIHN3aXRjaCh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIubW9kZSl7XHJcbiAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uU2VhcmNoVGFwKFNlYXJjaE1vZGUuTmVhcmJ5KScpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5tb2RlLCBmYWxzZSwgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uU2VhcmNoVGFwKFNlYXJjaE1vZGUuVGV4dCknKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25TZWFyY2goKTogRVJST1IuIFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHNlYXJjaCBtb2RlIHNlbGVjdGlvbi4nKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgb25TZWFyY2hUZXh0Q2hhbmdlKGV2ZW50KXtcclxuICAgIGxldCBmaWVsZCA9IDxUZXh0RmllbGQ+IGV2ZW50Lm9iamVjdDtcclxuICAgIC8vIFVwZGF0ZSBTZWFyY2hNb2RlXHJcbiAgICBzd2l0Y2goZmllbGQudGV4dCl7XHJcbiAgICAgIGNhc2UgbnVsbCB8fCB1bmRlZmluZWQgfHwgJyc6IHtcclxuICAgICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIubW9kZSA9IFNlYXJjaE1vZGUuTmVhcmJ5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hNb2RlOiAnICsgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLm1vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLm1vZGUgPSBTZWFyY2hNb2RlLlRleHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaE1vZGU6ICcgKyB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIubW9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBVcGRhdGUgc2VhcmNoIHRleHQgaW4gc2VydmljZVxyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLnNlYXJjaFRleHQgPSBmaWVsZC50ZXh0O1xyXG4gIH1cclxuICBcclxuICBjb252ZXJ0VG9NaWxlcyhtZXRlcnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbWV0ZXJzIC8gMTYwOS4zNDtcclxuICB9XHJcbiAgXHJcbiAgY2FsY0Rpc3RhbmNlKGxvYzE6IExvY2F0aW9uLCBsb2MyOiBMb2NhdGlvbil7XHJcbiAgICByZXR1cm4gZ2VvbG9jYXRpb24uZGlzdGFuY2UobG9jMSwgbG9jMikgLyAxNjA5LjM0OyAvLyBjb252ZXJ0IHRvIG1pbGVzLlxyXG4gIH1cclxuICBcclxuICBzZXRUaXRsZSgpe1xyXG4gICAgc3dpdGNoKHRoaXMuZmlsdGVyTWVudVZpc2libGUpe1xyXG4gICAgICBjYXNlIHRydWU6XHJcbiAgICAgIHRoaXMudGl0bGUgPSAnRmlsdGVyZWQgU2VhcmNoJztcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgIHRoaXMudGl0bGUgPSAnVG9kYXlcXCdzIEhhcHB5IEhvdXJzJztcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRoaXMudGl0bGUgPSAnVG9kYXlcXCdzIEhhcHB5IEhvdXJzJztcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19