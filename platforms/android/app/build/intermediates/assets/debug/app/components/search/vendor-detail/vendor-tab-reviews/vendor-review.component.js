"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../settings");
var VendorReviewComponent = /** @class */ (function () {
    function VendorReviewComponent() {
        this.theme = settings_1.Theme;
    }
    VendorReviewComponent.prototype.ngOnInit = function () { };
    VendorReviewComponent.prototype.thumb = function (rating) {
        return (rating < 2.5) ? 'res://thumb_down' : 'res://thumb_up';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorReviewComponent.prototype, "review", void 0);
    VendorReviewComponent = __decorate([
        core_1.Component({
            selector: 'vendor-review',
            templateUrl: './components/search/vendor-detail/vendor-tab-reviews/vendor-review.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorReviewComponent);
    return VendorReviewComponent;
}());
exports.VendorReviewComponent = VendorReviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxpREFBNkM7QUFRN0M7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYixxQ0FBSyxHQUFMLFVBQU0sTUFBYztRQUNsQixNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRSxDQUFDO0lBWFE7UUFBUixZQUFLLEVBQUU7O3lEQUFpQjtJQUZkLHFCQUFxQjtRQUpqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLG1GQUFtRjtTQUNqRyxDQUFDOztPQUNXLHFCQUFxQixDQWNqQztJQUFELDRCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWwgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFJldmlld3MgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLWRldGFpbC9yZXZpZXdzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1yZXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItcmV2aWV3cy92ZW5kb3ItcmV2aWV3LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yUmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcmV2aWV3OiBSZXZpZXdzO1xyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpeyB9XHJcblxyXG4gIHRodW1iKHJhdGluZzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAocmF0aW5nIDwgMi41KSA/ICdyZXM6Ly90aHVtYl9kb3duJyA6ICdyZXM6Ly90aHVtYl91cCc7XHJcbiAgfVxyXG59Il19