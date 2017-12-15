"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var settings_1 = require("./settings");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var nativescript_performance_monitor_1 = require("nativescript-performance-monitor");
var color_1 = require("color");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var performanceMonitor = new nativescript_performance_monitor_1.PerformanceMonitor();
var AppComponent = (function () {
    function AppComponent(router, routerExt) {
        this.router = router;
        this.routerExt = routerExt;
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
            new nativescript_bottombar_1.BottomBarItem(0, "Search", "search", settings_1.Theme.bottombarColor),
            new nativescript_bottombar_1.BottomBarItem(1, "Specials", "star", settings_1.Theme.bottombarColor),
            new nativescript_bottombar_1.BottomBarItem(2, "Favorites", "favorite", settings_1.Theme.bottombarColor),
            new nativescript_bottombar_1.BottomBarItem(3, "Account", "account", settings_1.Theme.bottombarColor)
        ];
        this.theme = settings_1.Theme;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        performanceMonitor.start({
            textColor: new color_1.Color("white"),
            backgroundColor: new color_1.Color("black"),
            borderColor: new color_1.Color("black"),
            hide: false,
            onSample: function (sample) {
                _this.cpu = "FPS: " + sample.fps.toString();
                console.log("FPS: " + sample.fps);
                if (sample.cpu) {
                    console.log("CPU %: " + sample.cpu);
                }
            }
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
        this.transition.name = (args.newIndex > this.selectedTab.index) ? 'slideLeft' : 'slideRight';
        switch (args.newIndex) {
            case 0:
                console.log('Navigating to search');
                this.routerExt.navigate(["/search"], { transition: this.transition });
                break;
            case 1:
                console.log('Navigating to specials');
                this.routerExt.navigate(["/specials"], { transition: this.transition });
                break;
            case 2:
                console.log('Navigating to favorites');
                this.routerExt.navigate(["/favorites"], { transition: this.transition });
                break;
            case 3:
                console.log('Navigating to account');
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
        __metadata("design:paramtypes", [router_2.Router, router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBbUM7QUFDbkMsc0RBQXlGO0FBQ3pGLDBDQUF5RTtBQUN6RSxxRkFBZ0c7QUFDaEcsK0JBQThCO0FBRTlCLHNDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzlDLElBQU0sa0JBQWtCLEdBQXVCLElBQUkscURBQWtCLEVBQUUsQ0FBQztBQU94RTtJQWtCSSxzQkFBb0IsTUFBYyxFQUFVLFNBQTJCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVhoRSxnQkFBVyxHQUFRO1lBQ3RCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ00sZUFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFDO1FBeUJLLFVBQUssR0FBeUI7WUFDakMsNkZBQTZGO1lBQzdGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBSyxDQUFDLGNBQWMsQ0FBQztZQUM5RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsZ0JBQUssQ0FBQyxjQUFjLENBQUM7WUFDOUQsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFLLENBQUMsY0FBYyxDQUFDO1lBQ25FLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBSyxDQUFDLGNBQWMsQ0FBQztTQUNuRSxDQUFDO1FB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LEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUM7UUFDZCxDQUFDO0lBRUwsQ0FBQztJQXBGTyxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBb0I4QixlQUFNLEVBQXFCLHlCQUFnQjtPQWxCOUQsWUFBWSxDQXFGeEI7SUFBRCxtQkFBQztDQUFBLEFBckZELElBcUZDO0FBckZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGVyZm9ybWFuY2VNb25pdG9yLCBQZXJmb3JtYW5jZU1vbml0b3JTYW1wbGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcGVyZm9ybWFuY2UtbW9uaXRvcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbiBcclxucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiBCb3R0b21CYXIpO1xyXG5jb25zdCBwZXJmb3JtYW5jZU1vbml0b3I6IFBlcmZvcm1hbmNlTW9uaXRvciA9IG5ldyBQZXJmb3JtYW5jZU1vbml0b3IoKTtcclxuIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbiBcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xyXG4gICAgcHVibGljIF9iYXI6IEJvdHRvbUJhcjtcclxuICAgIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aGVtZTogYW55O1xyXG4gICAgcHVibGljIHNlbGVjdGVkVGFiOiBhbnkgPSB7XHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgdGl0bGU6ICcnXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uOiBhbnkgPSB7XHJcbiAgICAgICAgbmFtZTogJ3NsaWRlJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIGN1cnZlOiAnbGluZWFyJ1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBjcHU6IHN0cmluZztcclxuIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMpe1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLnRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBwZXJmb3JtYW5jZU1vbml0b3Iuc3RhcnQoe1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXHJcbiAgICAgICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBvblNhbXBsZTogKHNhbXBsZTogUGVyZm9ybWFuY2VNb25pdG9yU2FtcGxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jcHUgPSBcIkZQUzogXCIgKyBzYW1wbGUuZnBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUFM6IFwiICsgc2FtcGxlLmZwcyk7XHJcbiAgICAgICAgICAgICAgaWYgKHNhbXBsZS5jcHUpIHsgLy8gaU9TIG9ubHkgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSAlOiBcIiArIHNhbXBsZS5jcHUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAgICAgLy8gbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgXCJibGFja1wiLCBuZXcgTm90aWZpY2F0aW9uKFwiYmx1ZVwiLCBcIndoaXRlXCIsIFwiMVwiKSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgVGhlbWUuYm90dG9tYmFyQ29sb3IpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIFwiU3BlY2lhbHNcIiwgXCJzdGFyXCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIkZhdm9yaXRlc1wiLCBcImZhdm9yaXRlXCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKVxyXG4gICAgXTtcclxuIFxyXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcclxuICAgICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuYWNjZW50Q29sb3IgPSBUaGVtZS5hY2NlbnRDb2xvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgLy8gQWRqdXN0IHRyYW5zaXRpb24gZGlyZWN0aW9uXHJcbiAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID0gKGFyZ3MubmV3SW5kZXggPiB0aGlzLnNlbGVjdGVkVGFiLmluZGV4KSA/ICdzbGlkZUxlZnQnIDogJ3NsaWRlUmlnaHQnO1xyXG4gICAgICAgICBcclxuICAgICAgICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KXtcclxuICAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gc2VhcmNoJyk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gc3BlY2lhbHMnKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc3BlY2lhbHNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGZhdm9yaXRlcycpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9mYXZvcml0ZXNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGFjY291bnQnKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvYWNjb3VudFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIHJvdXRlLicpO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxufSJdfQ==