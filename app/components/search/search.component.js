"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
var geolocation = require("nativescript-geolocation");
var absolute_layout_1 = require("tns-core-modules/ui/layouts/absolute-layout");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var search_mode_enum_1 = require("../../enums/search-mode.enum");
var search_status_enum_1 = require("../../enums/search-status.enum");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        this.filterMenuVisible = false;
        this.listViewVisible = true;
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if data exists
        if (this.googleLocationService.setCurrentLocation && this.googleLocationService.vendors) {
            console.log("Data exists already");
            this.searchResults = this.googleLocationService.searchResults;
            this.vendors = this.googleLocationService.vendors;
            this.searchStatusCode = search_status_enum_1.SearchStatusCode.OK;
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
        this.filterMenuVisible = !this.filterMenuVisible;
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
            .search(search_mode_enum_1.SearchMode.Default, false)
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
                .search(search_mode_enum_1.SearchMode.Default, true, this.searchResults)
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
    SearchComponent.prototype.calcDistance = function (loc1, loc2) {
        return geolocation.distance(loc1, loc2) / 1609.34; // convert to miles.
    };
    __decorate([
        core_1.ViewChild('vendorList'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], SearchComponent.prototype, "listViewComponent", void 0);
    __decorate([
        core_1.ViewChild('filterMenu'),
        __metadata("design:type", absolute_layout_1.AbsoluteLayout)
    ], SearchComponent.prototype, "filterMenu", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMkNBQThDO0FBQzlDLHlEQUE4SDtBQUU5SCwwQ0FBeUU7QUFFekUsc0RBQXdEO0FBRXhELCtFQUE0RTtBQUU1RSxXQUFXO0FBQ1gsZ0VBQThEO0FBQzlELGtGQUErRTtBQVEvRSxpRUFBMEQ7QUFDMUQscUVBQWtFO0FBR2xFLGdFQUE0RTtBQU01RTtJQWtCRSx5QkFBb0IsTUFBYyxFQUN4QixhQUE0QixFQUM1QixxQkFBNEM7UUFGbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBUjlDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUVwQyxvQkFBZSxHQUFZLElBQUksQ0FBQztRQU9yQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBMENDO1FBekNDLHVCQUF1QjtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztZQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHFDQUFnQixDQUFDLEVBQUUsQ0FBQztRQUM5QyxDQUFD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RSxJQUFjO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxvQkFBb0I7SUFDekUsQ0FBQztJQXZMd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLDhCQUFvQjs4REFBQztJQUN4QztRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxnQ0FBYzt1REFBQztJQUh6QyxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMkNBQTJDO1NBQ3pELENBQUM7eUNBbUI0QixlQUFNO1lBQ1QsOEJBQWE7WUFDTCwrQ0FBcUI7T0FwQjNDLGVBQWUsQ0EwTDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFMRCxJQTBMQztBQTFMWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSwgTGlzdFZpZXdJdGVtU25hcE1vZGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSAndWkvZW51bXMnO1xyXG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXQnXHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlJztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2VudW1zL2RheS5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hTdGF0dXNDb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VhcmNoLXN0YXR1cy5lbnVtJztcclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2dlbmVyYXRlJztcclxuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCd2ZW5kb3JMaXN0JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlck1lbnUnKSBmaWx0ZXJNZW51OiBBYnNvbHV0ZUxheW91dDtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwcml2YXRlIGRlYnVnO1xyXG4gIHByaXZhdGUgc2VhcmNoU3RhdHVzQ29kZTogU2VhcmNoU3RhdHVzQ29kZTtcclxuICBwcml2YXRlIG5leHRQYWdlRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGxvYWRpbmdGbGFnOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXRlbXM6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+O1xyXG4gIHByaXZhdGUgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBwcml2YXRlIGZpbHRlck1lbnVWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsaXN0Vmlld1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy5kZWJ1ZyA9IERlYnVnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBDaGVjayBpZiBkYXRhIGV4aXN0c1xyXG4gICAgaWYgKHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNldEN1cnJlbnRMb2NhdGlvbiAmJiB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBleGlzdHMgYWxyZWFkeVwiKTtcclxuICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cztcclxuICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycztcclxuICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmdGbGFnID0gdHJ1ZTtcclxuICAgICAgLy8gR2V0IGxvY2F0aW9uXHJcbiAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLnNlYXJjaChTZWFyY2hNb2RlLkRlZmF1bHQsIGZhbHNlKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuT0s6XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBidXR0b24gdGFwcGVkLlwiKTtcclxuICAgIHRoaXMuZmlsdGVyTWVudVZpc2libGUgPSAhdGhpcy5maWx0ZXJNZW51VmlzaWJsZTtcclxuICAgIC8vIHRoaXMuZmlsdGVyTWVudS5hbmltYXRlKHtcclxuICAgIC8vICAgdHJhbnNsYXRlOiB7IHg6IDEwMCwgeTogMTAwIH0sXHJcbiAgICAvLyAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIG9uTGlzdE1hcFRvZ2dsZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTGlzdE1hcCB0b2dnbGUgdGFwcGVkLlwiKTtcclxuICAgIHRoaXMubGlzdFZpZXdWaXNpYmxlID0gIXRoaXMubGlzdFZpZXdWaXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSwgaW5zaWRlUmFkTGlzdFZpZXc6IGJvb2xlYW4pIHtcclxuICAgIGFyZ3Mub2JqZWN0LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk1hbnVhbF07XHJcbiAgICAvLyBDbGVhciBjdXJlbnQgZGF0YVxyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBBUEkgQ2FsbFxyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgLnNlYXJjaChTZWFyY2hNb2RlLkRlZmF1bHQsIGZhbHNlKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuT0s6XHJcbiAgICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gPFZlbmRvcltdPnJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVmYXVsdCBzZWFyY2ggaGFkIGFuIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICBpZiAoaW5zaWRlUmFkTGlzdFZpZXcpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblZlbmRvclRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgbGV0IGRhdGEgPSAoKGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3KS5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgVmVuZG9yW10pWzBdO1xyXG4gICAgbGV0IHZlbmRvcjogVmVuZG9yID0gdGhpcy52ZW5kb3JzLmZpbmQodmVuZG9yID0+IHZlbmRvci5wbGFjZV9pZCA9PT0gZGF0YS5wbGFjZV9pZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2gvdmVuZG9yXCIsIHZlbmRvci5wbGFjZV9pZF0pO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHRzLm5leHRfcGFnZV90b2tlbikge1xyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCB0cnVlLCB0aGlzLnNlYXJjaFJlc3VsdHMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuT0s6XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgYXJncy5vYmplY3QubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSB0aGlzLnZlbmRvcnMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgdmVuZG9yIG9mIHJlc3BvbnNlLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycy5wdXNoKDxWZW5kb3I+dmVuZG9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgb2YgbmV3IGRhdGEgcGFnZVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSB0aGlzLnZlbmRvcnM7XHJcbiAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIG5ldyBkYXRhXHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5zY3JvbGxUb0luZGV4KHRlbXBJbmRleCwgZmFsc2UsIExpc3RWaWV3SXRlbVNuYXBNb2RlLkVuZCk7XHJcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSzsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTOlxyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoREVGQVVMVCknKTtcclxuICAgICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2FyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubmV4dFBhZ2VGbGFnKSBhcmdzLm9iamVjdC5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldE5leHRQYWdlRmxhZyhyZXNwb25zZTogU2VhcmNoUmVzdWx0KSB7XHJcbiAgICB0aGlzLm5leHRQYWdlRmxhZyA9IChyZXNwb25zZS5uZXh0X3BhZ2VfdG9rZW4pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coXCJOZXh0IFBhZ2UgRmxhZzogXCIgKyB0aGlzLm5leHRQYWdlRmxhZyk7XHJcbiAgfVxyXG5cclxuICBjYWxjRGlzdGFuY2UobG9jMTogTG9jYXRpb24sIGxvYzI6IExvY2F0aW9uKXtcclxuICAgIHJldHVybiBnZW9sb2NhdGlvbi5kaXN0YW5jZShsb2MxLCBsb2MyKSAvIDE2MDkuMzQ7IC8vIGNvbnZlcnQgdG8gbWlsZXMuXHJcbiAgfVxyXG59Il19