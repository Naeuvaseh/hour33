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
    VendorHappyHoursComponent.prototype.formatCurrentDay = function (hour) {
        var currentDay = new Date();
        return (hour.day.toString() === new Date().getDay().toString()) ? true : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsaURBQTZDO0FBQzdDLG1FQUE0RDtBQU01RDtJQU1FO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksSUFBc0I7UUFDaEMsTUFBTSxDQUFDLHlCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsSUFBc0I7UUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFoQlE7UUFBUixZQUFLLEVBQUU7OzREQUF5QjtJQUN4QjtRQUFSLFlBQUssRUFBRTs7NERBQWU7SUFGWix5QkFBeUI7UUFKckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLHdGQUF3RjtTQUN0RyxDQUFDOztPQUNXLHlCQUF5QixDQWtCckM7SUFBRCxnQ0FBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG91cnNPZk9wZXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvaG91cnMtb2Ytb3BlcmF0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBXZWVrZGF5cyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0L3dlZWtkYXlzLmNvbnN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWhhcHB5LWhvdXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItaGFwcHktaG91cnMvdmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9ySGFwcHlIb3Vyc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaG91cnM6IEhvdXJzT2ZPcGVyYXRpb247XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IEhvdXJzT2ZPcGVyYXRpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFdlZWtkYXlzW2hvdXIuZGF5XSArIFwiOiAgXCIgKyBob3VyLm9wZW4gKyBcIiAtIFwiICsgaG91ci5jbG9zZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEN1cnJlbnREYXkoaG91cjogSG91cnNPZk9wZXJhdGlvbik6IGJvb2xlYW57XHJcbiAgICB2YXIgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gKGhvdXIuZGF5LnRvU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkuZ2V0RGF5KCkudG9TdHJpbmcoKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59Il19