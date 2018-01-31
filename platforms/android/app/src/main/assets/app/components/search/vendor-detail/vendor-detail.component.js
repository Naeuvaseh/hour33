"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var settings_1 = require("../../../settings");
var VendorDetailComponent = (function () {
    function VendorDetailComponent(location, route) {
        this.location = location;
        this.route = route;
        this.theme = settings_1.Theme;
    }
    VendorDetailComponent.prototype.ngOnInit = function () {
        this.vendor = this.route.snapshot.data['vendor'];
        console.log(JSON.stringify(this.vendor));
    };
    VendorDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    VendorDetailComponent.prototype.onShare = function () {
        console.log("Shared button tapped.");
    };
    VendorDetailComponent = __decorate([
        core_1.Component({
            selector: 'vendor-detail',
            templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute])
    ], VendorDetailComponent);
    return VendorDetailComponent;
}());
exports.VendorDetailComponent = VendorDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBMkM7QUFDM0MsMENBQWlEO0FBR2pELDhDQUEwQztBQU8xQztJQUlFLCtCQUNVLFFBQWtCLEVBQ2xCLEtBQXFCO1FBRHJCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFpQixDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQXJCVSxxQkFBcUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnRUFBZ0U7U0FDOUUsQ0FBQzt5Q0FNb0IsaUJBQVE7WUFDWCx1QkFBYztPQU5wQixxQkFBcUIsQ0FzQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmVuZG9yLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvckRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwdWJsaWMgdmVuZG9yOiBWZW5kb3JEZXRhaWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7IFxyXG4gICAgdGhpcy52ZW5kb3IgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ3ZlbmRvciddIGFzIFZlbmRvckRldGFpbDtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudmVuZG9yKSk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKXtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuICBcclxuICBvblNoYXJlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNoYXJlZCBidXR0b24gdGFwcGVkLlwiKTsgXHJcbiAgfVxyXG59Il19