"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var http_2 = require("@angular/common/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var google_location_service_1 = require("./services/google-location.service");
var current_location_resolve_1 = require("./resolves/current-location.resolve");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_service_1 = require("./services/user.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                http_2.HttpClientModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                google_location_service_1.GoogleLocationService,
                user_service_1.UserService,
                current_location_resolve_1.CurrentLocationResolver
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsa0RBQW1FO0FBQ25FLDZDQUFvRTtBQUNwRSxnRkFBOEU7QUFFOUUsOEVBQTJFO0FBQzNFLGdGQUE4RTtBQUM5RSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQXdCdEQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXRCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsdUJBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ0wsK0NBQXFCO2dCQUNyQiwwQkFBVztnQkFDWCxrREFBdUI7YUFDNUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEN1cnJlbnRMb2NhdGlvblJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcy9jdXJyZW50LWxvY2F0aW9uLnJlc29sdmUnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICBHb29nbGVMb2NhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICBVc2VyU2VydmljZSxcclxuICAgICAgICAgIEN1cnJlbnRMb2NhdGlvblJlc29sdmVyXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19