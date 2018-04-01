"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var login_state_enum_1 = require("../../enums/login-state.enum");
var user_service_1 = require("../../services/user.service");
var firebase = require('nativescript-plugin-firebase');
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginStates = login_state_enum_1.LoginState;
        this.loginState = login_state_enum_1.LoginState.Login;
        this.theme = settings_1.Theme;
        this.title = 'Login';
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('LoginComponent()');
        if (this.userService.user) {
            this.router.navigate(['/search']);
        }
    };
    LoginComponent.prototype.toggleView = function (action) {
        switch (action) {
            case login_state_enum_1.LoginState.Login:
                {
                    this.title = 'Login';
                    this.loginState = login_state_enum_1.LoginState.Login;
                }
                break;
            case login_state_enum_1.LoginState.ForgotPassword:
                {
                    this.title = 'Forgot Password?';
                    this.loginState = login_state_enum_1.LoginState.ForgotPassword;
                }
                break;
            case login_state_enum_1.LoginState.CreateAccount: {
                this.title = 'Create an Account';
                this.loginState = login_state_enum_1.LoginState.CreateAccount;
            }
        }
    };
    LoginComponent.prototype.resetPassword = function (email) {
        var _this = this;
        console.log('Email: ' + email);
        firebase.resetPassword({
            email: email
        }).then(function (success) {
            // called when password reset was successful,
            // you could now prompt the user to check his email
            _this.loginState = login_state_enum_1.LoginState.Login;
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.onCancel = function () {
        this.router.navigate(['/search']);
    };
    LoginComponent.prototype.onCreateAccount = function (email, password, confirmPassword) {
        if (email) {
            if (password == confirmPassword) {
                firebase.createUser({
                    email: email,
                    password: password
                }).then(function (result) {
                    this.router.navigate(['/search']);
                }, function (errorMessage) {
                    alert({
                        title: "No user created",
                        message: errorMessage,
                        okButtonText: "OK, got it"
                    });
                });
            }
            else {
                alert('Your passwords must match.');
            }
        }
        else {
            alert('You must include an email');
        }
    };
    LoginComponent.prototype.onLogin = function (email, password) {
        var router = this.router;
        // Check if email is null or blank
        if (email == null || email == '') {
            alert({
                title: "Missing email",
                message: "Please enter an email address.",
                okButtonText: "Ok"
            });
        }
        if (password == null || password == '') {
            alert({
                title: "Missing password",
                message: "Please enter a password.",
                okButtonText: "Ok"
            });
        }
        if ((email != null || email != '') && (password != null || password != '')) {
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: email,
                    password: password
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
                    firebase.createUser({
                        email: this.user.email,
                        password: this.user.password
                    }).then(function (result) {
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
    LoginComponent.prototype.onLogout = function () {
        firebase.logout();
        alert({
            title: "User logged out",
            message: "Sorry to see you go!",
            okButtonText: "Ok"
        });
        this.router.navigate(['/search']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './components/login/login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBQzFELDREQUEwRDtBQUUxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQU9JLHdCQUFvQixNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnJDLGdCQUFXLEdBQUcsNkJBQVUsQ0FBQztRQUN6QixlQUFVLEdBQVcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFJM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixNQUFNLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ1gsS0FBSyw2QkFBVSxDQUFDLEtBQUs7Z0JBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ04sS0FBSyw2QkFBVSxDQUFD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Q0FROEIsZUFBTTtZQUNELDBCQUFXO09BUm5DLGNBQWMsQ0FrTDFCO0lBQUQscUJBQUM7Q0FBQSxBQWxMRCxJQWtMQztBQWxMWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL2VudW1zL2xvZ2luLXN0YXRlLmVudW0nO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgdGhlbWU7XHJcbiAgICBwdWJsaWMgdGl0bGU7XHJcbiAgICBwdWJsaWMgbG9naW5TdGF0ZXMgPSBMb2dpblN0YXRlO1xyXG4gICAgcHVibGljIGxvZ2luU3RhdGU6IHN0cmluZyA9IExvZ2luU3RhdGUuTG9naW47XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgICB0aGlzLnRpdGxlID0gJ0xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbkNvbXBvbmVudCgpJyk7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlclNlcnZpY2UudXNlcil7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NlYXJjaCddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVmlldyhhY3Rpb246IHN0cmluZyl7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgTG9naW5TdGF0ZS5Mb2dpbjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9ICdMb2dpbidcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuTG9naW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9ICdGb3Jnb3QgUGFzc3dvcmQ/J1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMb2dpblN0YXRlLkNyZWF0ZUFjY291bnQ6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSAnQ3JlYXRlIGFuIEFjY291bnQnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5DcmVhdGVBY2NvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UGFzc3dvcmQoZW1haWw6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsOiAnICsgZW1haWwpO1xyXG4gICAgICAgIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsbGVkIHdoZW4gcGFzc3dvcmQgcmVzZXQgd2FzIHN1Y2Nlc3NmdWwsXHJcbiAgICAgICAgICAgICAgICAvLyB5b3UgY291bGQgbm93IHByb21wdCB0aGUgdXNlciB0byBjaGVjayBoaXMgZW1haWxcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuTG9naW47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VhcmNoJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3JlYXRlQWNjb3VudChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyl7XHJcbiAgICAgICAgaWYgKGVtYWlsKXtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VhcmNoJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vIHVzZXIgY3JlYXRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIHBhc3N3b3JkcyBtdXN0IG1hdGNoLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnWW91IG11c3QgaW5jbHVkZSBhbiBlbWFpbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpe1xyXG4gICAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcclxuICAgICAgICAvLyBDaGVjayBpZiBlbWFpbCBpcyBudWxsIG9yIGJsYW5rXHJcbiAgICAgICAgaWYoZW1haWwgPT0gbnVsbCB8fCBlbWFpbCA9PSAnJyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgZW1haWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkID09IG51bGwgfHwgcGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNaXNzaW5nIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoZW1haWwgIT0gbnVsbCB8fCBlbWFpbCAhPSAnJykgJiYgKHBhc3N3b3JkICE9IG51bGwgfHwgcGFzc3dvcmQgIT0gJycpKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBTZWFyY2ggc2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2dpbiBGYWlsZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlLm1hdGNoKFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFuIGVycm9yIG9jY3VycmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFVzZXIgZG9lc24ndCBleGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5tYXRjaChcIlRoZXJlIGlzIG5vIHVzZXIgcmVjb3JkIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpZGVudGlmaWVyLiBUaGUgdXNlciBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIFVzZXJcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIGNyZWF0ZWQgc3VjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDb25ncmF0dWxhdGlvbnMhIEhhcHB5IERyaW5raW5nIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU3dlZXQhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgY29uZmlybWF0aW9uIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgdmVyaWZpY2F0aW9uIHNlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBzZW5kaW5nIGVtYWlsIHZlcmlmaWNhdGlvbjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBTZWFyY2ggc2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9nb3V0KCl7XHJcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XHJcbiAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIlVzZXIgbG9nZ2VkIG91dFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiU29ycnkgdG8gc2VlIHlvdSBnbyFcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NlYXJjaCddKTtcclxuICAgIH1cclxufSJdfQ==