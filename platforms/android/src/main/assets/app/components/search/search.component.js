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
        this.items = this.vendorService.getSetVendors();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBQzlDLHlEQUF3RztBQUV4RywwQ0FBeUU7QUFDekUsV0FBVztBQUNYLGdFQUE4RDtBQVc5RDtJQVNFLHlCQUFvQixNQUFjLEVBQVUsYUFBNEI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRmpFLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBR3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUF1QjtRQUM3QixVQUFVLENBQUM7WUFDVCw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLElBQXVCO1FBQ2pDLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0RBQXdCLEdBQXhCLFVBQXlCLElBQXVCO1FBQzlDLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQztZQUNULElBQUksUUFBUSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQzFELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdFLG9DQUFvQztnQkFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsbUNBQXdCLENBQUMsbUNBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BGLEtBQUssQ0FBQztnQkFDVixDQUFDO2dCQUNELG9DQUFvQztnQkFDcEMsK0lBQStJO2dCQUMvSSxtQ0FBbUM7WUFDdkMsQ0FBQztZQUNELFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUE1RFUsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUN6RCxDQUFDO3lDQVU0QixlQUFNLEVBQXlCLDhCQUFhO09BVDdELGVBQWUsQ0E2RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBIb3Vyc09mT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ob3Vycy1vZi1vcGVyYXRpb24uaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vLi4vZW51bXMvZGF5LmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgZGVidWc7XHJcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZBZGRlZEl0ZW1zO1xyXG4gIHByaXZhdGUgaXRlbXM6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+O1xyXG4gIFxyXG4gIHB1YmxpYyBsaXN0Vmlld1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgXHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy52ZW5kb3JTZXJ2aWNlLmdldFNldFZlbmRvcnMoKTtcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBidXR0b24gdGFwcGVkLlwiKTtcclxuICB9XHJcblxyXG4gIG9uTGlzdE1hcFRvZ2dsZSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJMaXN0TWFwIHRvZ2dsZSB0YXBwZWQuXCIpO1xyXG4gICAgdGhpcy5saXN0Vmlld1Zpc2libGUgPSAhdGhpcy5saXN0Vmlld1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBBUEkgRGF0YSBSZXF1ZXN0IGdvZXMgaGVyZS5cclxuICAgICAgY29uc29sZS5sb2coXCJQdWxsIGRvd24gaW5pdGlhdGVkLlwiKTtcclxuICAgICAgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgb25WZW5kb3JUYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpe1xyXG4gICAgbGV0IHZlbmRvcjogVmVuZG9yID0gdGhpcy5pdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xyXG4gICAgY29uc29sZS5sb2coXCJWZW5kb3IgSUQ6XCIsIHZlbmRvci5pZCk7XHJcbiAgICB0aGlzLnZlbmRvclNlcnZpY2Uuc2V0U2VsZWN0ZWRWZW5kb3IodmVuZG9yKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNlYXJjaC92ZW5kb3JcIiwgdmVuZG9yLmlkXSwgKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICB2YXIgdGhhdCA9IG5ldyBXZWFrUmVmKHRoaXMpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBsaXN0VmlldzogUmFkTGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgICAgdmFyIGluaXRpYWxOdW1iZXJPZkl0ZW1zID0gdGhhdC5nZXQoKS5fbnVtYmVyT2ZBZGRlZEl0ZW1zO1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhhdC5nZXQoKS5fbnVtYmVyT2ZBZGRlZEl0ZW1zOyBpIDwgaW5pdGlhbE51bWJlck9mSXRlbXMgKyAyOyBpKyspIHtcclxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbW9yZSBwYWdlc1xyXG4gICAgICAgICAgaWYgKGkgPiB0aGlzLml0ZW1zLm5hbWVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICBsaXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vR2V0IG5leHQgcGFnZSBhbmQgcHVzaCBvbnRvIGFycmF5LlxyXG4gICAgICAgICAgLy90aGF0LmdldCgpLl9kYXRhSXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oaSwgcG9zdHMubmFtZXNbaV0sIFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uXCIsIHBvc3RzLnRpdGxlc1tpXSwgcG9zdHMudGV4dFtpXSwgXCJyZXM6Ly9cIiArIGltYWdlVXJpKSk7XHJcbiAgICAgICAgICAvL3RoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcysrO1xyXG4gICAgICB9XHJcbiAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gICAgYXJncy5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgfVxyXG59Il19