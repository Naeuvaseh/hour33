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
    VendorListingComponent.prototype.todaysHappyHours = function (timePeriod) {
        var result = '';
        var currentDate = new Date();
        // var start = moment(DefaultDay + 'T' + timePeriod.open);
        // var end = moment(DefaultDay + 'T' + timePeriod.close);
        // console.log(start);
        // console.log(end);    
        if (timePeriod !== null && timePeriod.day === new Date().getDay()) {
            // var filteredTimePeriod = timePeriod.filter(result => result.day === new Date().getDay())
            //                                    .map(result => Object.assign({}, result));
            result = moment(timePeriod.open).format("h:mm A") + ' - ' + moment(timePeriod.close).format("h:mm A");
            // TODO
            // implement check (below)
            // Check if current time period is active
            // if (currentDate.toTimeString() >= timePeriod.open && currentDate.toTimeString() <= timePeriod.close){
            //   result += " In Progress!";
            // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQUkxQywrQkFBaUM7QUFNakM7SUFzRUU7UUEvRE8sY0FBUyxHQUFhO1lBQzNCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxlQUFlO2FBQ3JCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGtCQUFrQjthQUN4QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxrQkFBa0I7YUFDeEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsYUFBYTthQUNuQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxzQkFBc0I7YUFDNUI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7U0FDRixDQUFDO1FBR0EsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QywyQkFBMkI7SUFDN0IsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLE9BQU87UUFDUCwwREFBMEQ7SUFDNUQsQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDeEIsSUFBSSxXQUFXLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQywwREFBMEQ7UUFDMUQseURBQXlEO1FBQ3pELHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2pFLDJGQUEyRjtZQUMzRixnRkFBZ0Y7WUFDaEYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0RyxPQUFPO1lBQ1AsMEJBQTBCO1lBQzFCLHlDQUF5QztZQUN6Qyx3R0FBd0c7WUFDeEcsK0JBQStCO1lBQy9CLElBQUk7WUFFSixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUF6R1E7UUFBUixZQUFLLEVBQUU7OzBEQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOzt5REFBZTtJQUhaLHNCQUFzQjtRQUpsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0VBQWtFO1NBQ2hGLENBQUM7O09BQ1csc0JBQXNCLENBNEdsQztJQUFELDZCQUFDO0NBQUEsQUE1R0QsSUE0R0M7QUE1R1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0RGF5IH0gZnJvbSAnLi4vLi4vLi4vY29uc3QvZGVmYXVsdC1kYXkuZW51bSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gSW5wdXRzXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF5OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwdWJsaWMgdGVtcEljb25zOiBPYmplY3RbXSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHNyYzogJ3JlczovL2FjY291bnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgc3JjOiAncmVzOi8vYXR0YWNobWVudCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9iYWNrX2Fycm93J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHNyYzogJ3JlczovL2JlZW5oZXJlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIHNyYzogJ3JlczovL2NhbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgc3JjOiAncmVzOi8vZG93bmxvYWQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNyxcclxuICAgICAgc3JjOiAncmVzOi8vZWRpdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9lcnJvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA5LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9mYXZvcml0ZV9lbXB0eSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMCxcclxuICAgICAgc3JjOiAncmVzOi8vZmF2b3JpdGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTEsXHJcbiAgICAgIHNyYzogJ3JlczovL2ZlZWRiYWNrJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEyLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9maWx0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTMsXHJcbiAgICAgIHNyYzogJ3JlczovL2luZm8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTQsXHJcbiAgICAgIHNyYzogJ3JlczovL2xhdW5jaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNSxcclxuICAgICAgc3JjOiAncmVzOi8vbG9jYXRpb24nXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgLy9TZXQgY3VycmVudCBkYXRlXHJcbiAgICB0aGlzLmN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xyXG4gICAgLy9vcmRlckJ5VGltZSh0aGlzLnZlbmRvcik7XHJcbiAgfVxyXG5cclxuICBvcmRlckJ5VGltZSh2ZW5kb3I6IFZlbmRvcil7XHJcbiAgICAvL1RPRE8gXHJcbiAgICAvL0ltcGxlbWVudCBmdW5jdGlvbiB0byBvcmRlciB2ZW5kb3Igb2JqZWN0IGFycmF5IGJ5IHRpbWUuXHJcbiAgfVxyXG5cclxuICB0b2RheXNIYXBweUhvdXJzKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgdmFyIHJlc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICB2YXIgY3VycmVudERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gdmFyIHN0YXJ0ID0gbW9tZW50KERlZmF1bHREYXkgKyAnVCcgKyB0aW1lUGVyaW9kLm9wZW4pO1xyXG4gICAgLy8gdmFyIGVuZCA9IG1vbWVudChEZWZhdWx0RGF5ICsgJ1QnICsgdGltZVBlcmlvZC5jbG9zZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbmQpOyAgICBcclxuICAgIGlmICh0aW1lUGVyaW9kICE9PSBudWxsICYmIHRpbWVQZXJpb2QuZGF5ID09PSBuZXcgRGF0ZSgpLmdldERheSgpKXtcclxuICAgICAgLy8gdmFyIGZpbHRlcmVkVGltZVBlcmlvZCA9IHRpbWVQZXJpb2QuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQuZGF5ID09PSBuZXcgRGF0ZSgpLmdldERheSgpKVxyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCkpO1xyXG4gICAgICByZXN1bHQgPSBtb21lbnQodGltZVBlcmlvZC5vcGVuKS5mb3JtYXQoXCJoOm1tIEFcIikgKyAnIC0gJyArIG1vbWVudCh0aW1lUGVyaW9kLmNsb3NlKS5mb3JtYXQoXCJoOm1tIEFcIik7XHJcbiAgICAgIFxyXG4gICAgICAvLyBUT0RPXHJcbiAgICAgIC8vIGltcGxlbWVudCBjaGVjayAoYmVsb3cpXHJcbiAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgdGltZSBwZXJpb2QgaXMgYWN0aXZlXHJcbiAgICAgIC8vIGlmIChjdXJyZW50RGF0ZS50b1RpbWVTdHJpbmcoKSA+PSB0aW1lUGVyaW9kLm9wZW4gJiYgY3VycmVudERhdGUudG9UaW1lU3RyaW5nKCkgPD0gdGltZVBlcmlvZC5jbG9zZSl7XHJcbiAgICAgIC8vICAgcmVzdWx0ICs9IFwiIEluIFByb2dyZXNzIVwiO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdVbmF2YWlsYWJsZSc7XHJcbiAgfVxyXG59Il19