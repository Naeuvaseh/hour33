import { NgModule } from "@angular/core";
import { Routes, PreloadAllModules } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CurrentLocationResolver } from './resolves/current-location.resolve';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: './components/login/login.module#LoginModule'},
    { path: "search", loadChildren: './components/search/search.module#SearchModule'},
    { path: "specials", loadChildren: './components/specials/specials.module#SpecialsModule' },
    { path: "favorites", loadChildren: './components/favorites/favorites.module#FavoritesModule' },
    { path: "account", loadChildren: './components/account/account.module#AccountModule' },
];

@NgModule({
   // imports: [NativeScriptRouterModule.forRoot(routes)], ---- was this prior to change preloading strategy -- TS 12/15/17
    imports: [NativeScriptRouterModule.forRoot(<any>routes, { preloadingStrategy: PreloadAllModules })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
