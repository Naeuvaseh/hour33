"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../settings");
var weekdays_const_1 = require("../../../../const/weekdays.const");
var VendorHappyHoursComponent = (function () {
    function VendorHappyHoursComponent() {
        this.theme = settings_1.Theme;
    }
    VendorHappyHoursComponent.prototype.formatHours = function (hour) {
        return weekdays_const_1.Weekdays[hour.day] + ":  " + hour.open + " - " + hour.close;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorHappyHoursComponent.prototype, "hours", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], VendorHappyHoursComponent.prototype, "index", void 0);
    VendorHappyHoursComponent = __decorate([
        core_1.Component({
            selector: 'vendor-happy-hours',
            templateUrl: './components/search/vendor-detail/vendor-happy-hours/vendor-happy-hours.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorHappyHoursComponent);
    return VendorHappyHoursComponent;
}());
exports.VendorHappyHoursComponent = VendorHappyHoursComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsaURBQTZDO0FBQzdDLG1FQUE0RDtBQU01RDtJQU1FO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksSUFBc0I7UUFDaEMsTUFBTSxDQUFDLHlCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JFLENBQUM7SUFYUTtRQUFSLFlBQUssRUFBRTs7NERBQXlCO0lBQ3hCO1FBQVIsWUFBSyxFQUFFOzs0REFBZTtJQUZaLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsd0ZBQXdGO1NBQ3RHLENBQUM7O09BQ1cseUJBQXlCLENBYXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhvdXJzT2ZPcGVyYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL2hvdXJzLW9mLW9wZXJhdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgV2Vla2RheXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdC93ZWVrZGF5cy5jb25zdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1oYXBweS1ob3VycycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWhhcHB5LWhvdXJzL3ZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckhhcHB5SG91cnNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGhvdXJzOiBIb3Vyc09mT3BlcmF0aW9uO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRIb3Vycyhob3VyOiBIb3Vyc09mT3BlcmF0aW9uKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBXZWVrZGF5c1tob3VyLmRheV0gKyBcIjogIFwiICsgaG91ci5vcGVuICsgXCIgLSBcIiArIGhvdXIuY2xvc2U7XHJcbiAgfVxyXG59Il19