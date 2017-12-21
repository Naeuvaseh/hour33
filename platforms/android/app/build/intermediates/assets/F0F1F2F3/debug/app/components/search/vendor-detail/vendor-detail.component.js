"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vendor_service_1 = require("../../../services/vendor.service");
var settings_1 = require("../../../settings");
var VendorDetailComponent = (function () {
    function VendorDetailComponent(location, vendorService) {
        this.location = location;
        this.vendorService = vendorService;
        this.theme = settings_1.Theme;
        this.vendor = this.vendorService.getSelectedVendor();
    }
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
        __metadata("design:paramtypes", [common_1.Location, vendor_service_1.VendorService])
    ], VendorDetailComponent);
    return VendorDetailComponent;
}());
exports.VendorDetailComponent = VendorDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkM7QUFDM0MsbUVBQWlFO0FBRWpFLDhDQUEwQztBQU0xQztJQUtFLCtCQUFvQixRQUFrQixFQUFVLGFBQTRCO1FBQXhELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFoQlUscUJBQXFCO1FBSmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0VBQWdFO1NBQzlFLENBQUM7eUNBTThCLGlCQUFRLEVBQXlCLDhCQUFhO09BTGpFLHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItZGV0YWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yRGV0YWlsQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwdWJsaWMgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMudmVuZG9yID0gdGhpcy52ZW5kb3JTZXJ2aWNlLmdldFNlbGVjdGVkVmVuZG9yKCk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKXtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuICBcclxuICBvblNoYXJlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNoYXJlZCBidXR0b24gdGFwcGVkLlwiKTsgXHJcbiAgfVxyXG59Il19