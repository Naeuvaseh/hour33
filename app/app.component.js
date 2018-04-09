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
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            console.log("AppComponent.OnInit(): GetUser(): " + JSON.stringify(user));
            _this._user = user;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQU1nQztBQUNoQyx1Q0FBMEM7QUFDMUMsOEVBQTJFO0FBQzNFLHNEQUdxQztBQUNyQywwQ0FBeUU7QUFDekUscUZBRzBDO0FBSTFDLHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFFakUsc0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDOUMsSUFBTSxrQkFBa0IsR0FBdUIsSUFBSSxxREFBa0IsRUFBRSxDQUFDO0FBTXhFO0lBZ0JFLHNCQUNVLE1BQWMsRUFDZCxTQUEyQixFQUMzQixxQkFBNEMsRUFDNUMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFickMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFRO1lBQ3hCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO1FBc0JLLFVBQUssR0FBeUI7WUFDbkMsNkZBQTZGO1lBQzdGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFB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QztBQTlFWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7XHJcbiAgQm90dG9tQmFyLFxyXG4gIEJvdHRvbUJhckl0ZW0sXHJcbiAgVElUTEVfU1RBVEUsXHJcbiAgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsXHJcbiAgTm90aWZpY2F0aW9uXHJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ib3R0b21iYXJcIjtcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgUm91dGVyRXh0ZW5zaW9uc1xyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgUGVyZm9ybWFuY2VNb25pdG9yLFxyXG4gIFBlcmZvcm1hbmNlTW9uaXRvclNhbXBsZVxyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtcGVyZm9ybWFuY2UtbW9uaXRvclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJvdHRvbUJhclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ib3R0b20tYmFyLnNlcnZpY2VcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIkJvdHRvbUJhclwiLCAoKSA9PiBCb3R0b21CYXIpO1xyXG5jb25zdCBwZXJmb3JtYW5jZU1vbml0b3I6IFBlcmZvcm1hbmNlTW9uaXRvciA9IG5ldyBQZXJmb3JtYW5jZU1vbml0b3IoKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XHJcbiAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xyXG4gIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XHJcbiAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgdGhlbWU6IGFueTtcclxuICBwdWJsaWMgZGVidWc7XHJcbiAgcHVibGljIHNlbGVjdGVkVGFiOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIHRyYW5zaXRpb246IGFueSA9IHtcclxuICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gIH07XHJcbiAgcHJpdmF0ZSBfdXNlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgZ29vZ2xlTG9jYXRpb25TZXJ2aWNlOiBHb29nbGVMb2NhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgYm90dG9tQmFyU2VydmljZTogQm90dG9tQmFyU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy5kZWJ1ZyA9IERlYnVnO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRoaXMuYm90dG9tQmFyU2VydmljZS5zZWxlY3RlZFRhYjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKCkuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFwcENvbXBvbmVudC5PbkluaXQoKTogR2V0VXNlcigpOiBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgdGhpcy5fdXNlciA9IHVzZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAvLyBuZXcgQm90dG9tQmFySXRlbSgwLCBcIlNlYXJjaFwiLCBcInNlYXJjaFwiLCBcImJsYWNrXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcclxuICAgIG5ldyBCb3R0b21CYXJJdGVtKDAsIFwiU2VhcmNoXCIsIFwic2VhcmNoXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIFwiU3BlY2lhbHNcIiwgXCJzdGFyXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiRmF2b3JpdGVzXCIsIFwiZmF2b3JpdGVcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgbmV3IEJvdHRvbUJhckl0ZW0oMywgXCJBY2NvdW50XCIsIFwiYWNjb3VudFwiLCBUaGVtZS5kYXJrR3JleSlcclxuICBdO1xyXG5cclxuICB0YWJMb2FkZWQoZXZlbnQpIHtcclxuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xyXG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLkFMV0FZU19TSE9XO1xyXG4gICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gVGhlbWUuaW5hY3RpdmVDb2xvcjtcclxuICAgIHRoaXMuYWNjZW50Q29sb3IgPSBUaGVtZS5hY2NlbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcclxuXHJcbiAgICAvLyBBZGp1c3QgdHJhbnNpdGlvbiBkaXJlY3Rpb25cclxuICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID1cclxuICAgICAgYXJncy5uZXdJbmRleCA+IHRoaXMuc2VsZWN0ZWRUYWIuaW5kZXggPyBcInNsaWRlTGVmdFwiIDogXCJzbGlkZVJpZ2h0XCI7XHJcblxyXG4gICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9zcGVjaWFsc1wiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvZmF2b3JpdGVzXCJdLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9hY2NvdW50XCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhbGVydChcIkludmFsaWQgcm91dGUuXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=