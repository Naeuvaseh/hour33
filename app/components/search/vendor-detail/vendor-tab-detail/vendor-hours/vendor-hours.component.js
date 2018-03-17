"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var weekdays_const_1 = require("../../../../../const/weekdays.const");
var moment = require("moment");
var VendorHoursComponent = /** @class */ (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWhvdXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1ob3Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFHakQsb0RBQWdEO0FBQ2hELHNFQUErRDtBQUMvRCwrQkFBaUM7QUFNakM7SUFNRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyx5QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdJLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixNQUFNLENBQUMseUJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdkQsQ0FBQztJQXBCUTtRQUFSLFlBQUssRUFBRTs7NERBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFO2tDQUFlLEtBQUs7OERBQVM7SUFGMUIsb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsOEZBQThGO1NBQzVHLENBQUM7O09BQ1csb0JBQW9CLENBc0JoQztJQUFELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3BlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgV2Vla2RheXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25zdC93ZWVrZGF5cy5jb25zdCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItaG91cnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1ob3Vycy92ZW5kb3ItaG91cnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JIb3Vyc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaGFwcHlIb3VyczogVGltZVBlcmlvZFtdO1xyXG4gIEBJbnB1dCgpIHJlZ3VsYXJIb3VyczogQXJyYXk8UGVyaW9kPjtcclxuICBcclxuICBwdWJsaWMgdGhlbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0SG91cnMoaG91cjogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gV2Vla2RheXNbaG91ci5kYXldICsgXCI6ICBcIiArIG1vbWVudChob3VyLm9wZW4pLmZvcm1hdChcImg6bW0gQVwiKS50b1N0cmluZygpICsgXCIgLSBcIiArIG1vbWVudChob3VyLmNsb3NlKS5mb3JtYXQoXCJoOm1tIEFcIikudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGdldERheShkYXk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gV2Vla2RheXNbZGF5XSArIFwiOlwiO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0Q3VycmVudERheShob3VyOiBudW1iZXIpOiBib29sZWFue1xyXG4gICAgdmFyIGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChob3VyID09PSBuZXcgRGF0ZSgpLmdldERheSgpKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn0iXX0=