"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var account_routing_module_1 = require("./account-routing.module");
var account_component_1 = require("./account.component");
var AccountModule = /** @class */ (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFldkQ7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFiekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFjY291bnRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYWNjb3VudC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSBcIi4vYWNjb3VudC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEFjY291bnRSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQWNjb3VudENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TW9kdWxlIHsgfVxyXG4iXX0=