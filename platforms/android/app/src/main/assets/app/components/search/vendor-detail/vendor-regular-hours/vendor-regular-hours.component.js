"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../settings");
var weekdays_const_1 = require("../../../../const/weekdays.const");
var VendorRegularHoursComponent = (function () {
    function VendorRegularHoursComponent() {
        this.theme = settings_1.Theme;
    }
    VendorRegularHoursComponent.prototype.formatHours = function (hour) {
        return weekdays_const_1.Weekdays[hour.day] + ":  " + hour.open + " - " + hour.close;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorRegularHoursComponent.prototype, "hours", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], VendorRegularHoursComponent.prototype, "index", void 0);
    VendorRegularHoursComponent = __decorate([
        core_1.Component({
            selector: 'vendor-regular-hours',
            templateUrl: './components/search/vendor-detail/vendor-regular-hours/vendor-regular-hours.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorRegularHoursComponent);
    return VendorRegularHoursComponent;
}());
exports.VendorRegularHoursComponent = VendorRegularHoursComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELGlEQUE2QztBQUM3QyxtRUFBNEQ7QUFNNUQ7SUFNRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQVcsR0FBWCxVQUFZLElBQXNCO1FBQ2hDLE1BQU0sQ0FBQyx5QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyRSxDQUFDO0lBWFE7UUFBUixZQUFLLEVBQUU7OzhEQUF5QjtJQUN4QjtRQUFSLFlBQUssRUFBRTs7OERBQWU7SUFGWiwyQkFBMkI7UUFKdkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLDRGQUE0RjtTQUMxRyxDQUFDOztPQUNXLDJCQUEyQixDQWF2QztJQUFELGtDQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIb3Vyc09mT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9ob3Vycy1vZi1vcGVyYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFdlZWtkYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3Qvd2Vla2RheXMuY29uc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItcmVndWxhci1ob3VycycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXJlZ3VsYXItaG91cnMvdmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JSZWd1bGFySG91cnNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGhvdXJzOiBIb3Vyc09mT3BlcmF0aW9uO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRIb3Vycyhob3VyOiBIb3Vyc09mT3BlcmF0aW9uKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBXZWVrZGF5c1tob3VyLmRheV0gKyBcIjogIFwiICsgaG91ci5vcGVuICsgXCIgLSBcIiArIGhvdXIuY2xvc2U7XHJcbiAgfVxyXG59Il19