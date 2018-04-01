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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBQzFELDREQUEwRDtBQUUxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQU9JLHdCQUFvQixNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnJDLGdCQUFXLEdBQUcsNkJBQVUsQ0FBQztRQUN6QixlQUFVLEdBQVcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFJM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixNQUFNLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ1gsS0FBSyw2QkFBVSxDQUFDLEtBQUs7Z0JBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ04sS0FBSyw2QkFBVSxDQUFDLGNBQWM7Z0JBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQTtvQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyw2QkFBVSxDQUFDLGNBQWMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDTixLQUFLLDZCQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxhQUFhLENBQUM7WUFDL0MsQ0FBQztRQUNMLENBQUM7SUFFTCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQWE7UUFBM0IsaUJBY0M7UUFiRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ25CLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLE9BQU87WUFDSCw2Q0FBNkM7WUFDN0MsbURBQW1EO1lBQ25ELEtBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNKLENBQUM7SUFDUixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxlQUF1QjtRQUNwRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ1AsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLGVBQWUsQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxVQUFVLENBQUM7b0JBQ2hCLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxRQUFRO2lCQUNuQixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsTUFBTTtvQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsRUFDRCxVQUFVLFlBQVk7b0JBQ3BCLEtBQUssQ0FBQzt3QkFDSixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixPQUFPLEVBQUUsWUFBWTt3QkFDckIsWUFBWSxFQUFFLFlBQVk7cUJBQzNCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQ0osQ0FBQztZQUNSLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRCxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsa0NBQWtDO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDN0IsS0FBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNwQyxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsT0FBTyxFQUFFLDBCQUEwQjtnQkFDbkMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUNqQyxlQUFlLEVBQUU7b0JBQ2IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osUUFBUSxFQUFFLFFBQVE7aUJBQ3JCO2FBQ0osQ0FBQztpQkFDRCxJQUFJO1lBQ0QsVUFBVTtZQUNWLFVBQVUsTUFBTTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsMkJBQTJCO2dCQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsUUFBUTtZQUNSLFVBQVUsWUFBWTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsZUFBZTtnQkFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RixLQUFLLENBQUM7d0JBQ04sS0FBSyxFQUFFLG1CQUFtQjt3QkFDMUIsT0FBTyxFQUFFLCtEQUErRDt3QkFDeEUsWUFBWSxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUNELHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQywyRkFBMkYsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEgsY0FBYztvQkFDZCxRQUFRLENBQUMsVUFBVSxDQUFDO3dCQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO3FCQUMzQixDQUFDLENBQUMsSUFBSSxDQUNQLFVBQVUsTUFBTTt3QkFDWixLQUFLLENBQUM7NEJBQ04sS0FBSyxFQUFFLDBCQUEwQjs0QkFDakMsT0FBTyxFQUFFLGtDQUFrQzs0QkFDM0MsWUFBWSxFQUFFLFFBQVE7eUJBQ3JCLENBQUMsQ0FBQzt3QkFDSCwwQkFBMEI7d0JBQzFCLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FDckM7NEJBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUMzQyxDQUFDLEVBQ0QsVUFBVSxLQUFLOzRCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEdBQUcsS0FBSyxDQUFDLENBQUM7d0JBQzlELENBQUMsQ0FDQSxDQUFDO3dCQUNGLDJCQUEyQjt3QkFDM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFDRCxVQUFVLFlBQVk7d0JBQ2xCLEtBQUssQ0FBQzs0QkFDRixLQUFLLEVBQUUsaUJBQWlCOzRCQUN4QixPQUFPLEVBQUUsWUFBWTs0QkFDckIsWUFBWSxFQUFFLFlBQVk7eUJBQzdCLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQ0osQ0FBQztnQkFDTixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDO1lBQ04sS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFlBQVksRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBakxRLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx5Q0FBeUM7U0FDdkQsQ0FBQzt5Q0FROEIsZUFBTTtZQUNELDBCQUFXO09BUm5DLGNBQWMsQ0FrTDFCO0lBQUQscUJBQUM7Q0FBQSxBQWxMRCxJQWtMQztBQWxMWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2luU3RhdGUgfSBmcm9tICcuLi8uLi9lbnVtcy9sb2dpbi1zdGF0ZS5lbnVtJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgdGhlbWU7XG4gICAgcHVibGljIHRpdGxlO1xuICAgIHB1YmxpYyBsb2dpblN0YXRlcyA9IExvZ2luU3RhdGU7XG4gICAgcHVibGljIGxvZ2luU3RhdGU6IHN0cmluZyA9IExvZ2luU3RhdGUuTG9naW47XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcbiAgICAgIHRoaXMudGl0bGUgPSAnTG9naW4nO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbkNvbXBvbmVudCgpJyk7XG4gICAgICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlLnVzZXIpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VhcmNoJ10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVmlldyhhY3Rpb246IHN0cmluZyl7XG4gICAgICAgIHN3aXRjaChhY3Rpb24pe1xuICAgICAgICAgICAgY2FzZSBMb2dpblN0YXRlLkxvZ2luOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9ICdMb2dpbidcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkxvZ2luO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExvZ2luU3RhdGUuRm9yZ290UGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gJ0ZvcmdvdCBQYXNzd29yZD8nXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMb2dpblN0YXRlLkNyZWF0ZUFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gJ0NyZWF0ZSBhbiBBY2NvdW50JztcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkNyZWF0ZUFjY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbDogc3RyaW5nKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsOiAnICsgZW1haWwpO1xuICAgICAgICBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBwYXNzd29yZCByZXNldCB3YXMgc3VjY2Vzc2Z1bCxcbiAgICAgICAgICAgICAgICAvLyB5b3UgY291bGQgbm93IHByb21wdCB0aGUgdXNlciB0byBjaGVjayBoaXMgZW1haWxcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkxvZ2luO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NlYXJjaCddKTtcbiAgICB9XG5cbiAgICBvbkNyZWF0ZUFjY291bnQoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY29uZmlybVBhc3N3b3JkOiBzdHJpbmcpe1xuICAgICAgICBpZiAoZW1haWwpe1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCl7XG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VhcmNoJ10pO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIHBhc3N3b3JkcyBtdXN0IG1hdGNoLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1lvdSBtdXN0IGluY2x1ZGUgYW4gZW1haWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyl7XG4gICAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgbnVsbCBvciBibGFua1xuICAgICAgICBpZihlbWFpbCA9PSBudWxsIHx8IGVtYWlsID09ICcnKXtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNaXNzaW5nIGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3N3b3JkID09IG51bGwgfHwgcGFzc3dvcmQgPT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVtYWlsICE9IG51bGwgfHwgZW1haWwgIT0gJycpICYmIChwYXNzd29yZCAhPSBudWxsIHx8IHBhc3N3b3JkICE9ICcnKSkge1xuICAgICAgICAgICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgLy8gU3VjY2Vzc1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gU2VhcmNoIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBFcnJvclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9naW4gRmFpbGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UubWF0Y2goXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBbiBlcnJvciBvY2N1cnJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFVzZXIgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UubWF0Y2goXCJUaGVyZSBpcyBubyB1c2VyIHJlY29yZCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgaWRlbnRpZmllci4gVGhlIHVzZXIgbWF5IGhhdmUgYmVlbiBkZWxldGVkLlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgVXNlclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIGNyZWF0ZWQgc3VjZXNzZnVsbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29uZ3JhdHVsYXRpb25zISBIYXBweSBEcmlua2luZyFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTd2VldCFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbmZpcm1hdGlvbiBlbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHZlcmlmaWNhdGlvbiBzZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb246IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gU2VhcmNoIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2dvdXQoKXtcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XG4gICAgICAgIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiVXNlciBsb2dnZWQgb3V0XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU29ycnkgdG8gc2VlIHlvdSBnbyFcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NlYXJjaCddKTtcbiAgICB9XG59Il19