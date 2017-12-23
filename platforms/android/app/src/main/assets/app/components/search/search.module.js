"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var search_routing_module_1 = require("./search-routing.module");
var search_component_1 = require("./search.component");
var vendor_listing_component_1 = require("./vendor-listing/vendor-listing.component");
var vendor_detail_component_1 = require("./vendor-detail/vendor-detail.component");
var vendor_service_1 = require("../../services/vendor.service");
var vendor_description_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-description/vendor-description.component");
var vendor_happy_hours_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-happy-hours/vendor-happy-hours.component");
var vendor_regular_hours_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-regular-hours/vendor-regular-hours.component");
var vendor_score_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component");
var vendor_map_component_1 = require("./vendor-detail/vendor-tab-map/vendor-map/vendor-map.component");
var vendor_navigation_component_1 = require("./vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component");
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                search_routing_module_1.SearchRoutingModule,
                angular_1.NativeScriptUIListViewModule
            ],
            providers: [
                vendor_service_1.VendorService
            ],
            declarations: [
                search_component_1.SearchComponent,
                // Search Page
                vendor_listing_component_1.VendorListingComponent,
                vendor_detail_component_1.VendorDetailComponent,
                // Vendor Detail - Detail Tab
                vendor_description_component_1.VendorDescriptionComponent,
                vendor_happy_hours_component_1.VendorHappyHoursComponent,
                vendor_regular_hours_component_1.VendorRegularHoursComponent,
                vendor_score_component_1.VendorScoreComponent,
                // Vendor Detail - Map Tab
                vendor_map_component_1.VendorMapComponent,
                vendor_navigation_component_1.VendorNavigationComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRixpRUFBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELHNGQUFtRjtBQUNuRixtRkFBZ0Y7QUFDaEYsZ0VBQThEO0FBQzlELGtJQUErSDtBQUMvSCxrSUFBOEg7QUFDOUgsd0lBQW9JO0FBQ3BJLGdIQUE2RztBQUM3Ryx1R0FBb0c7QUFDcEcsNEhBQXlIO0FBOEJ6SDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQTNCeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2dCQUNuQixzQ0FBNEI7YUFDL0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsOEJBQWE7YUFDaEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7Z0JBQ2YsY0FBYztnQkFDZCxpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsNkJBQTZCO2dCQUM3Qix5REFBMEI7Z0JBQzFCLHdEQUF5QjtnQkFDekIsNERBQTJCO2dCQUMzQiw2Q0FBb0I7Z0JBQ3BCLDBCQUEwQjtnQkFDMUIseUNBQWtCO2dCQUNsQix1REFBeUI7YUFDNUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvckxpc3RpbmdDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItZGVzY3JpcHRpb24vdmVuZG9yLWRlc2NyaXB0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvckhhcHB5SG91cnNDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhhcHB5LWhvdXJzL3ZlbmRvci1oYXBweS1ob3Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JSZWd1bGFySG91cnNDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXJlZ3VsYXItaG91cnMvdmVuZG9yLXJlZ3VsYXItaG91cnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yU2NvcmVDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXNjb3JlL3ZlbmRvci1zY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JNYXBDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW1hcC92ZW5kb3ItbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW5hdmlnYXRpb24vdmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTZWFyY2hSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBWZW5kb3JTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFNlYXJjaCBQYWdlXHJcbiAgICAgICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgLy8gVmVuZG9yIERldGFpbCAtIERldGFpbCBUYWJcclxuICAgICAgICBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JIYXBweUhvdXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvclJlZ3VsYXJIb3Vyc0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JTY29yZUNvbXBvbmVudCxcclxuICAgICAgICAvLyBWZW5kb3IgRGV0YWlsIC0gTWFwIFRhYlxyXG4gICAgICAgIFZlbmRvck1hcENvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cclxuIl19