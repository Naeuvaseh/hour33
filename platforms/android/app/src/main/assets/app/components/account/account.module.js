"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var account_routing_module_1 = require("./account-routing.module");
var account_component_1 = require("./account.component");
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                account_routing_module_1.AccountRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                account_component_1.AccountComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFldkQ7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFiekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFjY291bnRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYWNjb3VudC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQWNjb3VudENvbXBvbmVudCB9IGZyb20gXCIuL2FjY291bnQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEFjY291bnRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFjY291bnRDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3VudE1vZHVsZSB7IH1cbiJdfQ==