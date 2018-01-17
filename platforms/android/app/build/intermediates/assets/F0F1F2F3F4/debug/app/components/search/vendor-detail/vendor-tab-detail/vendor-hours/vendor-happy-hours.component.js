"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var weekdays_const_1 = require("../../../../../const/weekdays.const");
var moment = require("moment");
var VendorHappyHoursComponent = (function () {
    function VendorHappyHoursComponent() {
        this.theme = settings_1.Theme;
    }
    VendorHappyHoursComponent.prototype.formatHours = function (hour) {
        return weekdays_const_1.Weekdays[hour.day] + ":  " + moment(hour.open).format("h:mm A").toString() + " - " + moment(hour.close).format("h:mm A").toString();
    };
    VendorHappyHoursComponent.prototype.getDay = function (day) {
        return weekdays_const_1.Weekdays[day] + ":";
    };
    VendorHappyHoursComponent.prototype.formatCurrentDay = function (hour) {
        var currentDay = new Date();
        return (hour === new Date().getDay()) ? true : false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorHappyHoursComponent.prototype, "hours", void 0);
    VendorHappyHoursComponent = __decorate([
        core_1.Component({
            selector: 'vendor-happy-hours',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-happy-hours/vendor-happy-hours.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorHappyHoursComponent);
    return VendorHappyHoursComponent;
}());
exports.VendorHappyHoursComponent = VendorHappyHoursComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELHNFQUErRDtBQUMvRCwrQkFBaUM7QUFNakM7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyx5QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdJLENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixNQUFNLENBQUMseUJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVELG9EQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFuQlE7UUFBUixZQUFLLEVBQUU7OzREQUFtQjtJQURoQix5QkFBeUI7UUFKckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDBHQUEwRztTQUN4SCxDQUFDOztPQUNXLHlCQUF5QixDQXFCckM7SUFBRCxnQ0FBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFdlZWtkYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29uc3Qvd2Vla2RheXMuY29uc3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWhhcHB5LWhvdXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaGFwcHktaG91cnMvdmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9ySGFwcHlIb3Vyc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaG91cnM6IFRpbWVQZXJpb2Q7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRIb3Vycyhob3VyOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBXZWVrZGF5c1tob3VyLmRheV0gKyBcIjogIFwiICsgbW9tZW50KGhvdXIub3BlbikuZm9ybWF0KFwiaDptbSBBXCIpLnRvU3RyaW5nKCkgKyBcIiAtIFwiICsgbW9tZW50KGhvdXIuY2xvc2UpLmZvcm1hdChcImg6bW0gQVwiKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5KGRheTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBXZWVrZGF5c1tkYXldICsgXCI6XCI7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRDdXJyZW50RGF5KGhvdXI6IG51bWJlcik6IGJvb2xlYW57XHJcbiAgICB2YXIgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gKGhvdXIgPT09IG5ldyBEYXRlKCkuZ2V0RGF5KCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSJdfQ==