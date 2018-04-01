"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: './components/login/login.module#LoginModule' },
    { path: "search", loadChildren: './components/search/search.module#SearchModule' },
    { path: "specials", loadChildren: './components/specials/specials.module#SpecialsModule' },
    { path: "favorites", loadChildren: './components/favorites/favorites.module#FavoritesModule' },
    { path: "account", loadChildren: './components/account/account.module#AccountModule' },
];
var AppRoutingModule = /** @class */ (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUE0RDtBQUM1RCxzREFBdUU7QUFHdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLDZDQUE2QyxFQUFDO0lBQzdFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZ0RBQWdELEVBQUM7SUFDakYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRTtJQUMxRixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLHlEQUF5RCxFQUFFO0lBQzlGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7Q0FDekYsQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFMNUIsZUFBUSxDQUFDO1lBQ1Asd0hBQXdIO1lBQ3ZILE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBTSxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSwwQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDbkcsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUHJlbG9hZEFsbE1vZHVsZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3VycmVudExvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tICcuL3Jlc29sdmVzL2N1cnJlbnQtbG9jYXRpb24ucmVzb2x2ZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGUnfSxcclxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZSd9LFxyXG4gICAgeyBwYXRoOiBcInNwZWNpYWxzXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9zcGVjaWFscy9zcGVjaWFscy5tb2R1bGUjU3BlY2lhbHNNb2R1bGUnIH0sXHJcbiAgICB7IHBhdGg6IFwiZmF2b3JpdGVzXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLm1vZHVsZSNGYXZvcml0ZXNNb2R1bGUnIH0sXHJcbiAgICB7IHBhdGg6IFwiYWNjb3VudFwiLCBsb2FkQ2hpbGRyZW46ICcuL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50Lm1vZHVsZSNBY2NvdW50TW9kdWxlJyB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgLy8gaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLCAtLS0tIHdhcyB0aGlzIHByaW9yIHRvIGNoYW5nZSBwcmVsb2FkaW5nIHN0cmF0ZWd5IC0tIFRTIDEyLzE1LzE3XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoPGFueT5yb3V0ZXMsIHsgcHJlbG9hZGluZ1N0cmF0ZWd5OiBQcmVsb2FkQWxsTW9kdWxlcyB9KV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19