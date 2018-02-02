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
        if (this.vendor.result.formatted_phone_number) {
            permissions
                .requestPermission(android.Manifest.permission.CALL_PHONE, "App Needs This Permission To Make Phone Calls")
                .then(function () {
                console.log("Got Permission!");
                console.log("Vendor Phone: " + _this.vendor.result.formatted_phone_number);
                TNSPhone.dial(String(_this.vendor.result.formatted_phone_number), false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXBob25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci1waG9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWdEO0FBRWhELHNEQUF3RDtBQUN4RCw2Q0FBK0M7QUFPL0M7SUFNRTtJQUFnQixDQUFDO0lBRWpCLHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFBQSxpQkFnQkM7UUFmQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBLENBQUM7WUFDN0MsV0FBVztpQkFDUixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsK0NBQStDLENBQUM7aUJBQzFHLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDMUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDO0lBMUJRO1FBQVIsWUFBSyxFQUFFOzt3REFBc0I7SUFGbkIsb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsOEZBQThGO1NBQzVHLENBQUM7O09BQ1csb0JBQW9CLENBNkJoQztJQUFELDJCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgIHsgVmVuZG9yRGV0YWlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XHJcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1waG9uZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXBob25lL3ZlbmRvci1waG9uZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvclBob25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3JEZXRhaWw7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIGRpYWxOdW1iZXIoKXtcclxuICAgIGlmICh0aGlzLnZlbmRvci5yZXN1bHQuZm9ybWF0dGVkX3Bob25lX251bWJlcil7XHJcbiAgICAgIHBlcm1pc3Npb25zXHJcbiAgICAgICAgLnJlcXVlc3RQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQUxMX1BIT05FLCBcIkFwcCBOZWVkcyBUaGlzIFBlcm1pc3Npb24gVG8gTWFrZSBQaG9uZSBDYWxsc1wiKVxyXG4gICAgICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBQZXJtaXNzaW9uIVwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVuZG9yIFBob25lOiBcIiArIHRoaXMudmVuZG9yLnJlc3VsdC5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyKTtcclxuICAgICAgICAgIFROU1Bob25lLmRpYWwoU3RyaW5nKHRoaXMudmVuZG9yLnJlc3VsdC5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyKSwgZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gRGVuaWVkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhbGVydChcIlRoaXMgZXN0YWJsaXNobWVudCBkb2VzIG5vdCBoYXZlIGEgcGhvbmUgbnVtYmVyIGxpc3RlZC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19