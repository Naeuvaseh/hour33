"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var utilityModule = require("utils/utils");
var VendorWebsiteComponent = /** @class */ (function () {
    function VendorWebsiteComponent() {
    }
    VendorWebsiteComponent.prototype.ngOnInit = function () {
        this.theme = settings_1.Theme;
    };
    VendorWebsiteComponent.prototype.openWebsite = function () {
        if (this.vendor.result.website) {
            utilityModule.openUrl(this.vendor.result.website);
        }
        else {
            alert("This establishment does not have a website listed.");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorWebsiteComponent.prototype, "vendor", void 0);
    VendorWebsiteComponent = __decorate([
        core_1.Component({
            selector: 'vendor-website',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-website/vendor-website.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorWebsiteComponent);
    return VendorWebsiteComponent;
}());
exports.VendorWebsiteComponent = VendorWebsiteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXdlYnNpdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELG9EQUFnRDtBQUVoRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFNM0M7SUFNRTtJQUFnQixDQUFDO0lBRWpCLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNILENBQUM7SUFqQlE7UUFBUixZQUFLLEVBQUU7OzBEQUFzQjtJQUZuQixzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtHQUFrRztTQUNoSCxDQUFDOztPQUNXLHNCQUFzQixDQW9CbEM7SUFBRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0ICB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci13ZWJzaXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3Itd2Vic2l0ZS92ZW5kb3Itd2Vic2l0ZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvcldlYnNpdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvckRldGFpbDtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuICBcclxuICBvcGVuV2Vic2l0ZSgpe1xyXG4gICAgaWYodGhpcy52ZW5kb3IucmVzdWx0LndlYnNpdGUpe1xyXG4gICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy52ZW5kb3IucmVzdWx0LndlYnNpdGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiVGhpcyBlc3RhYmxpc2htZW50IGRvZXMgbm90IGhhdmUgYSB3ZWJzaXRlIGxpc3RlZC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19