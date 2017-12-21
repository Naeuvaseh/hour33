"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vendor_service_1 = require("../../../services/vendor.service");
var VendorDetailComponent = (function () {
    function VendorDetailComponent(location, vendorService) {
        this.location = location;
        this.vendorService = vendorService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkM7QUFDM0MsbUVBQWlFO0FBT2pFO0lBSUUsK0JBQW9CLFFBQWtCLEVBQVUsYUFBNEI7UUFBeEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBZFUscUJBQXFCO1FBSmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0VBQWdFO1NBQzlFLENBQUM7eUNBSzhCLGlCQUFRLEVBQXlCLDhCQUFhO09BSmpFLHFCQUFxQixDQWVqQztJQUFELDRCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckRldGFpbENvbXBvbmVudCB7XHJcblxyXG4gIHB1YmxpYyB2ZW5kb3I6IFZlbmRvcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSkge1xyXG4gICAgdGhpcy52ZW5kb3IgPSB0aGlzLnZlbmRvclNlcnZpY2UuZ2V0U2VsZWN0ZWRWZW5kb3IoKTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpe1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uU2hhcmUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiU2hhcmVkIGJ1dHRvbiB0YXBwZWQuXCIpOyBcclxuICB9XHJcbn0iXX0=