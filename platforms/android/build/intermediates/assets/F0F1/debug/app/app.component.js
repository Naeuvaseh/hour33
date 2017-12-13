"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var settings_1 = require("./settings");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBbUM7QUFDbkMsc0RBQXlGO0FBQ3pGLDBDQUF5RTtBQUV6RSxzQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQU85QztJQWlCSSxzQkFBb0IsTUFBYyxFQUFVLFNBQTJCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVZoRSxnQkFBVyxHQUFRO1lBQ3RCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ00sZUFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFBO1FBUU0sVUFBSyxHQUF5QjtZQUNqQyw2RkFBNkY7WUFDN0YsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFLLENBQUMsY0FBYyxDQUFDO1lBQzlELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxnQkFBSyxDQUFDLGNBQWMsQ0FBQztZQUM5RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZ0JBQUssQ0FBQyxjQUFjLENBQUM7WUFDbkUsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFLLENBQUMsY0FBYyxDQUFDO1NBQ25FLENBQUM7UUFYRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBVUQsZ0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFjLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsc0JBQTBCLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFQSxrQ0FBVyxHQUFYLFVBQVksSUFBbUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFFN0YsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDbkIsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDekUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztRQUNkLENBQUM7SUFFTCxDQUFDO0lBbkVPLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FtQjhCLGVBQU0sRUFBcUIseUJBQWdCO09BakI5RCxZQUFZLENBb0V4QjtJQUFELG1CQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuIFxyXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG4gXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcclxuICAgIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XHJcbiAgICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGhlbWU6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRhYjogYW55ID0ge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIHRpdGxlOiAnJ1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbjogYW55ID0ge1xyXG4gICAgICAgIG5hbWU6ICdzbGlkZScsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcclxuICAgIH1cclxuIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMpe1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLnRpdGxlID0gJ1NlYXJjaCc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAgICAgLy8gbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgXCJibGFja1wiLCBuZXcgTm90aWZpY2F0aW9uKFwiYmx1ZVwiLCBcIndoaXRlXCIsIFwiMVwiKSksXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgVGhlbWUuYm90dG9tYmFyQ29sb3IpLFxyXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIFwiU3BlY2lhbHNcIiwgXCJzdGFyXCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIkZhdm9yaXRlc1wiLCBcImZhdm9yaXRlXCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKSxcclxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKVxyXG4gICAgXTtcclxuIFxyXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcclxuICAgICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBUaGVtZS5pbmFjdGl2ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuYWNjZW50Q29sb3IgPSBUaGVtZS5hY2NlbnRDb2xvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgLy8gQWRqdXN0IHRyYW5zaXRpb24gZGlyZWN0aW9uXHJcbiAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID0gKGFyZ3MubmV3SW5kZXggPiB0aGlzLnNlbGVjdGVkVGFiLmluZGV4KSA/ICdzbGlkZUxlZnQnIDogJ3NsaWRlUmlnaHQnO1xyXG4gICAgICAgICBcclxuICAgICAgICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KXtcclxuICAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gc2VhcmNoJyk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gc3BlY2lhbHMnKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc3BlY2lhbHNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGZhdm9yaXRlcycpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9mYXZvcml0ZXNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGFjY291bnQnKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvYWNjb3VudFwiXSwgeyB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIHJvdXRlLicpO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxufSJdfQ==