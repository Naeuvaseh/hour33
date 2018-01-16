"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService) {
        this.router = router;
        this.vendorService = vendorService;
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
        __metadata("design:paramtypes", [router_1.Router, vendor_service_1.VendorService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBQzlDLHlEQUF3RztBQUV4RywwQ0FBeUU7QUFDekUsV0FBVztBQUNYLGdFQUE4RDtBQVU5RDtJQVNFLHlCQUFvQixNQUFjLEVBQVUsYUFBNEI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRmpFLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBR3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUF1QjtRQUM3QixVQUFVLENBQUM7WUFDVCw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLElBQXVCO1FBQ2pDLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0RBQXdCLEdBQXhCLFVBQXlCLElBQXVCO1FBQzlDLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQztZQUNULElBQUksUUFBUSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQzFELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdFLG9DQUFvQztnQkFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsbUNBQXdCLENBQUMsbUNBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BGLEtBQUssQ0FBQztnQkFDVixDQUFDO2dCQUNELG9DQUFvQztnQkFDcEMsK0lBQStJO2dCQUMvSSxtQ0FBbUM7WUFDdkMsQ0FBQztZQUNELFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUE1RFUsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUN6RCxDQUFDO3lDQVU0QixlQUFNLEVBQXlCLDhCQUFhO09BVDdELGVBQWUsQ0E2RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2VudW1zL2RheS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwcml2YXRlIGRlYnVnO1xyXG4gIHByaXZhdGUgX251bWJlck9mQWRkZWRJdGVtcztcclxuICBwcml2YXRlIGl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBcclxuICBwdWJsaWMgbGlzdFZpZXdWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIFxyXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMudmVuZG9yU2VydmljZS5nZXRWZW5kb3JzKCk7XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpe1xyXG4gICAgY29uc29sZS5sb2coXCJGaWx0ZXIgYnV0dG9uIHRhcHBlZC5cIik7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RNYXBUb2dnbGUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiTGlzdE1hcCB0b2dnbGUgdGFwcGVkLlwiKTtcclxuICAgIHRoaXMubGlzdFZpZXdWaXNpYmxlID0gIXRoaXMubGlzdFZpZXdWaXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gQVBJIERhdGEgUmVxdWVzdCBnb2VzIGhlcmUuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHVsbCBkb3duIGluaXRpYXRlZC5cIik7XHJcbiAgICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIG9uVmVuZG9yVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIGxldCB2ZW5kb3I6IFZlbmRvciA9IHRoaXMuaXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcclxuICAgIGNvbnNvbGUubG9nKFwiVmVuZG9yIElEOlwiLCB2ZW5kb3IuaWQpO1xyXG4gICAgdGhpcy52ZW5kb3JTZXJ2aWNlLnNldFNlbGVjdGVkVmVuZG9yKHZlbmRvcik7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2gvdmVuZG9yXCIsIHZlbmRvci5pZF0sICk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpe1xyXG4gICAgdmFyIHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbGlzdFZpZXc6IFJhZExpc3RWaWV3ID0gYXJncy5vYmplY3Q7XHJcbiAgICAgIHZhciBpbml0aWFsTnVtYmVyT2ZJdGVtcyA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcztcclxuICAgICAgZm9yICh2YXIgaSA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtczsgaSA8IGluaXRpYWxOdW1iZXJPZkl0ZW1zICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG1vcmUgcGFnZXNcclxuICAgICAgICAgIGlmIChpID4gdGhpcy5pdGVtcy5uYW1lcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgbGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL0dldCBuZXh0IHBhZ2UgYW5kIHB1c2ggb250byBhcnJheS5cclxuICAgICAgICAgIC8vdGhhdC5nZXQoKS5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBpbWFnZVVyaSkpO1xyXG4gICAgICAgICAgLy90aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXMrKztcclxuICAgICAgfVxyXG4gICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gIH1cclxufSJdfQ==