"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../settings");
var VendorReviewComponent = (function () {
    function VendorReviewComponent() {
        this.theme = settings_1.Theme;
    }
    VendorReviewComponent.prototype.ngOnInit = function () { };
    VendorReviewComponent.prototype.thumb = function (rating) {
        return (rating < 2.5) ? 'res://thumb_down' : 'res://thumb_up';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], VendorReviewComponent.prototype, "reviews", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxpREFBNkM7QUFRN0M7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYixxQ0FBSyxHQUFMLFVBQU0sTUFBYztRQUNsQixNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEUsQ0FBQztJQVhRO1FBQVIsWUFBSyxFQUFFO2tDQUFVLEtBQUs7MERBQVU7SUFGdEIscUJBQXFCO1FBSmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsbUZBQW1GO1NBQ2pHLENBQUM7O09BQ1cscUJBQXFCLENBY2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUmV2aWV3cyB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3Jldmlld3MuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLXJldmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1yZXZpZXdzL3ZlbmRvci1yZXZpZXcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JSZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSByZXZpZXdzOiBBcnJheTxSZXZpZXdzPjtcclxuICBwdWJsaWMgdGhlbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXsgfVxyXG5cclxuICB0aHVtYihyYXRpbmc6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKHJhdGluZyA8IDIuNSkgPyAncmVzOi8vdGh1bWJfZG93bicgOiAncmVzOi8vdGh1bWJfdXAnO1xyXG4gIH1cclxufSJdfQ==