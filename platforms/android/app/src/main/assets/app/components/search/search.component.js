"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var search_mode_enum_1 = require("../../enums/search-mode.enum");
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
            // Get location
            this.googleLocationService
                .search(search_mode_enum_1.SearchMode.Default, false)
                .then(function (response) {
                // Set data at both service level and component level
                _this.setNextPageFlag(response);
                _this.searchResults = _this.googleLocationService.searchResults = response;
                _this.vendors = _this.googleLocationService.vendors = response.results;
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
    SearchComponent.prototype.refresh = function (args) {
        var _this = this;
        // Clear curent data
        this.googleLocationService.searchResults = this.googleLocationService.vendors = undefined;
        // API Call
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Default, false)
            .then(function (response) {
            _this.setNextPageFlag(response);
            _this.searchResults = _this.googleLocationService.searchResults = response;
            _this.vendors = _this.googleLocationService.vendors = response.results;
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
                _this.setNextPageFlag(response);
                // Update service results object
                _this.searchResults = _this.googleLocationService.searchResults = response;
                // Add new vendors to service and local component variables
                for (var _i = 0, _a = response.results; _i < _a.length; _i++) {
                    var vendor = _a[_i];
                    _this.googleLocationService.vendors.push(vendor);
                    _this.vendors.push(vendor);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBRzlDLDBDQUF5RTtBQUl6RSxXQUFXO0FBQ1gsZ0VBQThEO0FBQzlELGtGQUErRTtBQVEvRSxpRUFBMEQ7QUFNMUQ7SUFXRSx5QkFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLHFCQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQU56RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQU9yQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLHVCQUF1QjtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztRQUNwRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixlQUFlO1lBQ2YsSUFBSSxDQUFDLHFCQUFxQjtpQkFDckIsTUFBTSxDQUFDLDZCQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUMsUUFBc0I7Z0JBQzNCLHFEQUFxRDtnQkFDckQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFD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SUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQzNDLENBQUMsRUFDRCxVQUFDLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsUUFBc0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2hFLENBQUM7SUFuR1UsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUN6RCxDQUFDO3lDQVk0QixlQUFNO1lBQ0MsOEJBQWE7WUFDTCwrQ0FBcUI7T0FickQsZUFBZSxDQW9HM0I7SUFBRCxzQkFBQztDQUFBLEFBcEdELElBb0dDO0FBcEdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlJztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2VudW1zL2RheS5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgZGVidWc7XHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpdGVtczogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcbiAgXHJcbiAgcHVibGljIGxpc3RWaWV3VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIFxyXG4gICAgLy8gQ2hlY2sgaWYgZGF0YSBleGlzdHNcclxuICAgIGlmICh0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZXRDdXJyZW50TG9jYXRpb24gJiYgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycykge1xyXG4gICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzO1xyXG4gICAgICB0aGlzLnZlbmRvcnMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS52ZW5kb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIEdldCBsb2NhdGlvblxyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgICAgLnNlYXJjaChTZWFyY2hNb2RlLkRlZmF1bHQsIGZhbHNlKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8gU2V0IGRhdGEgYXQgYm90aCBzZXJ2aWNlIGxldmVsIGFuZCBjb21wb25lbnQgbGV2ZWxcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLnZlbmRvcnMgPSA8VmVuZG9yW10+IHJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBidXR0b24gdGFwcGVkLlwiKTtcclxuICB9XHJcblxyXG4gIG9uTGlzdE1hcFRvZ2dsZSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIC8vIENsZWFyIGN1cmVudCBkYXRhXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IHVuZGVmaW5lZDtcclxuICAgIC8vIEFQSSBDYWxsXHJcbiAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCBmYWxzZSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycyA9IDxWZW5kb3JbXT4gcmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblZlbmRvclRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICBsZXQgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xyXG4gICAgbGV0IGRhdGEgPSB2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBWZW5kb3JbXTtcclxuXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGFbMF0pKTtcclxuICAgIC8vIGxldCB2ZW5kb3I6IFZlbmRvciA9IHRoaXMudmVuZG9ycy5maW5kKHZlbmRvciA9PiB2ZW5kb3IucGxhY2VfaWQgPT09IGFyZ3MuZGF0YS5wbGFjZV9pZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlZlbmRvciBJRDpcIiwgdmVuZG9yLnBsYWNlX2lkKTtcclxuICAgIC8vIC8vdGhpcy52ZW5kb3JTZXJ2aWNlLnNldFNlbGVjdGVkVmVuZG9yKHZlbmRvcik7XHJcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2gvdmVuZG9yXCIsIHZlbmRvci5wbGFjZV9pZF0sICk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHMubmV4dF9wYWdlX3Rva2VuKSB7XHJcbiAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLnNlYXJjaChTZWFyY2hNb2RlLkRlZmF1bHQsIHRydWUsIHRoaXMuc2VhcmNoUmVzdWx0cylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgIC8vIFVwZGF0ZSBzZXJ2aWNlIHJlc3VsdHMgb2JqZWN0XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAvLyBBZGQgbmV3IHZlbmRvcnMgdG8gc2VydmljZSBhbmQgbG9jYWwgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4gICAgICAgICAgZm9yIChsZXQgdmVuZG9yIG9mIHJlc3BvbnNlLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2UudmVuZG9ycy5wdXNoKDxWZW5kb3I+dmVuZG9yKTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzLnB1c2goPFZlbmRvcj52ZW5kb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJncy5vYmplY3Qubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5vbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgfVxyXG5cclxuICBzZXROZXh0UGFnZUZsYWcocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCl7XHJcbiAgICB0aGlzLm5leHRQYWdlRmxhZyA9IChyZXNwb25zZS5uZXh0X3BhZ2VfdG9rZW4pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSJdfQ==