import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { VendorListingComponent } from "./vendor-listing/vendor-listing.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";
import { VendorService } from '../../services/vendor.service';
import { VendorDescriptionComponent } from './vendor-detail/vendor-tab-detail/vendor-description/vendor-description.component';
import { VendorHoursComponent } from './vendor-detail/vendor-tab-detail/vendor-hours/vendor-hours.component';
import { VendorScoreComponent } from './vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component';
import { VendorMapComponent } from './vendor-detail/vendor-tab-map/vendor-map/vendor-map.component';
import { VendorNavigationComponent } from './vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component';
import { VendorReviewComponent } from './vendor-detail/vendor-tab-reviews/vendor-review.component';
import { HourListingComponent } from "./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-listing.component";
import { HourFilterPipe } from './vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-filter.pipe';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptUIListViewModule
    ],
    providers: [
        VendorService
    ],
    declarations: [
        SearchComponent,
        // Search Page
        VendorListingComponent,
        VendorDetailComponent,
        // Vendor Detail - Detail Tab
        VendorDescriptionComponent,
        VendorHoursComponent,
        VendorScoreComponent,
        HourListingComponent,
        HourFilterPipe,
        // Vendor Detail - Map Tab
        VendorMapComponent,
        VendorNavigationComponent,
        // Vendor Reviews
        VendorReviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
