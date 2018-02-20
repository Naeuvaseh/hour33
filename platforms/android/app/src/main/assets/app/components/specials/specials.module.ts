import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { SpecialsService } from "../../services/specials.service";
import { SpecialsRoutingModule } from "./specials-routing.module";
import { SpecialsComponent } from "./specials.component";
import { StarComponent } from './star/star.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpecialsRoutingModule,
        NativeScriptUIListViewModule
    ],
    providers:[
        SpecialsService
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
