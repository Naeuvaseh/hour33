"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var favorites_routing_module_1 = require("./favorites-routing.module");
var favorites_component_1 = require("./favorites.component");
var FavoritesModule = /** @class */ (function () {
    function FavoritesModule() {
    }
    FavoritesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                favorites_routing_module_1.FavoritesRoutingModule
            ],
            declarations: [
                favorites_component_1.FavoritesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FavoritesModule);
    return FavoritesModule;
}());
exports.FavoritesModule = FavoritesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHVFQUFvRTtBQUNwRSw2REFBMkQ7QUFjM0Q7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFaM0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaURBQXNCO2FBQ3pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHdDQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgRmF2b3JpdGVzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Zhdm9yaXRlcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRmF2b3JpdGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vZmF2b3JpdGVzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBGYXZvcml0ZXNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmF2b3JpdGVzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlc01vZHVsZSB7IH1cbiJdfQ==