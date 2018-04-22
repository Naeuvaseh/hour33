"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var firebase = require("nativescript-plugin-firebase");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.theme = settings_1.Theme;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.loginState = user ? true : false;
            console.log("AccountComponent.OnInit() GetUser(): " + JSON.stringify(user));
            console.log("AccountComponent.OnInit(): LoginState:" + _this.loginState);
        });
    };
    AccountComponent.prototype.onLogin = function () {
        this.router.navigate(["/login"]);
    };
    AccountComponent.prototype.onLogout = function () {
        this.userService.logout();
        alert({
            title: "User logged out",
            message: "Sorry to see you go!",
            okButtonText: "Ok"
        });
        this.router.navigate(["/search"]);
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: "account",
            templateUrl: "./components/account/account.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyQ0FBdUM7QUFFdkMsMENBQXlDO0FBQ3pDLDREQUEwRDtBQUMxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQU1FLDBCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUNULHVDQUF1QyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQy9ELENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUM7WUFDSixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFqQ1UsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsNkNBQTZDO1NBQzNELENBQUM7eUNBTzRCLGVBQU0sRUFBdUIsMEJBQVc7T0FOekQsZ0JBQWdCLENBa0M1QjtJQUFELHVCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9zcmMvYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYWNjb3VudFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIHVzZXI7XHJcbiAgcHVibGljIGxvZ2luU3RhdGU6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgdGhlbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgdGhpcy5sb2dpblN0YXRlID0gdXNlciA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJBY2NvdW50Q29tcG9uZW50Lk9uSW5pdCgpIEdldFVzZXIoKTogXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnRDb21wb25lbnQuT25Jbml0KCk6IExvZ2luU3RhdGU6XCIgKyB0aGlzLmxvZ2luU3RhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgIGFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiVXNlciBsb2dnZWQgb3V0XCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiU29ycnkgdG8gc2VlIHlvdSBnbyFcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==