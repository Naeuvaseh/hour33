"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var router_1 = require("@angular/router");
var temp_icons_const_1 = require("../../../../../const/temp-icons.const");
var VendorScoreComponent = (function () {
    function VendorScoreComponent(router) {
        this.router = router;
        this.tempIcons = temp_icons_const_1.TempIcons;
        this.theme = settings_1.Theme;
    }
    VendorScoreComponent.prototype.navToReviews = function () {
        console.log('VendorScoreComponent.navToReview() invoked.');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorScoreComponent.prototype, "vendor", void 0);
    VendorScoreComponent = __decorate([
        core_1.Component({
            selector: 'vendor-score',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], VendorScoreComponent);
    return VendorScoreComponent;
}());
exports.VendorScoreComponent = VendorScoreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXNjb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELDBDQUF5QztBQUN6QywwRUFBa0U7QUFNbEU7SUFPRSw4QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGM0IsY0FBUyxHQUFhLDRCQUFTLENBQUM7UUFHckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFiUTtRQUFSLFlBQUssRUFBRTs7d0RBQWdCO0lBRGIsb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsOEZBQThGO1NBQzVHLENBQUM7eUNBUTRCLGVBQU07T0FQdkIsb0JBQW9CLENBZ0JoQztJQUFELDJCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGVtcEljb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29uc3QvdGVtcC1pY29ucy5jb25zdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1zY29yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXNjb3JlL3ZlbmRvci1zY29yZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvclNjb3JlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBwdWJsaWMgdGVtcEljb25zOiBPYmplY3RbXSA9IFRlbXBJY29ucztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmF2VG9SZXZpZXdzKCl7XHJcbiAgICBjb25zb2xlLmxvZygnVmVuZG9yU2NvcmVDb21wb25lbnQubmF2VG9SZXZpZXcoKSBpbnZva2VkLicpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxufSJdfQ==