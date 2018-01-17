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
var current_day_pipe_1 = require("./vendor-listing/current-day.pipe");
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
                current_day_pipe_1.CurrentDayPipe,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRixpRUFBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELHNGQUFtRjtBQUNuRixtRkFBZ0Y7QUFDaEYsZ0VBQThEO0FBQzlELGtJQUErSDtBQUMvSCxnSEFBNkc7QUFDN0csZ0hBQTZHO0FBQzdHLHVHQUFvRztBQUNwRyw0SEFBeUg7QUFDekgsc0dBQW1HO0FBQ25HLDZIQUEwSDtBQUMxSCxpSEFBOEc7QUFDOUcsc0VBQW1FO0FBaUNuRTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQS9CeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2dCQUNuQixzQ0FBNEI7YUFDL0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsOEJBQWE7YUFDaEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7Z0JBQ2YsY0FBYztnQkFDZCxpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsaUNBQWM7Z0JBQ2QsNkJBQTZCO2dCQUM3Qix5REFBMEI7Z0JBQzFCLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLGlDQUFjO2dCQUNkLDBCQUEwQjtnQkFDMUIseUNBQWtCO2dCQUNsQix1REFBeUI7Z0JBQ3pCLGlCQUFpQjtnQkFDakIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFNlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zZWFyY2gtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JMaXN0aW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmVuZG9yRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWRlc2NyaXB0aW9uL3ZlbmRvci1kZXNjcmlwdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JIb3Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvdmVuZG9yLWhvdXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvclNjb3JlQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1zY29yZS92ZW5kb3Itc2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yTWFwQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItbWFwL3ZlbmRvci1tYXAvdmVuZG9yLW1hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItbWFwL3ZlbmRvci1uYXZpZ2F0aW9uL3ZlbmRvci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvclJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLXJldmlld3MvdmVuZG9yLXJldmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb3VyTGlzdGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWxpc3RpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvdXJGaWx0ZXJQaXBlIH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1ob3Vycy9ob3VyLWxpc3RpbmcvaG91ci1maWx0ZXIucGlwZSc7XHJcbmltcG9ydCB7IEN1cnJlbnREYXlQaXBlIH0gZnJvbSAnLi92ZW5kb3ItbGlzdGluZy9jdXJyZW50LWRheS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNlYXJjaFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFZlbmRvclNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgLy8gU2VhcmNoIFBhZ2VcclxuICAgICAgICBWZW5kb3JMaXN0aW5nQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvckRldGFpbENvbXBvbmVudCxcclxuICAgICAgICBDdXJyZW50RGF5UGlwZSxcclxuICAgICAgICAvLyBWZW5kb3IgRGV0YWlsIC0gRGV0YWlsIFRhYlxyXG4gICAgICAgIFZlbmRvckRlc2NyaXB0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvckhvdXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvclNjb3JlQ29tcG9uZW50LFxyXG4gICAgICAgIEhvdXJMaXN0aW5nQ29tcG9uZW50LFxyXG4gICAgICAgIEhvdXJGaWx0ZXJQaXBlLFxyXG4gICAgICAgIC8vIFZlbmRvciBEZXRhaWwgLSBNYXAgVGFiXHJcbiAgICAgICAgVmVuZG9yTWFwQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvck5hdmlnYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgLy8gVmVuZG9yIFJldmlld3NcclxuICAgICAgICBWZW5kb3JSZXZpZXdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kdWxlIHsgfVxyXG4iXX0=