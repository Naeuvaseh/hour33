"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vendor_service_1 = require("../../../services/vendor.service");
var VendorDetailComponent = (function () {
    function VendorDetailComponent(location, selectedVendor) {
        this.location = location;
        this.selectedVendor = selectedVendor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkM7QUFDM0MsbUVBQWlFO0FBTWpFO0lBRUUsK0JBQW9CLFFBQWtCLEVBQVUsY0FBNkI7UUFBekQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQUksQ0FBQztJQUVsRixzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBVlUscUJBQXFCO1FBSmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0VBQWdFO1NBQzlFLENBQUM7eUNBRzhCLGlCQUFRLEVBQTBCLDhCQUFhO09BRmxFLHFCQUFxQixDQVdqQztJQUFELDRCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckRldGFpbENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHNlbGVjdGVkVmVuZG9yOiBWZW5kb3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgZ29CYWNrKCl7XHJcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICB9XHJcbiAgXHJcbiAgb25TaGFyZSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJTaGFyZWQgYnV0dG9uIHRhcHBlZC5cIik7IFxyXG4gIH1cclxufSJdfQ==