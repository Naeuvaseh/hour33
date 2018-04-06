"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var login_state_enum_1 = require("../../enums/login-state.enum");
var user_service_1 = require("../../services/user.service");
var firebase = require("nativescript-plugin-firebase");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginStates = login_state_enum_1.LoginState;
        this.loginState = login_state_enum_1.LoginState.Login;
        this.theme = settings_1.Theme;
        this.title = "Login";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userService.getUser()) {
            this.router.navigate(["/search"]);
        }
    };
    LoginComponent.prototype.resetPassword = function () {
        var _this = this;
        this.printEmail();
        firebase
            .resetPassword({
            email: this._email
        })
            .then(function (success) {
            // called when password reset was successful,
            // you could now prompt the user to check his email
            alert({
                title: "Check your email!",
                message: "An email has been sent to reset your password.",
                okButtonText: "Sounds good!"
            });
            _this.loginState = login_state_enum_1.LoginState.Login;
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.onCreateAccount = function () {
        this.printEmail();
        this.printPassword();
        this.printConfirmPassword();
        var router = this.router;
        if (this._email) {
            if (this._password == this._confirmPassword) {
                firebase
                    .createUser({
                    email: this._email,
                    password: this._password
                })
                    .then(function (result) {
                    router.navigate(["/search"]);
                }, function (errorMessage) {
                    if (errorMessage.search("The email address is already in use by another account.")) {
                        alert({
                            title: "Email already exists!",
                            message: "This email address already exists. Please try logging in instead.",
                            okButtonText: "OK, got it"
                        });
                    }
                    alert({
                        title: "No user created",
                        message: errorMessage,
                        okButtonText: "OK, got it"
                    });
                });
            }
            else {
                alert("Your passwords must match.");
            }
        }
        else {
            alert("You must include an email");
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.printEmail();
        this.printPassword();
        var router = this.router;
        // Check if email is null or blank
        if (this._email == null || this._email == "") {
            alert({
                title: "Missing email",
                message: "Please enter an email address.",
                okButtonText: "Ok"
            });
        }
        if (this._password == null || this._password == "") {
            alert({
                title: "Missing password",
                message: "Please enter a password.",
                okButtonText: "Ok"
            });
        }
        if ((this._email != null || this._email != "") &&
            (this._password != null || this._password != "")) {
            firebase
                .login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: this._email,
                    password: this._password
                }
            })
                .then(
            // Success
            function (data) {
                console.log(JSON.stringify(data));
                _this.userService.user = data;
                //Redirect to Search screen
                router.navigate(["/search"]);
            }, 
            // Error
            function (errorMessage) {
                console.log(errorMessage);
                // Login Failed
                if (errorMessage.match("The password is invalid or the user does not have a password.")) {
                    alert({
                        title: "An error occurred",
                        message: "The password is invalid or the user does not have a password.",
                        okButtonText: "Ok"
                    });
                }
            });
        }
    };
    LoginComponent.prototype.printEmail = function () {
        console.log("Email: " + this._email);
    };
    LoginComponent.prototype.printPassword = function () {
        console.log("Password: " + this._password);
    };
    LoginComponent.prototype.printConfirmPassword = function () {
        console.log("Confirm Password: " + this._confirmPassword);
    };
    LoginComponent.prototype.onLogout = function () {
        firebase.logout();
        alert({
            title: "User logged out",
            message: "Sorry to see you go!",
            okButtonText: "Ok"
        });
        this.router.navigate(["/search"]);
    };
    LoginComponent.prototype.toggleView = function (action) {
        switch (action) {
            case login_state_enum_1.LoginState.Login:
                {
                    this.title = "Login";
                    this.loginState = login_state_enum_1.LoginState.Login;
                }
                break;
            case login_state_enum_1.LoginState.ForgotPassword:
                {
                    this.title = "Forgot Password?";
                    this.loginState = login_state_enum_1.LoginState.ForgotPassword;
                }
                break;
            case login_state_enum_1.LoginState.CreateAccount: {
                this.title = "Create an Account";
                this.loginState = login_state_enum_1.LoginState.CreateAccount;
            }
        }
    };
    LoginComponent.prototype.emailTextChange = function (args) {
        var email = args.object;
        this._email = email.text;
    };
    LoginComponent.prototype.passwordTextChange = function (args) {
        var password = args.object;
        this._password = password.text;
    };
    LoginComponent.prototype.passwordConfirmTextChange = function (args) {
        var passwordConfirm = args.object;
        this._confirmPassword = passwordConfirm.text;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "./components/login/login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBQzFELDREQUEwRDtBQUcxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQVNFLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDdELGdCQUFXLEdBQUcsNkJBQVUsQ0FBQztRQUN6QixlQUFVLEdBQVcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFHM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsUUFBUTthQUNMLGFBQWEsQ0FBQztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNuQixDQUFDO2FBQ0QsSUFBSSxDQUNILFVBQUEsT0FBTztZQUNMLDZDQUE2QztZQUM3QyxtREFBbUQ7WUFDbkQsS0FBSyxDQUFDO2dCQUNKLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLE9BQU8sRUFBRSxnREFBZ0Q7Z0JBQ3pELFlBQVksRUFBRSxjQUFjO2FBQzdCLENBQUMsQ0FB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LENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNyQixJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0RBQXlCLEdBQXpCLFVBQTBCLElBQUk7UUFDNUIsSUFBSSxlQUFlLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBM01VLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx5Q0FBeUM7U0FDdkQsQ0FBQzt5Q0FVNEIsZUFBTSxFQUF1QiwwQkFBVztPQVR6RCxjQUFjLENBNE0xQjtJQUFELHFCQUFDO0NBQUEsQUE1TUQsSUE0TUM7QUE1TVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5TdGF0ZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9sb2dpbi1zdGF0ZS5lbnVtXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgX2VtYWlsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ6IHN0cmluZztcclxuICBwcml2YXRlIF9jb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU7XHJcbiAgcHVibGljIGxvZ2luU3RhdGVzID0gTG9naW5TdGF0ZTtcclxuICBwdWJsaWMgbG9naW5TdGF0ZTogc3RyaW5nID0gTG9naW5TdGF0ZS5Mb2dpbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMudGl0bGUgPSBcIkxvZ2luXCI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoKSkge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnByaW50RW1haWwoKTtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgICBlbWFpbDogdGhpcy5fZW1haWxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBwYXNzd29yZCByZXNldCB3YXMgc3VjY2Vzc2Z1bCxcclxuICAgICAgICAgIC8vIHlvdSBjb3VsZCBub3cgcHJvbXB0IHRoZSB1c2VyIHRvIGNoZWNrIGhpcyBlbWFpbFxyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDaGVjayB5b3VyIGVtYWlsIVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNvdW5kcyBnb29kIVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuTG9naW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVBY2NvdW50KCkge1xyXG4gICAgdGhpcy5wcmludEVtYWlsKCk7XHJcbiAgICB0aGlzLnByaW50UGFzc3dvcmQoKTtcclxuICAgIHRoaXMucHJpbnRDb25maXJtUGFzc3dvcmQoKTtcclxuICAgIGxldCByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcclxuICAgIGlmICh0aGlzLl9lbWFpbCkge1xyXG4gICAgICBpZiAodGhpcy5fcGFzc3dvcmQgPT0gdGhpcy5fY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgIC5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuX2VtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5fcGFzc3dvcmRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2VhcmNoKFxyXG4gICAgICAgICAgICAgICAgICBcIlRoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYWNjb3VudC5cIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJFbWFpbCBhbHJlYWR5IGV4aXN0cyFcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgZW1haWwgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cy4gUGxlYXNlIHRyeSBsb2dnaW5nIGluIGluc3RlYWQuXCIsXHJcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmRzIG11c3QgbWF0Y2guXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIllvdSBtdXN0IGluY2x1ZGUgYW4gZW1haWxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luKCkge1xyXG4gICAgdGhpcy5wcmludEVtYWlsKCk7XHJcbiAgICB0aGlzLnByaW50UGFzc3dvcmQoKTtcclxuICAgIGxldCByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcclxuICAgIC8vIENoZWNrIGlmIGVtYWlsIGlzIG51bGwgb3IgYmxhbmtcclxuICAgIGlmICh0aGlzLl9lbWFpbCA9PSBudWxsIHx8IHRoaXMuX2VtYWlsID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgZW1haWxcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkID09IG51bGwgfHwgdGhpcy5fcGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICBhbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiTWlzc2luZyBwYXNzd29yZFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLl9lbWFpbCAhPSBudWxsIHx8IHRoaXMuX2VtYWlsICE9IFwiXCIpICYmXHJcbiAgICAgICh0aGlzLl9wYXNzd29yZCAhPSBudWxsIHx8IHRoaXMuX3Bhc3N3b3JkICE9IFwiXCIpXHJcbiAgICApIHtcclxuICAgICAgZmlyZWJhc2VcclxuICAgICAgICAubG9naW4oe1xyXG4gICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLl9lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIC8vIFN1Y2Nlc3NcclxuICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gU2VhcmNoIHNjcmVlblxyXG4gICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gRXJyb3JcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIExvZ2luIEZhaWxlZFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFuIGVycm9yIG9jY3VycmVkXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICBcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpbnRFbWFpbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRW1haWw6IFwiICsgdGhpcy5fZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpbnRQYXNzd29yZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQ6IFwiICsgdGhpcy5fcGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgcHJpbnRDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbmZpcm0gUGFzc3dvcmQ6IFwiICsgdGhpcy5fY29uZmlybVBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KCkge1xyXG4gICAgZmlyZWJhc2UubG9nb3V0KCk7XHJcbiAgICBhbGVydCh7XHJcbiAgICAgIHRpdGxlOiBcIlVzZXIgbG9nZ2VkIG91dFwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlNvcnJ5IHRvIHNlZSB5b3UgZ28hXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICB9KTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmlldyhhY3Rpb246IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgY2FzZSBMb2dpblN0YXRlLkxvZ2luOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMudGl0bGUgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkxvZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dpblN0YXRlLkZvcmdvdFBhc3N3b3JkOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMudGl0bGUgPSBcIkZvcmdvdCBQYXNzd29yZD9cIjtcclxuICAgICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuRm9yZ290UGFzc3dvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExvZ2luU3RhdGUuQ3JlYXRlQWNjb3VudDoge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBcIkNyZWF0ZSBhbiBBY2NvdW50XCI7XHJcbiAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5DcmVhdGVBY2NvdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWFpbFRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IGVtYWlsID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMuX2VtYWlsID0gZW1haWwudGV4dDtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkVGV4dENoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5fcGFzc3dvcmQgPSBwYXNzd29yZC50ZXh0O1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmRDb25maXJtVGV4dENoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgcGFzc3dvcmRDb25maXJtID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMuX2NvbmZpcm1QYXNzd29yZCA9IHBhc3N3b3JkQ29uZmlybS50ZXh0O1xyXG4gIH1cclxufVxyXG4iXX0=