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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBbUM7QUFDbkMsc0RBQXlGO0FBQ3pGLDBDQUF5RTtBQUV6RSxzQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQU85QztJQWlCSSxzQkFBb0IsTUFBYyxFQUFVLFNBQTJCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVZoRSxnQkFBVyxHQUFRO1lBQ3RCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ00sZUFBVSxHQUFRO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUFBO1FBUU0sVUFBSyxHQUF5QjtZQUNqQyw2RkFBNkY7WUFDN0YsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFLLENBQUMsY0FBYyxDQUFDO1lBQzlELElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxnQkFBSyxDQUFDLGNBQWMsQ0FBQztZQUM5RCxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZ0JBQUssQ0FBQyxjQUFjLENBQUM7WUFDbkUsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFLLENBQUMsY0FBYyxDQUFDO1NBQ25FLENBQUM7UUFYRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBVUQsZ0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFjLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsc0JBQTBCLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFQSxrQ0FBVyxHQUFYLFVBQVksSUFBbUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFFN0YsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDbkIsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDekUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztRQUNkLENBQUM7SUFFTCxDQUFDO0lBbkVPLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FtQjhCLGVBQU0sRUFBcUIseUJBQWdCO09BakI5RCxZQUFZLENBb0V4QjtJQUFELG1CQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuIFxucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiBCb3R0b21CYXIpO1xuIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuIFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcbiAgICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEU7XG4gICAgcHVibGljIF9iYXI6IEJvdHRvbUJhcjtcbiAgICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0aGVtZTogYW55O1xuICAgIHB1YmxpYyBzZWxlY3RlZFRhYjogYW55ID0ge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgfTtcbiAgICBwcml2YXRlIHRyYW5zaXRpb246IGFueSA9IHtcbiAgICAgICAgbmFtZTogJ3NsaWRlJyxcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgfVxuIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zKXtcbiAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYi50aXRsZSA9ICdTZWFyY2gnO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PEJvdHRvbUJhckl0ZW0+ID0gW1xuICAgICAgICAvLyBuZXcgQm90dG9tQmFySXRlbSgwLCBcIlNlYXJjaFwiLCBcInNlYXJjaFwiLCBcImJsYWNrXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgVGhlbWUuYm90dG9tYmFyQ29sb3IpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIlNwZWNpYWxzXCIsIFwic3RhclwiLCBUaGVtZS5ib3R0b21iYXJDb2xvciksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiRmF2b3JpdGVzXCIsIFwiZmF2b3JpdGVcIiwgVGhlbWUuYm90dG9tYmFyQ29sb3IpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFRoZW1lLmJvdHRvbWJhckNvbG9yKVxuICAgIF07XG4gXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gVGhlbWUuaW5hY3RpdmVDb2xvcjtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9IFRoZW1lLmFjY2VudENvbG9yO1xuICAgIH1cbiAgICBcbiAgICAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xuICAgICAgICAgXG4gICAgICAgICAvLyBBZGp1c3QgdHJhbnNpdGlvbiBkaXJlY3Rpb25cbiAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5uYW1lID0gKGFyZ3MubmV3SW5kZXggPiB0aGlzLnNlbGVjdGVkVGFiLmluZGV4KSA/ICdzbGlkZUxlZnQnIDogJ3NsaWRlUmlnaHQnO1xuICAgICAgICAgXG4gICAgICAgICBzd2l0Y2ggKGFyZ3MubmV3SW5kZXgpe1xuICAgICAgICAgICAgIGNhc2UgMDogXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIHNlYXJjaCcpO1xuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBzcGVjaWFscycpO1xuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvc3BlY2lhbHNcIl0sIHsgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uIH0pO1xuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGZhdm9yaXRlcycpO1xuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvZmF2b3JpdGVzXCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBhY2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9hY2NvdW50XCJdLCB7IHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgcm91dGUuJyk7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgIH1cbn0iXX0=