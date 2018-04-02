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
    LoginComponent.prototype.resetPassword = function (email) {
        var _this = this;
        console.log("Email: " + email);
        firebase
            .resetPassword({
            email: email
        })
            .then(function (success) {
            // called when password reset was successful,
            // you could now prompt the user to check his email
            _this.loginState = login_state_enum_1.LoginState.Login;
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.onCancel = function () {
        this.router.navigate(["/search"]);
    };
    LoginComponent.prototype.onCreateAccount = function (email, password, confirmPassword) {
        if (email) {
            if (password == confirmPassword) {
                firebase
                    .createUser({
                    email: email,
                    password: password
                })
                    .then(function (result) {
                    this.router.navigate(["/search"]);
                }, function (errorMessage) {
                    if (errorMessage.search("The email address is already in use by another account.")) {
                        alert({
                            title: "Email already exists!",
                            message: "This email address already exists. Please try logging in instead.",
                            okButtonText: "OK, got it"
                        });
                        this.toggleView(login_state_enum_1.LoginState.Login);
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
    LoginComponent.prototype.onLogin = function (email, password) {
        console.log("Logging in -- Email: " + email + "; Password: " + password);
        // Check if email is null or blank
        if (email == null || email == "") {
            alert({
                title: "Missing email",
                message: "Please enter an email address.",
                okButtonText: "Ok"
            });
        }
        if (password == null || password == "") {
            alert({
                title: "Missing password",
                message: "Please enter a password.",
                okButtonText: "Ok"
            });
        }
        if ((email != null || email != "") &&
            (password != null || password != "")) {
            firebase
                .login({
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
                this.router.navigate(["/search"]);
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
                        this.router.navigate(["/search"]);
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
        this.router.navigate(["/search"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBQzFELDREQUEwRDtBQUUxRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU16RDtJQU1FLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDdELGdCQUFXLEdBQUcsNkJBQVUsQ0FBQztRQUN6QixlQUFVLEdBQVcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFHM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUN2QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyw2QkFBVSxDQUFDLEtBQUs7Z0JBQ25CLENBQUM7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1IsS0FBSyw2QkFBVSxDQUFDLGNBQWM7Z0JBQzVCLENBQUM7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyw2QkFBVSxDQUFDLGNBQWMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDUixLQUFLLDZCQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxhQUFhLENBQUM7WUFDN0MsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQWE7UUFBM0IsaUJBZ0JDO1FBZkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0IsUUFBUTthQUNMLGFBQWEsQ0FBQztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFBLE9BQU87WUFDTCw2Q0FBNkM7WUFDN0MsbURBQW1EO1lBQ25ELEtBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxlQUF1QjtRQUN0RSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLFFBQVE7cUJBQ0wsVUFBVSxDQUFDO29CQUNWLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxRQUFRO2lCQUNuQixDQUFDO3FCQUNELElBQUksQ0FDSCxVQUFTLE1BQU07b0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLEVBQ0QsVUFBUyxZQUFZO29CQUNuQixFQUFFLENBQUMsQ0FDRCxZQUFZLENBQUMsTUFBTSxDQUNqQix5REFBeUQsQ0FFN0QsQ0FBQyxDQUFDLENBQUM7d0JBQ0QsS0FBSyxDQUFDOzRCQUNKLEtBQUssRUFBRSx1QkFBdUI7NEJBQzlCLE9BQU8sRUFDTCxtRUFBbUU7NEJBQ3JFLFlBQVksRUFBRSxZQUFZO3lCQUMzQixDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUNELEtBQUssQ0FBQzt3QkFDSixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixPQUFPLEVBQUUsWUFBWTt3QkFDckIsWUFBWSxFQUFFLFlBQVk7cUJBQzNCLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQ0YsQ0FBQztZQUNOLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLFFBQWdCO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxHQUFHLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUN6RSxrQ0FBa0M7UUFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQztnQkFDSixLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQ0QsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDOUIsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxFQUFFLENBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0QsUUFBUTtpQkFDTCxLQUFLLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDakMsZUFBZSxFQUFFO29CQUNmLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjthQUNGLENBQUM7aUJBQ0QsSUFBSTtZQUNILFVBQVU7WUFDVixVQUFTLE1BQU07Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLDJCQUEyQjtnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxRQUFRO1lBQ1IsVUFBUyxZQUFZO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixlQUFlO2dCQUNmLEVBQUUsQ0FBQyxDQUNELFlBQVksQ0FBQyxLQUFLLENBQ2hCLCtEQUErRCxDQUVuRSxDQUFDLENBQUMsQ0FBQztvQkFDRCxLQUFLLENBQUM7d0JBQ0osS0FBSyxFQUFFLG1CQUFtQjt3QkFDMUIsT0FBTyxFQUNMLCtEQUErRDt3QkFDakUsWUFBWSxFQUFFLElBQUk7cUJBQ25CLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQ0QsWUFBWSxDQUFDLEtBQUssQ0FDaEIsMkZBQTJGLENBRS9GLENBQUMsQ0FBQyxDQUFDO29CQUNELGNBQWM7b0JBQ2QsUUFBUTt5QkFDTCxVQUFVLENBQUM7d0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtxQkFDN0IsQ0FBQzt5QkFDRCxJQUFJLENBQ0gsVUFBUyxNQUFNO3dCQUNiLEtBQUssQ0FBQzs0QkFDSixLQUFLLEVBQUUsMEJBQTBCOzRCQUNqQyxPQUFPLEVBQUUsa0NBQWtDOzRCQUMzQyxZQUFZLEVBQUUsUUFBUTt5QkFDdkIsQ0FBQyxDQUFDO3dCQUNILDBCQUEwQjt3QkFDMUIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUNuQzs0QkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ3pDLENBQUMsRUFDRCxVQUFTLEtBQUs7NEJBQ1osT0FBTyxDQUFDLEdBQUcsQ0FDVCxvQ0FBb0MsR0FBRyxLQUFLLENBQzdDLENBQUM7d0JBQ0osQ0FBQyxDQUNGLENBQUM7d0JBQ0YsMkJBQTJCO3dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFDRCxVQUFTLFlBQVk7d0JBQ25CLEtBQUssQ0FBQzs0QkFDSixLQUFLLEVBQUUsaUJBQWlCOzRCQUN4QixPQUFPLEVBQUUsWUFBWTs0QkFDckIsWUFBWSxFQUFFLFlBQVk7eUJBQzNCLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQ0YsQ0FBQztnQkFDTixDQUFDO1lBQ0gsQ0FBQyxDQUNGLENBQUM7UUFDTixDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDO1lBQ0osS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBak5VLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx5Q0FBeUM7U0FDdkQsQ0FBQzt5Q0FPNEIsZUFBTSxFQUF1QiwwQkFBVztPQU56RCxjQUFjLENBa04xQjtJQUFELHFCQUFDO0NBQUEsQUFsTkQsSUFrTkM7QUFsTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5TdGF0ZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9sb2dpbi1zdGF0ZS5lbnVtXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHB1YmxpYyB0aXRsZTtcclxuICBwdWJsaWMgbG9naW5TdGF0ZXMgPSBMb2dpblN0YXRlO1xyXG4gIHB1YmxpYyBsb2dpblN0YXRlOiBzdHJpbmcgPSBMb2dpblN0YXRlLkxvZ2luO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAgdGhpcy50aXRsZSA9IFwiTG9naW5cIjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMb2dpbkNvbXBvbmVudCgpXCIpO1xyXG4gICAgaWYgKHRoaXMudXNlclNlcnZpY2UudXNlcikge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVZpZXcoYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Mb2dpbjpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gXCJMb2dpblwiO1xyXG4gICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5Mb2dpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9naW5TdGF0ZS5Gb3Jnb3RQYXNzd29yZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gXCJGb3Jnb3QgUGFzc3dvcmQ/XCI7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkZvcmdvdFBhc3N3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dpblN0YXRlLkNyZWF0ZUFjY291bnQ6IHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJDcmVhdGUgYW4gQWNjb3VudFwiO1xyXG4gICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuQ3JlYXRlQWNjb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRQYXNzd29yZChlbWFpbDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtYWlsOiBcIiArIGVtYWlsKTtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBwYXNzd29yZCByZXNldCB3YXMgc3VjY2Vzc2Z1bCxcclxuICAgICAgICAgIC8vIHlvdSBjb3VsZCBub3cgcHJvbXB0IHRoZSB1c2VyIHRvIGNoZWNrIGhpcyBlbWFpbFxyXG4gICAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5Mb2dpbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVBY2NvdW50KGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgaWYgKHBhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2VhcmNoKFxyXG4gICAgICAgICAgICAgICAgICBcIlRoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYWNjb3VudC5cIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJFbWFpbCBhbHJlYWR5IGV4aXN0cyFcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgZW1haWwgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cy4gUGxlYXNlIHRyeSBsb2dnaW5nIGluIGluc3RlYWQuXCIsXHJcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaWV3KExvZ2luU3RhdGUuTG9naW4pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmRzIG11c3QgbWF0Y2guXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIllvdSBtdXN0IGluY2x1ZGUgYW4gZW1haWxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luZyBpbiAtLSBFbWFpbDogXCIgKyBlbWFpbCArIFwiOyBQYXNzd29yZDogXCIgKyBwYXNzd29yZCk7XHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBpcyBudWxsIG9yIGJsYW5rXHJcbiAgICBpZiAoZW1haWwgPT0gbnVsbCB8fCBlbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJNaXNzaW5nIGVtYWlsXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCA9PSBudWxsIHx8IHBhc3N3b3JkID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgcGFzc3dvcmRcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAoZW1haWwgIT0gbnVsbCB8fCBlbWFpbCAhPSBcIlwiKSAmJlxyXG4gICAgICAocGFzc3dvcmQgIT0gbnVsbCB8fCBwYXNzd29yZCAhPSBcIlwiKVxyXG4gICAgKSB7XHJcbiAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgLmxvZ2luKHtcclxuICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAvLyBTdWNjZXNzXHJcbiAgICAgICAgICBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gU2VhcmNoIHNjcmVlblxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIExvZ2luIEZhaWxlZFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFuIGVycm9yIG9jY3VycmVkXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICBcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVXNlciBkb2Vzbid0IGV4aXN0XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UubWF0Y2goXHJcbiAgICAgICAgICAgICAgICBcIlRoZXJlIGlzIG5vIHVzZXIgcmVjb3JkIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpZGVudGlmaWVyLiBUaGUgdXNlciBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQuXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIC8vIENyZWF0ZSBVc2VyXHJcbiAgICAgICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIGNyZWF0ZWQgc3VjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29uZ3JhdHVsYXRpb25zISBIYXBweSBEcmlua2luZyFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTd2VldCFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgY29uZmlybWF0aW9uIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHZlcmlmaWNhdGlvbiBzZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb246IFwiICsgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gU2VhcmNoIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvZ291dCgpIHtcclxuICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgYWxlcnQoe1xyXG4gICAgICB0aXRsZTogXCJVc2VyIGxvZ2dlZCBvdXRcIixcclxuICAgICAgbWVzc2FnZTogXCJTb3JyeSB0byBzZWUgeW91IGdvIVwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICB9XHJcbn1cclxuIl19