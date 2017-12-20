import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SearchComponent } from "./search.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";

const routes: Routes = [
    { path: "", component: SearchComponent },
    { path: "vendor/:id", component: VendorDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule { }
