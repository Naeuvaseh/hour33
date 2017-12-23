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
var vendor_review_component_1 = require("./vendor-detail/vendor-tab-reviews/vendor-review.component");
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
                vendor_navigation_component_1.VendorNavigationComponent,
                // Vendor Reviews
                vendor_review_component_1.VendorReviewComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRixpRUFBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELHNGQUFtRjtBQUNuRixtRkFBZ0Y7QUFDaEYsZ0VBQThEO0FBQzlELGtJQUErSDtBQUMvSCxrSUFBOEg7QUFDOUgsd0lBQW9JO0FBQ3BJLGdIQUE2RztBQUM3Ryx1R0FBb0c7QUFDcEcsNEhBQXlIO0FBQ3pILHNHQUFtRztBQWdDbkc7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUE3QnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsc0NBQTRCO2FBQy9CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDhCQUFhO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsaURBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLDZCQUE2QjtnQkFDN0IseURBQTBCO2dCQUMxQix3REFBeUI7Z0JBQ3pCLDREQUEyQjtnQkFDM0IsNkNBQW9CO2dCQUNwQiwwQkFBMEI7Z0JBQzFCLHlDQUFrQjtnQkFDbEIsdURBQXlCO2dCQUN6QixpQkFBaUI7Z0JBQ2pCLCtDQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2VhcmNoLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFZlbmRvckRlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1kZXNjcmlwdGlvbi92ZW5kb3ItZGVzY3JpcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9ySGFwcHlIb3Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaGFwcHktaG91cnMvdmVuZG9yLWhhcHB5LWhvdXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvclJlZ3VsYXJIb3Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItcmVndWxhci1ob3Vycy92ZW5kb3ItcmVndWxhci1ob3Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JTY29yZUNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3Itc2NvcmUvdmVuZG9yLXNjb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvck1hcENvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLW1hcC92ZW5kb3ItbWFwL3ZlbmRvci1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLW1hcC92ZW5kb3ItbmF2aWdhdGlvbi92ZW5kb3ItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JSZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1yZXZpZXdzL3ZlbmRvci1yZXZpZXcuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTZWFyY2hSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBWZW5kb3JTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFNlYXJjaCBQYWdlXHJcbiAgICAgICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgLy8gVmVuZG9yIERldGFpbCAtIERldGFpbCBUYWJcclxuICAgICAgICBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JIYXBweUhvdXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvclJlZ3VsYXJIb3Vyc0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JTY29yZUNvbXBvbmVudCxcclxuICAgICAgICAvLyBWZW5kb3IgRGV0YWlsIC0gTWFwIFRhYlxyXG4gICAgICAgIFZlbmRvck1hcENvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFZlbmRvciBSZXZpZXdzXHJcbiAgICAgICAgVmVuZG9yUmV2aWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cclxuIl19