"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var weekdays_const_1 = require("../../../../../const/weekdays.const");
var moment = require("moment");
var VendorRegularHoursComponent = (function () {
    function VendorRegularHoursComponent() {
        this.currentSystemDay = new Date();
        this.theme = settings_1.Theme;
    }
    VendorRegularHoursComponent.prototype.formatHours = function (hour) {
        return weekdays_const_1.Weekdays[hour.day] + ":  " + moment(hour.open).format("h:mm A").toString() + " - " + moment(hour.close).format("h:mm A").toString();
    };
    VendorRegularHoursComponent.prototype.formatCurrentDay = function (hour) {
        var currentDay = new Date();
        return (hour.day.toString() === new Date().getDay().toString()) ? true : false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorRegularHoursComponent.prototype, "hours", void 0);
    VendorRegularHoursComponent = __decorate([
        core_1.Component({
            selector: 'vendor-regular-hours',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-regular-hours/vendor-regular-hours.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorRegularHoursComponent);
    return VendorRegularHoursComponent;
}());
exports.VendorRegularHoursComponent = VendorRegularHoursComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELG9EQUFnRDtBQUNoRCxzRUFBK0Q7QUFDL0QsK0JBQWlDO0FBTWpDO0lBT0U7UUFKUSxxQkFBZ0IsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBSzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQVcsR0FBWCxVQUFZLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyx5QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdJLENBQUM7SUFFRCxzREFBZ0IsR0FBaEIsVUFBaUIsSUFBZ0I7UUFDL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFqQlE7UUFBUixZQUFLLEVBQUU7OzhEQUFtQjtJQURoQiwyQkFBMkI7UUFKdkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLDhHQUE4RztTQUM1SCxDQUFDOztPQUNXLDJCQUEyQixDQW1CdkM7SUFBRCxrQ0FBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFdlZWtkYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29uc3Qvd2Vla2RheXMuY29uc3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLXJlZ3VsYXItaG91cnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1yZWd1bGFyLWhvdXJzL3ZlbmRvci1yZWd1bGFyLWhvdXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yUmVndWxhckhvdXJzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogVGltZVBlcmlvZDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50U3lzdGVtRGF5OiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFdlZWtkYXlzW2hvdXIuZGF5XSArIFwiOiAgXCIgKyBtb21lbnQoaG91ci5vcGVuKS5mb3JtYXQoXCJoOm1tIEFcIikudG9TdHJpbmcoKSArIFwiIC0gXCIgKyBtb21lbnQoaG91ci5jbG9zZSkuZm9ybWF0KFwiaDptbSBBXCIpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRDdXJyZW50RGF5KGhvdXI6IFRpbWVQZXJpb2QpOiBib29sZWFue1xyXG4gICAgdmFyIGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChob3VyLmRheS50b1N0cmluZygpID09PSBuZXcgRGF0ZSgpLmdldERheSgpLnRvU3RyaW5nKCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSJdfQ==