"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var VendorDetailComponent = (function () {
    function VendorDetailComponent(location) {
        this.location = location;
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
        __metadata("design:paramtypes", [common_1.Location])
    ], VendorDetailComponent);
    return VendorDetailComponent;
}());
exports.VendorDetailComponent = VendorDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkM7QUFPM0M7SUFFRSwrQkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUV0QyxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVpVLHFCQUFxQjtRQUpqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGdFQUFnRTtTQUM5RSxDQUFDO3lDQUc4QixpQkFBUTtPQUYzQixxQkFBcUIsQ0FhakM7SUFBRCw0QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItZGV0YWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yRGV0YWlsQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuXHJcbiAgfVxyXG5cclxuICBnb0JhY2soKXtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuICBcclxuICBvblNoYXJlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNoYXJlZCBidXR0b24gdGFwcGVkLlwiKTsgIFxyXG4gIH1cclxufSJdfQ==