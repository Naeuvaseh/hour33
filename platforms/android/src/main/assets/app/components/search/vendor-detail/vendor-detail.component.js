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
        console.log('Current Vendor:', JSON.stringify(this.selectedVendor.getSelectedVendor()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkM7QUFDM0MsbUVBQWlFO0FBT2pFO0lBRUUsK0JBQW9CLFFBQWtCLEVBQVUsY0FBNkI7UUFBekQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQUksQ0FBQztJQUVsRixzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBWFUscUJBQXFCO1FBSmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0VBQWdFO1NBQzlFLENBQUM7eUNBRzhCLGlCQUFRLEVBQTBCLDhCQUFhO09BRmxFLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JEZXRhaWxDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBzZWxlY3RlZFZlbmRvcjogVmVuZG9yU2VydmljZSkgeyB9XHJcblxyXG4gIGdvQmFjaygpe1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uU2hhcmUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiU2hhcmVkIGJ1dHRvbiB0YXBwZWQuXCIpOyBcclxuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IFZlbmRvcjonLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkVmVuZG9yLmdldFNlbGVjdGVkVmVuZG9yKCkpKTtcclxuICB9XHJcbn0iXX0=