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
            else if (endMinutes <= currentMinutes) {
                return settings_1.Theme.accentColor;
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
        console.log('Start: ' + startMinutes + ', Current: ' + currentMinutes + ', End: ' + endMinutes);
        // Current and valid happy hour time period
        if (timePeriod !== null && timePeriod.day === new Date().getDay()) {
            result = moment.utc(timePeriod.open).format("h:mma") + ' - ' + moment.utc(timePeriod.close).format("h:mma");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywrQkFBaUM7QUFNakM7SUFzRUU7UUEvRE8sY0FBUyxHQUFhO1lBQzNCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxlQUFlO2FBQ3JCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGtCQUFrQjthQUN4QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxrQkFBa0I7YUFDeEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsYUFBYTthQUNuQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxzQkFBc0I7YUFDNUI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7U0FDRixDQUFDO1FBR0EsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QywyQkFBMkI7SUFDN0IsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLE9BQU87UUFDUCwwREFBMEQ7SUFDNUQsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsVUFBc0I7UUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEYsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEYsd0RBQXdEO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqRSxTQUFTO1lBQ1QsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLGNBQWMsSUFBSSxVQUFVLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsTUFBTSxDQUFDLGdCQUFLLENBQUMsVUFBVSxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLGNBQWMsSUFBSSxDQUFDLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDaEYsTUFBTSxDQUFDLGdCQUFLLENBQUMsV0FBVyxDQUFDO1lBQzNCLENBQUM7WUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLGNBQWMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztZQUMzQixDQUFDO1lBRUQsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLGdCQUFLLENBQUMsYUFBYSxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDeEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEYsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLGFBQWEsR0FBRyxjQUFjLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRWhHLDJDQUEyQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDakUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVHLDJCQUEyQjtZQUMzQixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDdkMsS0FBSyxnQkFBSyxDQUFDLFVBQVU7b0JBQ25CLE1BQU0sQ0FBQyxNQUFNLElBQUksaUJBQWlCLENBQUM7Z0JBQ3JDLEtBQUssZ0JBQUssQ0FBQyxXQUFXO29CQUNwQixNQUFNLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO2dCQUNyQyxLQUFLLGdCQUFLLENBQUMsV0FBVztvQkFDcEIsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUM7Z0JBQzlCO29CQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUF0SVE7UUFBUixZQUFLLEVBQUU7OzBEQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOzt5REFBZTtJQUhaLHNCQUFzQjtRQUpsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0VBQWtFO1NBQ2hGLENBQUM7O09BQ1csc0JBQXNCLENBeUlsQztJQUFELDZCQUFDO0NBQUEsQUF6SUQsSUF5SUM7QUF6SVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0RGF5IH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvZGVmYXVsdC1kYXkuZW51bSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gSW5wdXRzXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF5OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwdWJsaWMgdGVtcEljb25zOiBPYmplY3RbXSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHNyYzogJ3JlczovL2FjY291bnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgc3JjOiAncmVzOi8vYXR0YWNobWVudCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9iYWNrX2Fycm93J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHNyYzogJ3JlczovL2JlZW5oZXJlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIHNyYzogJ3JlczovL2NhbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgc3JjOiAncmVzOi8vZG93bmxvYWQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNyxcclxuICAgICAgc3JjOiAncmVzOi8vZWRpdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9lcnJvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA5LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9mYXZvcml0ZV9lbXB0eSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMCxcclxuICAgICAgc3JjOiAncmVzOi8vZmF2b3JpdGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTEsXHJcbiAgICAgIHNyYzogJ3JlczovL2ZlZWRiYWNrJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEyLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9maWx0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTMsXHJcbiAgICAgIHNyYzogJ3JlczovL2luZm8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTQsXHJcbiAgICAgIHNyYzogJ3JlczovL2xhdW5jaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNSxcclxuICAgICAgc3JjOiAncmVzOi8vbG9jYXRpb24nXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgLy9TZXQgY3VycmVudCBkYXRlXHJcbiAgICB0aGlzLmN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xyXG4gICAgLy9vcmRlckJ5VGltZSh0aGlzLnZlbmRvcik7XHJcbiAgfVxyXG5cclxuICBvcmRlckJ5VGltZSh2ZW5kb3I6IFZlbmRvcil7XHJcbiAgICAvL1RPRE8gXHJcbiAgICAvL0ltcGxlbWVudCBmdW5jdGlvbiB0byBvcmRlciB2ZW5kb3Igb2JqZWN0IGFycmF5IGJ5IHRpbWUuXHJcbiAgfVxyXG5cclxuICBoYXBweUhvdXJTdGF0dXModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGN1cnJlbnRNaW51dGVzID0gY3VycmVudERhdGUuZ2V0TWludXRlcygpICsgKGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKiA2MCk7XHJcbiAgICB2YXIgc3RhcnRNaW51dGVzID0gdGltZVBlcmlvZC5vcGVuLmdldE1pbnV0ZXMoKSArICh0aW1lUGVyaW9kLm9wZW4uZ2V0SG91cnMoKSAqIDYwKTtcclxuICAgIHZhciBlbmRNaW51dGVzID0gdGltZVBlcmlvZC5jbG9zZS5nZXRNaW51dGVzKCkgKyAodGltZVBlcmlvZC5jbG9zZS5nZXRIb3VycygpICogNjApO1xyXG4gICAgLy8gTm90IG51bGwgJiYgY3VycmVudCBkYXkgJiYgc3RhcnQgPj0gbm93ICYmIGVuZCA8PSBub3dcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsICYmIHRpbWVQZXJpb2QuZGF5ID09PSBuZXcgRGF0ZSgpLmdldERheSgpKXtcclxuICAgICAgLy8gQWN0aXZlXHJcbiAgICAgIGlmIChzdGFydE1pbnV0ZXMgPD0gY3VycmVudE1pbnV0ZXMgJiYgZW5kTWludXRlcyA+PSBjdXJyZW50TWludXRlcykge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5ncmVlbkNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuZGluZyBTb29uXHJcbiAgICAgIGVsc2UgaWYgKHN0YXJ0TWludXRlcyA8PSBjdXJyZW50TWludXRlcyAmJiAoKGVuZE1pbnV0ZXMgLSBjdXJyZW50TWludXRlcykgPD0gNjApKXtcclxuICAgICAgICByZXR1cm4gVGhlbWUueWVsbG93Q29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLy8gT3ZlclxyXG4gICAgICBlbHNlIGlmIChlbmRNaW51dGVzIDw9IGN1cnJlbnRNaW51dGVzKXtcclxuICAgICAgICByZXR1cm4gVGhlbWUuYWNjZW50Q29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ29taW5nIFVwXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgdG9kYXlzSGFwcHlIb3Vycyh0aW1lUGVyaW9kOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHZhciByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBjdXJyZW50TWludXRlcyA9IGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSArIChjdXJyZW50RGF0ZS5nZXRIb3VycygpICogNjApO1xyXG4gICAgdmFyIHN0YXJ0TWludXRlcyA9IHRpbWVQZXJpb2Qub3Blbi5nZXRNaW51dGVzKCkgKyAodGltZVBlcmlvZC5vcGVuLmdldEhvdXJzKCkgKiA2MCk7XHJcbiAgICB2YXIgZW5kTWludXRlcyA9IHRpbWVQZXJpb2QuY2xvc2UuZ2V0TWludXRlcygpICsgKHRpbWVQZXJpb2QuY2xvc2UuZ2V0SG91cnMoKSAqIDYwKTtcclxuICAgIGNvbnNvbGUubG9nKCdTdGFydDogJyArIHN0YXJ0TWludXRlcyArICcsIEN1cnJlbnQ6ICcgKyBjdXJyZW50TWludXRlcyArICcsIEVuZDogJyArIGVuZE1pbnV0ZXMpO1xyXG4gICAgXHJcbiAgICAvLyBDdXJyZW50IGFuZCB2YWxpZCBoYXBweSBob3VyIHRpbWUgcGVyaW9kXHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCAmJiB0aW1lUGVyaW9kLmRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSl7XHJcbiAgICAgIHJlc3VsdCA9IG1vbWVudC51dGModGltZVBlcmlvZC5vcGVuKS5mb3JtYXQoXCJoOm1tYVwiKSArICcgLSAnICsgbW9tZW50LnV0Yyh0aW1lUGVyaW9kLmNsb3NlKS5mb3JtYXQoXCJoOm1tYVwiKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFwcGVuZCB2ZXJiaWFnZSB0byB0aW1lc1xyXG4gICAgICBzd2l0Y2godGhpcy5oYXBweUhvdXJTdGF0dXModGltZVBlcmlvZCkpe1xyXG4gICAgICAgIGNhc2UgVGhlbWUuZ3JlZW5Db2xvcjpcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKz0gXCIgLSBJbiBQcm9ncmVzcyFcIjtcclxuICAgICAgICBjYXNlIFRoZW1lLnllbGxvd0NvbG9yOlxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArPSBcIiAtIEVuZGluZyBTb29uIVwiO1xyXG4gICAgICAgIGNhc2UgVGhlbWUuYWNjZW50Q29sb3I6XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICs9IFwiIC0gT3ZlciFcIjtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxufSJdfQ==