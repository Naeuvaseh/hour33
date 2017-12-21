"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var VendorListingComponent = (function () {
    function VendorListingComponent() {
        this.theme = settings_1.Theme;
    }
    VendorListingComponent.prototype.ngOnInit = function () {
    };
    VendorListingComponent.prototype.todaysHappyHours = function (hours) {
        if (hours !== null) {
            var filteredHours = hours.filter(function (result) { return result.day === new Date().getDay(); })
                .map(function (result) { return Object.assign({}, result); });
            return filteredHours[0].open + ' - ' + filteredHours[0].close;
        }
        return 'Unavailable';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorListingComponent.prototype, "vendor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], VendorListingComponent.prototype, "index", void 0);
    VendorListingComponent = __decorate([
        core_1.Component({
            selector: 'vendor-listing',
            templateUrl: './components/search/vendor-listing/vendor-listing.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorListingComponent);
    return VendorListingComponent;
}());
exports.VendorListingComponent = VendorListingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhDQUEwQztBQU8xQztJQU9FO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixLQUF5QjtRQUN4QyxFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFsQyxDQUFrQyxDQUFDO2lCQUNwRCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hFLENBQUM7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFwQlE7UUFBUixZQUFLLEVBQUU7OzBEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3lEQUFlO0lBSFosc0JBQXNCO1FBSmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxrRUFBa0U7U0FDaEYsQ0FBQzs7T0FDVyxzQkFBc0IsQ0F1QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IEhvdXJzT2ZPcGVyYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2hvdXJzLW9mLW9wZXJhdGlvbi5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gSW5wdXRzXHJcbiAgQElucHV0KCkgdmVuZG9yOiBhbnk7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB0b2RheXNIYXBweUhvdXJzKGhvdXJzOiBIb3Vyc09mT3BlcmF0aW9uW10pOiBzdHJpbmcge1xyXG4gICAgaWYoaG91cnMgIT09IG51bGwpe1xyXG4gICAgICB2YXIgZmlsdGVyZWRIb3VycyA9IGhvdXJzLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0LmRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCkpO1xyXG4gICAgICByZXR1cm4gZmlsdGVyZWRIb3Vyc1swXS5vcGVuICsgJyAtICcgKyBmaWx0ZXJlZEhvdXJzWzBdLmNsb3NlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdVbmF2YWlsYWJsZSc7XHJcbiAgfVxyXG59Il19