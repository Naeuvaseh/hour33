"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
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
        this.items = this.vendorService.getVendors();
    };
    SearchComponent.prototype.onFilter = function () {
        console.log("Filter button tapped.");
    };
    SearchComponent.prototype.onListMapToggle = function () {
        console.log("ListMap toggle tapped.");
        //this.googleLocationService.onGooglePlaces();
        this.googleLocationService.onPickPlace();
        this.listViewVisible = !this.listViewVisible;
    };
    SearchComponent.prototype.refresh = function (args) {
        setTimeout(function () {
            // API Data Request goes here.
            console.log("Pull down initiated.");
            args.object.notifyPullToRefreshFinished();
        }, 500);
    };
    SearchComponent.prototype.onVendorTap = function (args) {
        var vendor = this.items.getItem(args.index);
        console.log("Vendor ID:", vendor.id);
        this.vendorService.setSelectedVendor(vendor);
        this.router.navigate(["search/vendor", vendor.id]);
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        setTimeout(function () {
            var listView = args.object;
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                // Check if there are any more pages
                if (i > this.items.names.length - 1) {
                    listView.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
                    break;
                }
                //Get next page and push onto array.
                //that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                //that.get()._numberOfAddedItems++;
            }
            listView.notifyLoadOnDemandFinished();
        }, 500);
        args.returnValue = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBQzlDLHlEQUF3RztBQUV4RywwQ0FBeUU7QUFDekUsV0FBVztBQUNYLGdFQUE4RDtBQUM5RCxrRkFBK0U7QUFVL0U7SUFTRSx5QkFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLHFCQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUp6RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUtyQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLDhDQUE4QztRQUM5QyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUF1QjtRQUM3QixVQUFVLENBQUM7WUFDVCw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLElBQXVCO1FBQ2pDLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0RBQXdCLEdBQXhCLFVBQXlCLElBQXVCO1FBQzlDLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQztZQUNULElBQUksUUFBUSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQzFELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdFLG9DQUFvQztnQkFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsbUNBQXdCLENBQUMsbUNBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BGLEtBQUssQ0FBQztnQkFDVixDQUFDO2dCQUNELG9DQUFvQztnQkFDcEMsK0lBQStJO2dCQUMvSSxtQ0FBbUM7WUFDdkMsQ0FBQztZQUNELFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFoRVUsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUN6RCxDQUFDO3lDQVU0QixlQUFNO1lBQ0MsOEJBQWE7WUFDTCwrQ0FBcUI7T0FYckQsZUFBZSxDQWlFM0I7SUFBRCxzQkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlJztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi8uLi9lbnVtcy9kYXkuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgcHJpdmF0ZSBkZWJ1ZztcclxuICBwcml2YXRlIF9udW1iZXJPZkFkZGVkSXRlbXM7XHJcbiAgcHJpdmF0ZSBpdGVtczogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcbiAgXHJcbiAgcHVibGljIGxpc3RWaWV3VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIFxyXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMudmVuZG9yU2VydmljZS5nZXRWZW5kb3JzKCk7XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpe1xyXG4gICAgY29uc29sZS5sb2coXCJGaWx0ZXIgYnV0dG9uIHRhcHBlZC5cIik7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RNYXBUb2dnbGUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiTGlzdE1hcCB0b2dnbGUgdGFwcGVkLlwiKTtcclxuICAgIC8vdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2Uub25Hb29nbGVQbGFjZXMoKTtcclxuICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCk7XHJcbiAgICB0aGlzLmxpc3RWaWV3VmlzaWJsZSA9ICF0aGlzLmxpc3RWaWV3VmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goYXJnczogTGlzdFZpZXdFdmVudERhdGEpe1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIEFQSSBEYXRhIFJlcXVlc3QgZ29lcyBoZXJlLlxyXG4gICAgICBjb25zb2xlLmxvZyhcIlB1bGwgZG93biBpbml0aWF0ZWQuXCIpO1xyXG4gICAgICBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICBvblZlbmRvclRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICBsZXQgdmVuZG9yOiBWZW5kb3IgPSB0aGlzLml0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlZlbmRvciBJRDpcIiwgdmVuZG9yLmlkKTtcclxuICAgIHRoaXMudmVuZG9yU2VydmljZS5zZXRTZWxlY3RlZFZlbmRvcih2ZW5kb3IpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2VhcmNoL3ZlbmRvclwiLCB2ZW5kb3IuaWRdLCApO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIHZhciB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICB2YXIgaW5pdGlhbE51bWJlck9mSXRlbXMgPSB0aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXM7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXM7IGkgPCBpbml0aWFsTnVtYmVyT2ZJdGVtcyArIDI7IGkrKykge1xyXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBtb3JlIHBhZ2VzXHJcbiAgICAgICAgICBpZiAoaSA+IHRoaXMuaXRlbXMubmFtZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgIGxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9HZXQgbmV4dCBwYWdlIGFuZCBwdXNoIG9udG8gYXJyYXkuXHJcbiAgICAgICAgICAvL3RoYXQuZ2V0KCkuX2RhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgaW1hZ2VVcmkpKTtcclxuICAgICAgICAgIC8vdGhhdC5nZXQoKS5fbnVtYmVyT2ZBZGRlZEl0ZW1zKys7XHJcbiAgICAgIH1cclxuICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICB9XHJcbn0iXX0=