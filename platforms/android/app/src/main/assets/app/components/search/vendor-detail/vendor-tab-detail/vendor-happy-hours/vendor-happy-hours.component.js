"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var weekdays_const_1 = require("../../../../../const/weekdays.const");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELHNFQUErRDtBQU0vRDtJQUtFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksSUFBc0I7UUFDaEMsTUFBTSxDQUFDLHlCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsSUFBc0I7UUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFmUTtRQUFSLFlBQUssRUFBRTs7NERBQXlCO0lBRHRCLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsMEdBQTBHO1NBQ3hILENBQUM7O09BQ1cseUJBQXlCLENBaUJyQztJQUFELGdDQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIb3Vyc09mT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9ob3Vycy1vZi1vcGVyYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFdlZWtkYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29uc3Qvd2Vla2RheXMuY29uc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItaGFwcHktaG91cnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1oYXBweS1ob3Vycy92ZW5kb3ItaGFwcHktaG91cnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JIYXBweUhvdXJzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogSG91cnNPZk9wZXJhdGlvbjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IEhvdXJzT2ZPcGVyYXRpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFdlZWtkYXlzW2hvdXIuZGF5XSArIFwiOiAgXCIgKyBob3VyLm9wZW4gKyBcIiAtIFwiICsgaG91ci5jbG9zZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEN1cnJlbnREYXkoaG91cjogSG91cnNPZk9wZXJhdGlvbik6IGJvb2xlYW57XHJcbiAgICB2YXIgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gKGhvdXIuZGF5LnRvU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkuZ2V0RGF5KCkudG9TdHJpbmcoKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59Il19