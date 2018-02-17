"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var search_component_1 = require("./search.component");
var vendor_detail_component_1 = require("./vendor-detail/vendor-detail.component");
var vendor_detail_resolve_1 = require("./resolves/vendor-detail.resolve");
var routes = [
    { path: "", component: search_component_1.SearchComponent },
    {
        path: "vendor/:place_id",
        component: vendor_detail_component_1.VendorDetailComponent,
        resolve: {
            vendor: vendor_detail_resolve_1.VendorDetailResolve
        }
    }
];
var SearchRoutingModule = (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());
exports.SearchRoutingModule = SearchRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx1REFBcUQ7QUFDckQsbUZBQWdGO0FBQ2hGLDBFQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDeEM7UUFDSSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFNBQVMsRUFBRSwrQ0FBcUI7UUFDaEMsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLDJDQUFtQjtTQUM5QjtLQUNKO0NBQ0osQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbFJlc29sdmUgfSBmcm9tICcuL3Jlc29sdmVzL3ZlbmRvci1kZXRhaWwucmVzb2x2ZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfSxcclxuICAgIHsgXHJcbiAgICAgICAgcGF0aDogXCJ2ZW5kb3IvOnBsYWNlX2lkXCIsIFxyXG4gICAgICAgIGNvbXBvbmVudDogVmVuZG9yRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgdmVuZG9yOiBWZW5kb3JEZXRhaWxSZXNvbHZlXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==