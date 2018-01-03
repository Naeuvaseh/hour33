"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
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
    VendorListingComponent.prototype.todaysHappyHours = function (timePeriod) {
        var result = '';
        var currentDate = new Date();
        if (timePeriod !== null && timePeriod.day === new Date().getDay()) {
            // var filteredTimePeriod = timePeriod.filter(result => result.day === new Date().getDay())
            //                                    .map(result => Object.assign({}, result));
            result = timePeriod.open + ' - ' + timePeriod.close;
            // TODO
            // implement check (below)
            // Check if current time period is active
            if (currentDate.toTimeString() >= timePeriod.open && currentDate.toTimeString() <= timePeriod.close) {
                result += " In Progress!";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQVExQztJQXVFRTtRQS9ETyxjQUFTLEdBQWE7WUFDM0I7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGVBQWU7YUFDckI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGtCQUFrQjthQUN4QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsWUFBWTthQUNsQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsWUFBWTthQUNsQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxhQUFhO2FBQ25CO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHNCQUFzQjthQUM1QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGNBQWM7YUFDcEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsWUFBWTthQUNsQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtTQUNGLENBQUM7UUFHQSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RDLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsT0FBTztRQUNQLDBEQUEwRDtJQUM1RCxDQUFDO0lBRUQsaURBQWdCLEdBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLFdBQVcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqRSwyRkFBMkY7WUFDM0YsZ0ZBQWdGO1lBQ2hGLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBRXBELE9BQU87WUFDUCwwQkFBMEI7WUFDMUIseUNBQXlDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztnQkFDbkcsTUFBTSxJQUFJLGVBQWUsQ0FBQztZQUM1QixDQUFDO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBdEdRO1FBQVIsWUFBSyxFQUFFOzswREFBZ0I7SUFDZjtRQUFSLFlBQUssRUFBRTs7eURBQWU7SUFIWixzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtFQUFrRTtTQUNoRixDQUFDOztPQUNXLHNCQUFzQixDQXlHbEM7SUFBRCw2QkFBQztDQUFBLEFBekdELElBeUdDO0FBekdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWxpc3RpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckxpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIElucHV0c1xyXG4gIEBJbnB1dCgpIHZlbmRvcjogVmVuZG9yO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudERheTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHB1YmxpYyB0ZW1wSWNvbnM6IE9iamVjdFtdID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgc3JjOiAncmVzOi8vYWNjb3VudCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9hdHRhY2htZW50J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHNyYzogJ3JlczovL2JhY2tfYXJyb3cnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgc3JjOiAncmVzOi8vYmVlbmhlcmUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgc3JjOiAncmVzOi8vY2FsbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9kb3dubG9hZCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9lZGl0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIHNyYzogJ3JlczovL2Vycm9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDksXHJcbiAgICAgIHNyYzogJ3JlczovL2Zhdm9yaXRlX2VtcHR5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEwLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9mYXZvcml0ZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMSxcclxuICAgICAgc3JjOiAncmVzOi8vZmVlZGJhY2snXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTIsXHJcbiAgICAgIHNyYzogJ3JlczovL2ZpbHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMyxcclxuICAgICAgc3JjOiAncmVzOi8vaW5mbydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNCxcclxuICAgICAgc3JjOiAncmVzOi8vbGF1bmNoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE1LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9sb2NhdGlvbidcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICAvL1NldCBjdXJyZW50IGRhdGVcclxuICAgIHRoaXMuY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XHJcbiAgICAvL29yZGVyQnlUaW1lKHRoaXMudmVuZG9yKTtcclxuICB9XHJcblxyXG4gIG9yZGVyQnlUaW1lKHZlbmRvcjogVmVuZG9yKXtcclxuICAgIC8vVE9ETyBcclxuICAgIC8vSW1wbGVtZW50IGZ1bmN0aW9uIHRvIG9yZGVyIHZlbmRvciBvYmplY3QgYXJyYXkgYnkgdGltZS5cclxuICB9XHJcblxyXG4gIHRvZGF5c0hhcHB5SG91cnModGltZVBlcmlvZDogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgIHZhciBjdXJyZW50RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBpZiAodGltZVBlcmlvZCAhPT0gbnVsbCAmJiB0aW1lUGVyaW9kLmRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSl7XHJcbiAgICAgIC8vIHZhciBmaWx0ZXJlZFRpbWVQZXJpb2QgPSB0aW1lUGVyaW9kLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0LmRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSlcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHJlc3VsdCA9PiBPYmplY3QuYXNzaWduKHt9LCByZXN1bHQpKTtcclxuICAgICAgcmVzdWx0ID0gdGltZVBlcmlvZC5vcGVuICsgJyAtICcgKyB0aW1lUGVyaW9kLmNsb3NlO1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ET1xyXG4gICAgICAvLyBpbXBsZW1lbnQgY2hlY2sgKGJlbG93KVxyXG4gICAgICAvLyBDaGVjayBpZiBjdXJyZW50IHRpbWUgcGVyaW9kIGlzIGFjdGl2ZVxyXG4gICAgICBpZiAoY3VycmVudERhdGUudG9UaW1lU3RyaW5nKCkgPj0gdGltZVBlcmlvZC5vcGVuICYmIGN1cnJlbnREYXRlLnRvVGltZVN0cmluZygpIDw9IHRpbWVQZXJpb2QuY2xvc2Upe1xyXG4gICAgICAgIHJlc3VsdCArPSBcIiBJbiBQcm9ncmVzcyFcIjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiAnVW5hdmFpbGFibGUnO1xyXG4gIH1cclxufSJdfQ==