"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/search", pathMatch: "full" },
    { path: "home", loadChildren: './home/home.module#HomeModule' },
    { path: "search", loadChildren: './components/search/search.module#SearchModule' },
    { path: "specials", loadChildren: './components/specials/specials.module#SpecialsModule' },
    { path: "favorites", loadChildren: './components/favorites/favorites.module#FavoritesModule' },
    { path: "account", loadChildren: './components/account/account.module#AccountModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            // imports: [NativeScriptRouterModule.forRoot(routes)], ---- was this prior to change preloading strategy -- TS 12/15/17
            imports: [router_2.NativeScriptRouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })],
            exports: [router_2.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUE0RDtBQUM1RCxzREFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFDO0lBQzlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZ0RBQWdELEVBQUU7SUFDbEYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRTtJQUMxRixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLHlEQUF5RCxFQUFFO0lBQzlGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7Q0FDekYsQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFMNUIsZUFBUSxDQUFDO1lBQ1Asd0hBQXdIO1lBQ3ZILE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBTSxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSwwQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDbkcsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFByZWxvYWRBbGxNb2R1bGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3NlYXJjaFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiAnLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGUnfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGUnIH0sXG4gICAgeyBwYXRoOiBcInNwZWNpYWxzXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9zcGVjaWFscy9zcGVjaWFscy5tb2R1bGUjU3BlY2lhbHNNb2R1bGUnIH0sXG4gICAgeyBwYXRoOiBcImZhdm9yaXRlc1wiLCBsb2FkQ2hpbGRyZW46ICcuL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5tb2R1bGUjRmF2b3JpdGVzTW9kdWxlJyB9LFxuICAgIHsgcGF0aDogXCJhY2NvdW50XCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQubW9kdWxlI0FjY291bnRNb2R1bGUnIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgLy8gaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLCAtLS0tIHdhcyB0aGlzIHByaW9yIHRvIGNoYW5nZSBwcmVsb2FkaW5nIHN0cmF0ZWd5IC0tIFRTIDEyLzE1LzE3XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KDxhbnk+cm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMgfSldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=