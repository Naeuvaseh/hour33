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
        console.log("AccountComponent.OnInit(): User: " +
            JSON.stringify(this.userService.getUser()));
        this.loginState = this.userService.loggedIn;
        console.log("AccountComponent.OnInit(): LoginState:" + this.loginState);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyQ0FBdUM7QUFFdkMsMENBQXlDO0FBQ3pDLDREQUEwRDtBQUMxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQUtFLDBCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQ1QsbUNBQW1DO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUM3QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsa0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDO1lBQ0osS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBOUJVLGdCQUFnQjtRQUo1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDZDQUE2QztTQUMzRCxDQUFDO3lDQU00QixlQUFNLEVBQXVCLDBCQUFXO09BTHpELGdCQUFnQixDQStCNUI7SUFBRCx1QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFjY291bnRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBsb2dpblN0YXRlOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJBY2NvdW50Q29tcG9uZW50Lk9uSW5pdCgpOiBVc2VyOiBcIiArXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyU2VydmljZS5nZXRVc2VyKCkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5sb2dpblN0YXRlID0gdGhpcy51c2VyU2VydmljZS5sb2dnZWRJbjtcclxuICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudENvbXBvbmVudC5PbkluaXQoKTogTG9naW5TdGF0ZTpcIiArIHRoaXMubG9naW5TdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgIGFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiVXNlciBsb2dnZWQgb3V0XCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiU29ycnkgdG8gc2VlIHlvdSBnbyFcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==