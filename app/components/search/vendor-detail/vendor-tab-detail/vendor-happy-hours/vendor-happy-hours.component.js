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
    VendorHappyHoursComponent.prototype.formatCurrentDay = function (hour) {
        var currentDay = new Date();
        return (hour.day.toString() === new Date().getDay().toString()) ? true : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELHNFQUErRDtBQUMvRCwrQkFBaUM7QUFNakM7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyx5QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdJLENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsSUFBZ0I7UUFDL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFmUTtRQUFSLFlBQUssRUFBRTs7NERBQW1CO0lBRGhCLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsMEdBQTBHO1NBQ3hILENBQUM7O09BQ1cseUJBQXlCLENBaUJyQztJQUFELGdDQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgV2Vla2RheXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25zdC93ZWVrZGF5cy5jb25zdCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItaGFwcHktaG91cnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1oYXBweS1ob3Vycy92ZW5kb3ItaGFwcHktaG91cnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JIYXBweUhvdXJzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogVGltZVBlcmlvZDtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFdlZWtkYXlzW2hvdXIuZGF5XSArIFwiOiAgXCIgKyBtb21lbnQoaG91ci5vcGVuKS5mb3JtYXQoXCJoOm1tIEFcIikudG9TdHJpbmcoKSArIFwiIC0gXCIgKyBtb21lbnQoaG91ci5jbG9zZSkuZm9ybWF0KFwiaDptbSBBXCIpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRDdXJyZW50RGF5KGhvdXI6IFRpbWVQZXJpb2QpOiBib29sZWFue1xyXG4gICAgdmFyIGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChob3VyLmRheS50b1N0cmluZygpID09PSBuZXcgRGF0ZSgpLmdldERheSgpLnRvU3RyaW5nKCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSJdfQ==