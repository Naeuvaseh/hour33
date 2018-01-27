"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
var geolocation = require("nativescript-geolocation");
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
                        var tempIndex = _this.vendors.length - 1;
                        for (var _i = 0, _a = response.results; _i < _a.length; _i++) {
                            var vendor = _a[_i];
                            _this.vendors.push(vendor);
                        }
                        if (!_this.nextPageFlag)
                            args.object.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
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
                args.object.notifyLoadOnDemandFinished();
            }, function (error) {
                console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
            });
        }
        args.object.notifyLoadOnDemandFinished();
        args.returnValue = true;
    };
    SearchComponent.prototype.setNextPageFlag = function (response) {
        this.nextPageFlag = (response.next_page_token) ? true : false;
    };
    SearchComponent.prototype.calcDistance = function (loc1, loc2) {
        return geolocation.distance(loc1, loc2) / 1609.34; // convert to miles.
    };
    __decorate([
        core_1.ViewChild('vendorList'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], SearchComponent.prototype, "listViewComponent", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMkNBQThDO0FBQzlDLHlEQUE4SDtBQUU5SCwwQ0FBeUU7QUFFekUsc0RBQXdEO0FBRXhELFdBQVc7QUFDWCxnRUFBOEQ7QUFDOUQsa0ZBQStFO0FBUS9FLGlFQUEwRDtBQUMxRCxxRUFBa0U7QUFHbEUsZ0VBQTRFO0FBTTVFO0lBZ0JFLHlCQUFvQixNQUFjLEVBQ3hCLGFBQTRCLEVBQzVCLHFCQUE0QztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFOL0Msb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFPckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQXlDQztRQXhDQyx1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7WUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQ0FBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDOUMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcs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UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsUUFBc0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsSUFBYyxFQUFFLElBQWM7UUFDekMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQjtJQUN6RSxDQUFDO0lBakx3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsOEJBQW9COzhEQUFDO0lBRnRELGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwyQ0FBMkM7U0FDekQsQ0FBQzt5Q0FpQjRCLGVBQU07WUFDVCw4QkFBYTtZQUNMLCtDQUFxQjtPQWxCM0MsZUFBZSxDQW9MM0I7SUFBRCxzQkFBQztDQUFBLEFBcExELElBb0xDO0FBcExZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLCBMaXN0Vmlld0l0ZW1TbmFwTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlJztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2VudW1zL2RheS5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hTdGF0dXNDb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VhcmNoLXN0YXR1cy5lbnVtJztcclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2dlbmVyYXRlJztcclxuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCd2ZW5kb3JMaXN0JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgZGVidWc7XHJcbiAgcHJpdmF0ZSBzZWFyY2hTdGF0dXNDb2RlOiBTZWFyY2hTdGF0dXNDb2RlO1xyXG4gIHByaXZhdGUgbmV4dFBhZ2VGbGFnOiBib29sZWFuO1xyXG4gIHByaXZhdGUgbG9hZGluZ0ZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpdGVtczogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcbiAgcHJpdmF0ZSB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbGlzdFZpZXdWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gIHB1YmxpYyB2ZW5kb3JzOiBWZW5kb3JbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgZ29vZ2xlTG9jYXRpb25TZXJ2aWNlOiBHb29nbGVMb2NhdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgZGF0YSBleGlzdHNcclxuICAgIGlmICh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZXRDdXJyZW50TG9jYXRpb24gJiYgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZXhpc3RzIGFscmVhZHlcIik7XHJcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHM7XHJcbiAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnM7XHJcbiAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuT0s7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IHRydWU7XHJcbiAgICAgIC8vIEdldCBsb2NhdGlvblxyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCBmYWxzZSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAgIC8vIFNldCBkYXRhIGF0IGJvdGggc2VydmljZSBsZXZlbCBhbmQgY29tcG9uZW50IGxldmVsXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gPFZlbmRvcltdPnJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUzpcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLlpFUk9fUkVTVUxUUztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUikgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm5nT25Jbml0KERFRkFVTFQpJyk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBkZWZhdWx0IHNlYXJjaCBoYWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIGJ1dHRvbiB0YXBwZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0TWFwVG9nZ2xlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhLCBpbnNpZGVSYWRMaXN0VmlldzogYm9vbGVhbikge1xyXG4gICAgLy8gQ2xlYXIgY3VyZW50IGRhdGFcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQVBJIENhbGxcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCBmYWxzZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLk9LOlxyXG4gICAgICAgICAgICAvLyBTZXQgZGF0YSBhdCBib3RoIHNlcnZpY2UgbGV2ZWwgYW5kIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT5yZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXR1c0NvZGUgPSBTZWFyY2hTdGF0dXNDb2RlLk9LOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5aRVJPX1JFU1VMVFM6XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2VhcmNoU3RhdHVzQ29kZS5JTlZBTElEX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLklOVkFMSURfUkVRVUVTVCkgTWVzc2FnZTogJyArIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQucmVmcmVzaChERUZBVUxUKScpO1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgaWYgKGluc2lkZVJhZExpc3RWaWV3KSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25WZW5kb3JUYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGxldCB2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XHJcbiAgICBsZXQgZGF0YSA9IHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIFZlbmRvcltdO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhWzBdKSk7XHJcbiAgICAvLyBsZXQgdmVuZG9yOiBWZW5kb3IgPSB0aGlzLnZlbmRvcnMuZmluZCh2ZW5kb3IgPT4gdmVuZG9yLnBsYWNlX2lkID09PSBhcmdzLmRhdGEucGxhY2VfaWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJWZW5kb3IgSUQ6XCIsIHZlbmRvci5wbGFjZV9pZCk7XHJcbiAgICAvLyAvL3RoaXMudmVuZG9yU2VydmljZS5zZXRTZWxlY3RlZFZlbmRvcih2ZW5kb3IpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2VhcmNoL3ZlbmRvclwiLCB2ZW5kb3IucGxhY2VfaWRdLCApO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHRzLm5leHRfcGFnZV90b2tlbikge1xyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCB0cnVlLCB0aGlzLnNlYXJjaFJlc3VsdHMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuT0s6XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSB0aGlzLnZlbmRvcnMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgdmVuZG9yIG9mIHJlc3BvbnNlLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycy5wdXNoKDxWZW5kb3I+dmVuZG9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLm5leHRQYWdlRmxhZykgYXJncy5vYmplY3QubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGRhdGEgb2YgbmV3IGRhdGEgcGFnZVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSB0aGlzLnZlbmRvcnM7XHJcbiAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIG5ldyBkYXRhXHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5zY3JvbGxUb0luZGV4KHRlbXBJbmRleCwgZmFsc2UsIExpc3RWaWV3SXRlbVNuYXBNb2RlLkVuZCk7XHJcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0dXNDb2RlID0gU2VhcmNoU3RhdHVzQ29kZS5PSzsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTOlxyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RhdHVzQ29kZSA9IFNlYXJjaFN0YXR1c0NvZGUuWkVST19SRVNVTFRTO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKFNlYXJjaFN0YXR1c0NvZGUuSU5WQUxJRF9SRVFVRVNUKSBNZXNzYWdlOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaFN0YXR1c0NvZGUuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChTZWFyY2hTdGF0dXNDb2RlLlVOS05PV05fRVJST1IpIE1lc3NhZ2U6ICcgKyByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoREVGQVVMVCknKTtcclxuICAgICAgICAgICAgICBhbGVydCgnVGhlIGRlZmF1bHQgc2VhcmNoIGhhZCBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmdzLm9iamVjdC5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpIHtcclxuICAgIHRoaXMubmV4dFBhZ2VGbGFnID0gKHJlc3BvbnNlLm5leHRfcGFnZV90b2tlbikgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjYWxjRGlzdGFuY2UobG9jMTogTG9jYXRpb24sIGxvYzI6IExvY2F0aW9uKXtcclxuICAgIHJldHVybiBnZW9sb2NhdGlvbi5kaXN0YW5jZShsb2MxLCBsb2MyKSAvIDE2MDkuMzQ7IC8vIGNvbnZlcnQgdG8gbWlsZXMuXHJcbiAgfVxyXG59Il19