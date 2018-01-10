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
var vendor_hours_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/vendor-hours.component");
var vendor_score_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component");
var vendor_map_component_1 = require("./vendor-detail/vendor-tab-map/vendor-map/vendor-map.component");
var vendor_navigation_component_1 = require("./vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component");
var vendor_review_component_1 = require("./vendor-detail/vendor-tab-reviews/vendor-review.component");
var hour_listing_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-listing.component");
var hour_filter_pipe_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-filter.pipe");
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
                vendor_hours_component_1.VendorHoursComponent,
                vendor_score_component_1.VendorScoreComponent,
                hour_listing_component_1.HourListingComponent,
                hour_filter_pipe_1.HourFilterPipe,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRixpRUFBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELHNGQUFtRjtBQUNuRixtRkFBZ0Y7QUFDaEYsZ0VBQThEO0FBQzlELGtJQUErSDtBQUMvSCxnSEFBNkc7QUFDN0csZ0hBQTZHO0FBQzdHLHVHQUFvRztBQUNwRyw0SEFBeUg7QUFDekgsc0dBQW1HO0FBQ25HLDZIQUEwSDtBQUMxSCxpSEFBOEc7QUFpQzlHO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBOUJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwyQ0FBbUI7Z0JBQ25CLHNDQUE0QjthQUMvQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTthQUNoQjtZQUNELFlBQVksRUFBRTtnQkFDVixrQ0FBZTtnQkFDZixjQUFjO2dCQUNkLGlEQUFzQjtnQkFDdEIsK0NBQXFCO2dCQUNyQiw2QkFBNkI7Z0JBQzdCLHlEQUEwQjtnQkFDMUIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLDZDQUFvQjtnQkFDcEIsaUNBQWM7Z0JBQ2QsMEJBQTBCO2dCQUMxQix5Q0FBa0I7Z0JBQ2xCLHVEQUF5QjtnQkFDekIsaUJBQWlCO2dCQUNqQiwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvckxpc3RpbmdDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItZGVzY3JpcHRpb24vdmVuZG9yLWRlc2NyaXB0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvckhvdXJzQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1ob3Vycy92ZW5kb3ItaG91cnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yU2NvcmVDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXNjb3JlL3ZlbmRvci1zY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JNYXBDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW1hcC92ZW5kb3ItbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW5hdmlnYXRpb24vdmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yUmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItcmV2aWV3cy92ZW5kb3ItcmV2aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvdXJMaXN0aW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvaG91ci1saXN0aW5nL2hvdXItbGlzdGluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG91ckZpbHRlclBpcGUgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWZpbHRlci5waXBlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTZWFyY2hSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBWZW5kb3JTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFNlYXJjaCBQYWdlXHJcbiAgICAgICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgLy8gVmVuZG9yIERldGFpbCAtIERldGFpbCBUYWJcclxuICAgICAgICBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JIb3Vyc0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JTY29yZUNvbXBvbmVudCxcclxuICAgICAgICBIb3VyTGlzdGluZ0NvbXBvbmVudCxcclxuICAgICAgICBIb3VyRmlsdGVyUGlwZSxcclxuICAgICAgICAvLyBWZW5kb3IgRGV0YWlsIC0gTWFwIFRhYlxyXG4gICAgICAgIFZlbmRvck1hcENvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFZlbmRvciBSZXZpZXdzXHJcbiAgICAgICAgVmVuZG9yUmV2aWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cclxuIl19