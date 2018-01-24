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
    AppComponent.prototype.ngOnInit = function () {
        this.googleLocationService.setCurrentLocation();
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBMEM7QUFDMUMsOEVBQTJFO0FBQzNFLHNEQUF5RjtBQUN6RiwwQ0FBeUU7QUFDekUscUZBQWdHO0FBR2hHLHNDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzlDLElBQU0sa0JBQWtCLEdBQXVCLElBQUkscURBQWtCLEVBQUUsQ0FBQztBQU94RTtJQWtCSSxzQkFBb0IsTUFBYyxFQUNkLFNBQTJCLEVBQzNCLHFCQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVp6RCxnQkFBVyxHQUFRO1lBQ3RCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ00sZUFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFDO1FBZUssVUFBSyxHQUF5QjtZQUNqQyw2RkFBNkY7WUFDN0YsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7WUFDN0QsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1NBQzdELENBQUM7UUFoQkUsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQVVELGdDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLHNCQUEwQixDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLElBQW1DO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDO1FBRTdGLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pFLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUVKLENBQUM7SUF2RU8sWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQW9COEIsZUFBTTtZQUNILHlCQUFnQjtZQUNKLCtDQUFxQjtPQXBCdkQsWUFBWSxDQXdFeEI7SUFBRCxtQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQZXJmb3JtYW5jZU1vbml0b3IsIFBlcmZvcm1hbmNlTW9uaXRvclNhbXBsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wZXJmb3JtYW5jZS1tb25pdG9yJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuIFxyXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XHJcbmNvbnN0IHBlcmZvcm1hbmNlTW9uaXRvcjogUGVyZm9ybWFuY2VNb25pdG9yID0gbmV3IFBlcmZvcm1hbmNlTW9uaXRvcigpO1xyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuIFxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEU7XHJcbiAgICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xyXG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHRoZW1lOiBhbnk7XHJcbiAgICBwdWJsaWMgZGVidWc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUYWI6IGFueSA9IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICB0aXRsZTogJydcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHRyYW5zaXRpb246IGFueSA9IHtcclxuICAgICAgICBuYW1lOiAnc2xpZGUnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgY3VydmU6ICdsaW5lYXInXHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLnRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS5zZXRDdXJyZW50TG9jYXRpb24oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPiA9IFtcclxuICAgICAgICAvLyBuZXcgQm90dG9tQmFySXRlbSgwLCBcIlNlYXJjaFwiLCBcInNlYXJjaFwiLCBcImJsYWNrXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgwLCBcIlNlYXJjaFwiLCBcInNlYXJjaFwiLCBUaGVtZS5kYXJrR3JleSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgXCJTcGVjaWFsc1wiLCBcInN0YXJcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiRmF2b3JpdGVzXCIsIFwiZmF2b3JpdGVcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIFwiQWNjb3VudFwiLCBcImFjY291bnRcIiwgVGhlbWUuZGFya0dyZXkpXHJcbiAgICBdO1xyXG4gXHJcbiAgICB0YWJMb2FkZWQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9iYXIgPSA8Qm90dG9tQmFyPmV2ZW50Lm9iamVjdDtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLkFMV0FZU19TSE9XO1xyXG4gICAgICAgIHRoaXMuaW5hY3RpdmVDb2xvciA9IFRoZW1lLmluYWN0aXZlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9IFRoZW1lLmFjY2VudENvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAvLyBBZGp1c3QgdHJhbnNpdGlvbiBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb24ubmFtZSA9IChhcmdzLm5ld0luZGV4ID4gdGhpcy5zZWxlY3RlZFRhYi5pbmRleCkgPyAnc2xpZGVMZWZ0JyA6ICdzbGlkZVJpZ2h0JztcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGFyZ3MubmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiBcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9zcGVjaWFsc1wiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2Zhdm9yaXRlc1wiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2FjY291bnRcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnSW52YWxpZCByb3V0ZS4nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgfVxyXG59Il19