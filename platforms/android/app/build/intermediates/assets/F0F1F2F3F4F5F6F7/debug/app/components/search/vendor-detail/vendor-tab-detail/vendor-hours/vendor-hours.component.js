"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var weekdays_const_1 = require("../../../../../const/weekdays.const");
var moment = require("moment");
var VendorHoursComponent = (function () {
    function VendorHoursComponent() {
        this.theme = settings_1.Theme;
    }
    VendorHoursComponent.prototype.formatHours = function (hour) {
        return weekdays_const_1.Weekdays[hour.day] + ":  " + moment(hour.open).format("h:mm A").toString() + " - " + moment(hour.close).format("h:mm A").toString();
    };
    VendorHoursComponent.prototype.getDay = function (day) {
        return weekdays_const_1.Weekdays[day] + ":";
    };
    VendorHoursComponent.prototype.formatCurrentDay = function (hour) {
        var currentDay = new Date();
        return (hour === new Date().getDay()) ? true : false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], VendorHoursComponent.prototype, "happyHours", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], VendorHoursComponent.prototype, "regularHours", void 0);
    VendorHoursComponent = __decorate([
        core_1.Component({
            selector: 'vendor-hours',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-hours/vendor-hours.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorHoursComponent);
    return VendorHoursComponent;
}());
exports.VendorHoursComponent = VendorHoursComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFHakQsb0RBQWdEO0FBQ2hELHNFQUErRDtBQUMvRCwrQkFBaUM7QUFNakM7SUFNRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyx5QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdJLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixNQUFNLENBQUMseUJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFwQlE7UUFBUixZQUFLLEVBQUU7OzREQUEwQjtJQUN6QjtRQUFSLFlBQUssRUFBRTtrQ0FBZSxLQUFLOzhEQUFTO0lBRjFCLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDhGQUE4RjtTQUM1RyxDQUFDOztPQUNXLG9CQUFvQixDQXNCaEM7SUFBRCwyQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFdlZWtkYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29uc3Qvd2Vla2RheXMuY29uc3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWhvdXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvdmVuZG9yLWhvdXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9ySG91cnNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGhhcHB5SG91cnM6IFRpbWVQZXJpb2RbXTtcclxuICBASW5wdXQoKSByZWd1bGFySG91cnM6IEFycmF5PFBlcmlvZD47XHJcbiAgXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFdlZWtkYXlzW2hvdXIuZGF5XSArIFwiOiAgXCIgKyBtb21lbnQoaG91ci5vcGVuKS5mb3JtYXQoXCJoOm1tIEFcIikudG9TdHJpbmcoKSArIFwiIC0gXCIgKyBtb21lbnQoaG91ci5jbG9zZSkuZm9ybWF0KFwiaDptbSBBXCIpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXkoZGF5OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFdlZWtkYXlzW2RheV0gKyBcIjpcIjtcclxuICB9XHJcblxyXG4gIGZvcm1hdEN1cnJlbnREYXkoaG91cjogbnVtYmVyKTogYm9vbGVhbntcclxuICAgIHZhciBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoaG91ciA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59Il19