"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var time_period_threshold_const_1 = require("../../../const/time-period-threshold.const");
var temp_icons_const_1 = require("../../../const/temp-icons.const");
var moment = require("moment");
var VendorListingComponent = (function () {
    function VendorListingComponent() {
        this.currentDate = moment();
        this.tempIcons = this.shuffleIcons(temp_icons_const_1.TempIcons);
        this.theme = settings_1.Theme;
    }
    VendorListingComponent.prototype.ngOnInit = function () {
        //Set current date
        this.currentDay = new Date().getDay();
    };
    VendorListingComponent.prototype.orderByTime = function (vendor) {
        //TODO 
        //Implement function to order vendor object array by time.
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
                    return result = String.fromCharCode(0xf111) + " " + result + " - In Progress!";
                case settings_1.Theme.yellowColor:
                    return result = String.fromCharCode(0xf111) + " " + result + " - Ending Soon!";
                default:
                    return result;
            }
        }
        return 'Unavailable';
    };
    VendorListingComponent.prototype.isOver = function (timePeriod) {
        switch (this.happyHourStatus(timePeriod)) {
            case settings_1.Theme.lightGrey:
                return 'text-decoration: line-through;';
            default:
                return '';
        }
    };
    VendorListingComponent.prototype.isActive = function (timePeriod) {
        switch (this.happyHourStatus(timePeriod)) {
            case settings_1.Theme.greenColor:
                return '0 0 2 10';
            case settings_1.Theme.yellowColor:
                return '0 0 2 10';
            default:
                return '0 0 2 26';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsb0VBQTREO0FBQzVELCtCQUFpQztBQU1qQztJQVVFO1FBSE8sZ0JBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLENBQUM7UUFHeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsT0FBTztRQUNQLDBEQUEwRDtJQUM1RCxDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELHlDQUEyRSxFQUExRSxnQkFBUSxFQUFFLGdDQUF3QixDQUF5QztRQUM5RSxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs7SUFDZixDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixVQUFzQjtRQUNwQyw2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TSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQXhIUTtRQUFSLFlBQUssRUFBRTs7MERBQWdCO0lBQ2Y7UUFBUixZQUFLLEVBQUU7O3lEQUFlO0lBSFosc0JBQXNCO1FBSmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxrRUFBa0U7U0FDaEYsQ0FBQzs7T0FDVyxzQkFBc0IsQ0EySGxDO0lBQUQsNkJBQUM7Q0FBQSxBQTNIRCxJQTJIQztBQTNIWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3RpbWUtcGVyaW9kLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlZmF1bHREYXkgfSBmcm9tICcuLi8uLi8uLi9jb25zdC9kZWZhdWx0LWRheS5lbnVtJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZFRocmVzaG9sZCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L3RpbWUtcGVyaW9kLXRocmVzaG9sZC5jb25zdCc7XHJcbmltcG9ydCB7IFRlbXBJY29ucyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L3RlbXAtaWNvbnMuY29uc3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWxpc3RpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckxpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIElucHV0c1xyXG4gIEBJbnB1dCgpIHZlbmRvcjogVmVuZG9yO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudERheTogbnVtYmVyO1xyXG4gIHB1YmxpYyB0aGVtZTtcclxuICBwdWJsaWMgY3VycmVudERhdGUgPSBtb21lbnQoKTtcclxuICBwdWJsaWMgdGVtcEljb25zOiBPYmplY3RbXSA9IHRoaXMuc2h1ZmZsZUljb25zKFRlbXBJY29ucyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIC8vU2V0IGN1cnJlbnQgZGF0ZVxyXG4gICAgdGhpcy5jdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICB9XHJcblxyXG4gIG9yZGVyQnlUaW1lKHZlbmRvcjogVmVuZG9yKXtcclxuICAgIC8vVE9ETyBcclxuICAgIC8vSW1wbGVtZW50IGZ1bmN0aW9uIHRvIG9yZGVyIHZlbmRvciBvYmplY3QgYXJyYXkgYnkgdGltZS5cclxuICB9XHJcblxyXG4gIHNodWZmbGVJY29ucyhhcnJheTogT2JqZWN0W10pOiBPYmplY3RbXSB7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDw9IDEpIHJldHVybiBhcnJheTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmFuZG9tQ2hvaWNlSW5kZXggPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICBbYXJyYXlbaV0sIGFycmF5W3JhbmRvbUNob2ljZUluZGV4XV0gPSBbYXJyYXlbcmFuZG9tQ2hvaWNlSW5kZXhdLCBhcnJheVtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBoYXBweUhvdXJTdGF0dXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdTdGFydDogJyArIHRoaXMuZ2V0U3RhcnRNaW51dGVzKHRpbWVQZXJpb2QpICsgJywgQ3VycmVudDogJyArIHRoaXMuZ2V0Q3VycmVudE1pbnV0ZXMoKSArICcsIEVuZDogJyArIHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSArICcsIFJlbWFpbmluZzogJyArIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSk7XHJcbiAgICBcclxuICAgIC8vIE5vdCBudWxsICYmIGN1cnJlbnQgZGF5ICYmIHN0YXJ0ID49IG5vdyAmJiBlbmQgPD0gbm93XHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCAmJiBtb21lbnQudXRjKHRpbWVQZXJpb2QpLmRheSgpID09PSBtb21lbnQudXRjKCkuZGF5KCkpIHtcclxuICAgICAgLy8gQWN0aXZlXHJcbiAgICAgIGlmICh0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSA8PSB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgJiYgXHJcbiAgICAgICAgICB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgPD0gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpICYmXHJcbiAgICAgICAgICB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5ncmVlbkNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuZGluZyBTb29uIChsZXNzIHRoYW4gNjAgbWludXRlcyBsZWZ0KVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiAwICYmIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS55ZWxsb3dDb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdmVyXHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmxpZ2h0R3JleTtcclxuICAgICAgfVxyXG4gICAgICAvLyBDb21pbmcgVXBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmluYWN0aXZlQ29sb3I7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICB0b2RheXNIYXBweUhvdXJzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgdmFyIHJlc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICBcclxuICAgIC8vIFZhbGlkIGhhcHB5IGhvdXIgdGltZSBwZXJpb2RcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsKXtcclxuICAgICAgLy8gRm9ybWF0IHRpbWUgcGVyaW9kXHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuZm9ybWF0VGltZVBlcmlvZCh0aW1lUGVyaW9kKTtcclxuICAgICAgLy8gQXBwZW5kIHZlcmJpYWdlIHRvIHRpbWVzXHJcbiAgICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgICAgY2FzZSBUaGVtZS5ncmVlbkNvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTExKSArIFwiIFwiICsgcmVzdWx0ICsgXCIgLSBJbiBQcm9ncmVzcyFcIjtcclxuICAgICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTExKSArIFwiIFwiICsgcmVzdWx0ICsgXCIgLSBFbmRpbmcgU29vbiFcIjtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxuXHJcbiAgaXNPdmVyKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgY2FzZSBUaGVtZS5saWdodEdyZXk6XHJcbiAgICAgICAgcmV0dXJuICd0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDEwJztcclxuICAgICAgY2FzZSBUaGVtZS55ZWxsb3dDb2xvcjpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDEwJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDI2JztcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50TWludXRlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERhdGUubWludXRlcygpICsgKHRoaXMuY3VycmVudERhdGUuaG91cnMoKSAqIDYwKTtcclxuICB9XHJcblxyXG4gIGdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1pbnV0ZXModGltZVBlcmlvZC5vcGVuKTtcclxuICB9XHJcblxyXG4gIGdldEVuZE1pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNaW51dGVzKHRpbWVQZXJpb2QuY2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgLSB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVzKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgdmFyIG1pbnV0ZXMgPSAobW9tZW50LnV0YyhkYXRlKS5taW51dGVzKCkgKyAobW9tZW50LnV0YyhkYXRlKS5ob3VycygpICogNjApKTtcclxuICAgIHJldHVybiAobWludXRlcyA8PSBUaW1lUGVyaW9kVGhyZXNob2xkLmVuZC5taW51dGVzKSA/IChtaW51dGVzICs9IDE0NDApIDogbWludXRlczsgLy8gT2Zmc2V0IDI0IGhvdXJzIGlmIHBhc3QgbWlkbmlnaHRcclxuICB9XHJcblxyXG4gIGZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lUGVyaW9kLm9wZW4pLmZvcm1hdChcImg6bW1hXCIpICsgJyAtICcgKyBtb21lbnQudXRjKHRpbWVQZXJpb2QuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpO1xyXG4gIH1cclxufSJdfQ==