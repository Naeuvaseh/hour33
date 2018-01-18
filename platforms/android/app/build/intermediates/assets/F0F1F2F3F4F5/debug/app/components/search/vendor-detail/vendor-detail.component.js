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
    VendorDetailComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBMkM7QUFDM0MsbUVBQWlFO0FBRWpFLDhDQUEwQztBQU0xQztJQUlFLCtCQUFvQixRQUFrQixFQUFVLGFBQTRCO1FBQXhELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELHdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQWpCVSxxQkFBcUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnRUFBZ0U7U0FDOUUsQ0FBQzt5Q0FLOEIsaUJBQVEsRUFBeUIsOEJBQWE7T0FKakUscUJBQXFCLENBa0JqQztJQUFELDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwdWJsaWMgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMudmVuZG9yID0gdGhpcy52ZW5kb3JTZXJ2aWNlLmdldFNlbGVjdGVkVmVuZG9yKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpeyB9XHJcblxyXG4gIGdvQmFjaygpe1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uU2hhcmUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiU2hhcmVkIGJ1dHRvbiB0YXBwZWQuXCIpOyBcclxuICB9XHJcbn0iXX0=