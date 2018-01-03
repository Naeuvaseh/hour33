"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var VendorDescriptionComponent = (function () {
    function VendorDescriptionComponent() {
        this.theme = settings_1.Theme;
    }
    VendorDescriptionComponent.prototype.openVendorWebsite = function () {
        console.log('Vendor website link tapped.');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorDescriptionComponent.prototype, "vendor", void 0);
    VendorDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'vendor-description',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-description/vendor-description.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorDescriptionComponent);
    return VendorDescriptionComponent;
}());
exports.VendorDescriptionComponent = VendorDescriptionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1kZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsb0RBQWdEO0FBTWhEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHNEQUFpQixHQUFqQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBVlE7UUFBUixZQUFLLEVBQUU7OzhEQUFnQjtJQURiLDBCQUEwQjtRQUp0QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsMEdBQTBHO1NBQ3hILENBQUM7O09BQ1csMEJBQTBCLENBWXRDO0lBQUQsaUNBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2ZW5kb3ItZGVzY3JpcHRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1kZXNjcmlwdGlvbi92ZW5kb3ItZGVzY3JpcHRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBvcGVuVmVuZG9yV2Vic2l0ZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ1ZlbmRvciB3ZWJzaXRlIGxpbmsgdGFwcGVkLicpO1xyXG4gIH1cclxufSJdfQ==