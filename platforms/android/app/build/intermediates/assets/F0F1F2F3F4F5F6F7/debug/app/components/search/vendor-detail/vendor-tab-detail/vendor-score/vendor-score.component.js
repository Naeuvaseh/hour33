"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var router_1 = require("@angular/router");
var temp_icons_const_1 = require("../../../../../const/temp-icons.const");
var VendorScoreComponent = (function () {
    function VendorScoreComponent(router) {
        this.router = router;
        this.tempIcons = temp_icons_const_1.TempIcons;
        this.theme = settings_1.Theme;
    }
    VendorScoreComponent.prototype.navToReviews = function () {
        console.log('VendorScoreComponent.navToReview() invoked.');
    };
    VendorScoreComponent.prototype.formatScore = function (rating) {
        var result;
        return result = (rating) ? (rating * 2).toFixed(1).toString() : '??';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorScoreComponent.prototype, "vendor", void 0);
    VendorScoreComponent = __decorate([
        core_1.Component({
            selector: 'vendor-score',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], VendorScoreComponent);
    return VendorScoreComponent;
}());
exports.VendorScoreComponent = VendorScoreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXNjb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELDBDQUF5QztBQUN6QywwRUFBa0U7QUFNbEU7SUFPRSw4QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGM0IsY0FBUyxHQUFhLDRCQUFTLENBQUM7UUFHckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN4QixJQUFJLE1BQWMsQ0FBQztRQUNuQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztJQUN2RSxDQUFDO0lBakJRO1FBQVIsWUFBSyxFQUFFOzt3REFBZ0I7SUFEYixvQkFBb0I7UUFKaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw4RkFBOEY7U0FDNUcsQ0FBQzt5Q0FRNEIsZUFBTTtPQVB2QixvQkFBb0IsQ0FtQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUZW1wSWNvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25zdC90ZW1wLWljb25zLmNvbnN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLXNjb3JlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3Itc2NvcmUvdmVuZG9yLXNjb3JlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yU2NvcmVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHZlbmRvcjogVmVuZG9yO1xyXG5cclxuICBwdWJsaWMgdGhlbWU7XHJcblxyXG4gIHB1YmxpYyB0ZW1wSWNvbnM6IE9iamVjdFtdID0gVGVtcEljb25zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuYXZUb1Jldmlld3MoKXtcclxuICAgIGNvbnNvbGUubG9nKCdWZW5kb3JTY29yZUNvbXBvbmVudC5uYXZUb1JldmlldygpIGludm9rZWQuJyk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRTY29yZShyYXRpbmc6IG51bWJlcil7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcbiAgICByZXR1cm4gcmVzdWx0ID0gKHJhdGluZykgPyAocmF0aW5nICogMikudG9GaXhlZCgxKS50b1N0cmluZygpIDogJz8/JztcclxuICB9XHJcbn0iXX0=