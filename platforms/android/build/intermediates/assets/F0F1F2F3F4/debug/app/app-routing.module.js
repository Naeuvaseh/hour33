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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUE0RDtBQUM1RCxzREFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFDO0lBQzlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZ0RBQWdELEVBQUU7SUFDbEYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRTtJQUMxRixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLHlEQUF5RCxFQUFFO0lBQzlGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7Q0FDekYsQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFMNUIsZUFBUSxDQUFDO1lBQ1Asd0hBQXdIO1lBQ3ZILE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBTSxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSwwQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDbkcsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUHJlbG9hZEFsbE1vZHVsZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9zZWFyY2hcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiAnLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGUnfSxcclxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZScgfSxcclxuICAgIHsgcGF0aDogXCJzcGVjaWFsc1wiLCBsb2FkQ2hpbGRyZW46ICcuL2NvbXBvbmVudHMvc3BlY2lhbHMvc3BlY2lhbHMubW9kdWxlI1NwZWNpYWxzTW9kdWxlJyB9LFxyXG4gICAgeyBwYXRoOiBcImZhdm9yaXRlc1wiLCBsb2FkQ2hpbGRyZW46ICcuL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5tb2R1bGUjRmF2b3JpdGVzTW9kdWxlJyB9LFxyXG4gICAgeyBwYXRoOiBcImFjY291bnRcIiwgbG9hZENoaWxkcmVuOiAnLi9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5tb2R1bGUjQWNjb3VudE1vZHVsZScgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgIC8vIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSwgLS0tLSB3YXMgdGhpcyBwcmlvciB0byBjaGFuZ2UgcHJlbG9hZGluZyBzdHJhdGVneSAtLSBUUyAxMi8xNS8xN1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KDxhbnk+cm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMgfSldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==