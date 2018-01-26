"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var geolocation = require("nativescript-geolocation");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var search_mode_enum_1 = require("../../enums/search-mode.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        this.listViewVisible = true;
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if data exists
        if (this.googleLocationService.setCurrentLocation && this.googleLocationService.vendors) {
            this.searchResults = this.googleLocationService.searchResults;
            this.vendors = this.googleLocationService.vendors;
        }
        else {
            this.loadingFlag = true;
            // Get location
            this.googleLocationService
                .search(search_mode_enum_1.SearchMode.Default, false)
                .then(function (response) {
                _this.loadingFlag = false;
                switch (response.status) {
                    case search_status_enum_1.SearchStatusCode.OK:
                        // Set data at both service level and component level
                        _this.setNextPageFlag(response);
                        _this.searchResults = _this.googleLocationService.searchResults = response;
                        _this.vendors = _this.googleLocationService.vendors = response.results;
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
            });
        }
    };
    SearchComponent.prototype.onFilter = function () {
        console.log("Filter button tapped.");
    };
    SearchComponent.prototype.onListMapToggle = function () {
        console.log("ListMap toggle tapped.");
        this.listViewVisible = !this.listViewVisible;
    };
    SearchComponent.prototype.refresh = function (args, insideRadListView) {
        var _this = this;
        // Clear curent data
        this.googleLocationService.searchResults = this.googleLocationService.vendors = undefined;
        // API Call
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Default, false)
            .then(function (response) {
            switch (response.status) {
                case search_status_enum_1.SearchStatusCode.OK:
                    // Set data at both service level and component level
                    _this.setNextPageFlag(response);
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
        var view = args.object;
        var data = view.getSelectedItems();
        console.log(JSON.stringify(data[0]));
        // let vendor: Vendor = this.vendors.find(vendor => vendor.place_id === args.data.place_id);
        // console.log("Vendor ID:", vendor.place_id);
        // //this.vendorService.setSelectedVendor(vendor);
        // this.router.navigate(["search/vendor", vendor.place_id], );
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        if (this.searchResults.next_page_token) {
            this.googleLocationService
                .search(search_mode_enum_1.SearchMode.Default, true, this.searchResults)
                .then(function (response) {
                switch (response.status) {
                    case search_status_enum_1.SearchStatusCode.OK:
                        // Set data at both service level and component level
                        _this.setNextPageFlag(response);
                        _this.searchResults = _this.googleLocationService.searchResults = response;
                        for (var _i = 0, _a = response.results; _i < _a.length; _i++) {
                            var vendor = _a[_i];
                            _this.googleLocationService.vendors.push(vendor);
                            _this.vendors.push(vendor);
                        }
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
                args.object.notifyLoadOnDemandFinished();
            }, function (error) {
                console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
            });
        }
        args.object.notifyLoadOnDemandFinished();
    };
    SearchComponent.prototype.setNextPageFlag = function (response) {
        this.nextPageFlag = (response.next_page_token) ? true : false;
    };
    SearchComponent.prototype.calcDistance = function (loc1, loc2) {
        return geolocation.distance(loc1, loc2) / 1609.34; // convert to miles.
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBRzlDLDBDQUF5RTtBQUV6RSxzREFBd0Q7QUFFeEQsV0FBVztBQUNYLGdFQUE4RDtBQUM5RCxrRkFBK0U7QUFRL0UsaUVBQTBEO0FBQzFELHFFQUFrRTtBQVFsRTtJQWNFLHlCQUFvQixNQUFjLEVBQ3hCLGFBQTRCLEVBQzVCLHFCQUE0QztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFOL0Msb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFPckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQXVDQztRQXRDQyx1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztZQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsZUFBZTtZQUNmLElBQUksQ0FBQyxxQkFBcUI7aUJBQ3ZCLE1BQU0sQ0FBQyw2QkFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxVQUFDLFFB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ZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSAndWkvZW51bXMnO1xyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi8uLi9lbnVtcy9kYXkuZW51bSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSYWRpdXMgfSBmcm9tICcuLi8uLi9lbnVtcy9yYWRpdXMuZW51bSc7XHJcbmltcG9ydCB7IFNlYXJjaE1vZGUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWFyY2gtbW9kZS5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoU3RhdHVzQ29kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1zdGF0dXMuZW51bSc7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9nZW5lcmF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgcHJpdmF0ZSBkZWJ1ZztcclxuICBwcml2YXRlIHNlYXJjaFN0YXR1c0NvZGU6IFNlYXJjaFN0YXR1c0NvZGU7XHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBsb2FkaW5nRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBwcml2YXRlIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcblxyXG4gIHB1YmxpYyBsaXN0Vmlld1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy5kZWJ1ZyA9IERlYnVnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBDaGVjayBpZiBkYXRhIGV4aXN0c1xyXG4gICAgaWYgKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNldEN1cnJlbnRMb2NhdGlvbiAmJiB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHM7XHJcbiAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IHRydWU7XHJcbiAgICAgIC8vIEdldCBsb2NhdGlvblxyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCBmYWxzZSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gPFZlbmRvcltdPnJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBkZWZhdWx0IHNlYXJjaCBoYWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIGJ1dHRvbiB0YXBwZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0TWFwVG9nZ2xlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhLCBpbnNpZGVSYWRMaXN0VmlldzogYm9vbGVhbikge1xyXG4gICAgLy8gQ2xlYXIgY3VyZW50IGRhdGFcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQVBJIENhbGxcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCBmYWxzZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgaWYgKGluc2lkZVJhZExpc3RWaWV3KSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25WZW5kb3JUYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGxldCB2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XHJcbiAgICBsZXQgZGF0YSA9IHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIFZlbmRvcltdO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhWzBdKSk7XHJcbiAgICAvLyBsZXQgdmVuZG9yOiBWZW5kb3IgPSB0aGlzLnZlbmRvcnMuZmluZCh2ZW5kb3IgPT4gdmVuZG9yLnBsYWNlX2lkID09PSBhcmdzLmRhdGEucGxhY2VfaWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJWZW5kb3IgSUQ6XCIsIHZlbmRvci5wbGFjZV9pZCk7XHJcbiAgICAvLyAvL3RoaXMudmVuZG9yU2VydmljZS5zZXRTZWxlY3RlZFZlbmRvcih2ZW5kb3IpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2VhcmNoL3ZlbmRvclwiLCB2ZW5kb3IucGxhY2VfaWRdLCApO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHRzLm5leHRfcGFnZV90b2tlbikge1xyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCB0cnVlLCB0aGlzLnNlYXJjaFJlc3VsdHMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuT0s6XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IHZlbmRvciBvZiByZXNwb25zZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzLnB1c2goPFZlbmRvcj52ZW5kb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzLnB1c2goPFZlbmRvcj52ZW5kb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1QpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5VTktOT1dOX0VSUk9SOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhcmdzLm9iamVjdC5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpIHtcclxuICAgIHRoaXMubmV4dFBhZ2VGbGFnID0gKHJlc3BvbnNlLm5leHRfcGFnZV90b2tlbikgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjYWxjRGlzdGFuY2UobG9jMTogTG9jYXRpb24sIGxvYzI6IExvY2F0aW9uKXtcclxuICAgIHJldHVybiBnZW9sb2NhdGlvbi5kaXN0YW5jZShsb2MxLCBsb2MyKSAvIDE2MDkuMzQ7IC8vIGNvbnZlcnQgdG8gbWlsZXMuXHJcbiAgfVxyXG59Il19