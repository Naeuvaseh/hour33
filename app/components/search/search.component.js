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
// Plugins
var geolocation = require("nativescript-geolocation");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var radius_enum_1 = require("../../enums/radius.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var distance_popularity_enum_1 = require("../../enums/distance-popularity.enum");
var SearchComponent = (function () {
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
    }
    SearchComponent.prototype.ngOnInit = function () {
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
        this.distPop = distance_popularity_enum_1.DistPop.Distance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQTZEO0FBQzdELDJDQUE4QztBQUM5Qyx5REFBOEg7QUFFOUgsMENBQXlFO0FBT3pFLCtFQUE0RTtBQUU1RSw2REFBMkQ7QUFDM0QsNERBQTJEO0FBQzNELDREQUEyRDtBQUMzRCxnRUFBNEU7QUFHNUUsVUFBVTtBQUNWLHNEQUF3RDtBQUN4RCxXQUFXO0FBQ1gsZ0VBQThEO0FBQzlELGtGQUErRTtBQU8vRSx1REFBaUQ7QUFDakQscUVBQWtFO0FBQ2xFLGlGQUErRDtBQU0vRDtJQThCRSx5QkFBb0IsTUFBYyxFQUN4QixhQUE0QixFQUM1QixxQkFBNEM7UUFGbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBWnRELGFBQWE7UUFDTCxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDcEMsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBQ3pDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxhQUFRLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQU1yQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFD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QUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztZQUNOO2dCQUNBLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztRQUNSLENBQUM7SUFDSCxDQUFDO0lBMVJ3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsOEJBQW9COzhEQUFDO0lBQ3hDO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGdDQUFjO3VEQUFDO0lBQy9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFZLHNCQUFTO3NEQUFDO0lBQ2I7UUFBNUIsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztrQ0FBaUIsZUFBTTsyREFBQztJQUN2QjtRQUE1QixnQkFBUyxDQUFDLGdCQUFnQixDQUFDO2tDQUFpQixlQUFNOzJEQUFDO0lBQ3JCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGVBQU07NkRBQUM7SUFQN0MsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUN6RCxDQUFDO3lDQStCNEIsZUFBTTtZQUNULDhCQUFhO1lBQ0wsK0NBQXFCO09BaEMzQyxlQUFlLENBNlIzQjtJQUFELHNCQUFDO0NBQUEsQUE3UkQsSUE2UkM7QUE3UlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSwgTGlzdFZpZXdJdGVtU25hcE1vZGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2dlbmVyYXRlJztcclxuLy8gTmF0aXZlU2NyaXB0XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dCdcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaC9zd2l0Y2gnO1xyXG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhcic7XHJcbmltcG9ydCAqIGFzIG5zT2JzZXJ2YWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmluZGluZ09wdGlvbnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL2JpbmRhYmxlXCI7XHJcbi8vIFBsdWdpbnNcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vLi4vZW51bXMvZGF5LmVudW0nO1xyXG5pbXBvcnQgeyBSYWRpdXMgfSBmcm9tICcuLi8uLi9lbnVtcy9yYWRpdXMuZW51bSc7XHJcbmltcG9ydCB7IFNlYXJjaFN0YXR1c0NvZGUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWFyY2gtc3RhdHVzLmVudW0nO1xyXG5pbXBvcnQgeyBEaXN0UG9wIH0gZnJvbSAnLi4vLi4vZW51bXMvZGlzdGFuY2UtcG9wdWxhcml0eS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgndmVuZG9yTGlzdCcpIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdmaWx0ZXJNZW51JykgZmlsdGVyTWVudTogQWJzb2x1dGVMYXlvdXQ7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoVHh0OiBUZXh0RmllbGQ7XHJcbiAgQFZpZXdDaGlsZCgnZGlzdGFuY2VTbGlkZXInKSBkaXN0YW5jZVNsaWRlcjogU2xpZGVyO1xyXG4gIEBWaWV3Q2hpbGQoJ2Rpc3RhbmNlU3dpdGNoJykgZGlzdGFuY2VTd2l0Y2g6IFN3aXRjaDtcclxuICBAVmlld0NoaWxkKCdwb3B1bGFyaXR5U3dpdGNoJykgcG9wdWxhcml0eVN3aXRjaDogU3dpdGNoOyAgXHJcblxyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgcHJpdmF0ZSBkZWJ1ZztcclxuICBwcml2YXRlIHNlYXJjaFN0YXR1c0NvZGU6IFNlYXJjaFN0YXR1c0NvZGU7XHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsb2FkaW5nRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBwcml2YXRlIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcbiAgXHJcbiAgXHJcbiAgLy9GaWx0ZXIgTWVudVxyXG4gIHByaXZhdGUgZmlsdGVyTWVudVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd0ZpbHRlckNyaXRlcmlhOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZmlsdGVyQ3JpdGVyaWE6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgZGlzdGFuY2U6IHN0cmluZyA9IHRoaXMuY29udmVydFRvTWlsZXMoUmFkaXVzLm1pNSkudG9GaXhlZCgyKTtcclxuICBwdWJsaWMgbGlzdFZpZXdWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZGlzdFBvcDogRGlzdFBvcDsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpO1xyXG4gICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgdGhpcy5kaXN0UG9wID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmRpc3RQb3A7XHJcbiAgICB0aGlzLnNldERpc3RhbmNlU2xpZGVyVmFsdWUoKTtcclxuICAgIC8vIENoZWNrIGlmIGRhdGEgZXhpc3RzXHJcbiAgICBpZiAodGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2V0Q3VycmVudExvY2F0aW9uICYmIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJEYXRhIGV4aXN0cyBhbHJlYWR5XCIpO1xyXG4gICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzO1xyXG4gICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzO1xyXG4gICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LO1xyXG4gICAgfVxyXG4gICAgLy8gbG9hZCBkZWZhdWx0XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VhcmNoKGZhbHNlLCB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBMb2NhbCBjb21wb25lbnQgXCJzZWFyY2hcIiBtZXRob2QgdGhhdCB1c2VzIHRoZSBzZXJ2aWNlJ3MgU2VhcmNoIG1ldGhvZC5cclxuICBzZWFyY2gobmV4dFBhZ2U/OiBib29sZWFuLCBmaWx0ZXI/OiBGaWx0ZXIpIHtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZWFyY2gobmV4dFBhZ2UsIGZpbHRlcilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgXCJMb2FkIE1vcmVcIiBhdCBib3R0b20gb2YgbGlzdCBpZiB0aGVyZSBpcyBub3QgYSBuZXh0X3BhZ2VfdG9rZW4gaW4gcmVzdWx0IHNldC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHNlYXJjaCByZXN1bHRzIHRvIGNvbXBvbmVudCBhbmQgc2VydmljZVxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIC8vIFNldCBWZW5kb3JzIGxpc3QgZnJvbSByZXN1bHRzXHJcbiAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSA8VmVuZG9yW10+cmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXR1cyBjb2RlIHRvIGRpc3BsYXkgcmVzdWx0c1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQubmdPbkluaXQoU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAvLyBDbG9zZSBmaWx0ZXIgbWVudSB2aXNpYmlsaXR5IGlmIG9wZW5cclxuICAgICAgICB0aGlzLmZpbHRlck1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmZpbHRlck1lbnVWaXNpYmxlID0gIXRoaXMuZmlsdGVyTWVudVZpc2libGU7XHJcbiAgICB0aGlzLnNldFRpdGxlKCk7ICAgIFxyXG4gICAgLy8gdGhpcy5maWx0ZXJNZW51LmFuaW1hdGUoe1xyXG4gICAgLy8gICB0cmFuc2xhdGU6IHsgeDogMTAwLCB5OiAxMDAgfSxcclxuICAgIC8vICAgZHVyYXRpb246IDMwMDBcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0TWFwVG9nZ2xlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhLCBpbnNpZGVSYWRMaXN0VmlldzogYm9vbGVhbikge1xyXG4gICAgYXJncy5vYmplY3QubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTWFudWFsXTtcclxuICAgIC8vIENsZWFyIGN1cmVudCBkYXRhXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IHVuZGVmaW5lZDtcclxuICAgIC8vIEFQSSBDYWxsXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAuc2VhcmNoKGZhbHNlLCB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSA8VmVuZG9yW10+cmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSzsgICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTOlxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goREVGQVVMVCknKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBkZWZhdWx0IHNlYXJjaCBoYWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgIGlmIChpbnNpZGVSYWRMaXN0VmlldykgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVmVuZG9yVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBsZXQgZGF0YSA9ICgoYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXcpLmdldFNlbGVjdGVkSXRlbXMoKSBhcyBWZW5kb3JbXSlbMF07XHJcbiAgICBsZXQgdmVuZG9yOiBWZW5kb3IgPSB0aGlzLnZlbmRvcnMuZmluZCh2ZW5kb3IgPT4gdmVuZG9yLnBsYWNlX2lkID09PSBkYXRhLnBsYWNlX2lkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNlYXJjaC92ZW5kb3JcIiwgdmVuZG9yLnBsYWNlX2lkXSk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHMubmV4dF9wYWdlX3Rva2VuKSB7XHJcbiAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLnNlYXJjaCh0cnVlLCBudWxsLCB0aGlzLnNlYXJjaFJlc3VsdHMpIC8vICdudWxsJyBmb3IgZmlsdGVyIGJlY2F1c2UgdGhlIG9yaWdpbmFsIHNlYXJjaCBjcml0ZXJpYSBoYXMgYmVlbiByZXF1ZXN0ZWRcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5PSzpcclxuICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgbGV0IHRlbXBJbmRleCA9IHRoaXMudmVuZG9ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB2ZW5kb3JzIHRvIFVJXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgdmVuZG9yIG9mIHJlc3BvbnNlLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycy5wdXNoKDxWZW5kb3I+dmVuZG9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgb2YgbmV3IGRhdGEgcGFnZVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSB0aGlzLnZlbmRvcnM7XHJcbiAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIG5ldyBkYXRhXHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5zY3JvbGxUb0luZGV4KHRlbXBJbmRleCwgZmFsc2UsIExpc3RWaWV3SXRlbVNuYXBNb2RlLkVuZCk7XHJcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSzsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTOlxyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoREVGQVVMVCknKTtcclxuICAgICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2FyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldE5leHRQYWdlRmxhZyhyZXNwb25zZTogU2VhcmNoUmVzdWx0KSB7XHJcbiAgICB0aGlzLm5leHRQYWdlRmxhZyA9IChyZXNwb25zZS5uZXh0X3BhZ2VfdG9rZW4pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coXCJOZXh0IFBhZ2UgRmxhZzogXCIgKyB0aGlzLm5leHRQYWdlRmxhZyk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uRGlzdGFuY2VTbGlkZXJDaGFuZ2UoZXZlbnQpe1xyXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuY29udmVydFRvTWlsZXMoZXZlbnQudmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIuZGlzdGFuY2UgPSBldmVudC52YWx1ZTtcclxuICB9XHJcbiAgXHJcbiAgc2V0RGlzdGFuY2VTbGlkZXJWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURpc3RhbmNlKGV2ZW50KXtcclxuICAgIGxldCBkID0gPFN3aXRjaD5ldmVudC5vYmplY3Q7XHJcbiAgICB0aGlzLmRpc3RQb3AgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIuZGlzdFBvcCA9IChkLmNoZWNrZWQpID8gRGlzdFBvcC5EaXN0YW5jZSA6IERpc3RQb3AuUG9wdWxhcml0eTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBvcHVsYXJpdHkoZXZlbnQpICB7XHJcbiAgICBsZXQgcCA9IDxTd2l0Y2g+ZXZlbnQub2JqZWN0O1xyXG4gICAgdGhpcy5kaXN0UG9wID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyLmRpc3RQb3AgPSAocC5jaGVja2VkKSA/IERpc3RQb3AuUG9wdWxhcml0eSA6IERpc3RQb3AuRGlzdGFuY2U7XHJcbiAgfVxyXG4gIFxyXG4gIG9uQ2FuY2VsVGFwKCl7XHJcbiAgICB0aGlzLmZpbHRlck1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uUmVzZXRUYXAoKXtcclxuICAgIC8vIFJlc2V0IHNlcnZpY2UgZmlsdGVyXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIgPSB7XHJcbiAgICAgIGRpc3RhbmNlOiBSYWRpdXMubWk1LFxyXG4gICAgICBkaXN0UG9wOiBEaXN0UG9wLkRpc3RhbmNlXHJcbiAgICB9XHJcbiAgICAvLyBSZXNldCBmaWx0ZXIgbWVudSBjb250cm9sc1xyXG4gICAgdGhpcy5maWx0ZXJTZWFyY2hCdG5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5kaXN0UG9wID0gRGlzdFBvcC5EaXN0YW5jZTtcclxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmNvbnZlcnRUb01pbGVzKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaEZpbHRlci5kaXN0YW5jZSkudG9GaXhlZCgyKTtcclxuICB9XHJcbiAgXHJcbiAgb25TZWFyY2hUYXAoKXtcclxuICAgIC8vIERpc3BsYXkgcHJvZ3JlcyBjaXJjbGVcclxuICAgIHRoaXMuZmlsdGVyU2VhcmNoQnRuUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vblNlYXJjaFRhcCgpJyk7XHJcbiAgICB0aGlzLnNlYXJjaChmYWxzZSwgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoRmlsdGVyKTtcclxuICB9XHJcblxyXG4gIG9uZmlsdGVyQ3JpdGVyaWFUYXAoKXtcclxuICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIpO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2hUZXh0Q2hhbmdlKGV2ZW50KXtcclxuICAgIGxldCBmaWVsZCA9IDxUZXh0RmllbGQ+IGV2ZW50Lm9iamVjdDtcclxuICAgIC8vIFVwZGF0ZSBzZWFyY2ggdGV4dCBpbiBzZXJ2aWNlXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hGaWx0ZXIua2V5d29yZCA9IGZpZWxkLnRleHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnZlcnRUb01pbGVzKG1ldGVyczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBtZXRlcnMgLyAxNjA5LjM0O1xyXG4gIH1cclxuICBcclxuICBjYWxjRGlzdGFuY2UobG9jMTogTG9jYXRpb24sIGxvYzI6IExvY2F0aW9uKXtcclxuICAgIHJldHVybiBnZW9sb2NhdGlvbi5kaXN0YW5jZShsb2MxLCBsb2MyKSAvIDE2MDkuMzQ7IC8vIGNvbnZlcnQgdG8gbWlsZXMuXHJcbiAgfVxyXG4gIFxyXG4gIHNldFRpdGxlKCl7XHJcbiAgICBzd2l0Y2godGhpcy5maWx0ZXJNZW51VmlzaWJsZSl7XHJcbiAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgdGhpcy50aXRsZSA9ICdGaWx0ZXJlZCBTZWFyY2gnO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgdGhpcy50aXRsZSA9ICdUb2RheVxcJ3MgSGFwcHkgSG91cnMnO1xyXG4gICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgdGhpcy50aXRsZSA9ICdUb2RheVxcJ3MgSGFwcHkgSG91cnMnO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn0iXX0=