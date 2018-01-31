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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsb0VBQTREO0FBQzVELCtCQUFpQztBQU1qQztJQVVFO1FBSE8sZ0JBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLENBQUM7UUFHeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUEsNkNBQVksR0FBWixVQUFhLEtBQWU7UUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELHlDQUEyRSxFQUExRSxnQkFBUSxFQUFFLGdDQUF3QixDQUF5QztRQUM5RSxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs7SUFDZixDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixVQUFzQjtRQUNwQyw2TUFBNk07UUFFN00sd0RBQXdEO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUks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O0lBQ25FLENBQUM7SUFFRCwyQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNuQixJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLGlEQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxtQ0FBbUM7SUFDeEgsQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQXhJUTtRQUFSLFlBQUssRUFBRTs7MERBQWdCO0lBQ2Y7UUFBUixZQUFLLEVBQUU7O3lEQUFlO0lBSFosc0JBQXNCO1FBSmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxrRUFBa0U7U0FDaEYsQ0FBQzs7T0FDVyxzQkFBc0IsQ0EySWxDO0lBQUQsNkJBQUM7Q0FBQSxBQTNJRCxJQTJJQztBQTNJWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3RpbWUtcGVyaW9kLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlZmF1bHREYXkgfSBmcm9tICcuLi8uLi8uLi9jb25zdC9kZWZhdWx0LWRheS5lbnVtJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZFRocmVzaG9sZCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L3RpbWUtcGVyaW9kLXRocmVzaG9sZC5jb25zdCc7XHJcbmltcG9ydCB7IFRlbXBJY29ucyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L3RlbXAtaWNvbnMuY29uc3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWxpc3RpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckxpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIElucHV0c1xyXG4gIEBJbnB1dCgpIHZlbmRvcjogVmVuZG9yO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudERheTogbnVtYmVyO1xyXG4gIHB1YmxpYyB0aGVtZTtcclxuICBwdWJsaWMgY3VycmVudERhdGUgPSBtb21lbnQoKTtcclxuICBwdWJsaWMgdGVtcEljb25zOiBPYmplY3RbXSA9IHRoaXMuc2h1ZmZsZUljb25zKFRlbXBJY29ucyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIC8vU2V0IGN1cnJlbnQgZGF0ZVxyXG4gICAgdGhpcy5jdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICB9XHJcblxyXG4gICBzaHVmZmxlSWNvbnMoYXJyYXk6IE9iamVjdFtdKTogT2JqZWN0W10ge1xyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyYXk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJhbmRvbUNob2ljZUluZGV4ID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgW2FycmF5W2ldLCBhcnJheVtyYW5kb21DaG9pY2VJbmRleF1dID0gW2FycmF5W3JhbmRvbUNob2ljZUluZGV4XSwgYXJyYXlbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgLy9jb25zb2xlLmxvZygnU3RhcnQ6ICcgKyB0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSArICcsIEN1cnJlbnQ6ICcgKyB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgKyAnLCBFbmQ6ICcgKyB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgKyAnLCBSZW1haW5pbmc6ICcgKyB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkpO1xyXG4gICAgXHJcbiAgICAvLyBOb3QgbnVsbCAmJiBjdXJyZW50IGRheSAmJiBzdGFydCA+PSBub3cgJiYgZW5kIDw9IG5vd1xyXG4gICAgaWYgKHRpbWVQZXJpb2QgIT09IG51bGwgJiYgbW9tZW50LnV0Yyh0aW1lUGVyaW9kKS5kYXkoKSA9PT0gbW9tZW50LnV0YygpLmRheSgpKSB7XHJcbiAgICAgIC8vIEFjdGl2ZVxyXG4gICAgICBpZiAodGhpcy5nZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZCkgPD0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpICYmIFxyXG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50TWludXRlcygpIDw9IHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSAmJlxyXG4gICAgICAgICAgdGhpcy5nZXRSZW1haW5pbmdNaW51dGVzKHRpbWVQZXJpb2QpID4gNjApIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUuZ3JlZW5Db2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBFbmRpbmcgU29vbiAobGVzcyB0aGFuIDYwIG1pbnV0ZXMgbGVmdClcclxuICAgICAgZWxzZSBpZiAodGhpcy5nZXRSZW1haW5pbmdNaW51dGVzKHRpbWVQZXJpb2QpID4gMCAmJiB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPD0gNjApIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUueWVsbG93Q29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLy8gT3ZlclxyXG4gICAgICBlbHNlIGlmICh0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5saWdodEdyZXk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ29taW5nIFVwXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgdG9kYXlzSGFwcHlIb3Vycyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHZhciByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgLy8gVmFsaWQgaGFwcHkgaG91ciB0aW1lIHBlcmlvZFxyXG4gICAgaWYgKHRpbWVQZXJpb2QgIT09IG51bGwpe1xyXG4gICAgICAvLyBGb3JtYXQgdGltZSBwZXJpb2RcclxuICAgICAgcmVzdWx0ID0gdGhpcy5mb3JtYXRUaW1lUGVyaW9kKHRpbWVQZXJpb2QpO1xyXG4gICAgICAvLyBBcHBlbmQgdmVyYmlhZ2UgdG8gdGltZXNcclxuICAgICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgICBjYXNlIFRoZW1lLmdyZWVuQ29sb3I6XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICs9IFwiIChJbiBQcm9ncmVzcylcIjtcclxuICAgICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArPSBcIiAoRW5kaW5nIFNvb24pXCI7XHJcbiAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ1VuYXZhaWxhYmxlJztcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlVGV4dCh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgY2FzZSBUaGVtZS55ZWxsb3dDb2xvcjpcclxuICAgICAgY2FzZSBUaGVtZS5pbmFjdGl2ZUNvbG9yOlxyXG4gICAgICAgIHJldHVybiBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBUaGVtZS5saWdodEdyZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc092ZXIodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICBjYXNlIFRoZW1lLmxpZ2h0R3JleTpcclxuICAgICAgICByZXR1cm4gJ3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlUGFkZGluZyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDAnO1xyXG4gICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgIHJldHVybiAnMCAwIDIgMCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcwIDAgMiAyNic7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgY2FzZSBUaGVtZS5ncmVlbkNvbG9yOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50TWludXRlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERhdGUubWludXRlcygpICsgKHRoaXMuY3VycmVudERhdGUuaG91cnMoKSAqIDYwKTtcclxuICB9XHJcblxyXG4gIGdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1pbnV0ZXModGltZVBlcmlvZC5vcGVuKTtcclxuICB9XHJcblxyXG4gIGdldEVuZE1pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNaW51dGVzKHRpbWVQZXJpb2QuY2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgLSB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVzKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgdmFyIG1pbnV0ZXMgPSAobW9tZW50LnV0YyhkYXRlKS5taW51dGVzKCkgKyAobW9tZW50LnV0YyhkYXRlKS5ob3VycygpICogNjApKTtcclxuICAgIHJldHVybiAobWludXRlcyA8PSBUaW1lUGVyaW9kVGhyZXNob2xkLmVuZC5taW51dGVzKSA/IChtaW51dGVzICs9IDE0NDApIDogbWludXRlczsgLy8gT2Zmc2V0IDI0IGhvdXJzIGlmIHBhc3QgbWlkbmlnaHRcclxuICB9XHJcblxyXG4gIGZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lUGVyaW9kLm9wZW4pLmZvcm1hdChcImg6bW1hXCIpICsgJyAtICcgKyBtb21lbnQudXRjKHRpbWVQZXJpb2QuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpO1xyXG4gIH1cclxufSJdfQ==