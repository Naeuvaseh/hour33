"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var time_period_threshold_const_1 = require("../../../const/time-period-threshold.const");
var temp_icons_const_1 = require("../../../const/temp-icons.const");
var moment = require("moment");
var VendorListingComponent = (function () {
    function VendorListingComponent() {
        this.currentDate = moment.utc();
        this.tempIcons = temp_icons_const_1.TempIcons;
        this.theme = settings_1.Theme;
    }
    VendorListingComponent.prototype.ngOnInit = function () {
        //Set current date
        this.currentDay = new Date().getDay();
        // console.log('Current Date: ' + this.currentDate);
    };
    VendorListingComponent.prototype.orderByTime = function (vendor) {
        //TODO 
        //Implement function to order vendor object array by time.
    };
    VendorListingComponent.prototype.happyHourStatus = function (timePeriod) {
        // Not null && current day && start >= now && end <= now
        if (timePeriod !== null && moment.utc(timePeriod).day() === moment.utc().day()) {
            //console.log('Current: ' + this.getCurrentMinutes());
            // console.log('Time Range: ' + this.getStartMinutes(timePeriod) + ' - ' + this.getEndMinutes(timePeriod));
            // console.log('Start <= Current: ' + (this.getStartMinutes(timePeriod) <= this.getCurrentMinutes()));
            // console.log('Current <= End: ' + (this.getCurrentMinutes() <= this.getEndMinutes(timePeriod)));
            // console.log('Remaining: ' + this.getRemainingMinutes(timePeriod));
            // console.log('');
            // Active
            if (this.getStartMinutes(timePeriod) <= this.getCurrentMinutes() &&
                this.getCurrentMinutes() <= this.getEndMinutes(timePeriod)) {
                return settings_1.Theme.greenColor;
            }
            else if (this.getRemainingMinutes(timePeriod) > 0 && this.getRemainingMinutes(timePeriod) <= 60) {
                return settings_1.Theme.yellowColor;
            }
            else if (this.getRemainingMinutes(timePeriod) <= 0) {
                return settings_1.Theme.accentColor;
            }
            else {
                return settings_1.Theme.inactiveColor;
            }
        }
    };
    VendorListingComponent.prototype.todaysHappyHours = function (timePeriod) {
        var result = '';
        //console.log('Start: ' + this.getStartMinutes(timePeriod) + ', Current: ' + this.getCurrentMinutes() + ', End: ' + this.getEndMinutes(timePeriod) + ', Remaining: ' + this.getRemainingMinutes(timePeriod));
        // Valid happy hour time period
        if (timePeriod !== null) {
            // Format time period
            result = this.formatTimePeriod(timePeriod);
            // Append verbiage to times
            switch (this.happyHourStatus(timePeriod)) {
                case settings_1.Theme.greenColor:
                    return result += " - In Progress!";
                case settings_1.Theme.yellowColor:
                    return result += " - Ending Soon!";
                case settings_1.Theme.accentColor:
                    return result += " - Over!";
                default:
                    return result;
            }
        }
        return 'Unavailable';
    };
    VendorListingComponent.prototype.getCurrentMinutes = function () {
        return this.afterMidnightOffset(this.currentDate);
    };
    VendorListingComponent.prototype.getStartMinutes = function (timePeriod) {
        return this.afterMidnightOffset(timePeriod.open);
    };
    VendorListingComponent.prototype.getEndMinutes = function (timePeriod) {
        return this.afterMidnightOffset(timePeriod.close);
    };
    VendorListingComponent.prototype.getRemainingMinutes = function (timePeriod) {
        return this.getEndMinutes(timePeriod) - this.getCurrentMinutes();
    };
    VendorListingComponent.prototype.afterMidnightOffset = function (date) {
        var minutes = (moment.utc(date).minutes() + (moment.utc(date).hours() * 60));
        return (minutes <= time_period_threshold_const_1.TimePeriodThreshold.end.minutes) ? (minutes += 1440) : minutes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsb0VBQTREO0FBQzVELCtCQUFpQztBQU1qQztJQVdFO1FBSk8sZ0JBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFhLDRCQUFTLENBQUM7UUFHckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxvREFBb0Q7SUFDckQsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLE9BQU87UUFDUCwwREFBMEQ7SUFDNUQsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsVUFBc0I7UUFDcEMsd0RBQXdEO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9FLHNEQUFzRDtZQUN0RCwyR0FBMkc7WUFDM0csc0dBQXNHO1lBQ3RHLGtHQUFrRztZQUNsRyxxRUFBcUU7WUFDckUsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxV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TUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFuR1E7UUFBUixZQUFLLEVBQUU7OzBEQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOzt5REFBZTtJQUhaLHNCQUFzQjtRQUpsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0VBQWtFO1NBQ2hGLENBQUM7O09BQ1csc0JBQXNCLENBc0dsQztJQUFELDZCQUFDO0NBQUEsQUF0R0QsSUFzR0M7QUF0R1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0RGF5IH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvZGVmYXVsdC1kYXkuZW51bSc7XHJcbmltcG9ydCB7IFRpbWVQZXJpb2RUaHJlc2hvbGQgfSBmcm9tICcuLi8uLi8uLi9jb25zdC90aW1lLXBlcmlvZC10aHJlc2hvbGQuY29uc3QnO1xyXG5pbXBvcnQgeyBUZW1wSWNvbnMgfSBmcm9tICcuLi8uLi8uLi9jb25zdC90ZW1wLWljb25zLmNvbnN0JztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1saXN0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBJbnB1dHNcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnREYXk6IG51bWJlcjtcclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHB1YmxpYyBjdXJyZW50RGF0ZSA9IG1vbWVudC51dGMoKTtcclxuXHJcbiAgcHVibGljIHRlbXBJY29uczogT2JqZWN0W10gPSBUZW1wSWNvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIC8vU2V0IGN1cnJlbnQgZGF0ZVxyXG4gICAgdGhpcy5jdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICAgLy8gY29uc29sZS5sb2coJ0N1cnJlbnQgRGF0ZTogJyArIHRoaXMuY3VycmVudERhdGUpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXJCeVRpbWUodmVuZG9yOiBWZW5kb3Ipe1xyXG4gICAgLy9UT0RPIFxyXG4gICAgLy9JbXBsZW1lbnQgZnVuY3Rpb24gdG8gb3JkZXIgdmVuZG9yIG9iamVjdCBhcnJheSBieSB0aW1lLlxyXG4gIH1cclxuXHJcbiAgaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgLy8gTm90IG51bGwgJiYgY3VycmVudCBkYXkgJiYgc3RhcnQgPj0gbm93ICYmIGVuZCA8PSBub3dcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsICYmIG1vbWVudC51dGModGltZVBlcmlvZCkuZGF5KCkgPT09IG1vbWVudC51dGMoKS5kYXkoKSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdDdXJyZW50OiAnICsgdGhpcy5nZXRDdXJyZW50TWludXRlcygpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ1RpbWUgUmFuZ2U6ICcgKyB0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSArICcgLSAnICsgdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXJ0IDw9IEN1cnJlbnQ6ICcgKyAodGhpcy5nZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZCkgPD0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDdXJyZW50IDw9IEVuZDogJyArICh0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgPD0gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW1haW5pbmc6ICcgKyB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnJyk7XHJcbiAgICAgIC8vIEFjdGl2ZVxyXG4gICAgICBpZiAodGhpcy5nZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZCkgPD0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpICYmIFxyXG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50TWludXRlcygpIDw9IHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5ncmVlbkNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuZGluZyBTb29uIChsZXNzIHRoYW4gNjAgbWludXRlcyBsZWZ0KVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiAwICYmIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS55ZWxsb3dDb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdmVyXHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmFjY2VudENvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIENvbWluZyBVcFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIHRvZGF5c0hhcHB5SG91cnModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgLy9jb25zb2xlLmxvZygnU3RhcnQ6ICcgKyB0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSArICcsIEN1cnJlbnQ6ICcgKyB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgKyAnLCBFbmQ6ICcgKyB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgKyAnLCBSZW1haW5pbmc6ICcgKyB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkpO1xyXG4gICAgXHJcbiAgICAvLyBWYWxpZCBoYXBweSBob3VyIHRpbWUgcGVyaW9kXHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCl7XHJcbiAgICAgIC8vIEZvcm1hdCB0aW1lIHBlcmlvZFxyXG4gICAgICByZXN1bHQgPSB0aGlzLmZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZCk7XHJcbiAgICAgIC8vIEFwcGVuZCB2ZXJiaWFnZSB0byB0aW1lc1xyXG4gICAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKz0gXCIgLSBJbiBQcm9ncmVzcyFcIjtcclxuICAgICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArPSBcIiAtIEVuZGluZyBTb29uIVwiO1xyXG4gICAgICAgIGNhc2UgVGhlbWUuYWNjZW50Q29sb3I6XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICs9IFwiIC0gT3ZlciFcIjtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyTWlkbmlnaHRPZmZzZXQodGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlck1pZG5pZ2h0T2Zmc2V0KHRpbWVQZXJpb2Qub3Blbik7XHJcbiAgfVxyXG5cclxuICBnZXRFbmRNaW51dGVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJNaWRuaWdodE9mZnNldCh0aW1lUGVyaW9kLmNsb3NlKTtcclxuICB9XHJcblxyXG4gIGdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpIC0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJNaWRuaWdodE9mZnNldChkYXRlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgdmFyIG1pbnV0ZXMgPSAobW9tZW50LnV0YyhkYXRlKS5taW51dGVzKCkgKyAobW9tZW50LnV0YyhkYXRlKS5ob3VycygpICogNjApKTtcclxuICAgIHJldHVybiAobWludXRlcyA8PSBUaW1lUGVyaW9kVGhyZXNob2xkLmVuZC5taW51dGVzKSA/IChtaW51dGVzICs9IDE0NDApIDogbWludXRlcztcclxuICB9XHJcblxyXG4gIGZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lUGVyaW9kLm9wZW4pLmZvcm1hdChcImg6bW1hXCIpICsgJyAtICcgKyBtb21lbnQudXRjKHRpbWVQZXJpb2QuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpO1xyXG4gIH1cclxufSJdfQ==