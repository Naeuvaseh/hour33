import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SearchComponent } from "./search.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";
import { VendorDetailResolve } from './resolves/vendor-detail.resolve';

const routes: Routes = [
    { path: "", component: SearchComponent },
    { 
        path: "vendor/:place_id", 
        component: VendorDetailComponent,
        resolve: {
            vendor: VendorDetailResolve
        } 
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule { }
