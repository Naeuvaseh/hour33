"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var settings_1 = require("../../../settings");
var VendorDetailComponent = (function () {
    function VendorDetailComponent(location, route) {
        this.location = location;
        this.route = route;
        this.theme = settings_1.Theme;
    }
    VendorDetailComponent.prototype.ngOnInit = function () {
        this.vendor = this.route.snapshot.data['vendor'];
        // console.log(JSON.stringify(this.vendor.result.reviews));
        console.log('Period: ' + JSON.stringify(this.vendor.result.opening_hours.periods));
    };
    VendorDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    VendorDetailComponent.prototype.onShare = function () {
        console.log("Shared button tapped.");
    };
    VendorDetailComponent = __decorate([
        core_1.Component({
            selector: 'vendor-detail',
            templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute])
    ], VendorDetailComponent);
    return VendorDetailComponent;
}());
exports.VendorDetailComponent = VendorDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBMkM7QUFDM0MsMENBQWlEO0FBR2pELDhDQUEwQztBQU8xQztJQUlFLCtCQUNVLFFBQWtCLEVBQ2xCLEtBQXFCO1FBRHJCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFpQixDQUFDO1FBQ2pFLDJEQUEyRDtRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBdEJVLHFCQUFxQjtRQUpqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGdFQUFnRTtTQUM5RSxDQUFDO3lDQU1vQixpQkFBUTtZQUNYLHVCQUFjO09BTnBCLHFCQUFxQixDQXVCakM7SUFBRCw0QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVmVuZG9yRGV0YWlsIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItZGV0YWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHB1YmxpYyB2ZW5kb3I6IFZlbmRvckRldGFpbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXsgXHJcbiAgICB0aGlzLnZlbmRvciA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YVsndmVuZG9yJ10gYXMgVmVuZG9yRGV0YWlsO1xyXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy52ZW5kb3IucmVzdWx0LnJldmlld3MpKTtcclxuICAgIGNvbnNvbGUubG9nKCdQZXJpb2Q6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnZlbmRvci5yZXN1bHQub3BlbmluZ19ob3Vycy5wZXJpb2RzKSk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKXtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuICBcclxuICBvblNoYXJlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNoYXJlZCBidXR0b24gdGFwcGVkLlwiKTsgXHJcbiAgfVxyXG59Il19