"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var router_1 = require("@angular/router");
var VendorScoreComponent = (function () {
    function VendorScoreComponent(router) {
        this.router = router;
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
    VendorScoreComponent.prototype.navToReviews = function () {
        console.log('VendorScoreComponent.navToReview() invoked.');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorScoreComponent.prototype, "vendor", void 0);
    VendorScoreComponent = __decorate([
        core_1.Component({
            selector: 'vendor-score',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], VendorScoreComponent);
    return VendorScoreComponent;
}());
exports.VendorScoreComponent = VendorScoreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXNjb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELDBDQUF5QztBQU16QztJQW9FRSw4QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUEvRDNCLGNBQVMsR0FBYTtZQUMzQjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsZUFBZTthQUNyQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxrQkFBa0I7YUFDeEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLGFBQWE7YUFDbkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsc0JBQXNCO2FBQzVCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGdCQUFnQjthQUN0QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxnQkFBZ0I7YUFDdEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGNBQWM7YUFDcEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCO1NBQ0YsQ0FBQztRQUdBLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBMUVRO1FBQVIsWUFBSyxFQUFFOzt3REFBZ0I7SUFEYixvQkFBb0I7UUFKaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw4RkFBOEY7U0FDNUcsQ0FBQzt5Q0FxRTRCLGVBQU07T0FwRXZCLG9CQUFvQixDQTZFaEM7SUFBRCwyQkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1zY29yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXNjb3JlL3ZlbmRvci1zY29yZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvclNjb3JlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2ZW5kb3I6IFZlbmRvcjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG5cclxuICBwdWJsaWMgdGVtcEljb25zOiBPYmplY3RbXSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHNyYzogJ3JlczovL2FjY291bnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgc3JjOiAncmVzOi8vYXR0YWNobWVudCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9iYWNrX2Fycm93J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHNyYzogJ3JlczovL2JlZW5oZXJlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIHNyYzogJ3JlczovL2NhbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgc3JjOiAncmVzOi8vZG93bmxvYWQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNyxcclxuICAgICAgc3JjOiAncmVzOi8vZWRpdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9lcnJvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA5LFxyXG4gICAgICBzcmM6ICdyZXM6Ly9mYXZvcml0ZV9lbXB0eSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMCxcclxuICAgICAgc3JjOiAncmVzOi8vZmF2b3JpdGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTEsXHJcbiAgICAgIHNyYzogJ3JlczovL2ZlZWRiYWNrJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEyLFxyXG4gICAgICBzcmM6ICdyZXM6Ly9maWx0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTMsXHJcbiAgICAgIHNyYzogJ3JlczovL2luZm8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTQsXHJcbiAgICAgIHNyYzogJ3JlczovL2xhdW5jaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNSxcclxuICAgICAgc3JjOiAncmVzOi8vbG9jYXRpb24nXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmF2VG9SZXZpZXdzKCl7XHJcbiAgICBjb25zb2xlLmxvZygnVmVuZG9yU2NvcmVDb21wb25lbnQubmF2VG9SZXZpZXcoKSBpbnZva2VkLicpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxufSJdfQ==