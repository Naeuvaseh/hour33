import {
  NgModule,
  NgModuleFactoryLoader,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { GoogleLocationService } from "./services/google-location.service";
import { CurrentLocationResolver } from "./resolves/current-location.resolve";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserService } from "./services/user.service";
import { BottomBarService } from "./services/bottom-bar.service";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [
    GoogleLocationService,
    UserService,
    BottomBarService,
    CurrentLocationResolver
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
