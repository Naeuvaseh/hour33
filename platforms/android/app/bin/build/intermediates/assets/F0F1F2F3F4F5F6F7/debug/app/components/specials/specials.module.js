"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var specials_service_1 = require("../../services/specials.service");
var specials_routing_module_1 = require("./specials-routing.module");
var specials_component_1 = require("./specials.component");
var star_component_1 = require("./star/star.component");
var SpecialsModule = /** @class */ (function () {
    function SpecialsModule() {
    }
    SpecialsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                specials_routing_module_1.SpecialsRoutingModule,
                angular_1.NativeScriptUIListViewModule
            ],
            providers: [
                specials_service_1.SpecialsService
            ],
            declarations: [
                specials_component_1.SpecialsComponent,
                star_component_1.StarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SpecialsModule);
    return SpecialsModule;
}());
exports.SpecialsModule = SpecialsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlY2lhbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxnRUFBb0Y7QUFDcEYsb0VBQWtFO0FBQ2xFLHFFQUFrRTtBQUNsRSwyREFBeUQ7QUFDekQsd0RBQXNEO0FBbUJ0RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWpCMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXFCO2dCQUNyQixzQ0FBNEI7YUFDL0I7WUFDRCxTQUFTLEVBQUM7Z0JBQ04sa0NBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBTcGVjaWFsc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3BlY2lhbHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVjaWFsc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zcGVjaWFscy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTcGVjaWFsc0NvbXBvbmVudCB9IGZyb20gXCIuL3NwZWNpYWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGFyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGFyL3N0YXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNwZWNpYWxzUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOltcclxuICAgICAgICBTcGVjaWFsc1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTcGVjaWFsc0NvbXBvbmVudCxcclxuICAgICAgICBTdGFyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWNpYWxzTW9kdWxlIHsgfVxyXG4iXX0=