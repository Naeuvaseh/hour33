"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var specials_routing_module_1 = require("./specials-routing.module");
var specials_component_1 = require("./specials.component");
var star_component_1 = require("./star/star.component");
var SpecialsModule = (function () {
    function SpecialsModule() {
    }
    SpecialsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                specials_routing_module_1.SpecialsRoutingModule
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlY2lhbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELHdEQUFzRDtBQWV0RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7YUFDeEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgU3BlY2lhbHNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc3BlY2lhbHMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFNwZWNpYWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vc3BlY2lhbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdGFyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGFyL3N0YXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3BlY2lhbHNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3BlY2lhbHNDb21wb25lbnQsXG4gICAgICAgIFN0YXJDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3BlY2lhbHNNb2R1bGUgeyB9XG4iXX0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlY2lhbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELHdEQUFzRDtBQWV0RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7YUFDeEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgU3BlY2lhbHNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc3BlY2lhbHMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU3BlY2lhbHNDb21wb25lbnQgfSBmcm9tIFwiLi9zcGVjaWFscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3RhckNvbXBvbmVudCB9IGZyb20gJy4vc3Rhci9zdGFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTcGVjaWFsc1JvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTcGVjaWFsc0NvbXBvbmVudCxcclxuICAgICAgICBTdGFyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWNpYWxzTW9kdWxlIHsgfVxyXG4iXX0=
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
