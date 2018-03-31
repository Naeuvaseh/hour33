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
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var performanceMonitor = new nativescript_performance_monitor_1.PerformanceMonitor();
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExt, googleLocationService, userService) {
        this.router = router;
        this.routerExt = routerExt;
        this.googleLocationService = googleLocationService;
        this.userService = userService;
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
            google_location_service_1.GoogleLocationService,
            user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBMEM7QUFDMUMsOEVBQTJFO0FBQzNFLHNEQUF5RjtBQUN6RiwwQ0FBeUU7QUFDekUscUZBQWdHO0FBSWhHLHdEQUFzRDtBQUV0RCxzQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQUM5QyxJQUFNLGtCQUFrQixHQUF1QixJQUFJLHFEQUFrQixFQUFFLENBQUM7QUFPeEU7SUFtQkksc0JBQW9CLE1BQWMsRUFDZCxTQUEyQixFQUMzQixxQkFBNEMsRUFDNUMsV0FBd0I7UUFIeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFkckMsZ0JBQVcsR0FBUTtZQUN0QixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNNLGVBQVUsR0FBUTtZQUN0QixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztRQWlCSyxVQUFLLEdBQXlCO1lBQ2pDLDZGQUE2RjtZQUM3RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGdCQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxnQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUM3RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUM7U0FDN0QsQ0FBQztRQWhCRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFVRCxnQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxzQkFBMEIsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQUssQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFtQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRTdGLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pFLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUVKLENBQUM7SUF6RU8sWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQXFCOEIsZUFBTTtZQUNILHlCQUFnQjtZQUNKLCtDQUFxQjtZQUMvQiwwQkFBVztPQXRCbkMsWUFBWSxDQTBFeEI7SUFBRCxtQkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcclxuaW1wb3J0IHsgVGhlbWUsIERlYnVnIH0gZnJvbSAnLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQZXJmb3JtYW5jZU1vbml0b3IsIFBlcmZvcm1hbmNlTW9uaXRvclNhbXBsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wZXJmb3JtYW5jZS1tb25pdG9yJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbiBcclxucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiBCb3R0b21CYXIpO1xyXG5jb25zdCBwZXJmb3JtYW5jZU1vbml0b3I6IFBlcmZvcm1hbmNlTW9uaXRvciA9IG5ldyBQZXJmb3JtYW5jZU1vbml0b3IoKTtcclxuIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbiBcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xyXG4gICAgcHVibGljIF9iYXI6IEJvdHRvbUJhcjtcclxuICAgIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aGVtZTogYW55O1xyXG4gICAgcHVibGljIGRlYnVnO1xyXG4gICAgcHVibGljIHNlbGVjdGVkVGFiOiBhbnkgPSB7XHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgdGl0bGU6ICcnXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uOiBhbnkgPSB7XHJcbiAgICAgICAgbmFtZTogJ3NsaWRlJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIGN1cnZlOiAnbGluZWFyJ1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX3VzZXI6IGFueTtcclxuIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgZ29vZ2xlTG9jYXRpb25TZXJ2aWNlOiBHb29nbGVMb2NhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLnRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgIHRoaXMuX3VzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAgICAgLy8gbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgXCJibGFja1wiLCBuZXcgTm90aWZpY2F0aW9uKFwiYmx1ZVwiLCBcIndoaXRlXCIsIFwiMVwiKSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgVGhlbWUuZGFya0dyZXkpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIFwiU3BlY2lhbHNcIiwgXCJzdGFyXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIkZhdm9yaXRlc1wiLCBcImZhdm9yaXRlXCIsIFRoZW1lLmRhcmtHcmV5KSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFRoZW1lLmRhcmtHcmV5KVxyXG4gICAgXTtcclxuIFxyXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcclxuICAgICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuYWNjZW50Q29sb3IgPSBUaGVtZS5hY2NlbnRDb2xvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICAgXHJcbiAgICAgICAgLy8gQWRqdXN0IHRyYW5zaXRpb24gZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uLm5hbWUgPSAoYXJncy5uZXdJbmRleCA+IHRoaXMuc2VsZWN0ZWRUYWIuaW5kZXgpID8gJ3NsaWRlTGVmdCcgOiAnc2xpZGVSaWdodCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc3BlY2lhbHNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9mYXZvcml0ZXNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9hY2NvdW50XCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgcm91dGUuJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxufSJdfQ==