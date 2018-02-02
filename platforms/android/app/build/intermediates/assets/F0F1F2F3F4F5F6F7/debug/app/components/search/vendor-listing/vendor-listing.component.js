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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsb0VBQTREO0FBQzVELCtCQUFpQztBQU9qQztJQVdFO1FBSk8sZ0JBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLENBQUM7UUFJeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUEsNkNBQVksR0FBWixVQUFhLEtBQWU7UUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELHlDQUEyRSxFQUExRSxnQkFBUSxFQUFFLGdDQUF3QixDQUF5QztRQUM5RSxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs7SUFDZixDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixVQUFzQjtRQUNwQyw2TUFBNk07UUFFN00sd0RBQXdEO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUks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O0lBQ25FLENBQUM7SUFFRCwyQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNuQixJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLGlEQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxtQ0FBbUM7SUFDeEgsQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQXpJUTtRQUFSLFlBQUssRUFBRTs7MERBQWdCO0lBQ2Y7UUFBUixZQUFLLEVBQUU7O3lEQUFlO0lBSFosc0JBQXNCO1FBSmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxrRUFBa0U7U0FDaEYsQ0FBQzs7T0FDVyxzQkFBc0IsQ0E0SWxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVJRCxJQTRJQztBQTVJWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3RpbWUtcGVyaW9kLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlZmF1bHREYXkgfSBmcm9tICcuLi8uLi8uLi9jb25zdC9kZWZhdWx0LWRheS5lbnVtJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZFRocmVzaG9sZCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L3RpbWUtcGVyaW9kLXRocmVzaG9sZC5jb25zdCc7XHJcbmltcG9ydCB7IFRlbXBJY29ucyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L3RlbXAtaWNvbnMuY29uc3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gSW5wdXRzXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF5OiBudW1iZXI7XHJcbiAgcHVibGljIHRoZW1lO1xyXG4gIHB1YmxpYyBjdXJyZW50RGF0ZSA9IG1vbWVudCgpO1xyXG4gIHB1YmxpYyB0ZW1wSWNvbnM6IE9iamVjdFtdID0gdGhpcy5zaHVmZmxlSWNvbnMoVGVtcEljb25zKTtcclxuICBwdWJsaWMgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgLy9TZXQgY3VycmVudCBkYXRlXHJcbiAgICB0aGlzLmN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xyXG4gIH1cclxuXHJcbiAgIHNodWZmbGVJY29ucyhhcnJheTogT2JqZWN0W10pOiBPYmplY3RbXSB7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDw9IDEpIHJldHVybiBhcnJheTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmFuZG9tQ2hvaWNlSW5kZXggPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICBbYXJyYXlbaV0sIGFycmF5W3JhbmRvbUNob2ljZUluZGV4XV0gPSBbYXJyYXlbcmFuZG9tQ2hvaWNlSW5kZXhdLCBhcnJheVtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBoYXBweUhvdXJTdGF0dXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdTdGFydDogJyArIHRoaXMuZ2V0U3RhcnRNaW51dGVzKHRpbWVQZXJpb2QpICsgJywgQ3VycmVudDogJyArIHRoaXMuZ2V0Q3VycmVudE1pbnV0ZXMoKSArICcsIEVuZDogJyArIHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSArICcsIFJlbWFpbmluZzogJyArIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSk7XHJcbiAgICBcclxuICAgIC8vIE5vdCBudWxsICYmIGN1cnJlbnQgZGF5ICYmIHN0YXJ0ID49IG5vdyAmJiBlbmQgPD0gbm93XHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCAmJiBtb21lbnQudXRjKHRpbWVQZXJpb2QpLmRheSgpID09PSBtb21lbnQudXRjKCkuZGF5KCkpIHtcclxuICAgICAgLy8gQWN0aXZlXHJcbiAgICAgIGlmICh0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSA8PSB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgJiYgXHJcbiAgICAgICAgICB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgPD0gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpICYmXHJcbiAgICAgICAgICB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5ncmVlbkNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuZGluZyBTb29uIChsZXNzIHRoYW4gNjAgbWludXRlcyBsZWZ0KVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiAwICYmIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS55ZWxsb3dDb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdmVyXHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmxpZ2h0R3JleTtcclxuICAgICAgfVxyXG4gICAgICAvLyBDb21pbmcgVXBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmluYWN0aXZlQ29sb3I7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICB0b2RheXNIYXBweUhvdXJzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgdmFyIHJlc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICAvLyBWYWxpZCBoYXBweSBob3VyIHRpbWUgcGVyaW9kXHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCl7XHJcbiAgICAgIC8vIEZvcm1hdCB0aW1lIHBlcmlvZFxyXG4gICAgICByZXN1bHQgPSB0aGlzLmZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZCk7XHJcbiAgICAgIC8vIEFwcGVuZCB2ZXJiaWFnZSB0byB0aW1lc1xyXG4gICAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKz0gXCIgKEluIFByb2dyZXNzKVwiO1xyXG4gICAgICAgIGNhc2UgVGhlbWUueWVsbG93Q29sb3I6XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICs9IFwiIChFbmRpbmcgU29vbilcIjtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmVUZXh0KHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgY2FzZSBUaGVtZS5ncmVlbkNvbG9yOlxyXG4gICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICBjYXNlIFRoZW1lLmluYWN0aXZlQ29sb3I6XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmluYWN0aXZlQ29sb3I7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmxpZ2h0R3JleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzT3Zlcih0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgIGNhc2UgVGhlbWUubGlnaHRHcmV5OlxyXG4gICAgICAgIHJldHVybiAndGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7JztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmVQYWRkaW5nKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgY2FzZSBUaGVtZS5ncmVlbkNvbG9yOlxyXG4gICAgICAgIHJldHVybiAnMCAwIDIgMCc7XHJcbiAgICAgIGNhc2UgVGhlbWUueWVsbG93Q29sb3I6XHJcbiAgICAgICAgcmV0dXJuICcwIDAgMiAwJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDI2JztcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICBjYXNlIFRoZW1lLmdyZWVuQ29sb3I6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNhc2UgVGhlbWUueWVsbG93Q29sb3I6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRNaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGF0ZS5taW51dGVzKCkgKyAodGhpcy5jdXJyZW50RGF0ZS5ob3VycygpICogNjApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhcnRNaW51dGVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWludXRlcyh0aW1lUGVyaW9kLm9wZW4pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1pbnV0ZXModGltZVBlcmlvZC5jbG9zZSk7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1haW5pbmdNaW51dGVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSAtIHRoaXMuZ2V0Q3VycmVudE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZXMoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICB2YXIgbWludXRlcyA9IChtb21lbnQudXRjKGRhdGUpLm1pbnV0ZXMoKSArIChtb21lbnQudXRjKGRhdGUpLmhvdXJzKCkgKiA2MCkpO1xyXG4gICAgcmV0dXJuIChtaW51dGVzIDw9IFRpbWVQZXJpb2RUaHJlc2hvbGQuZW5kLm1pbnV0ZXMpID8gKG1pbnV0ZXMgKz0gMTQ0MCkgOiBtaW51dGVzOyAvLyBPZmZzZXQgMjQgaG91cnMgaWYgcGFzdCBtaWRuaWdodFxyXG4gIH1cclxuXHJcbiAgZm9ybWF0VGltZVBlcmlvZCh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtb21lbnQudXRjKHRpbWVQZXJpb2Qub3BlbikuZm9ybWF0KFwiaDptbWFcIikgKyAnIC0gJyArIG1vbWVudC51dGModGltZVBlcmlvZC5jbG9zZSkuZm9ybWF0KFwiaDptbWFcIik7XHJcbiAgfVxyXG59Il19