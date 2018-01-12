"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var time_period_threshold_const_1 = require("../../../const/time-period-threshold.const");
var moment = require("moment");
var VendorListingComponent = (function () {
    function VendorListingComponent() {
        this.currentDate = moment.utc();
        this.tempIcons = [
            {
                id: 1,
                src: 'res://account'
            },
            {
                id: 2,
                src: 'res://attachment'
            },
            {
                id: 3,
                src: 'res://back_arrow'
            },
            {
                id: 4,
                src: 'res://beenhere'
            },
            {
                id: 5,
                src: 'res://call'
            },
            {
                id: 6,
                src: 'res://download'
            },
            {
                id: 7,
                src: 'res://edit'
            },
            {
                id: 8,
                src: 'res://error'
            },
            {
                id: 9,
                src: 'res://favorite_empty'
            },
            {
                id: 10,
                src: 'res://favorite'
            },
            {
                id: 11,
                src: 'res://feedback'
            },
            {
                id: 12,
                src: 'res://filter'
            },
            {
                id: 13,
                src: 'res://info'
            },
            {
                id: 14,
                src: 'res://launch'
            },
            {
                id: 15,
                src: 'res://location'
            }
        ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywwRkFBaUY7QUFDakYsK0JBQWlDO0FBTWpDO0lBd0VFO1FBakVPLGdCQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBYTtZQUMzQjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZUFBZTthQUNyQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxrQkFBa0I7YUFDeEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGFBQWE7YUFDbkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsc0JBQXNCO2FBQzVCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsY0FBYzth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QUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBaEtRO1FBQVIsWUFBSyxFQUFFOzswREFBZ0I7SUFDZjtRQUFSLFlBQUssRUFBRTs7eURBQWU7SUFIWixzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtFQUFrRTtTQUNoRixDQUFDOztPQUNXLHNCQUFzQixDQW1LbEM7SUFBRCw2QkFBQztDQUFBLEFBbktELElBbUtDO0FBbktZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdERheSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L2RlZmF1bHQtZGF5LmVudW0nO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kVGhyZXNob2xkIH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvdGltZS1wZXJpb2QtdGhyZXNob2xkLmNvbnN0JztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1saXN0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBJbnB1dHNcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnREYXk6IG51bWJlcjtcclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHB1YmxpYyBjdXJyZW50RGF0ZSA9IG1vbWVudC51dGMoKTtcclxuXHJcbiAgcHVibGljIHRlbXBJY29uczogT2JqZWN0W10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9hY2NvdW50J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHNyYzogJ3JlczovL2F0dGFjaG1lbnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgc3JjOiAncmVzOi8vYmFja19hcnJvdydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9iZWVuaGVyZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9jYWxsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIHNyYzogJ3JlczovL2Rvd25sb2FkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDcsXHJcbiAgICAgIHNyYzogJ3JlczovL2VkaXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOCxcclxuICAgICAgc3JjOiAncmVzOi8vZXJyb3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgc3JjOiAncmVzOi8vZmF2b3JpdGVfZW1wdHknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTAsXHJcbiAgICAgIHNyYzogJ3JlczovL2Zhdm9yaXRlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDExLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9mZWVkYmFjaydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMixcclxuICAgICAgc3JjOiAncmVzOi8vZmlsdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEzLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9pbmZvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE0LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9sYXVuY2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTUsXHJcbiAgICAgIHNyYzogJ3JlczovL2xvY2F0aW9uJ1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIC8vU2V0IGN1cnJlbnQgZGF0ZVxyXG4gICAgdGhpcy5jdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICAgLy8gY29uc29sZS5sb2coJ0N1cnJlbnQgRGF0ZTogJyArIHRoaXMuY3VycmVudERhdGUpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXJCeVRpbWUodmVuZG9yOiBWZW5kb3Ipe1xyXG4gICAgLy9UT0RPIFxyXG4gICAgLy9JbXBsZW1lbnQgZnVuY3Rpb24gdG8gb3JkZXIgdmVuZG9yIG9iamVjdCBhcnJheSBieSB0aW1lLlxyXG4gIH1cclxuXHJcbiAgaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgLy8gTm90IG51bGwgJiYgY3VycmVudCBkYXkgJiYgc3RhcnQgPj0gbm93ICYmIGVuZCA8PSBub3dcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsICYmIG1vbWVudC51dGModGltZVBlcmlvZCkuZGF5KCkgPT09IG1vbWVudC51dGMoKS5kYXkoKSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdDdXJyZW50OiAnICsgdGhpcy5nZXRDdXJyZW50TWludXRlcygpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ1RpbWUgUmFuZ2U6ICcgKyB0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSArICcgLSAnICsgdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXJ0IDw9IEN1cnJlbnQ6ICcgKyAodGhpcy5nZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZCkgPD0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDdXJyZW50IDw9IEVuZDogJyArICh0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgPD0gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW1haW5pbmc6ICcgKyB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnJyk7XHJcbiAgICAgIC8vIEFjdGl2ZVxyXG4gICAgICBpZiAodGhpcy5nZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZCkgPD0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpICYmIFxyXG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50TWludXRlcygpIDw9IHRoaXMuZ2V0RW5kTWludXRlcyh0aW1lUGVyaW9kKSkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5ncmVlbkNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuZGluZyBTb29uIChsZXNzIHRoYW4gNjAgbWludXRlcyBsZWZ0KVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkgPiAwICYmIHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSA2MCkge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS55ZWxsb3dDb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdmVyXHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UmVtYWluaW5nTWludXRlcyh0aW1lUGVyaW9kKSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLmFjY2VudENvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIENvbWluZyBVcFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIHRvZGF5c0hhcHB5SG91cnModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgLy9jb25zb2xlLmxvZygnU3RhcnQ6ICcgKyB0aGlzLmdldFN0YXJ0TWludXRlcyh0aW1lUGVyaW9kKSArICcsIEN1cnJlbnQ6ICcgKyB0aGlzLmdldEN1cnJlbnRNaW51dGVzKCkgKyAnLCBFbmQ6ICcgKyB0aGlzLmdldEVuZE1pbnV0ZXModGltZVBlcmlvZCkgKyAnLCBSZW1haW5pbmc6ICcgKyB0aGlzLmdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZCkpO1xyXG4gICAgXHJcbiAgICAvLyBWYWxpZCBoYXBweSBob3VyIHRpbWUgcGVyaW9kXHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCl7XHJcbiAgICAgIC8vIEZvcm1hdCB0aW1lIHBlcmlvZFxyXG4gICAgICByZXN1bHQgPSB0aGlzLmZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZCk7XHJcbiAgICAgIC8vIEFwcGVuZCB2ZXJiaWFnZSB0byB0aW1lc1xyXG4gICAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKz0gXCIgLSBJbiBQcm9ncmVzcyFcIjtcclxuICAgICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArPSBcIiAtIEVuZGluZyBTb29uIVwiO1xyXG4gICAgICAgIGNhc2UgVGhlbWUuYWNjZW50Q29sb3I6XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICs9IFwiIC0gT3ZlciFcIjtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyTWlkbmlnaHRPZmZzZXQodGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTdGFydE1pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlck1pZG5pZ2h0T2Zmc2V0KHRpbWVQZXJpb2Qub3Blbik7XHJcbiAgfVxyXG5cclxuICBnZXRFbmRNaW51dGVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJNaWRuaWdodE9mZnNldCh0aW1lUGVyaW9kLmNsb3NlKTtcclxuICB9XHJcblxyXG4gIGdldFJlbWFpbmluZ01pbnV0ZXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbmRNaW51dGVzKHRpbWVQZXJpb2QpIC0gdGhpcy5nZXRDdXJyZW50TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJNaWRuaWdodE9mZnNldChkYXRlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgdmFyIG1pbnV0ZXMgPSAobW9tZW50LnV0YyhkYXRlKS5taW51dGVzKCkgKyAobW9tZW50LnV0YyhkYXRlKS5ob3VycygpICogNjApKTtcclxuICAgIHJldHVybiAobWludXRlcyA8PSBUaW1lUGVyaW9kVGhyZXNob2xkLmVuZC5taW51dGVzKSA/IChtaW51dGVzICs9IDE0NDApIDogbWludXRlcztcclxuICB9XHJcblxyXG4gIGZvcm1hdFRpbWVQZXJpb2QodGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lUGVyaW9kLm9wZW4pLmZvcm1hdChcImg6bW1hXCIpICsgJyAtICcgKyBtb21lbnQudXRjKHRpbWVQZXJpb2QuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpO1xyXG4gIH1cclxufSJdfQ==