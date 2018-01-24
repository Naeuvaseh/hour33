"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var utilityModule = require("utils/utils");
var VendorWebsiteComponent = (function () {
    function VendorWebsiteComponent() {
    }
    VendorWebsiteComponent.prototype.ngOnInit = function () {
        this.theme = settings_1.Theme;
    };
    VendorWebsiteComponent.prototype.openWebsite = function () {
        if (this.vendor.website) {
            utilityModule.openUrl(this.vendor.website);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXdlYnNpdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELG9EQUFnRDtBQUVoRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFNM0M7SUFNRTtJQUFnQixDQUFDO0lBRWpCLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDdEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBQzlELENBQUM7SUFDSCxDQUFDO0lBakJRO1FBQVIsWUFBSyxFQUFFOzswREFBZ0I7SUFGYixzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtHQUFrRztTQUNoSCxDQUFDOztPQUNXLHNCQUFzQixDQW9CbEM7SUFBRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0ICB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3Itd2Vic2l0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXdlYnNpdGUvdmVuZG9yLXdlYnNpdGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JXZWJzaXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcbiAgXHJcbiAgb3BlbldlYnNpdGUoKXtcclxuICAgIGlmKHRoaXMudmVuZG9yLndlYnNpdGUpe1xyXG4gICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy52ZW5kb3Iud2Vic2l0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJUaGlzIGVzdGFibGlzaG1lbnQgZG9lcyBub3QgaGF2ZSBhIHdlYnNpdGUgbGlzdGVkLlwiKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=