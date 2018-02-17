"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var settings_1 = require("./settings");
var google_location_service_1 = require("./services/google-location.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var nativescript_performance_monitor_1 = require("nativescript-performance-monitor");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var performanceMonitor = new nativescript_performance_monitor_1.PerformanceMonitor();
var AppComponent = (function () {
    function AppComponent(router, routerExt, googleLocationService) {
        this.router = router;
        this.routerExt = routerExt;
        this.googleLocationService = googleLocationService;
        this.selectedTab = {
            index: 0,
            title: ''
        };
        this.transition = {
            name: 'slide',
            duration: 200,
            curve: 'linear'
        };
        this.items = [
            // new BottomBarItem(0, "Search", "search", "black", new Notification("blue", "white", "1")),
            new nativescript_bottombar_1.BottomBarItem(0, "Search", "search", settings_1.Theme.darkGrey),
            new nativescript_bottombar_1.BottomBarItem(1, "Specials", "star", settings_1.Theme.darkGrey),
            new nativescript_bottombar_1.BottomBarItem(2, "Favorites", "favorite", settings_1.Theme.darkGrey),
            new nativescript_bottombar_1.BottomBarItem(3, "Account", "account", settings_1.Theme.darkGrey)
        ];
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 1 /* ALWAYS_SHOW */;
        this.inactiveColor = settings_1.Theme.inactiveColor;
        this.accentColor = settings_1.Theme.accentColor;
    };
    AppComponent.prototype.tabSelected = function (args) {
        console.log(args.newIndex);
        // Adjust transition direction
        this.transition.name = (args.newIndex > this.selectedTab.index) ? 'slideLeft' : 'slideRight';
        switch (args.newIndex) {
            case 0:
                this.routerExt.navigate(["/search"], { transition: this.transition });
                break;
            case 1:
                this.routerExt.navigate(["/specials"], { transition: this.transition });
                break;
            case 2:
                this.routerExt.navigate(["/favorites"], { transition: this.transition });
                break;
            case 3:
                this.routerExt.navigate(["/account"], { transition: this.transition });
                break;
            default:
                alert('Invalid route.');
                break;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [router_2.Router,
            router_1.RouterExtensions,
            google_location_service_1.GoogleLocationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBMEM7QUFDMUMsOEVBQTJFO0FBQzNFLHNEQUF5RjtBQUN6RiwwQ0FBeUU7QUFDekUscUZBQWdHO0FBS2hHLHNDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzlDLElBQU0sa0JBQWtCLEdBQXVCLElBQUkscURBQWtCLEVBQUUsQ0FBQztBQU94RTtJQWtCSSxzQkFBb0IsTUFBYyxFQUNkLFNBQTJCLEVBQzNCLHFCQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVp6RCxnQkFBVyxHQUFRO1lBQ3RCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ00sZUFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFDO1FBYUssVUFBSyxHQUF5QjtZQUNqQyw2RkFBNkY7WUFDN0YsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7WUFDN0QsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1NBQzdELENBQUM7UUFkRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVIsY0FBWSxDQUFDO0lBVWIsZ0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFjLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsc0JBQTBCLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksSUFBbUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFFN0YsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDekUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUM7UUFDZCxDQUFDO0lBRUosQ0FBQztJQXJFTyxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBb0I4QixlQUFNO1lBQ0gseUJBQWdCO1lBQ0osK0NBQXFCO09BcEJ2RCxZQUFZLENBc0V4QjtJQUFELG1CQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBlcmZvcm1hbmNlTW9uaXRvciwgUGVyZm9ybWFuY2VNb25pdG9yU2FtcGxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBlcmZvcm1hbmNlLW1vbml0b3InO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gJ3VpL2VudW1zJztcclxuIFxyXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XHJcbmNvbnN0IHBlcmZvcm1hbmNlTW9uaXRvcjogUGVyZm9ybWFuY2VNb25pdG9yID0gbmV3IFBlcmZvcm1hbmNlTW9uaXRvcigpO1xyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuIFxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEU7XHJcbiAgICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xyXG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHRoZW1lOiBhbnk7XHJcbiAgICBwdWJsaWMgZGVidWc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUYWI6IGFueSA9IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICB0aXRsZTogJydcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHRyYW5zaXRpb246IGFueSA9IHtcclxuICAgICAgICBuYW1lOiAnc2xpZGUnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgY3VydmU6ICdsaW5lYXInXHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLnRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXsgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PEJvdHRvbUJhckl0ZW0+ID0gW1xyXG4gICAgICAgIC8vIG5ldyBCb3R0b21CYXJJdGVtKDAsIFwiU2VhcmNoXCIsIFwic2VhcmNoXCIsIFwiYmxhY2tcIiwgbmV3IE5vdGlmaWNhdGlvbihcImJsdWVcIiwgXCJ3aGl0ZVwiLCBcIjFcIikpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDAsIFwiU2VhcmNoXCIsIFwic2VhcmNoXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIlNwZWNpYWxzXCIsIFwic3RhclwiLCBUaGVtZS5kYXJrR3JleSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgXCJGYXZvcml0ZXNcIiwgXCJmYXZvcml0ZVwiLCBUaGVtZS5kYXJrR3JleSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMywgXCJBY2NvdW50XCIsIFwiYWNjb3VudFwiLCBUaGVtZS5kYXJrR3JleSlcclxuICAgIF07XHJcbiBcclxuICAgIHRhYkxvYWRlZChldmVudCkge1xyXG4gICAgICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuQUxXQVlTX1NIT1c7XHJcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gVGhlbWUuYWNjZW50Q29sb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIC8vIEFkanVzdCB0cmFuc2l0aW9uIGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID0gKGFyZ3MubmV3SW5kZXggPiB0aGlzLnNlbGVjdGVkVGFiLmluZGV4KSA/ICdzbGlkZUxlZnQnIDogJ3NsaWRlUmlnaHQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoYXJncy5uZXdJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL3NwZWNpYWxzXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvZmF2b3JpdGVzXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvYWNjb3VudFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIHJvdXRlLicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICB9XHJcbn0iXX0=