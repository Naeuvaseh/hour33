"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
var absolute_layout_1 = require("tns-core-modules/ui/layouts/absolute-layout");
var text_field_1 = require("tns-core-modules/ui/text-field");
var slider_1 = require("tns-core-modules/ui/slider/slider");
var switch_1 = require("tns-core-modules/ui/switch/switch");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var platformModule = require("tns-core-modules/platform");
// Plugins
var geolocation = require("nativescript-geolocation");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var radius_enum_1 = require("../../enums/radius.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var distance_popularity_enum_1 = require("../../enums/distance-popularity.enum");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        //Filter Menu
        this.filterMenuVisible = false;
        this.filterSearchBtnProgress = false;
        this.showFilterCriteria = true;
        this.distance = this.convertToMiles(radius_enum_1.Radius.mi5).toFixed(2);
        this.listViewVisible = true;
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
        this.screenX = platformModule.screen.mainScreen.widthDIPs;
        this.screenY = platformModule.screen.mainScreen.heightDIPs;
    }
    SearchComponent.prototype.ngOnInit = function () {
        console.log('X: ' + this.screenX + ', Y: ' + this.screenY);
        this.filterCriteria = JSON.stringify(this.googleLocationService.searchFilter);
        this.setTitle();
        this.distPop = this.googleLocationService.searchFilter.distPop;
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
            .search(false, this.googleLocationService.searchFilter)
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
                        // Add vendors to UI
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
    SearchComponent.prototype.toggleDistance = function (event) {
        var d = event.object;
        this.distPop = this.googleLocationService.searchFilter.distPop = (d.checked) ? distance_popularity_enum_1.DistPop.Distance : distance_popularity_enum_1.DistPop.Popularity;
    };
    SearchComponent.prototype.togglePopularity = function (event) {
        var p = event.object;
        this.distPop = this.googleLocationService.searchFilter.distPop = (p.checked) ? distance_popularity_enum_1.DistPop.Popularity : distance_popularity_enum_1.DistPop.Distance;
    };
    SearchComponent.prototype.onCancelTap = function () {
        this.filterMenuVisible = false;
        this.setTitle();
    };
    SearchComponent.prototype.onResetTap = function () {
        // Reset service filter
        this.googleLocationService.searchFilter = {
            distance: radius_enum_1.Radius.mi5,
            distPop: distance_popularity_enum_1.DistPop.Distance
        };
        // Reset filter menu controls
        this.filterSearchBtnProgress = false;
        this.distPop = distance_popularity_enum_1.DistPop.Popularity;
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
    __decorate([
        core_1.ViewChild('distanceSwitch'),
        __metadata("design:type", switch_1.Switch)
    ], SearchComponent.prototype, "distanceSwitch", void 0);
    __decorate([
        core_1.ViewChild('popularitySwitch'),
        __metadata("design:type", switch_1.Switch)
    ], SearchComponent.prototype, "popularitySwitch", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQTZEO0FBQzdELDJDQUE4QztBQUM5Qyx5REFBOEg7QUFFOUgsMENBQXlFO0FBT3pFLCtFQUE0RTtBQUU1RSw2REFBMkQ7QUFDM0QsNERBQTJEO0FBQzNELDREQUEyRDtBQUMzRCxnRUFBNEU7QUFHNUUsMERBQTREO0FBQzVELFVBQVU7QUFDVixzREFBd0Q7QUFDeEQsV0FBVztBQUNYLGdFQUE4RDtBQUM5RCxrRkFBK0U7QUFPL0UsdURBQWlEO0FBQ2pELHFFQUFrRTtBQUNsRSxpRkFBK0Q7QUFNL0Q7SUFnQ0UseUJBQW9CLE1BQWMsRUFDeEIsYUFBNEIsRUFDNUIscUJBQTRDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVp0RCxhQUFhO1FBQ0wsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6Qyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFHbkMsYUFBUSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFNckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FB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QztBQWxTWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLCBMaXN0Vmlld0l0ZW1TbmFwTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgZ2VuZXJhdGUgfSBmcm9tICdyeGpzL29ic2VydmFibGUvZ2VuZXJhdGUnO1xyXG4vLyBOYXRpdmVTY3JpcHRcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gJ3VpL2VudW1zJztcclxuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0J1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoL3N3aXRjaCc7XHJcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyJztcclxuaW1wb3J0ICogYXMgbnNPYnNlcnZhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCaW5kaW5nT3B0aW9ucyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuLy8gUGx1Z2luc1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi8uLi9lbnVtcy9kYXkuZW51bSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoU3RhdHVzQ29kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1zdGF0dXMuZW51bSc7XHJcbmltcG9ydCB7IERpc3RQb3AgfSBmcm9tICcuLi8uLi9lbnVtcy9kaXN0YW5jZS1wb3B1bGFyaXR5LmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCd2ZW5kb3JMaXN0JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlck1lbnUnKSBmaWx0ZXJNZW51OiBBYnNvbHV0ZUxheW91dDtcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hUeHQ6IFRleHRGaWVsZDtcclxuICBAVmlld0NoaWxkKCdkaXN0YW5jZVNsaWRlcicpIGRpc3RhbmNlU2xpZGVyOiBTbGlkZXI7XHJcbiAgQFZpZXdDaGlsZCgnZGlzdGFuY2VTd2l0Y2gnKSBkaXN0YW5jZVN3aXRjaDogU3dpdGNoO1xyXG4gIEBWaWV3Q2hpbGQoJ3BvcHVsYXJpdHlTd2l0Y2gnKSBwb3B1bGFyaXR5U3dpdGNoOiBTd2l0Y2g7ICBcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwcml2YXRlIGRlYnVnO1xyXG4gIHB1YmxpYyBzY3JlZW5YOiBudW1iZXI7XHJcbiAgcHVibGljIHNjcmVlblk6IG51bWJlcjtcclxuICBwcml2YXRlIHNlYXJjaFN0YXR1c0NvZGU6IFNlYXJjaFN0YXR1c0NvZGU7XHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsb2FkaW5nRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBwcml2YXRlIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcbiAgXHJcbiAgXHJcbiAgLy9GaWx0ZXIgTWVudVxyXG4gIHByaXZhdGUgZmlsdGVyTWVudVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd0ZpbHRlckNyaXRlcmlhOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZmlsdGVyQ3JpdGVyaWE6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgZGlzdGFuY2U6IHN0cmluZyA9IHRoaXMuY29udmVydFRvTWlsZXMoUmFkaXVzLm1pNSkudG9GaXhlZCgyKTtcclxuICBwdWJsaWMgbGlzdFZpZXdWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZGlzdFBvcDogRGlzdFBvcDsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgICB0aGlzLnNjcmVlblggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcbiAgICB0aGlzLnNjcmVlblkgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnWDogJyArIHRoaXMuc2NyZWVuWCArICcsIFk6ICcgKyB0aGlzLnNjcmVlblkpO1xyXG4gICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlcik7XHJcbiAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB0aGlzLmRpc3RQb3AgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIuZGlzdFBvcDtcclxuICAgIHRoaXMuc2V0RGlzdGFuY2VTbGlkZXJWYWx1ZSgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgZGF0YSBleGlzdHNcclxuICAgIGlmICh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZXRDdXJyZW50TG9jYXRpb24gJiYgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZXhpc3RzIGFscmVhZHlcIik7XHJcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHM7XHJcbiAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnM7XHJcbiAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICB9XHJcbiAgICAvLyBsb2FkIGRlZmF1bHRcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmdGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWFyY2goZmFsc2UsIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIExvY2FsIGNvbXBvbmVudCBcInNlYXJjaFwiIG1ldGhvZCB0aGF0IHVzZXMgdGhlIHNlcnZpY2UncyBTZWFyY2ggbWV0aG9kLlxyXG4gIHNlYXJjaChuZXh0UGFnZT86IGJvb2xlYW4sIGZpbHRlcj86IEZpbHRlcikge1xyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgLnNlYXJjaChuZXh0UGFnZSwgZmlsdGVyKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0ZsYWcgPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBcIkxvYWQgTW9yZVwiIGF0IGJvdHRvbSBvZiBsaXN0IGlmIHRoZXJlIGlzIG5vdCBhIG5leHRfcGFnZV90b2tlbiBpbiByZXN1bHQgc2V0LlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc2VhcmNoIHJlc3VsdHMgdG8gY29tcG9uZW50IGFuZCBzZXJ2aWNlXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgLy8gU2V0IFZlbmRvcnMgbGlzdCBmcm9tIHJlc3VsdHNcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdHVzIGNvZGUgdG8gZGlzcGxheSByZXN1bHRzXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQubmdPbkluaXQoU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZWFyY2hCdG5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIENsb3NlIGZpbHRlciBtZW51IHZpc2liaWxpdHkgaWYgb3BlblxyXG4gICAgICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpIHtcclxuICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSAhdGhpcy5maWx0ZXJNZW51VmlzaWJsZTtcclxuICAgIHRoaXMuc2V0VGl0bGUoKTsgICAgXHJcbiAgICAvLyB0aGlzLmZpbHRlck1lbnUuYW5pbWF0ZSh7XHJcbiAgICAvLyAgIHRyYW5zbGF0ZTogeyB4OiAxMDAsIHk6IDEwMCB9LFxyXG4gICAgLy8gICBkdXJhdGlvbjogMzAwMFxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RNYXBUb2dnbGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxpc3RNYXAgdG9nZ2xlIHRhcHBlZC5cIik7XHJcbiAgICB0aGlzLmxpc3RWaWV3VmlzaWJsZSA9ICF0aGlzLmxpc3RWaWV3VmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goYXJnczogTGlzdFZpZXdFdmVudERhdGEsIGluc2lkZVJhZExpc3RWaWV3OiBib29sZWFuKSB7XHJcbiAgICBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5NYW51YWxdO1xyXG4gICAgLy8gQ2xlYXIgY3VyZW50IGRhdGFcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQVBJIENhbGxcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZWFyY2goZmFsc2UsIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlcilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgaWYgKGluc2lkZVJhZExpc3RWaWV3KSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25WZW5kb3JUYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGxldCBkYXRhID0gKChhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldykuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIFZlbmRvcltdKVswXTtcclxuICAgIGxldCB2ZW5kb3I6IFZlbmRvciA9IHRoaXMudmVuZG9ycy5maW5kKHZlbmRvciA9PiB2ZW5kb3IucGxhY2VfaWQgPT09IGRhdGEucGxhY2VfaWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2VhcmNoL3ZlbmRvclwiLCB2ZW5kb3IucGxhY2VfaWRdKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0cy5uZXh0X3BhZ2VfdG9rZW4pIHtcclxuICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgICAuc2VhcmNoKHRydWUsIG51bGwsIHRoaXMuc2VhcmNoUmVzdWx0cykgLy8gJ251bGwnIGZvciBmaWx0ZXIgYmVjYXVzZSB0aGUgb3JpZ2luYWwgc2VhcmNoIGNyaXRlcmlhIGhhcyBiZWVuIHJlcXVlc3RlZFxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIGFyZ3Mub2JqZWN0LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICBsZXQgdGVtcEluZGV4ID0gdGhpcy52ZW5kb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIHZlbmRvcnMgdG8gVUlcclxuICAgICAgICAgICAgICBmb3IgKGxldCB2ZW5kb3Igb2YgcmVzcG9uc2UucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzLnB1c2goPFZlbmRvcj52ZW5kb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBvZiBuZXcgZGF0YSBwYWdlXHJcbiAgICAgICAgICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IHRoaXMudmVuZG9ycztcclxuICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gbmV3IGRhdGFcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgodGVtcEluZGV4LCBmYWxzZSwgTGlzdFZpZXdJdGVtU25hcE1vZGUuRW5kKTtcclxuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHJlc3VsdHNcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC8vYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5uZXh0UGFnZUZsYWcpIGFyZ3Mub2JqZWN0LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpIHtcclxuICAgIHRoaXMubmV4dFBhZ2VGbGFnID0gKHJlc3BvbnNlLm5leHRfcGFnZV90b2tlbikgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5leHQgUGFnZSBGbGFnOiBcIiArIHRoaXMubmV4dFBhZ2VGbGFnKTtcclxuICB9XHJcbiAgXHJcbiAgb25EaXN0YW5jZVNsaWRlckNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5jb252ZXJ0VG9NaWxlcyhldmVudC52YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZSA9IGV2ZW50LnZhbHVlO1xyXG4gIH1cclxuICBcclxuICBzZXREaXN0YW5jZVNsaWRlclZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmRpc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGlzdGFuY2UoZXZlbnQpe1xyXG4gICAgbGV0IGQgPSA8U3dpdGNoPmV2ZW50Lm9iamVjdDtcclxuICAgIHRoaXMuZGlzdFBvcCA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0UG9wID0gKGQuY2hlY2tlZCkgPyBEaXN0UG9wLkRpc3RhbmNlIDogRGlzdFBvcC5Qb3B1bGFyaXR5O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUG9wdWxhcml0eShldmVudCkgIHtcclxuICAgIGxldCBwID0gPFN3aXRjaD5ldmVudC5vYmplY3Q7XHJcbiAgICB0aGlzLmRpc3RQb3AgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIuZGlzdFBvcCA9IChwLmNoZWNrZWQpID8gRGlzdFBvcC5Qb3B1bGFyaXR5IDogRGlzdFBvcC5EaXN0YW5jZTtcclxuICB9XHJcbiAgXHJcbiAgb25DYW5jZWxUYXAoKXtcclxuICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICB9XHJcbiAgXHJcbiAgb25SZXNldFRhcCgpe1xyXG4gICAgLy8gUmVzZXQgc2VydmljZSBmaWx0ZXJcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlciA9IHtcclxuICAgICAgZGlzdGFuY2U6IFJhZGl1cy5taTUsXHJcbiAgICAgIGRpc3RQb3A6IERpc3RQb3AuRGlzdGFuY2VcclxuICAgIH1cclxuICAgIC8vIFJlc2V0IGZpbHRlciBtZW51IGNvbnRyb2xzXHJcbiAgICB0aGlzLmZpbHRlclNlYXJjaEJ0blByb2dyZXNzID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpc3RQb3AgPSBEaXN0UG9wLlBvcHVsYXJpdHk7XHJcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5jb252ZXJ0VG9NaWxlcyh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIuZGlzdGFuY2UpLnRvRml4ZWQoMik7XHJcbiAgfVxyXG4gIFxyXG4gIG9uU2VhcmNoVGFwKCl7XHJcbiAgICAvLyBEaXNwbGF5IHByb2dyZXMgY2lyY2xlXHJcbiAgICB0aGlzLmZpbHRlclNlYXJjaEJ0blByb2dyZXNzID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25TZWFyY2hUYXAoKScpO1xyXG4gICAgdGhpcy5zZWFyY2goZmFsc2UsIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlcik7XHJcbiAgfVxyXG5cclxuICBvbmZpbHRlckNyaXRlcmlhVGFwKCl7XHJcbiAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoVGV4dENoYW5nZShldmVudCl7XHJcbiAgICBsZXQgZmllbGQgPSA8VGV4dEZpZWxkPiBldmVudC5vYmplY3Q7XHJcbiAgICAvLyBVcGRhdGUgc2VhcmNoIHRleHQgaW4gc2VydmljZVxyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmtleXdvcmQgPSBmaWVsZC50ZXh0O1xyXG4gIH1cclxuICBcclxuICBjb252ZXJ0VG9NaWxlcyhtZXRlcnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbWV0ZXJzIC8gMTYwOS4zNDtcclxuICB9XHJcbiAgXHJcbiAgY2FsY0Rpc3RhbmNlKGxvYzE6IExvY2F0aW9uLCBsb2MyOiBMb2NhdGlvbil7XHJcbiAgICByZXR1cm4gZ2VvbG9jYXRpb24uZGlzdGFuY2UobG9jMSwgbG9jMikgLyAxNjA5LjM0OyAvLyBjb252ZXJ0IHRvIG1pbGVzLlxyXG4gIH1cclxuICBcclxuICBzZXRUaXRsZSgpe1xyXG4gICAgc3dpdGNoKHRoaXMuZmlsdGVyTWVudVZpc2libGUpe1xyXG4gICAgICBjYXNlIHRydWU6XHJcbiAgICAgIHRoaXMudGl0bGUgPSAnRmlsdGVyZWQgU2VhcmNoJztcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgIHRoaXMudGl0bGUgPSAnVG9kYXlcXCdzIEhhcHB5IEhvdXJzJztcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRoaXMudGl0bGUgPSAnVG9kYXlcXCdzIEhhcHB5IEhvdXJzJztcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19