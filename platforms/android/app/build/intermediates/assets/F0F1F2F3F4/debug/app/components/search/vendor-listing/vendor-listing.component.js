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
        this.tempIcons = temp_icons_const_1.TempIcons;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsb0VBQTREO0FBQzVELCtCQUFpQztBQU1qQztJQVVFO1FBSE8sZ0JBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWEsNEJBQVMsQ0FBQztRQUdyQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksTUFBYztRQUN4QixPQUFPO1FBQ1AsMERBQTBEO0lBQzVELENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLFVBQXNCO1FBQ3BDLDZNQUE2TTtRQUU3TSx3REFBd0Q7UUFDeEQsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0UsU0FBUztZQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUM1RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FB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bXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdERheSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L2RlZmF1bHQtZGF5LmVudW0nO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kVGhyZXNob2xkIH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvdGltZS1wZXJpb2QtdGhyZXNob2xkLmNvbnN0JztcclxuaW1wb3J0IHsgVGVtcEljb25zIH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvdGVtcC1pY29ucy5jb25zdCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gSW5wdXRzXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF5OiBudW1iZXI7XHJcbiAgcHVibGljIHRoZW1lO1xyXG4gIHB1YmxpYyBjdXJyZW50RGF0ZSA9IG1vbWVudCgpO1xyXG4gIHB1YmxpYyB0ZW1wSWNvbnM6IE9iamVjdFtdID0gVGVtcEljb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICAvL1NldCBjdXJyZW50IGRhdGVcclxuICAgIHRoaXMuY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XHJcbiAgfVxyXG5cclxuICBvcmRlckJ5VGltZSh2ZW5kb3I6IFZlbmRvcil7XHJcbiAgICAvL1RPRE8gXHJcbiAgICAvL0ltcGxlbWVudCBmdW5jdGlvbiB0byBvcmRlciB2ZW5kb3Igb2JqZWN0IGFycmF5IGJ5IHRpbWUuXHJcbiAgfVxyXG5cclxuICBoYXBweUhvdXJTdGF0dXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdTdGFydDogJyArIHRoaXMuZ2V0U3RhcnRNaW51dGVzKHRpbWVQZXJpb2QpICsgJywgQ3VycmVudDogJyArIHRoaXMuZ2V0Q3VycmVudE1pbnV0ZXMoKSArICcsIEVuZDogJyArIHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSArICcsIFJlbWFpbmluZzogJyArIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSk7XHJcbiAgICBcclxuICAgIC8vIE5vdCBudWxsICYmIGN1cnJlbnQgZGF5ICYmIHN0YXJ0ID49IG5vdyAmJiBlbmQgPD0gbm93XHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCAmJiBtb21lbnQudXRjKHRpbWVQZXJpb2QpLmRheSgpID09PSBtb21lbnQudXRjKCkuZGF5KCkpIHtcclxuICAgICAgLy8gQWN0aXZlXHJcbiAgICAgIGlmICh0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSA8PSB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgJiYgXHJcbiAgICAgICAgICB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgPD0gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpICYmXHJcbiAgICAgICAgICB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5ncmVlbkNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuZGluZyBTb29uIChsZXNzIHRoYW4gNjAgbWludXRlcyBsZWZ0KVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiAwICYmIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS55ZWxsb3dDb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdmVyXHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmxpZ2h0R3JleTtcclxuICAgICAgfVxyXG4gICAgICAvLyBDb21pbmcgVXBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmluYWN0aXZlQ29sb3I7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICB0b2RheXNIYXBweUhvdXJzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgdmFyIHJlc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICBcclxuICAgIC8vIFZhbGlkIGhhcHB5IGhvdXIgdGltZSBwZXJpb2RcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsKXtcclxuICAgICAgLy8gRm9ybWF0IHRpbWUgcGVyaW9kXHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuZm9ybWF0VGltZVBlcmlvZCh0aW1lUGVyaW9kKTtcclxuICAgICAgLy8gQXBwZW5kIHZlcmJpYWdlIHRvIHRpbWVzXHJcbiAgICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgICAgY2FzZSBUaGVtZS5ncmVlbkNvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTExKSArIFwiIFwiICsgcmVzdWx0ICsgXCIgLSBJbiBQcm9ncmVzcyFcIjtcclxuICAgICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTExKSArIFwiIFwiICsgcmVzdWx0ICsgXCIgLSBFbmRpbmcgU29vbiFcIjtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxuXHJcbiAgaXNPdmVyKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2QpKXtcclxuICAgICAgY2FzZSBUaGVtZS5saWdodEdyZXk6XHJcbiAgICAgICAgcmV0dXJuICd0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSl7XHJcbiAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDEwJztcclxuICAgICAgY2FzZSBUaGVtZS55ZWxsb3dDb2xvcjpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDEwJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJzAgMCAyIDI2JztcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50TWludXRlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERhdGUubWludXRlcygpICsgKHRoaXMuY3VycmVudERhdGUuaG91cnMoKSAqIDYwKTtcclxuICB9XHJcblxyXG4gIGdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1pbnV0ZXModGltZVBlcmlvZC5vcGVuKTtcclxuICB9XHJcblxyXG4gIGdldEVuZE1pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNaW51dGVzKHRpbWVQZXJpb2QuY2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgLSB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVzKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgdmFyIG1pbnV0ZXMgPSAobW9tZW50LnV0YyhkYXRlKS5taW51dGVzKCkgKyAobW9tZW50LnV0YyhkYXRlKS5ob3VycygpICogNjApKTtcclxuICAgIHJldHVybiAobWludXRlcyA8PSBUaW1lUGVyaW9kVGhyZXNob2xkLmVuZC5taW51dGVzKSA/IChtaW51dGVzICs9IDE0NDApIDogbWludXRlczsgLy8gT2Zmc2V0IDI0IGhvdXJzIGlmIHBhc3QgbWlkbmlnaHRcclxuICB9XHJcblxyXG4gIGZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lUGVyaW9kLm9wZW4pLmZvcm1hdChcImg6bW1hXCIpICsgJyAtICcgKyBtb21lbnQudXRjKHRpbWVQZXJpb2QuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpO1xyXG4gIH1cclxufSJdfQ==