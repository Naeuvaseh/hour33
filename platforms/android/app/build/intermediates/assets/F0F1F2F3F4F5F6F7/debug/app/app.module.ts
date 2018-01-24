import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { GoogleLocationService } from './services/google-location.service';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, 
          useClass: NSModuleFactoryLoader },
          GoogleLocationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
