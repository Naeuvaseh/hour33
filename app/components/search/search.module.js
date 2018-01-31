"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var http_client_module_1 = require("nativescript-angular/http-client/http-client.module");
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
var vendor_phone_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-phone/vendor-phone.component");
var vendor_website_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-website/vendor-website.component");
var hour_filter_pipe_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-filter.pipe");
var current_day_pipe_1 = require("./vendor-listing/current-day.pipe");
var like_dislike_pipe_1 = require("./vendor-listing/like-dislike.pipe");
var distance_pipe_1 = require("./vendor-listing/distance.pipe");
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                search_routing_module_1.SearchRoutingModule,
                angular_1.NativeScriptUIListViewModule,
                http_1.NativeScriptHttpModule,
                http_client_module_1.NativeScriptHttpClientModule
            ],
            providers: [
                vendor_service_1.VendorService
            ],
            declarations: [
                search_component_1.SearchComponent,
                // Search Page
                vendor_listing_component_1.VendorListingComponent,
                vendor_detail_component_1.VendorDetailComponent,
                like_dislike_pipe_1.LikeDislikePipe,
                distance_pipe_1.DistancePipe,
                current_day_pipe_1.CurrentDayPipe,
                // Vendor Detail - Detail Tab
                vendor_description_component_1.VendorDescriptionComponent,
                vendor_hours_component_1.VendorHoursComponent,
                vendor_score_component_1.VendorScoreComponent,
                hour_listing_component_1.HourListingComponent,
                vendor_phone_component_1.VendorPhoneComponent,
                vendor_website_component_1.VendorWebsiteComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBQ25FLDBGQUFtRztBQUNuRyxzREFBdUU7QUFDdkUsZ0VBQW9GO0FBRXBGLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFDckQsc0ZBQW1GO0FBQ25GLG1GQUFnRjtBQUNoRixnRUFBOEQ7QUFDOUQsa0lBQStIO0FBQy9ILGdIQUE2RztBQUM3RyxnSEFBNkc7QUFDN0csdUdBQW9HO0FBQ3BHLDRIQUF5SDtBQUN6SCxzR0FBbUc7QUFDbkcsNkhBQTBIO0FBQzFILGdIQUE2RztBQUM3RyxzSEFBbUg7QUFDbkgsaUhBQThHO0FBQzlHLHNFQUFtRTtBQUNuRSx3RUFBcUU7QUFDckUsZ0VBQThEO0FBdUM5RDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQXJDeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2dCQUNuQixzQ0FBNEI7Z0JBQzVCLDZCQUFzQjtnQkFDdEIsaURBQTRCO2FBQy9CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDhCQUFhO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsaURBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLG1DQUFlO2dCQUNmLDRCQUFZO2dCQUNaLGlDQUFjO2dCQUNkLDZCQUE2QjtnQkFDN0IseURBQTBCO2dCQUMxQiw2Q0FBb0I7Z0JBQ3BCLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLGlEQUFzQjtnQkFDdEIsaUNBQWM7Z0JBQ2QsMEJBQTBCO2dCQUMxQix5Q0FBa0I7Z0JBQ2xCLHVEQUF5QjtnQkFDekIsaUJBQWlCO2dCQUNqQiwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50L2h0dHAtY2xpZW50Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2VhcmNoLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92ZW5kb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFZlbmRvckRlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1kZXNjcmlwdGlvbi92ZW5kb3ItZGVzY3JpcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9ySG91cnNDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL3ZlbmRvci1ob3Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JTY29yZUNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3Itc2NvcmUvdmVuZG9yLXNjb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvck1hcENvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLW1hcC92ZW5kb3ItbWFwL3ZlbmRvci1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLW1hcC92ZW5kb3ItbmF2aWdhdGlvbi92ZW5kb3ItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JSZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1yZXZpZXdzL3ZlbmRvci1yZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG91ckxpc3RpbmdDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1ob3Vycy9ob3VyLWxpc3RpbmcvaG91ci1saXN0aW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JQaG9uZUNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItcGhvbmUvdmVuZG9yLXBob25lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvcldlYnNpdGVDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXdlYnNpdGUvdmVuZG9yLXdlYnNpdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG91ckZpbHRlclBpcGUgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWZpbHRlci5waXBlJztcclxuaW1wb3J0IHsgQ3VycmVudERheVBpcGUgfSBmcm9tICcuL3ZlbmRvci1saXN0aW5nL2N1cnJlbnQtZGF5LnBpcGUnO1xyXG5pbXBvcnQgeyBMaWtlRGlzbGlrZVBpcGUgfSBmcm9tICcuL3ZlbmRvci1saXN0aW5nL2xpa2UtZGlzbGlrZS5waXBlJztcclxuaW1wb3J0IHsgRGlzdGFuY2VQaXBlIH0gZnJvbSAnLi92ZW5kb3ItbGlzdGluZy9kaXN0YW5jZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNlYXJjaFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBWZW5kb3JTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFNlYXJjaCBQYWdlXHJcbiAgICAgICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTGlrZURpc2xpa2VQaXBlLFxyXG4gICAgICAgIERpc3RhbmNlUGlwZSxcclxuICAgICAgICBDdXJyZW50RGF5UGlwZSxcclxuICAgICAgICAvLyBWZW5kb3IgRGV0YWlsIC0gRGV0YWlsIFRhYlxyXG4gICAgICAgIFZlbmRvckRlc2NyaXB0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvckhvdXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvclNjb3JlQ29tcG9uZW50LFxyXG4gICAgICAgIEhvdXJMaXN0aW5nQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvclBob25lQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvcldlYnNpdGVDb21wb25lbnQsXHJcbiAgICAgICAgSG91ckZpbHRlclBpcGUsXHJcbiAgICAgICAgLy8gVmVuZG9yIERldGFpbCAtIE1hcCBUYWJcclxuICAgICAgICBWZW5kb3JNYXBDb21wb25lbnQsXHJcbiAgICAgICAgVmVuZG9yTmF2aWdhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICAvLyBWZW5kb3IgUmV2aWV3c1xyXG4gICAgICAgIFZlbmRvclJldmlld0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUgeyB9XHJcbiJdfQ==