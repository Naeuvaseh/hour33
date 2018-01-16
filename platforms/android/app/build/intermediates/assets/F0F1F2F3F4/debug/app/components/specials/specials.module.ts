import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpecialsRoutingModule } from "./specials-routing.module";
import { SpecialsComponent } from "./specials.component";
import { StarComponent } from './star/star.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpecialsRoutingModule
    ],
    declarations: [
        SpecialsComponent,
        StarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SpecialsModule { }
