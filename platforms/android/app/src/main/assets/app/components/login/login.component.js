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
        console.log("LoginComponent()");
        if (this.userService.user) {
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
            function (result) {
                console.log(JSON.stringify(result));
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
                // User doesn't exist
                if (errorMessage.match("There is no user record corresponding to this identifier. The user may have been deleted.")) {
                    // Create User
                    firebase
                        .createUser({
                        email: this.user.email,
                        password: this.user.password
                    })
                        .then(function (result) {
                        alert({
                            title: "User created sucessfully",
                            message: "Congratulations! Happy Drinking!",
                            okButtonText: "Sweet!"
                        });
                        // Send confirmation email
                        firebase.sendEmailVerification().then(function () {
                            console.log("Email verification sent");
                        }, function (error) {
                            console.log("Error sending email verification: " + error);
                        });
                        //Redirect to Search screen
                        router.navigate(["/search"]);
                    }, function (errorMessage) {
                        alert({
                            title: "No user created",
                            message: errorMessage,
                            okButtonText: "OK, got it"
                        });
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
    LoginComponent.prototype.onReturn = function (args) {
        switch (this.loginState) {
            case login_state_enum_1.LoginState.Login:
                {
                    if (this.isValidString(this._email) &&
                        this.isValidString(this._password)) {
                        this.onLogin();
                    }
                    else {
                        alert({
                            title: "Email or password invalid",
                            message: "The email or password you have entered is invalid. Please try again.",
                            okButtonText: "Gotcha"
                        });
                    }
                }
                break;
            case login_state_enum_1.LoginState.CreateAccount:
                {
                    if (this.isValidString(this._email) &&
                        this.isValidString(this._password) &&
                        this.isValidString(this._confirmPassword)) {
                        if (this._password == this._confirmPassword) {
                            this.onCreateAccount();
                        }
                    }
                }
                break;
            case login_state_enum_1.LoginState.ForgotPassword:
                {
                    if (this.isValidString(this._email)) {
                        this.resetPassword();
                    }
                }
                break;
        }
    };
    LoginComponent.prototype.isValidString = function (str) {
        return !str || /^\s*$/.test(str);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBQzFELDREQUEwRDtBQUcxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQVNFLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDdELGdCQUFXLEdBQUcsNkJBQVUsQ0FBQztRQUN6QixlQUFVLEdBQVcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFHM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixRQUFRO2FBQ0wsYUFBYSxDQUFDO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ25CLENBQUM7YUFDRCxJQUFJLENBQ0gsVUFBQSxPQUFPO1lBQ0wsNkNBQTZDO1lBQzdDLG1EQUFtRDtZQUNuRCxLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsT0FBTyxFQUFFLGdEQUFn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LENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNSLEtBQUssNkJBQVUsQ0FBQyxjQUFjO2dCQUM1QixDQUFDO29CQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN2QixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBblNVLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx5Q0FBeUM7U0FDdkQsQ0FBQzt5Q0FVNEIsZUFBTSxFQUF1QiwwQkFBVztPQVR6RCxjQUFjLENBb1MxQjtJQUFELHFCQUFDO0NBQUEsQUFwU0QsSUFvU0M7QUFwU1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5TdGF0ZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9sb2dpbi1zdGF0ZS5lbnVtXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgX2VtYWlsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ6IHN0cmluZztcclxuICBwcml2YXRlIF9jb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU7XHJcbiAgcHVibGljIGxvZ2luU3RhdGVzID0gTG9naW5TdGF0ZTtcclxuICBwdWJsaWMgbG9naW5TdGF0ZTogc3RyaW5nID0gTG9naW5TdGF0ZS5Mb2dpbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMudGl0bGUgPSBcIkxvZ2luXCI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9naW5Db21wb25lbnQoKVwiKTtcclxuICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlLnVzZXIpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFBhc3N3b3JkKCkge1xyXG4gICAgdGhpcy5wcmludEVtYWlsKCk7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAucmVzZXRQYXNzd29yZCh7XHJcbiAgICAgICAgZW1haWw6IHRoaXMuX2VtYWlsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgLy8gY2FsbGVkIHdoZW4gcGFzc3dvcmQgcmVzZXQgd2FzIHN1Y2Nlc3NmdWwsXHJcbiAgICAgICAgICAvLyB5b3UgY291bGQgbm93IHByb21wdCB0aGUgdXNlciB0byBjaGVjayBoaXMgZW1haWxcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ2hlY2sgeW91ciBlbWFpbCFcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTb3VuZHMgZ29vZCFcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkxvZ2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlQWNjb3VudCgpIHtcclxuICAgIHRoaXMucHJpbnRFbWFpbCgpO1xyXG4gICAgdGhpcy5wcmludFBhc3N3b3JkKCk7XHJcbiAgICB0aGlzLnByaW50Q29uZmlybVBhc3N3b3JkKCk7XHJcbiAgICBsZXQgcm91dGVyID0gdGhpcy5yb3V0ZXI7XHJcbiAgICBpZiAodGhpcy5fZW1haWwpIHtcclxuICAgICAgaWYgKHRoaXMuX3Bhc3N3b3JkID09IHRoaXMuX2NvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLl9lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNlYXJjaChcclxuICAgICAgICAgICAgICAgICAgXCJUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRW1haWwgYWxyZWFkeSBleGlzdHMhXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIGVtYWlsIGFkZHJlc3MgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSB0cnkgbG9nZ2luZyBpbiBpbnN0ZWFkLlwiLFxyXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBtdXN0IG1hdGNoLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJZb3UgbXVzdCBpbmNsdWRlIGFuIGVtYWlsXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb2dpbigpIHtcclxuICAgIHRoaXMucHJpbnRFbWFpbCgpO1xyXG4gICAgdGhpcy5wcmludFBhc3N3b3JkKCk7XHJcbiAgICBsZXQgcm91dGVyID0gdGhpcy5yb3V0ZXI7XHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBpcyBudWxsIG9yIGJsYW5rXHJcbiAgICBpZiAodGhpcy5fZW1haWwgPT0gbnVsbCB8fCB0aGlzLl9lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJNaXNzaW5nIGVtYWlsXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9wYXNzd29yZCA9PSBudWxsIHx8IHRoaXMuX3Bhc3N3b3JkID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgcGFzc3dvcmRcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5fZW1haWwgIT0gbnVsbCB8fCB0aGlzLl9lbWFpbCAhPSBcIlwiKSAmJlxyXG4gICAgICAodGhpcy5fcGFzc3dvcmQgIT0gbnVsbCB8fCB0aGlzLl9wYXNzd29yZCAhPSBcIlwiKVxyXG4gICAgKSB7XHJcbiAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgLmxvZ2luKHtcclxuICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5fZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLl9wYXNzd29yZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAvLyBTdWNjZXNzXHJcbiAgICAgICAgICBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gU2VhcmNoIHNjcmVlblxyXG4gICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gRXJyb3JcclxuICAgICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyBMb2dpbiBGYWlsZWRcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZS5tYXRjaChcclxuICAgICAgICAgICAgICAgIFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbiBlcnJvciBvY2N1cnJlZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFVzZXIgZG9lc24ndCBleGlzdFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgXCJUaGVyZSBpcyBubyB1c2VyIHJlY29yZCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgaWRlbnRpZmllci4gVGhlIHVzZXIgbWF5IGhhdmUgYmVlbiBkZWxldGVkLlwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAvLyBDcmVhdGUgVXNlclxyXG4gICAgICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBjcmVhdGVkIHN1Y2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNvbmdyYXR1bGF0aW9ucyEgSGFwcHkgRHJpbmtpbmchXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU3dlZXQhXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbmZpcm1hdGlvbiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCB2ZXJpZmljYXRpb24gc2VudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVycm9yIHNlbmRpbmcgZW1haWwgdmVyaWZpY2F0aW9uOiBcIiArIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlZGlyZWN0IHRvIFNlYXJjaCBzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vIHVzZXIgY3JlYXRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LLCBnb3QgaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaW50RW1haWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtYWlsOiBcIiArIHRoaXMuX2VtYWlsKTtcclxuICB9XHJcblxyXG4gIHByaW50UGFzc3dvcmQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBhc3N3b3JkOiBcIiArIHRoaXMuX3Bhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIHByaW50Q29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDb25maXJtIFBhc3N3b3JkOiBcIiArIHRoaXMuX2NvbmZpcm1QYXNzd29yZCk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ291dCgpIHtcclxuICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgYWxlcnQoe1xyXG4gICAgICB0aXRsZTogXCJVc2VyIGxvZ2dlZCBvdXRcIixcclxuICAgICAgbWVzc2FnZTogXCJTb3JyeSB0byBzZWUgeW91IGdvIVwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZpZXcoYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Mb2dpbjpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gXCJMb2dpblwiO1xyXG4gICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5Mb2dpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gXCJGb3Jnb3QgUGFzc3dvcmQ/XCI7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkZvcmdvdFBhc3N3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dpblN0YXRlLkNyZWF0ZUFjY291bnQ6IHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJDcmVhdGUgYW4gQWNjb3VudFwiO1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuQ3JlYXRlQWNjb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1haWxUZXh0Q2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCBlbWFpbCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLl9lbWFpbCA9IGVtYWlsLnRleHQ7XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZFRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHBhc3N3b3JkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMuX3Bhc3N3b3JkID0gcGFzc3dvcmQudGV4dDtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybVRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHBhc3N3b3JkQ29uZmlybSA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLl9jb25maXJtUGFzc3dvcmQgPSBwYXNzd29yZENvbmZpcm0udGV4dDtcclxuICB9XHJcblxyXG4gIG9uUmV0dXJuKGFyZ3MpIHtcclxuICAgIHN3aXRjaCAodGhpcy5sb2dpblN0YXRlKSB7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Mb2dpbjpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZFN0cmluZyh0aGlzLl9lbWFpbCkgJiZcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RyaW5nKHRoaXMuX3Bhc3N3b3JkKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Mb2dpbigpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkVtYWlsIG9yIHBhc3N3b3JkIGludmFsaWRcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgXCJUaGUgZW1haWwgb3IgcGFzc3dvcmQgeW91IGhhdmUgZW50ZXJlZCBpcyBpbnZhbGlkLiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3RjaGFcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5DcmVhdGVBY2NvdW50OlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RyaW5nKHRoaXMuX2VtYWlsKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRTdHJpbmcodGhpcy5fcGFzc3dvcmQpICYmXHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZFN0cmluZyh0aGlzLl9jb25maXJtUGFzc3dvcmQpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Bhc3N3b3JkID09IHRoaXMuX2NvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMub25DcmVhdGVBY2NvdW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkU3RyaW5nKHRoaXMuX2VtYWlsKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkU3RyaW5nKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXN0ciB8fCAvXlxccyokLy50ZXN0KHN0cik7XHJcbiAgfVxyXG59XHJcbiJdfQ==