"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var time_period_threshold_const_1 = require("../../../const/time-period-threshold.const");
var temp_icons_const_1 = require("../../../const/temp-icons.const");
var moment = require("moment");
var VendorListingComponent = /** @class */ (function () {
    function VendorListingComponent() {
        this.currentDate = moment();
        this.tempIcons = this.shuffleIcons(temp_icons_const_1.TempIcons);
        this.theme = settings_1.Theme;
    }
    VendorListingComponent.prototype.ngOnInit = function () {
        //Set current date
        this.currentDay = new Date().getDay();
    };
    VendorListingComponent.prototype.shuffleIcons = function (array) {
        if (array.length <= 1)
            return array;
        for (var i = 0; i < array.length; i++) {
            var randomChoiceIndex = Math.floor(array.length - 1);
            _a = [array[randomChoiceIndex], array[i]], array[i] = _a[0], array[randomChoiceIndex] = _a[1];
        }
        return array;
        var _a;
    };
    VendorListingComponent.prototype.happyHourStatus = function (timePeriod) {
        //console.log('Start: ' + this.getStartMinutes(timePeriod) + ', Current: ' + this.getCurrentMinutes() + ', End: ' + this.getEndMinutes(timePeriod) + ', Remaining: ' + this.getRemainingMinutes(timePeriod));
        // Not null && current day && start >= now && end <= now
        if (timePeriod !== null && moment.utc(timePeriod).day() === moment.utc().day()) {
            // Active
            if (this.getStartMinutes(timePeriod) <= this.getCurrentMinutes() &&
                this.getCurrentMinutes() <= this.getEndMinutes(timePeriod) &&
                this.getRemainingMinutes(timePeriod) > 60) {
                return settings_1.Theme.greenColor;
            }
            else if (this.getRemainingMinutes(timePeriod) > 0 && this.getRemainingMinutes(timePeriod) <= 60) {
                return settings_1.Theme.yellowColor;
            }
            else if (this.getRemainingMinutes(timePeriod) <= 0) {
                return settings_1.Theme.lightGrey;
            }
            else {
                return settings_1.Theme.inactiveColor;
            }
        }
    };
    VendorListingComponent.prototype.todaysHappyHours = function (timePeriod) {
        var result = '';
        // Valid happy hour time period
        if (timePeriod !== null) {
            // Format time period
            result = this.formatTimePeriod(timePeriod);
            // Append verbiage to times
            switch (this.happyHourStatus(timePeriod)) {
                case settings_1.Theme.greenColor:
                    return result += " (In Progress)";
                case settings_1.Theme.yellowColor:
                    return result += " (Ending Soon)";
                default:
                    return result;
            }
        }
        return 'Unavailable';
    };
    VendorListingComponent.prototype.isActiveText = function (timePeriod) {
        switch (this.happyHourStatus(timePeriod)) {
            case settings_1.Theme.greenColor:
            case settings_1.Theme.yellowColor:
            case settings_1.Theme.inactiveColor:
                return settings_1.Theme.inactiveColor;
            default:
                return settings_1.Theme.lightGrey;
        }
    };
    VendorListingComponent.prototype.isOver = function (timePeriod) {
        switch (this.happyHourStatus(timePeriod)) {
            case settings_1.Theme.lightGrey:
                return 'text-decoration: line-through;';
            default:
                return '';
        }
    };
    VendorListingComponent.prototype.isActivePadding = function (timePeriod) {
        switch (this.happyHourStatus(timePeriod)) {
            case settings_1.Theme.greenColor:
                return '0 0 2 0';
            case settings_1.Theme.yellowColor:
                return '0 0 2 0';
            default:
                return '0 0 2 26';
        }
    };
    VendorListingComponent.prototype.isActive = function (timePeriod) {
        switch (this.happyHourStatus(timePeriod)) {
            case settings_1.Theme.greenColor:
                return true;
            case settings_1.Theme.yellowColor:
                return true;
            default:
                return false;
        }
    };
    VendorListingComponent.prototype.getCurrentMinutes = function () {
        return this.currentDate.minutes() + (this.currentDate.hours() * 60);
    };
    VendorListingComponent.prototype.getStartMinutes = function (timePeriod) {
        return this.getMinutes(timePeriod.open);
    };
    VendorListingComponent.prototype.getEndMinutes = function (timePeriod) {
        return this.getMinutes(timePeriod.close);
    };
    VendorListingComponent.prototype.getRemainingMinutes = function (timePeriod) {
        return this.getEndMinutes(timePeriod) - this.getCurrentMinutes();
    };
    VendorListingComponent.prototype.getMinutes = function (date) {
        var minutes = (moment.utc(date).minutes() + (moment.utc(date).hours() * 60));
        return (minutes <= time_period_threshold_const_1.TimePeriodThreshold.end.minutes) ? (minutes += 1440) : minutes; // Offset 24 hours if past midnight
    };
    VendorListingComponent.prototype.formatTimePeriod = function (timePeriod) {
        return moment.utc(timePeriod.open).format("h:mma") + ' - ' + moment.utc(timePeriod.close).format("h:mma");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorListingComponent.prototype, "vendor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], VendorListingComponent.prototype, "index", void 0);
    VendorListingComponent = __decorate([
        core_1.Component({
            selector: 'vendor-listing',
            templateUrl: './components/search/vendor-listing/vendor-listing.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorListingComponent);
    return VendorListingComponent;
}());
exports.VendorListingComponent = VendorListingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsb0VBQTREO0FBQzVELCtCQUFpQztBQU9qQztJQVdFO1FBSk8sZ0JBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLENBQUM7UUFJeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUEsNkNBQVksR0FBWixVQUFhLEtBQWU7UUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELHlDQUEyRSxFQUExRSxnQkFBUSxFQUFFLGdDQUF3QixDQUF5QztRQUM5RSxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs7SUFDZixDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixVQUFzQjtRQUNwQyw2TUFBNk07UUFFN00sd0RBQXdEO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUks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O0lBQ25FLENBQUM7SUFFRCwyQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNuQixJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLGlEQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1DQUFtQztJQUN4SCxDQUFDO0lBRUQsaURBQWdCLEdBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBeklRO1FBQVIsWUFBSyxFQUFFOzswREFBZ0I7SUFDZjtRQUFSLFlBQUssRUFBRTs7eURBQWU7SUFIWixzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtFQUFrRTtTQUNoRixDQUFDOztPQUNXLHNCQUFzQixDQTRJbEM7SUFBRCw2QkFBQztDQUFBLEFBNUlELElBNElDO0FBNUlZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdERheSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L2RlZmF1bHQtZGF5LmVudW0nO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kVGhyZXNob2xkIH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvdGltZS1wZXJpb2QtdGhyZXNob2xkLmNvbnN0JztcclxuaW1wb3J0IHsgVGVtcEljb25zIH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvdGVtcC1pY29ucy5jb25zdCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1saXN0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBJbnB1dHNcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnREYXk6IG51bWJlcjtcclxuICBwdWJsaWMgdGhlbWU7XHJcbiAgcHVibGljIGN1cnJlbnREYXRlID0gbW9tZW50KCk7XHJcbiAgcHVibGljIHRlbXBJY29uczogT2JqZWN0W10gPSB0aGlzLnNodWZmbGVJY29ucyhUZW1wSWNvbnMpO1xyXG4gIHB1YmxpYyB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICAvL1NldCBjdXJyZW50IGRhdGVcclxuICAgIHRoaXMuY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XHJcbiAgfVxyXG5cclxuICAgc2h1ZmZsZUljb25zKGFycmF5OiBPYmplY3RbXSk6IE9iamVjdFtdIHtcclxuICAgIGlmIChhcnJheS5sZW5ndGggPD0gMSkgcmV0dXJuIGFycmF5O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByYW5kb21DaG9pY2VJbmRleCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgIFthcnJheVtpXSwgYXJyYXlbcmFuZG9tQ2hvaWNlSW5kZXhdXSA9IFthcnJheVtyYW5kb21DaG9pY2VJbmRleF0sIGFycmF5W2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIGhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1N0YXJ0OiAnICsgdGhpcy5nZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZCkgKyAnLCBDdXJyZW50OiAnICsgdGhpcy5nZXRDdXJyZW50TWludXRlcygpICsgJywgRW5kOiAnICsgdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpICsgJywgUmVtYWluaW5nOiAnICsgdGhpcy5nZXRSZW1haW5pbmdNaW51dGVzKHRpbWVQZXJpb2QpKTtcclxuICAgIFxyXG4gICAgLy8gTm90IG51bGwgJiYgY3VycmVudCBkYXkgJiYgc3RhcnQgPj0gbm93ICYmIGVuZCA8PSBub3dcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsICYmIG1vbWVudC51dGModGltZVBlcmlvZCkuZGF5KCkgPT09IG1vbWVudC51dGMoKS5kYXkoKSkge1xyXG4gICAgICAvLyBBY3RpdmVcclxuICAgICAgaWYgKHRoaXMuZ2V0U3RhcnRNaW51dGVzKHRpbWVQZXJpb2QpIDw9IHRoaXMuZ2V0Q3VycmVudE1pbnV0ZXMoKSAmJiBcclxuICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudE1pbnV0ZXMoKSA8PSB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgJiZcclxuICAgICAgICAgIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA+IDYwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmdyZWVuQ29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRW5kaW5nIFNvb24gKGxlc3MgdGhhbiA2MCBtaW51dGVzIGxlZnQpXHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA+IDAgJiYgdGhpcy5nZXRSZW1haW5pbmdNaW51dGVzKHRpbWVQZXJpb2QpIDw9IDYwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLnllbGxvd0NvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE92ZXJcclxuICAgICAgZWxzZSBpZiAodGhpcy5nZXRSZW1haW5pbmdNaW51dGVzKHRpbWVQZXJpb2QpIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUubGlnaHRHcmV5O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIENvbWluZyBVcFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIHRvZGF5c0hhcHB5SG91cnModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgIC8vIFZhbGlkIGhhcHB5IGhvdXIgdGltZSBwZXJpb2RcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsKXtcclxuICAgICAgLy8gRm9ybWF0IHRpbWUgcGVyaW9kXHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuZm9ybWF0VGltZVBlcmlvZCh0aW1lUGVyaW9kKTtcclxuICAgICAgLy8gQXBwZW5kIHZlcmJpYWdlIHRvIHRpbWVzXHJcbiAgICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgICAgY2FzZSBUaGVtZS5ncmVlbkNvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArPSBcIiAoSW4gUHJvZ3Jlc3MpXCI7XHJcbiAgICAgICAgY2FzZSBUaGVtZS55ZWxsb3dDb2xvcjpcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKz0gXCIgKEVuZGluZyBTb29uKVwiO1xyXG4gICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICdVbmF2YWlsYWJsZSc7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZVRleHQodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICBjYXNlIFRoZW1lLmdyZWVuQ29sb3I6XHJcbiAgICAgIGNhc2UgVGhlbWUueWVsbG93Q29sb3I6XHJcbiAgICAgIGNhc2UgVGhlbWUuaW5hY3RpdmVDb2xvcjpcclxuICAgICAgICByZXR1cm4gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gVGhlbWUubGlnaHRHcmV5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPdmVyKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgY2FzZSBUaGVtZS5saWdodEdyZXk6XHJcbiAgICAgICAgcmV0dXJuICd0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZVBhZGRpbmcodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICBjYXNlIFRoZW1lLmdyZWVuQ29sb3I6XHJcbiAgICAgICAgcmV0dXJuICcwIDAgMiAwJztcclxuICAgICAgY2FzZSBUaGVtZS55ZWxsb3dDb2xvcjpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDAnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnMCAwIDIgMjYnO1xyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBib29sZWFuIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSBUaGVtZS55ZWxsb3dDb2xvcjpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREYXRlLm1pbnV0ZXMoKSArICh0aGlzLmN1cnJlbnREYXRlLmhvdXJzKCkgKiA2MCk7XHJcbiAgfVxyXG5cclxuICBnZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNaW51dGVzKHRpbWVQZXJpb2Qub3Blbik7XHJcbiAgfVxyXG5cclxuICBnZXRFbmRNaW51dGVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWludXRlcyh0aW1lUGVyaW9kLmNsb3NlKTtcclxuICB9XHJcblxyXG4gIGdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpIC0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWludXRlcyhkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHZhciBtaW51dGVzID0gKG1vbWVudC51dGMoZGF0ZSkubWludXRlcygpICsgKG1vbWVudC51dGMoZGF0ZSkuaG91cnMoKSAqIDYwKSk7XHJcbiAgICByZXR1cm4gKG1pbnV0ZXMgPD0gVGltZVBlcmlvZFRocmVzaG9sZC5lbmQubWludXRlcykgPyAobWludXRlcyArPSAxNDQwKSA6IG1pbnV0ZXM7IC8vIE9mZnNldCAyNCBob3VycyBpZiBwYXN0IG1pZG5pZ2h0XHJcbiAgfVxyXG5cclxuICBmb3JtYXRUaW1lUGVyaW9kKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1vbWVudC51dGModGltZVBlcmlvZC5vcGVuKS5mb3JtYXQoXCJoOm1tYVwiKSArICcgLSAnICsgbW9tZW50LnV0Yyh0aW1lUGVyaW9kLmNsb3NlKS5mb3JtYXQoXCJoOm1tYVwiKTtcclxuICB9XHJcbn0iXX0=