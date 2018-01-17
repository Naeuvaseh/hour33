"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var VendorDescriptionComponent = (function () {
    function VendorDescriptionComponent() {
        this.theme = settings_1.Theme;
        this.websiteText = 'Website ' + String.fromCharCode(0xf08e);
    }
    VendorDescriptionComponent.prototype.openVendorWebsite = function () {
        console.log('Vendor website link tapped.');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorDescriptionComponent.prototype, "vendor", void 0);
    VendorDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'vendor-description',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-description/vendor-description.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorDescriptionComponent);
    return VendorDescriptionComponent;
}());
exports.VendorDescriptionComponent = VendorDescriptionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1kZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBTWhEO0lBTUU7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFaUTtRQUFSLFlBQUssRUFBRTs7OERBQWdCO0lBRGIsMEJBQTBCO1FBSnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSwwR0FBMEc7U0FDeEgsQ0FBQzs7T0FDVywwQkFBMEIsQ0FjdEM7SUFBRCxpQ0FBQztDQUFBLEFBZEQsSUFjQztBQWRZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1kZXNjcmlwdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWRlc2NyaXB0aW9uL3ZlbmRvci1kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckRlc2NyaXB0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG4gIHB1YmxpYyB3ZWJzaXRlVGV4dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMud2Vic2l0ZVRleHQgPSAnV2Vic2l0ZSAnICsgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwOGUpO1xyXG4gIH1cclxuXHJcbiAgb3BlblZlbmRvcldlYnNpdGUoKXtcclxuICAgIGNvbnNvbGUubG9nKCdWZW5kb3Igd2Vic2l0ZSBsaW5rIHRhcHBlZC4nKTtcclxuICB9XHJcbn0iXX0=