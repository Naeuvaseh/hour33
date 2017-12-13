"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
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
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUM7SUFDOUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHNEQUFzRCxFQUFFO0lBQzFGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUseURBQXlELEVBQUU7SUFDOUYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxtREFBbUQsRUFBRTtDQUN6RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3NlYXJjaFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46ICcuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZSd9LFxyXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlJyB9LFxyXG4gICAgeyBwYXRoOiBcInNwZWNpYWxzXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9zcGVjaWFscy9zcGVjaWFscy5tb2R1bGUjU3BlY2lhbHNNb2R1bGUnIH0sXHJcbiAgICB7IHBhdGg6IFwiZmF2b3JpdGVzXCIsIGxvYWRDaGlsZHJlbjogJy4vY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLm1vZHVsZSNGYXZvcml0ZXNNb2R1bGUnIH0sXHJcbiAgICB7IHBhdGg6IFwiYWNjb3VudFwiLCBsb2FkQ2hpbGRyZW46ICcuL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50Lm1vZHVsZSNBY2NvdW50TW9kdWxlJyB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=