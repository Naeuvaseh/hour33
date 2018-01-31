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
        return (rating * 2).toFixed(1).toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXNjb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBQ2hELDBDQUF5QztBQUN6QywwRUFBa0U7QUFNbEU7SUFPRSw4QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGM0IsY0FBUyxHQUFhLDRCQUFTLENBQUM7UUFHckMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN4QixNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFoQlE7UUFBUixZQUFLLEVBQUU7O3dEQUFnQjtJQURiLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDhGQUE4RjtTQUM1RyxDQUFDO3lDQVE0QixlQUFNO09BUHZCLG9CQUFvQixDQWtCaEM7SUFBRCwyQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRlbXBJY29ucyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnN0L3RlbXAtaWNvbnMuY29uc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3Itc2NvcmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1zY29yZS92ZW5kb3Itc2NvcmUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JTY29yZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgcHVibGljIHRlbXBJY29uczogT2JqZWN0W10gPSBUZW1wSWNvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIG5hdlRvUmV2aWV3cygpe1xyXG4gICAgY29uc29sZS5sb2coJ1ZlbmRvclNjb3JlQ29tcG9uZW50Lm5hdlRvUmV2aWV3KCkgaW52b2tlZC4nKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFNjb3JlKHJhdGluZzogbnVtYmVyKXtcclxuICAgIHJldHVybiAocmF0aW5nICogMikudG9GaXhlZCgxKS50b1N0cmluZygpO1xyXG4gIH1cclxufSJdfQ==