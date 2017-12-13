"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var settings_1 = require("./settings");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var AppComponent = (function () {
    function AppComponent() {
        this.selectedTab = {
            index: 0,
            title: ''
        };
        this.items = [
            // new BottomBarItem(0, "Search", "search", "black", new Notification("blue", "white", "1")),
            new nativescript_bottombar_1.BottomBarItem(0, "Search", "search", settings_1.Settings.bottombarColor),
            new nativescript_bottombar_1.BottomBarItem(1, "Specials", "star", settings_1.Settings.bottombarColor),
            new nativescript_bottombar_1.BottomBarItem(2, "Favorites", "favorite", settings_1.Settings.bottombarColor),
            new nativescript_bottombar_1.BottomBarItem(3, "Account", "account", settings_1.Settings.bottombarColor)
        ];
        this.Settings = settings_1.Settings;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }
    AppComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 1 /* ALWAYS_SHOW */;
        this.inactiveColor = settings_1.Settings.inactiveColor;
        this.accentColor = settings_1.Settings.accentColor;
    };
    AppComponent.prototype.tabSelected = function (args) {
        console.log(args.newIndex);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkRBQXVEO0FBQ3ZELGlFQUE0SDtBQUM1SCx1Q0FBc0M7QUFFdEMsc0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFPOUM7SUFZSTtRQUxPLGdCQUFXLEdBQVE7WUFDdEIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFRSyxVQUFLLEdBQXlCO1lBQ2pDLDZGQUE2RjtZQUM3RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsbUJBQVEsQ0FBQyxjQUFjLENBQUM7WUFDakUsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLG1CQUFRLENBQUMsY0FBYyxDQUFDO1lBQ2pFLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxtQkFBUSxDQUFDLGNBQWMsQ0FBQztZQUN0RSxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUJBQVEsQ0FBQyxjQUFjLENBQUM7U0FDdEUsQ0FBQztRQVhFLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3RDLENBQUM7SUFVRCxnQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxzQkFBMEIsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFRLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQztJQUVBLGtDQUFXLEdBQVgsVUFBWSxJQUFtQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBcENPLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7T0FFVyxZQUFZLENBcUN4QjtJQUFELG1CQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbiBcbnJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcbiBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbiBcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG4gICAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xuICAgIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgU2V0dGluZ3M6IGFueTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRUYWI6IGFueSA9IHtcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgIH07XG4gXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYi50aXRsZSA9ICdTZWFyY2gnO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PEJvdHRvbUJhckl0ZW0+ID0gW1xuICAgICAgICAvLyBuZXcgQm90dG9tQmFySXRlbSgwLCBcIlNlYXJjaFwiLCBcInNlYXJjaFwiLCBcImJsYWNrXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgU2V0dGluZ3MuYm90dG9tYmFyQ29sb3IpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIlNwZWNpYWxzXCIsIFwic3RhclwiLCBTZXR0aW5ncy5ib3R0b21iYXJDb2xvciksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiRmF2b3JpdGVzXCIsIFwiZmF2b3JpdGVcIiwgU2V0dGluZ3MuYm90dG9tYmFyQ29sb3IpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIkFjY291bnRcIiwgXCJhY2NvdW50XCIsIFNldHRpbmdzLmJvdHRvbWJhckNvbG9yKVxuICAgIF07XG4gXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gU2V0dGluZ3MuaW5hY3RpdmVDb2xvcjtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9IFNldHRpbmdzLmFjY2VudENvbG9yO1xuICAgIH1cbiAgICBcbiAgICAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xuICAgICB9XG59Il19