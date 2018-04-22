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
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            if (user)
                _this.router.navigate(["/search"]);
        });
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
                _this.userService.setUser(data);
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
        var _this = this;
        this.userService.logout().subscribe(function (success) {
            alert({
                title: "User logged out",
                message: "Sorry to see you go!",
                okButtonText: "Ok"
            });
            _this.router.navigate(["/search"]);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBQzFELDREQUEwRDtBQUcxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQVNFLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDdELGdCQUFXLEdBQUcsNkJBQVUsQ0FBQztRQUN6QixlQUFVLEdBQVcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFHM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixRQUFRO2FBQ0wsYUFBYSxDQUFDO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ25CLENBQUM7YUFDRCxJQUFJLENBQ0gsVUFBQSxPQUFPO1lBQ0wsNkNBQTZDO1lBQzdDLG1EQUFtRDtZQUNuRCxLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsT0FBTyxF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Q0gsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDbEIsSUFBSSxLQUFLLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ3JCLElBQUksUUFBUSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrREFBeUIsR0FBekIsVUFBMEIsSUFBSTtRQUM1QixJQUFJLGVBQWUsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUE1TVUsY0FBYztRQUoxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHlDQUF5QztTQUN2RCxDQUFDO3lDQVU0QixlQUFNLEVBQXVCLDBCQUFXO09BVHpELGNBQWMsQ0E2TTFCO0lBQUQscUJBQUM7Q0FBQSxBQTdNRCxJQTZNQztBQTdNWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2dpblN0YXRlIH0gZnJvbSBcIi4uLy4uL2VudW1zL2xvZ2luLXN0YXRlLmVudW1cIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgcHJpdmF0ZSBfZW1haWw6IHN0cmluZztcclxuICBwcml2YXRlIF9wYXNzd29yZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2NvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG4gIHB1YmxpYyB0aXRsZTtcclxuICBwdWJsaWMgbG9naW5TdGF0ZXMgPSBMb2dpblN0YXRlO1xyXG4gIHB1YmxpYyBsb2dpblN0YXRlOiBzdHJpbmcgPSBMb2dpblN0YXRlLkxvZ2luO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy50aXRsZSA9IFwiTG9naW5cIjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKCkuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICBpZiAodXNlcikgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnByaW50RW1haWwoKTtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgICBlbWFpbDogdGhpcy5fZW1haWxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBwYXNzd29yZCByZXNldCB3YXMgc3VjY2Vzc2Z1bCxcclxuICAgICAgICAgIC8vIHlvdSBjb3VsZCBub3cgcHJvbXB0IHRoZSB1c2VyIHRvIGNoZWNrIGhpcyBlbWFpbFxyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDaGVjayB5b3VyIGVtYWlsIVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNvdW5kcyBnb29kIVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuTG9naW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVBY2NvdW50KCkge1xyXG4gICAgdGhpcy5wcmludEVtYWlsKCk7XHJcbiAgICB0aGlzLnByaW50UGFzc3dvcmQoKTtcclxuICAgIHRoaXMucHJpbnRDb25maXJtUGFzc3dvcmQoKTtcclxuICAgIGxldCByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcclxuICAgIGlmICh0aGlzLl9lbWFpbCkge1xyXG4gICAgICBpZiAodGhpcy5fcGFzc3dvcmQgPT0gdGhpcy5fY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgIC5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuX2VtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5fcGFzc3dvcmRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2VhcmNoKFxyXG4gICAgICAgICAgICAgICAgICBcIlRoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYWNjb3VudC5cIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJFbWFpbCBhbHJlYWR5IGV4aXN0cyFcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgZW1haWwgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cy4gUGxlYXNlIHRyeSBsb2dnaW5nIGluIGluc3RlYWQuXCIsXHJcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmRzIG11c3QgbWF0Y2guXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIllvdSBtdXN0IGluY2x1ZGUgYW4gZW1haWxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luKCkge1xyXG4gICAgdGhpcy5wcmludEVtYWlsKCk7XHJcbiAgICB0aGlzLnByaW50UGFzc3dvcmQoKTtcclxuICAgIGxldCByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcclxuICAgIC8vIENoZWNrIGlmIGVtYWlsIGlzIG51bGwgb3IgYmxhbmtcclxuICAgIGlmICh0aGlzLl9lbWFpbCA9PSBudWxsIHx8IHRoaXMuX2VtYWlsID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgZW1haWxcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkID09IG51bGwgfHwgdGhpcy5fcGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICBhbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiTWlzc2luZyBwYXNzd29yZFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLl9lbWFpbCAhPSBudWxsIHx8IHRoaXMuX2VtYWlsICE9IFwiXCIpICYmXHJcbiAgICAgICh0aGlzLl9wYXNzd29yZCAhPSBudWxsIHx8IHRoaXMuX3Bhc3N3b3JkICE9IFwiXCIpXHJcbiAgICApIHtcclxuICAgICAgZmlyZWJhc2VcclxuICAgICAgICAubG9naW4oe1xyXG4gICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLl9lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIC8vIFN1Y2Nlc3NcclxuICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2V0VXNlcihkYXRhKTtcclxuICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBTZWFyY2ggc2NyZWVuXHJcbiAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gTG9naW4gRmFpbGVkXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UubWF0Y2goXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgIFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmludEVtYWlsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJFbWFpbDogXCIgKyB0aGlzLl9lbWFpbCk7XHJcbiAgfVxyXG5cclxuICBwcmludFBhc3N3b3JkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJQYXNzd29yZDogXCIgKyB0aGlzLl9wYXNzd29yZCk7XHJcbiAgfVxyXG5cclxuICBwcmludENvbmZpcm1QYXNzd29yZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29uZmlybSBQYXNzd29yZDogXCIgKyB0aGlzLl9jb25maXJtUGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2dvdXQoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZShzdWNjZXNzID0+IHtcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIlVzZXIgbG9nZ2VkIG91dFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiU29ycnkgdG8gc2VlIHlvdSBnbyFcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZpZXcoYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Mb2dpbjpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gXCJMb2dpblwiO1xyXG4gICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5Mb2dpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gXCJGb3Jnb3QgUGFzc3dvcmQ/XCI7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkZvcmdvdFBhc3N3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dpblN0YXRlLkNyZWF0ZUFjY291bnQ6IHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJDcmVhdGUgYW4gQWNjb3VudFwiO1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuQ3JlYXRlQWNjb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1haWxUZXh0Q2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCBlbWFpbCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLl9lbWFpbCA9IGVtYWlsLnRleHQ7XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZFRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHBhc3N3b3JkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMuX3Bhc3N3b3JkID0gcGFzc3dvcmQudGV4dDtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybVRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHBhc3N3b3JkQ29uZmlybSA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLl9jb25maXJtUGFzc3dvcmQgPSBwYXNzd29yZENvbmZpcm0udGV4dDtcclxuICB9XHJcbn1cclxuIl19