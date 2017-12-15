import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/search", pathMatch: "full" },
    { path: "home", loadChildren: './home/home.module#HomeModule'},
    { path: "search", loadChildren: './components/search/search.module#SearchModule' },
    { path: "specials", loadChildren: './components/specials/specials.module#SpecialsModule' },
    { path: "favorites", loadChildren: './components/favorites/favorites.module#FavoritesModule' },
    { path: "account", loadChildren: './components/account/account.module#AccountModule' },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
