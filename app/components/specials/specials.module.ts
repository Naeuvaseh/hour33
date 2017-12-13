import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpecialsRoutingModule } from "./specials-routing.module";
import { SpecialsComponent } from "./specials.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpecialsRoutingModule
    ],
    declarations: [
        SpecialsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SpecialsModule { }
