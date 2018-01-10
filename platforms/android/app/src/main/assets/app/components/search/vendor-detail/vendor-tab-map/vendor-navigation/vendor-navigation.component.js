"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var VendorNavigationComponent = (function () {
    function VendorNavigationComponent() {
        this.theme = settings_1.Theme;
    }
    VendorNavigationComponent.prototype.formatAddress = function (vendor) {
        return "11700 Marquette Ave. NE,\n Albuquerque NM 87123";
    };
    VendorNavigationComponent.prototype.navigate = function (vendor) {
        console.log('Navigation button tapped.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELG9EQUFnRDtBQUtoRDtJQUtFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpREFBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixNQUFNLENBQUMsaURBQWlELENBQUM7SUFDM0QsQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBZFE7UUFBUixZQUFLLEVBQUU7OzZEQUFnQjtJQURiLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUscUdBQXFHO1NBQ25ILENBQUM7O09BQ1cseUJBQXlCLENBZ0JyQztJQUFELGdDQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW5hdmlnYXRpb24vdmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEFkZHJlc3ModmVuZG9yOiBWZW5kb3IpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiMTE3MDAgTWFycXVldHRlIEF2ZS4gTkUsXFxuIEFsYnVxdWVycXVlIE5NIDg3MTIzXCI7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZSh2ZW5kb3I6IFZlbmRvcil7XHJcbiAgICBjb25zb2xlLmxvZygnTmF2aWdhdGlvbiBidXR0b24gdGFwcGVkLicpO1xyXG4gIH1cclxufSJdfQ==