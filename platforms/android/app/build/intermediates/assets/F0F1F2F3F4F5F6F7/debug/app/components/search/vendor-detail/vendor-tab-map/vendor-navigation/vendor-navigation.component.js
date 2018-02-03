"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var utilityModule = require("utils/utils");
var VendorNavigationComponent = (function () {
    function VendorNavigationComponent() {
        this.theme = settings_1.Theme;
    }
    VendorNavigationComponent.prototype.navigate = function () {
        console.log(this.vendor.result.url);
        utilityModule
            .openUrl(this.vendor.result.url)
            .catch(function (error) {
            console.log('VendorNavigationComponent.navigate() ERROR: ' + JSON.stringify(error));
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorNavigationComponent.prototype, "vendor", void 0);
    VendorNavigationComponent = __decorate([
        core_1.Component({
            selector: 'vendor-navigation',
            templateUrl: './components/search/vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorNavigationComponent);
    return VendorNavigationComponent;
}());
exports.VendorNavigationComponent = VendorNavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELG9EQUFnRDtBQUNoRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFNM0M7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUEsNENBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsYUFBYTthQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDL0IsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWZRO1FBQVIsWUFBSyxFQUFFOzs2REFBc0I7SUFEbkIseUJBQXlCO1FBSnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxxR0FBcUc7U0FDbkgsQ0FBQzs7T0FDVyx5QkFBeUIsQ0FpQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW5hdmlnYXRpb24vdmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvckRldGFpbDtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gICBuYXZpZ2F0ZSgpe1xyXG4gICAgIGNvbnNvbGUubG9nKHRoaXMudmVuZG9yLnJlc3VsdC51cmwpO1xyXG4gICAgIHV0aWxpdHlNb2R1bGVcclxuICAgICAgLm9wZW5VcmwodGhpcy52ZW5kb3IucmVzdWx0LnVybClcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50Lm5hdmlnYXRlKCkgRVJST1I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0iXX0=