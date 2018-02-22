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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxpREFBNkM7QUFRN0M7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYixxQ0FBSyxHQUFMLFVBQU0sTUFBYztRQUNsQixNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUM7SUFDaEUsQ0FBQztJQVhRO1FBQVIsWUFBSyxFQUFFOzt5REFBaUI7SUFGZCxxQkFBcUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxtRkFBbUY7U0FDakcsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FjakM7SUFBRCw0QkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVmVuZG9yRGV0YWlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSZXZpZXdzIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci1kZXRhaWwvcmV2aWV3cy5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItcmV2aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLXJldmlld3MvdmVuZG9yLXJldmlldy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvclJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHJldmlldzogUmV2aWV3cztcclxuICBwdWJsaWMgdGhlbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXsgfVxyXG5cclxuICB0aHVtYihyYXRpbmc6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKHJhdGluZyA8IDIuNSkgPyAncmVzOi8vdGh1bWJfZG93bicgOiAncmVzOi8vdGh1bWJfdXAnO1xyXG4gIH1cclxufSJdfQ==