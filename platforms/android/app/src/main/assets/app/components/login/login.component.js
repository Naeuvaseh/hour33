"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var login_state_enum_1 = require("../../enums/login-state.enum");
var firebase = require('nativescript-plugin-firebase');
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.user = {
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.loginState = login_state_enum_1.LoginState.Login;
        this.theme = settings_1.Theme;
    }
    LoginComponent.prototype.toggleForgotPassword = function () {
        this.loginState = login_state_enum_1.LoginState.ForgotPassword;
    };
    LoginComponent.prototype.toggleLogin = function () {
        this.loginState = login_state_enum_1.LoginState.Login;
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
    LoginComponent.prototype.toggleCreateAccount = function () {
        this.loginState = login_state_enum_1.LoginState.CreateAccount;
    };
    LoginComponent.prototype.onCancel = function () {
    };
    LoginComponent.prototype.onCreateAccount = function (email, password, confirmPassword) {
        if (email) {
            if (password == confirmPassword) {
                firebase.createUser({
                    email: this.user.email,
                    password: this.user.password
                }).then(function (result) {
                    alert({
                        title: "User created",
                        message: "userid: " + result.key,
                        okButtonText: "Nice!"
                    });
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
    LoginComponent.prototype.onLogin = function () {
        var router = this.router;
        var user = this.user;
        console.log('User Email: ' + this.user.email + '; Password: ' + this.user.password);
        if (this.user.email == null || this.user.email == '') {
            alert({
                title: "Missing email",
                message: "Please enter an email address.",
                okButtonText: "Ok"
            });
        }
        else if (this.user.password == null || this.user.password == '') {
            alert({
                title: "Missing password",
                message: "Please enter a password.",
                okButtonText: "Ok"
            });
        }
        else {
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: this.user.email,
                    password: this.user.password
                }
            }).then(
            // Success
            function (result) {
                JSON.stringify(result);
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
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsaUVBQTBEO0FBRTFELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBTXpEO0lBVUksd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDNCLFNBQUksR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixlQUFlLEVBQUUsRUFBRTtTQUN0QixDQUFBO1FBQ00sZUFBVSxHQUFXLDZCQUFVLENBQUMsS0FBSyxDQUFDO1FBRzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyw2QkFBVSxDQUFDLGNBQWMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQVUsQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxLQUFhO1FBQTNCLGlCQWNDO1FBYkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUNuQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxPQUFPO1lBQ0gsNkNBQTZDO1lBQzdDLG1EQUFtRDtZQUNuRCxLQUFJLENBQUMsVUFBVSxHQUFHLDZCQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMs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LFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFDRCxVQUFVLFlBQVk7d0JBQ2xCLEtBQUssQ0FBQzs0QkFDRixLQUFLLEVBQUUsaUJBQWlCOzRCQUN4QixPQUFPLEVBQUUsWUFBWTs0QkFDckIsWUFBWSxFQUFFLFlBQVk7eUJBQzdCLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQ0osQ0FBQztnQkFDTixDQUFDO1lBQ0QsQ0FBQyxDQUNBLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDO1lBQ04sS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFlBQVksRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBeEtRLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx5Q0FBeUM7U0FDdkQsQ0FBQzt5Q0FXOEIsZUFBTTtPQVZ6QixjQUFjLENBeUsxQjtJQUFELHFCQUFDO0NBQUEsQUF6S0QsSUF5S0M7QUF6S1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9zcmMvYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL2VudW1zL2xvZ2luLXN0YXRlLmVudW0nO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSB0aGVtZTtcbiAgICBwdWJsaWMgdXNlciA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJydcbiAgICB9XG4gICAgcHVibGljIGxvZ2luU3RhdGU6IHN0cmluZyA9IExvZ2luU3RhdGUuTG9naW47XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3Jnb3RQYXNzd29yZCgpe1xuICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkZvcmdvdFBhc3N3b3JkO1xuICAgIH1cblxuICAgIHRvZ2dsZUxvZ2luKCl7XG4gICAgICAgIHRoaXMubG9naW5TdGF0ZSA9IExvZ2luU3RhdGUuTG9naW47XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbDogc3RyaW5nKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsOiAnICsgZW1haWwpO1xuICAgICAgICBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBwYXNzd29yZCByZXNldCB3YXMgc3VjY2Vzc2Z1bCxcbiAgICAgICAgICAgICAgICAvLyB5b3UgY291bGQgbm93IHByb21wdCB0aGUgdXNlciB0byBjaGVjayBoaXMgZW1haWxcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBMb2dpblN0YXRlLkxvZ2luO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgIH1cblxuICAgIHRvZ2dsZUNyZWF0ZUFjY291bnQoKXtcbiAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gTG9naW5TdGF0ZS5DcmVhdGVBY2NvdW50O1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uQ3JlYXRlQWNjb3VudChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyl7XG4gICAgICAgIGlmIChlbWFpbCl7XG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKXtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgY3JlYXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInVzZXJpZDogXCIgKyByZXN1bHQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTmljZSFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LLCBnb3QgaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBwYXNzd29yZHMgbXVzdCBtYXRjaC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgbXVzdCBpbmNsdWRlIGFuIGVtYWlsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvZ2luKCl7XG4gICAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgdmFyIHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIEVtYWlsOiAnICsgdGhpcy51c2VyLmVtYWlsICsgJzsgUGFzc3dvcmQ6ICcgKyB0aGlzLnVzZXIucGFzc3dvcmQpO1xuICAgICAgICBpZih0aGlzLnVzZXIuZW1haWwgPT0gbnVsbCB8fCB0aGlzLnVzZXIuZW1haWwgPT0gJycpe1xuICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJNaXNzaW5nIGVtYWlsXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy51c2VyLnBhc3N3b3JkID09IG51bGwgfHwgdGhpcy51c2VyLnBhc3N3b3JkID09ICcnKXtcbiAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTWlzc2luZyBwYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBwYXNzd29yZC5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAvLyBTdWNjZXNzXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBTZWFyY2ggc2NyZWVuXG4gICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRXJyb3JcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAvLyBMb2dpbiBGYWlsZWRcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UubWF0Y2goXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFuIGVycm9yIG9jY3VycmVkXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZXIgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5tYXRjaChcIlRoZXJlIGlzIG5vIHVzZXIgcmVjb3JkIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpZGVudGlmaWVyLiBUaGUgdXNlciBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQuXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIFVzZXJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIGNyZWF0ZWQgc3VjZXNzZnVsbHlcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDb25ncmF0dWxhdGlvbnMhIEhhcHB5IERyaW5raW5nIVwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU3dlZXQhXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgY29uZmlybWF0aW9uIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgdmVyaWZpY2F0aW9uIHNlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBzZW5kaW5nIGVtYWlsIHZlcmlmaWNhdGlvbjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBTZWFyY2ggc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvZ291dCgpe1xuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcbiAgICAgICAgYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJVc2VyIGxvZ2dlZCBvdXRcIixcbiAgICAgICAgbWVzc2FnZTogXCJTb3JyeSB0byBzZWUgeW91IGdvIVwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VhcmNoJ10pO1xuICAgIH1cbn0iXX0=