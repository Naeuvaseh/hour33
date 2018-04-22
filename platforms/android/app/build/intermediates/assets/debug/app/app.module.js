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
var bottom_bar_service_1 = require("./services/bottom-bar.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                http_2.HttpClientModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [
                google_location_service_1.GoogleLocationService,
                user_service_1.UserService,
                bottom_bar_service_1.BottomBarService,
                current_location_resolve_1.CurrentLocationResolver
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FJdUI7QUFDdkIsa0RBQW1FO0FBQ25FLDZDQUFvRTtBQUNwRSxnRkFBOEU7QUFFOUUsOEVBQTJFO0FBQzNFLGdGQUE4RTtBQUM5RSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFtQmpFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFqQnJCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiw2QkFBc0I7Z0JBQ3RCLHVCQUFnQjthQUNqQjtZQUNELFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFO2dCQUNULCtDQUFxQjtnQkFDckIsMEJBQVc7Z0JBQ1gscUNBQWdCO2dCQUNoQixrREFBdUI7YUFDeEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBOZ01vZHVsZSxcclxuICBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXHJcbiAgTk9fRVJST1JTX1NDSEVNQVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ3VycmVudExvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tIFwiLi9yZXNvbHZlcy9jdXJyZW50LWxvY2F0aW9uLnJlc29sdmVcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJvdHRvbUJhclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ib3R0b20tYmFyLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVMb2NhdGlvblNlcnZpY2UsXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIEJvdHRvbUJhclNlcnZpY2UsXHJcbiAgICBDdXJyZW50TG9jYXRpb25SZXNvbHZlclxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19