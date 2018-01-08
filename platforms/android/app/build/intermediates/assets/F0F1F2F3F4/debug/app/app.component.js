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
        this.debug = settings_1.Debug;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.debug.fps) {
            performanceMonitor.start({
                textColor: new color_1.Color("white"),
                backgroundColor: new color_1.Color("black"),
                borderColor: new color_1.Color("black"),
                hide: false,
                onSample: function (sample) {
                    console.log("FPS: " + sample.fps);
                    if (sample.cpu) {
                        console.log("CPU %: " + sample.cpu);
                    }
                }
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBMEM7QUFDMUMsc0RBQXlGO0FBQ3pGLDBDQUF5RTtBQUN6RSxxRkFBZ0c7QUFDaEcsK0JBQThCO0FBRTlCLHNDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzlDLElBQU0sa0JBQWtCLEdBQXVCLElBQUkscURBQWtCLEVBQUUsQ0FBQztBQU94RTtJQWtCSSxzQkFBb0IsTUFBYyxFQUFVLFNBQTJCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVZoRSxnQkFBVyxHQUFRO1lBQ3RCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ00sZUFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFDO1FBMEJLLFVBQUssR0FBeUI7WUFDakMsNkZBQTZGO1lBQzdGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBSyxDQUFDLGNBQWMsQ0FBQztZQUM5RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsZ0JBQUssQ0FBQyxjQUFjLENBQUM7WUFDOUQsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFLLENBQUMsY0FBYyxDQUFDO1lBQ25FLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBSyxDQUFDLGNBQWMsQ0FBQztTQUNuRSxDQUFDO1FB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UyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUVMLENBQUM7SUF0Rk8sWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQW9COEIsZUFBTSxFQUFxQix5QkFBZ0I7T0FsQjlELFlBQVksQ0F1RnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZGRCxJQXVGQztBQXZGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgTm90aWZpY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XHJcbmltcG9ydCB7IFRoZW1lLCBEZWJ1ZyB9IGZyb20gJy4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQZXJmb3JtYW5jZU1vbml0b3IsIFBlcmZvcm1hbmNlTW9uaXRvclNhbXBsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wZXJmb3JtYW5jZS1tb25pdG9yJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuIFxyXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XHJcbmNvbnN0IHBlcmZvcm1hbmNlTW9uaXRvcjogUGVyZm9ybWFuY2VNb25pdG9yID0gbmV3IFBlcmZvcm1hbmNlTW9uaXRvcigpO1xyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuIFxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEU7XHJcbiAgICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xyXG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHRoZW1lOiBhbnk7XHJcbiAgICBwdWJsaWMgZGVidWc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRUYWI6IGFueSA9IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICB0aXRsZTogJydcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHRyYW5zaXRpb246IGFueSA9IHtcclxuICAgICAgICBuYW1lOiAnc2xpZGUnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgY3VydmU6ICdsaW5lYXInXHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyl7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLnRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Zy5mcHMpe1xyXG4gICAgICAgIHBlcmZvcm1hbmNlTW9uaXRvci5zdGFydCh7XHJcbiAgICAgICAgICAgIHRleHRDb2xvcjogbmV3IENvbG9yKFwid2hpdGVcIiksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcclxuICAgICAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uU2FtcGxlOiAoc2FtcGxlOiBQZXJmb3JtYW5jZU1vbml0b3JTYW1wbGUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZQUzogXCIgKyBzYW1wbGUuZnBzKTtcclxuICAgICAgICAgICAgICBpZiAoc2FtcGxlLmNwdSkgeyAvLyBpT1Mgb25seSBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1BVICU6IFwiICsgc2FtcGxlLmNwdSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAgICAgLy8gbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgXCJibGFja1wiLCBuZXcgTm90aWZpY2F0aW9uKFwiYmx1ZVwiLCBcIndoaXRlXCIsIFwiMVwiKSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgVGhlbWUuYm90dG9tYmFyQ29sb3IpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIFwiU3BlY2lhbHNcIiwgXCJzdGFyXCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIkZhdm9yaXRlc1wiLCBcImZhdm9yaXRlXCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKVxyXG4gICAgXTtcclxuIFxyXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcclxuICAgICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuYWNjZW50Q29sb3IgPSBUaGVtZS5hY2NlbnRDb2xvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgLy8gQWRqdXN0IHRyYW5zaXRpb24gZGlyZWN0aW9uXHJcbiAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID0gKGFyZ3MubmV3SW5kZXggPiB0aGlzLnNlbGVjdGVkVGFiLmluZGV4KSA/ICdzbGlkZUxlZnQnIDogJ3NsaWRlUmlnaHQnO1xyXG4gICAgICAgICBcclxuICAgICAgICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KXtcclxuICAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gc2VhcmNoJyk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gc3BlY2lhbHMnKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc3BlY2lhbHNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGZhdm9yaXRlcycpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9mYXZvcml0ZXNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGFjY291bnQnKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvYWNjb3VudFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIHJvdXRlLicpO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxufSJdfQ==