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
        // Get location
        var tempLocation;
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Default, false)
            .then(function (response) {
            _this.setNextPageFlag(response);
            _this.searchResults = response;
            _this.vendors = response.results;
        });
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
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Default, false)
            .then(function (response) {
            _this.setNextPageFlag(response);
            _this.searchResults = response;
            _this.vendors = response.results;
            args.object.notifyPullToRefreshFinished();
        }, function (error) {
            console.log('SearchComponent.refresh() ERROR: ' + error);
        });
    };
    SearchComponent.prototype.onVendorTap = function (args) {
        var vendor; // = this.vendors.find();
        console.log("Vendor ID:", vendor.place_id);
        //this.vendorService.setSelectedVendor(vendor);
        this.router.navigate(["search/vendor", vendor.place_id]);
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        if (this.searchResults.next_page_token) {
            this.googleLocationService
                .search(search_mode_enum_1.SearchMode.Default, true, this.searchResults)
                .then(function (response) {
                _this.setNextPageFlag(response);
                _this.searchResults = response;
                for (var _i = 0, _a = response.results; _i < _a.length; _i++) {
                    var vendor = _a[_i];
                    _this.vendors.push(vendor);
                }
                args.object.notifyLoadOnDemandFinished();
            }, function (error) {
                console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBRzlDLDBDQUF5RTtBQUl6RSxXQUFXO0FBQ1gsZ0VBQThEO0FBQzlELGtGQUErRTtBQVEvRSxpRUFBMEQ7QUFNMUQ7SUFXRSx5QkFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLHFCQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQU56RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQU9yQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxlQUFlO1FBQ2YsSUFBSSxZQUFzQixDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUI7YUFDckIsTUFBTSxDQUFDLDZCQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzthQUNqQyxJQUFJLENBQUMsVUFBQyxRQUFzQjtZQUMzQixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxPQUFPLEdBQWMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsSUFBdUI7UUFBL0IsaUJBWUM7UUFYQyxJQUFJLENBQUMscUJBQXFCO2FBQ3JCLE1BQU0sQ0FBQyw2QkFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUMsUUFBc0I7WUFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztZQUM5QixLQUFJLENBQUMsT0FBTyxHQUFjLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUF1QjtRQUNqQyxJQUFJLE1BQWMsQ0FBQyxDQUFBLHlCQUF5QjtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRyxDQUFDO0lBQzdELENBQUM7SUFFRCxrREFBd0IsR0FBeEIsVUFBeUIsSUFBdUI7UUFBaEQsaUJBZ0JDO1FBZkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUI7aUJBQ3ZCLE1BQU0sQ0FBQyw2QkFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEQsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDYixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztnQkFDOUIsR0FBRyxDQUFDLENBQWUsVUFBZ0IsRUFBaEIsS0FBQSxRQUFRLENBQUMsT0FBTyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtvQkFBOUIsSUFBSSxNQUFNLFNBQUE7b0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQVMsTUFBTSxDQUFDLENBQUM7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUMzQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsUUFBc0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2hFLENBQUM7SUFoRlUsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUN6RCxDQUFDO3lDQVk0QixlQUFNO1lBQ0MsOEJBQWE7WUFDTCwrQ0FBcUI7T0FickQsZUFBZSxDQWlGM0I7SUFBRCxzQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlJztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2VudW1zL2RheS5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgZGVidWc7XHJcbiAgcHJpdmF0ZSBuZXh0UGFnZUZsYWc6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpdGVtczogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcbiAgXHJcbiAgcHVibGljIGxpc3RWaWV3VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIFxyXG4gICAgLy8gR2V0IGxvY2F0aW9uXHJcbiAgICBsZXQgdGVtcExvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLnNlYXJjaChTZWFyY2hNb2RlLkRlZmF1bHQsIGZhbHNlKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgIHRoaXMudmVuZG9ycyA9IDxWZW5kb3JbXT4gcmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBidXR0b24gdGFwcGVkLlwiKTtcclxuICB9XHJcblxyXG4gIG9uTGlzdE1hcFRvZ2dsZSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLnNlYXJjaChTZWFyY2hNb2RlLkRlZmF1bHQsIGZhbHNlKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgIHRoaXMudmVuZG9ycyA9IDxWZW5kb3JbXT4gcmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5yZWZyZXNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblZlbmRvclRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICBsZXQgdmVuZG9yOiBWZW5kb3I7Ly8gPSB0aGlzLnZlbmRvcnMuZmluZCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJWZW5kb3IgSUQ6XCIsIHZlbmRvci5wbGFjZV9pZCk7XHJcbiAgICAvL3RoaXMudmVuZG9yU2VydmljZS5zZXRTZWxlY3RlZFZlbmRvcih2ZW5kb3IpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2VhcmNoL3ZlbmRvclwiLCB2ZW5kb3IucGxhY2VfaWRdLCApO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHRzLm5leHRfcGFnZV90b2tlbikge1xyXG4gICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZVxyXG4gICAgICAgIC5zZWFyY2goU2VhcmNoTW9kZS5EZWZhdWx0LCB0cnVlLCB0aGlzLnNlYXJjaFJlc3VsdHMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldE5leHRQYWdlRmxhZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgIGZvciAobGV0IHZlbmRvciBvZiByZXNwb25zZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVuZG9ycy5wdXNoKDxWZW5kb3I+dmVuZG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQub25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXROZXh0UGFnZUZsYWcocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCl7XHJcbiAgICB0aGlzLm5leHRQYWdlRmxhZyA9IChyZXNwb25zZS5uZXh0X3BhZ2VfdG9rZW4pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSJdfQ==