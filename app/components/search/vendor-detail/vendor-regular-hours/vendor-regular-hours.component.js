"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../settings");
var weekdays_const_1 = require("../../../../const/weekdays.const");
var VendorRegularHoursComponent = (function () {
    function VendorRegularHoursComponent() {
        this.currentSystemDay = new Date();
        this.theme = settings_1.Theme;
    }
    VendorRegularHoursComponent.prototype.formatHours = function (hour) {
        return weekdays_const_1.Weekdays[hour.day] + ":  " + hour.open + " - " + hour.close;
    };
    VendorRegularHoursComponent.prototype.formatCurrentDay = function (hour) {
        var currentDay = new Date();
        return (hour.day.toString() === new Date().getDay().toString()) ? true : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELGlEQUE2QztBQUM3QyxtRUFBNEQ7QUFNNUQ7SUFRRTtRQUpRLHFCQUFnQixHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFLMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpREFBVyxHQUFYLFVBQVksSUFBc0I7UUFDaEMsTUFBTSxDQUFDLHlCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxzREFBZ0IsR0FBaEIsVUFBaUIsSUFBc0I7UUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFsQlE7UUFBUixZQUFLLEVBQUU7OzhEQUF5QjtJQUN4QjtRQUFSLFlBQUssRUFBRTs7OERBQWU7SUFGWiwyQkFBMkI7UUFKdkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLDRGQUE0RjtTQUMxRyxDQUFDOztPQUNXLDJCQUEyQixDQW9CdkM7SUFBRCxrQ0FBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG91cnNPZk9wZXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvaG91cnMtb2Ytb3BlcmF0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBXZWVrZGF5cyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0L3dlZWtkYXlzLmNvbnN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLXJlZ3VsYXItaG91cnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1yZWd1bGFyLWhvdXJzL3ZlbmRvci1yZWd1bGFyLWhvdXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yUmVndWxhckhvdXJzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogSG91cnNPZk9wZXJhdGlvbjtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRTeXN0ZW1EYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBwdWJsaWMgdGhlbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0SG91cnMoaG91cjogSG91cnNPZk9wZXJhdGlvbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gV2Vla2RheXNbaG91ci5kYXldICsgXCI6ICBcIiArIGhvdXIub3BlbiArIFwiIC0gXCIgKyBob3VyLmNsb3NlO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0Q3VycmVudERheShob3VyOiBIb3Vyc09mT3BlcmF0aW9uKTogYm9vbGVhbntcclxuICAgIHZhciBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoaG91ci5kYXkudG9TdHJpbmcoKSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKS50b1N0cmluZygpKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn0iXX0=