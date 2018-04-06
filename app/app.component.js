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
var user_service_1 = require("./services/user.service");
var bottom_bar_service_1 = require("./services/bottom-bar.service");
nativescript_angular_1.registerElement("BottomBar", function () { return nativescript_bottombar_1.BottomBar; });
var performanceMonitor = new nativescript_performance_monitor_1.PerformanceMonitor();
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExt, googleLocationService, userService, bottomBarService) {
        this.router = router;
        this.routerExt = routerExt;
        this.googleLocationService = googleLocationService;
        this.userService = userService;
        this.bottomBarService = bottomBarService;
        this.selectedTab = {};
        this.transition = {
            name: "slide",
            duration: 200,
            curve: "linear"
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
        this.selectedTab = this.bottomBarService.selectedTab;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._user = this.userService.getUser();
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
        this.transition.name =
            args.newIndex > this.selectedTab.index ? "slideLeft" : "slideRight";
        switch (args.newIndex) {
            case 0:
                this.routerExt.navigate(["/search"], { transition: this.transition });
                break;
            case 1:
                this.routerExt.navigate(["/specials"], { transition: this.transition });
                break;
            case 2:
                this.routerExt.navigate(["/favorites"], {
                    transition: this.transition
                });
                break;
            case 3:
                this.routerExt.navigate(["/account"], { transition: this.transition });
                break;
            default:
                alert("Invalid route.");
                break;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_2.Router,
            router_1.RouterExtensions,
            google_location_service_1.GoogleLocationService,
            user_service_1.UserService,
            bottom_bar_service_1.BottomBarService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQU1nQztBQUNoQyx1Q0FBMEM7QUFDMUMsOEVBQTJFO0FBQzNFLHNEQUdxQztBQUNyQywwQ0FBeUU7QUFDekUscUZBRzBDO0FBSTFDLHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFFakUsc0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDOUMsSUFBTSxrQkFBa0IsR0FBdUIsSUFBSSxxREFBa0IsRUFBRSxDQUFDO0FBTXhFO0lBZ0JFLHNCQUNVLE1BQWMsRUFDZCxTQUEyQixFQUMzQixxQkFBNEMsRUFDNUMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFickMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFRO1lBQ3hCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO1FBbUJLLFVBQUssR0FBeUI7WUFDbkMsNkZBQTZGO1lBQzdGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1lBQzdELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztTQUMzRCxDQUFDO1FBZkEsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQVVELGdDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLHNCQUEwQixDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLElBQW1DO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFFdEUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEIsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxLQUFLLENBQUM7WUFDUixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUssQ0FBQztZQUNSO2dCQUNFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQTFFVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUM7eUNBa0JrQixlQUFNO1lBQ0gseUJBQWdCO1lBQ0osK0NBQXFCO1lBQy9CLDBCQUFXO1lBQ04scUNBQWdCO09BckJqQyxZQUFZLENBMkV4QjtJQUFELG1CQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge1xyXG4gIEJvdHRvbUJhcixcclxuICBCb3R0b21CYXJJdGVtLFxyXG4gIFRJVExFX1NUQVRFLFxyXG4gIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLFxyXG4gIE5vdGlmaWNhdGlvblxyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtYm90dG9tYmFyXCI7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gIFJvdXRlckV4dGVuc2lvbnNcclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIFBlcmZvcm1hbmNlTW9uaXRvcixcclxuICBQZXJmb3JtYW5jZU1vbml0b3JTYW1wbGVcclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcmZvcm1hbmNlLW1vbml0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCb3R0b21CYXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYm90dG9tLWJhci5zZXJ2aWNlXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJCb3R0b21CYXJcIiwgKCkgPT4gQm90dG9tQmFyKTtcclxuY29uc3QgcGVyZm9ybWFuY2VNb25pdG9yOiBQZXJmb3JtYW5jZU1vbml0b3IgPSBuZXcgUGVyZm9ybWFuY2VNb25pdG9yKCk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xyXG4gIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcclxuICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xyXG4gIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHRoZW1lOiBhbnk7XHJcbiAgcHVibGljIGRlYnVnO1xyXG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogYW55ID0ge307XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uOiBhbnkgPSB7XHJcbiAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgY3VydmU6IFwibGluZWFyXCJcclxuICB9O1xyXG4gIHByaXZhdGUgX3VzZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGJvdHRvbUJhclNlcnZpY2U6IEJvdHRvbUJhclNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0aGlzLmJvdHRvbUJhclNlcnZpY2Uuc2VsZWN0ZWRUYWI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3VzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAvLyBuZXcgQm90dG9tQmFySXRlbSgwLCBcIlNlYXJjaFwiLCBcInNlYXJjaFwiLCBcImJsYWNrXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcclxuICAgIG5ldyBCb3R0b21CYXJJdGVtKDAsIFwiU2VhcmNoXCIsIFwic2VhcmNoXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIFwiU3BlY2lhbHNcIiwgXCJzdGFyXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiRmF2b3JpdGVzXCIsIFwiZmF2b3JpdGVcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgbmV3IEJvdHRvbUJhckl0ZW0oMywgXCJBY2NvdW50XCIsIFwiYWNjb3VudFwiLCBUaGVtZS5kYXJrR3JleSlcclxuICBdO1xyXG5cclxuICB0YWJMb2FkZWQoZXZlbnQpIHtcclxuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xyXG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLkFMV0FZU19TSE9XO1xyXG4gICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgIHRoaXMuYWNjZW50Q29sb3IgPSBUaGVtZS5hY2NlbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcclxuXHJcbiAgICAvLyBBZGp1c3QgdHJhbnNpdGlvbiBkaXJlY3Rpb25cclxuICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID1cclxuICAgICAgYXJncy5uZXdJbmRleCA+IHRoaXMuc2VsZWN0ZWRUYWIuaW5kZXggPyBcInNsaWRlTGVmdFwiIDogXCJzbGlkZVJpZ2h0XCI7XHJcblxyXG4gICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9zcGVjaWFsc1wiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvZmF2b3JpdGVzXCJdLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9hY2NvdW50XCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhbGVydChcIkludmFsaWQgcm91dGUuXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=