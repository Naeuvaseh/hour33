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
        this.loginState = this.userService.user ? true : false;
    };
    AccountComponent.prototype.onLogin = function () {
        this.router.navigate(["/login"]);
    };
    AccountComponent.prototype.onLogout = function () {
        firebase.logout();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyQ0FBdUM7QUFFdkMsMENBQXlDO0FBQ3pDLDREQUEwRDtBQUMxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQUtFLDBCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pELENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQztZQUNKLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQXpCVSxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw2Q0FBNkM7U0FDM0QsQ0FBQzt5Q0FNNEIsZUFBTSxFQUF1QiwwQkFBVztPQUx6RCxnQkFBZ0IsQ0EwQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhY2NvdW50XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbG9naW5TdGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2dpblN0YXRlID0gdGhpcy51c2VyU2VydmljZS51c2VyID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Mb2dpbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ291dCgpIHtcclxuICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgYWxlcnQoe1xyXG4gICAgICB0aXRsZTogXCJVc2VyIGxvZ2dlZCBvdXRcIixcclxuICAgICAgbWVzc2FnZTogXCJTb3JyeSB0byBzZWUgeW91IGdvIVwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICB9XHJcbn1cclxuIl19