"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vendor_service_1 = require("../../../../services/vendor.service");
var VendorReviewComponent = (function () {
    function VendorReviewComponent(vendorService) {
        this.vendorService = vendorService;
    }
    VendorReviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorReviewComponent.prototype, "vendor", void 0);
    VendorReviewComponent = __decorate([
        core_1.Component({
            selector: 'vendor-review',
            templateUrl: './components/search/vendor-detail/vendor-tab-reviews/vendor-review.component.html'
        }),
        __metadata("design:paramtypes", [vendor_service_1.VendorService])
    ], VendorReviewComponent);
    return VendorReviewComponent;
}());
exports.VendorReviewComponent = VendorReviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCxzRUFBb0U7QUFPcEU7SUFJRSwrQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBUlE7UUFBUixZQUFLLEVBQUU7O3lEQUFnQjtJQUZiLHFCQUFxQjtRQUpqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLG1GQUFtRjtTQUNqRyxDQUFDO3lDQUttQyw4QkFBYTtPQUpyQyxxQkFBcUIsQ0FXakM7SUFBRCw0QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0ICB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1yZXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItcmV2aWV3cy92ZW5kb3ItcmV2aWV3LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yUmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBcclxuICB9XHJcbn0iXX0=