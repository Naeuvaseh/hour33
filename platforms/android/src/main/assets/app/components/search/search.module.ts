import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { VendorListingComponent } from "./vendor-listing/vendor-listing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent,
        VendorListingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
