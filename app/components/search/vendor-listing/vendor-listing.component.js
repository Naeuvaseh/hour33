"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var moment = require("moment");
var VendorListingComponent = (function () {
    function VendorListingComponent() {
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
        //orderByTime(this.vendor);
    };
    VendorListingComponent.prototype.orderByTime = function (vendor) {
        //TODO 
        //Implement function to order vendor object array by time.
    };
    VendorListingComponent.prototype.happyHourStatus = function (timePeriod) {
        var currentDate = new Date();
        var currentMinutes = currentDate.getMinutes() + (currentDate.getHours() * 60);
        var startMinutes = timePeriod.open.getMinutes() + (timePeriod.open.getHours() * 60);
        var endMinutes = timePeriod.close.getMinutes() + (timePeriod.close.getHours() * 60);
        // Not null && current day && start >= now && end <= now
        if (timePeriod !== null && timePeriod.day === new Date().getDay()) {
            // Active
            if (startMinutes <= currentMinutes && endMinutes >= currentMinutes) {
                return settings_1.Theme.greenColor;
            }
            else if (startMinutes <= currentMinutes && ((endMinutes - currentMinutes) <= 60)) {
                return settings_1.Theme.yellowColor;
            }
            else {
                return settings_1.Theme.inactiveColor;
            }
        }
    };
    VendorListingComponent.prototype.todaysHappyHours = function (timePeriod) {
        var result = '';
        var currentDate = new Date();
        var currentMinutes = currentDate.getMinutes() + (currentDate.getHours() * 60);
        var startMinutes = timePeriod.open.getMinutes() + (timePeriod.open.getHours() * 60);
        var endMinutes = timePeriod.close.getMinutes() + (timePeriod.close.getHours() * 60);
        if (timePeriod !== null && timePeriod.day === new Date().getDay()) {
            result = moment(timePeriod.open).format("h:mma") + ' - ' + moment(timePeriod.close).format("h:mma");
            if (this.happyHourStatus(timePeriod) === settings_1.Theme.greenColor) {
                result += " - In Progress!";
            }
            else if (this.happyHourStatus(timePeriod) === settings_1.Theme.yellowColor) {
                result += " - Ending Soon!";
            }
            return result;
        }
        return 'Unavailable';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywrQkFBaUM7QUFNakM7SUFzRUU7UUEvRE8sY0FBUyxHQUFhO1lBQzNCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxlQUFlO2FBQ3JCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGtCQUFrQjthQUN4QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxrQkFBa0I7YUFDeEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsYUFBYTthQUNuQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxzQkFBc0I7YUFDNUI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLFlBQVk7YUFD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LE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVwRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLGdCQUFLLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztnQkFDekQsTUFBTSxJQUFJLGlCQUFpQixDQUFDO1lBQzlCLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxnQkFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7Z0JBQy9ELE1BQU0sSUFBSSxpQkFBaUIsQ0FBQztZQUM5QixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBNUhRO1FBQVIsWUFBSyxFQUFFOzswREFBZ0I7SUFDZjtRQUFSLFlBQUssRUFBRTs7eURBQWU7SUFIWixzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtFQUFrRTtTQUNoRixDQUFDOztPQUNXLHNCQUFzQixDQStIbEM7SUFBRCw2QkFBQztDQUFBLEFBL0hELElBK0hDO0FBL0hZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdERheSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0L2RlZmF1bHQtZGF5LmVudW0nO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWxpc3RpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckxpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIElucHV0c1xyXG4gIEBJbnB1dCgpIHZlbmRvcjogVmVuZG9yO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudERheTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgcHVibGljIHRlbXBJY29uczogT2JqZWN0W10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9hY2NvdW50J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHNyYzogJ3JlczovL2F0dGFjaG1lbnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgc3JjOiAncmVzOi8vYmFja19hcnJvdydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9iZWVuaGVyZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9jYWxsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIHNyYzogJ3JlczovL2Rvd25sb2FkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDcsXHJcbiAgICAgIHNyYzogJ3JlczovL2VkaXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOCxcclxuICAgICAgc3JjOiAncmVzOi8vZXJyb3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgc3JjOiAncmVzOi8vZmF2b3JpdGVfZW1wdHknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTAsXHJcbiAgICAgIHNyYzogJ3JlczovL2Zhdm9yaXRlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDExLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9mZWVkYmFjaydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMixcclxuICAgICAgc3JjOiAncmVzOi8vZmlsdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEzLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9pbmZvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE0LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9sYXVuY2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTUsXHJcbiAgICAgIHNyYzogJ3JlczovL2xvY2F0aW9uJ1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIC8vU2V0IGN1cnJlbnQgZGF0ZVxyXG4gICAgdGhpcy5jdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICAgIC8vb3JkZXJCeVRpbWUodGhpcy52ZW5kb3IpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXJCeVRpbWUodmVuZG9yOiBWZW5kb3Ipe1xyXG4gICAgLy9UT0RPIFxyXG4gICAgLy9JbXBsZW1lbnQgZnVuY3Rpb24gdG8gb3JkZXIgdmVuZG9yIG9iamVjdCBhcnJheSBieSB0aW1lLlxyXG4gIH1cclxuXHJcbiAgaGFwcHlIb3VyU3RhdHVzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBjdXJyZW50TWludXRlcyA9IGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSArIChjdXJyZW50RGF0ZS5nZXRIb3VycygpICogNjApO1xyXG4gICAgdmFyIHN0YXJ0TWludXRlcyA9IHRpbWVQZXJpb2Qub3Blbi5nZXRNaW51dGVzKCkgKyAodGltZVBlcmlvZC5vcGVuLmdldEhvdXJzKCkgKiA2MCk7XHJcbiAgICB2YXIgZW5kTWludXRlcyA9IHRpbWVQZXJpb2QuY2xvc2UuZ2V0TWludXRlcygpICsgKHRpbWVQZXJpb2QuY2xvc2UuZ2V0SG91cnMoKSAqIDYwKTtcclxuICAgIC8vIE5vdCBudWxsICYmIGN1cnJlbnQgZGF5ICYmIHN0YXJ0ID49IG5vdyAmJiBlbmQgPD0gbm93XHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCAmJiB0aW1lUGVyaW9kLmRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSl7XHJcbiAgICAgIC8vIEFjdGl2ZVxyXG4gICAgICBpZiAoc3RhcnRNaW51dGVzIDw9IGN1cnJlbnRNaW51dGVzICYmIGVuZE1pbnV0ZXMgPj0gY3VycmVudE1pbnV0ZXMpIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUuZ3JlZW5Db2xvcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBFbmRpbmcgU29vblxyXG4gICAgICBlbHNlIGlmIChzdGFydE1pbnV0ZXMgPD0gY3VycmVudE1pbnV0ZXMgJiYgKChlbmRNaW51dGVzIC0gY3VycmVudE1pbnV0ZXMpIDw9IDYwKSl7XHJcbiAgICAgICAgcmV0dXJuIFRoZW1lLnllbGxvd0NvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIENvbWluZyBVcFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIHRvZGF5c0hhcHB5SG91cnModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgY3VycmVudE1pbnV0ZXMgPSBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkgKyAoY3VycmVudERhdGUuZ2V0SG91cnMoKSAqIDYwKTtcclxuICAgIHZhciBzdGFydE1pbnV0ZXMgPSB0aW1lUGVyaW9kLm9wZW4uZ2V0TWludXRlcygpICsgKHRpbWVQZXJpb2Qub3Blbi5nZXRIb3VycygpICogNjApO1xyXG4gICAgdmFyIGVuZE1pbnV0ZXMgPSB0aW1lUGVyaW9kLmNsb3NlLmdldE1pbnV0ZXMoKSArICh0aW1lUGVyaW9kLmNsb3NlLmdldEhvdXJzKCkgKiA2MCk7XHJcbiAgICBcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsICYmIHRpbWVQZXJpb2QuZGF5ID09PSBuZXcgRGF0ZSgpLmdldERheSgpKXtcclxuICAgICAgcmVzdWx0ID0gbW9tZW50KHRpbWVQZXJpb2Qub3BlbikuZm9ybWF0KFwiaDptbWFcIikgKyAnIC0gJyArIG1vbWVudCh0aW1lUGVyaW9kLmNsb3NlKS5mb3JtYXQoXCJoOm1tYVwiKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLmhhcHB5SG91clN0YXR1cyh0aW1lUGVyaW9kKSA9PT0gVGhlbWUuZ3JlZW5Db2xvcil7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gSW4gUHJvZ3Jlc3MhXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkgPT09IFRoZW1lLnllbGxvd0NvbG9yKXtcclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBFbmRpbmcgU29vbiFcIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdVbmF2YWlsYWJsZSc7XHJcbiAgfVxyXG59Il19