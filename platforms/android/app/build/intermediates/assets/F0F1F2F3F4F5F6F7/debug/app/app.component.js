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
        this._user = this.userService.user;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQU1nQztBQUNoQyx1Q0FBMEM7QUFDMUMsOEVBQTJFO0FBQzNFLHNEQUdxQztBQUNyQywwQ0FBeUU7QUFDekUscUZBRzBDO0FBSTFDLHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFFakUsc0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDOUMsSUFBTSxrQkFBa0IsR0FBdUIsSUFBSSxxREFBa0IsRUFBRSxDQUFDO0FBTXhFO0lBZ0JFLHNCQUNVLE1BQWMsRUFDZCxTQUEyQixFQUMzQixxQkFBNEMsRUFDNUMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFickMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFRO1lBQ3hCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO1FBbUJLLFVBQUssR0FBeUI7WUFDbkMsNkZBQTZGO1lBQzdGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1lBQzdELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztTQUMzRCxDQUFDO1FBZkEsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFVRCxnQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxzQkFBMEIsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFtQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXRFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxLQUFLLENBQUM7WUFDUixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3RDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtpQkFDNUIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxLQUFLLENBQUM7WUFDUjtnQkFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUExRVUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDO3lDQWtCa0IsZUFBTTtZQUNILHlCQUFnQjtZQUNKLCtDQUFxQjtZQUMvQiwwQkFBVztZQUNOLHFDQUFnQjtPQXJCakMsWUFBWSxDQTJFeEI7SUFBRCxtQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtcclxuICBCb3R0b21CYXIsXHJcbiAgQm90dG9tQmFySXRlbSxcclxuICBUSVRMRV9TVEFURSxcclxuICBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSxcclxuICBOb3RpZmljYXRpb25cclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJvdHRvbWJhclwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICBSb3V0ZXJFeHRlbnNpb25zXHJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBQZXJmb3JtYW5jZU1vbml0b3IsXHJcbiAgUGVyZm9ybWFuY2VNb25pdG9yU2FtcGxlXHJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJmb3JtYW5jZS1tb25pdG9yXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQm90dG9tQmFyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2JvdHRvbS1iYXIuc2VydmljZVwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiQm90dG9tQmFyXCIsICgpID0+IEJvdHRvbUJhcik7XHJcbmNvbnN0IHBlcmZvcm1hbmNlTW9uaXRvcjogUGVyZm9ybWFuY2VNb25pdG9yID0gbmV3IFBlcmZvcm1hbmNlTW9uaXRvcigpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcclxuICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEU7XHJcbiAgcHVibGljIF9iYXI6IEJvdHRvbUJhcjtcclxuICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0aGVtZTogYW55O1xyXG4gIHB1YmxpYyBkZWJ1ZztcclxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbjogYW55ID0ge1xyXG4gICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgZHVyYXRpb246IDIwMCxcclxuICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgfTtcclxuICBwcml2YXRlIF91c2VyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBnb29nbGVMb2NhdGlvblNlcnZpY2U6IEdvb2dsZUxvY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBib3R0b21CYXJTZXJ2aWNlOiBCb3R0b21CYXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGhpcy5ib3R0b21CYXJTZXJ2aWNlLnNlbGVjdGVkVGFiO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl91c2VyID0gdGhpcy51c2VyU2VydmljZS51c2VyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPiA9IFtcclxuICAgIC8vIG5ldyBCb3R0b21CYXJJdGVtKDAsIFwiU2VhcmNoXCIsIFwic2VhcmNoXCIsIFwiYmxhY2tcIiwgbmV3IE5vdGlmaWNhdGlvbihcImJsdWVcIiwgXCJ3aGl0ZVwiLCBcIjFcIikpLFxyXG4gICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgXCJTcGVjaWFsc1wiLCBcInN0YXJcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgXCJGYXZvcml0ZXNcIiwgXCJmYXZvcml0ZVwiLCBUaGVtZS5kYXJrR3JleSksXHJcbiAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFRoZW1lLmRhcmtHcmV5KVxyXG4gIF07XHJcblxyXG4gIHRhYkxvYWRlZChldmVudCkge1xyXG4gICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XHJcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuQUxXQVlTX1NIT1c7XHJcbiAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgdGhpcy5hY2NlbnRDb2xvciA9IFRoZW1lLmFjY2VudENvbG9yO1xyXG4gIH1cclxuXHJcbiAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG5cclxuICAgIC8vIEFkanVzdCB0cmFuc2l0aW9uIGRpcmVjdGlvblxyXG4gICAgdGhpcy50cmFuc2l0aW9uLm5hbWUgPVxyXG4gICAgICBhcmdzLm5ld0luZGV4ID4gdGhpcy5zZWxlY3RlZFRhYi5pbmRleCA/IFwic2xpZGVMZWZ0XCIgOiBcInNsaWRlUmlnaHRcIjtcclxuXHJcbiAgICBzd2l0Y2ggKGFyZ3MubmV3SW5kZXgpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL3NwZWNpYWxzXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9mYXZvcml0ZXNcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2FjY291bnRcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCByb3V0ZS5cIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==