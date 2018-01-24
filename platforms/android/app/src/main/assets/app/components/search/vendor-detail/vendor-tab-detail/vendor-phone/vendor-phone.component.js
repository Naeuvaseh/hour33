"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../../../settings");
var permissions = require("nativescript-permissions");
var TNSPhone = require("nativescript-phone");
var VendorPhoneComponent = (function () {
    function VendorPhoneComponent() {
    }
    VendorPhoneComponent.prototype.ngOnInit = function () {
        this.theme = settings_1.Theme;
    };
    VendorPhoneComponent.prototype.dialNumber = function () {
        var _this = this;
        if (this.vendor.phone) {
            permissions
                .requestPermission(android.Manifest.permission.CALL_PHONE, "App Needs This Permission To Make Phone Calls")
                .then(function () {
                console.log("Got Permission!");
                console.log("Vendor Phone: " + _this.vendor.phone);
                TNSPhone.dial(String(_this.vendor.phone), false);
            })
                .catch(function () {
                console.log("Permission Denied!");
            });
        }
        else {
            alert("This establishment does not have a phone number listed.");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorPhoneComponent.prototype, "vendor", void 0);
    VendorPhoneComponent = __decorate([
        core_1.Component({
            selector: 'vendor-phone',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-phone/vendor-phone.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorPhoneComponent);
    return VendorPhoneComponent;
}());
exports.VendorPhoneComponent = VendorPhoneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXBob25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1waG9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWdEO0FBRWhELHNEQUF3RDtBQUN4RCw2Q0FBK0M7QUFPL0M7SUFNRTtJQUFnQixDQUFDO0lBRWpCLHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFBQSxpQkFnQkM7UUFmQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDckIsV0FBVztpQkFDUixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsK0NBQStDLENBQUM7aUJBQzFHLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDO0lBMUJRO1FBQVIsWUFBSyxFQUFFOzt3REFBZ0I7SUFGYixvQkFBb0I7UUFKaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw4RkFBOEY7U0FDNUcsQ0FBQzs7T0FDVyxvQkFBb0IsQ0E2QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCAgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XHJcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1waG9uZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXBob25lL3ZlbmRvci1waG9uZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvclBob25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3I7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGRpYWxOdW1iZXIoKXtcclxuICAgIGlmICh0aGlzLnZlbmRvci5waG9uZSl7XHJcbiAgICAgIHBlcm1pc3Npb25zXHJcbiAgICAgICAgLnJlcXVlc3RQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQUxMX1BIT05FLCBcIkFwcCBOZWVkcyBUaGlzIFBlcm1pc3Npb24gVG8gTWFrZSBQaG9uZSBDYWxsc1wiKVxyXG4gICAgICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBQZXJtaXNzaW9uIVwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVuZG9yIFBob25lOiBcIiArIHRoaXMudmVuZG9yLnBob25lKTtcclxuICAgICAgICAgIFROU1Bob25lLmRpYWwoU3RyaW5nKHRoaXMudmVuZG9yLnBob25lKSwgZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gRGVuaWVkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhbGVydChcIlRoaXMgZXN0YWJsaXNobWVudCBkb2VzIG5vdCBoYXZlIGEgcGhvbmUgbnVtYmVyIGxpc3RlZC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19