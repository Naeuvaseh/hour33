"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var firebase = require('nativescript-plugin-firebase');
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.user = {
            email: '',
            password: '',
            forgottenEmailPassword: ''
        };
        this.forgotPassword = false;
        this.theme = settings_1.Theme;
    }
    LoginComponent.prototype.toggleForgotPassword = function () {
        this.forgotPassword = !this.forgotPassword;
    };
    LoginComponent.prototype.resetPassword = function () {
        console.log('Email: ' + this.user.email);
        firebase.resetPassword({
            email: this.user.forgottenEmailPassword
        }).then(function () {
            // called when password reset was successful,
            // you could now prompt the user to check his email
            this.forgotPassword = !this.forgotPassword;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJDQUF1QztBQUV2QywwQ0FBeUM7QUFDekMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFNekQ7SUFXSSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUN0IsU0FBSSxHQUFHO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLHNCQUFzQixFQUFFLEVBQUU7U0FDM0IsQ0FBQTtRQUdNLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBR25DLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCO1NBQ3hDLENBQUMsQ0FBQyxJQUFJLENBQ0w7WUFDSSw2Q0FBNkM7WUFDN0MsbURBQW1EO1lBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQ0osQ0FBQztJQUdSLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FB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UUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxFQUNELFVBQVUsWUFBWTt3QkFDbEIsS0FBSyxDQUFDOzRCQUNGLEtBQUssRUFBRSxpQkFBaUI7NEJBQ3hCLE9BQU8sRUFBRSxZQUFZOzRCQUNyQixZQUFZLEVBQUUsWUFBWTt5QkFDN0IsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FDSixDQUFDO2dCQUNOLENBQUM7WUFDRCxDQUFDLENBQ0EsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUM7WUFDTixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsWUFBWSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUEvSFEsY0FBYztRQUoxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHlDQUF5QztTQUN2RCxDQUFDO3lDQVk4QixlQUFNO09BWHpCLGNBQWMsQ0FnSTFCO0lBQUQscUJBQUM7Q0FBQSxBQWhJRCxJQWdJQztBQWhJWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gIHB1YmxpYyB1c2VyID0ge1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgZm9yZ290dGVuRW1haWxQYXNzd29yZDogJydcbiAgfVxuXG4gIHByaXZhdGUgdGhlbWU7XG4gIHB1YmxpYyBmb3Jnb3RQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICB0aGlzLnRoZW1lID0gVGhlbWU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9yZ290UGFzc3dvcmQoKXtcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZCA9ICF0aGlzLmZvcmdvdFBhc3N3b3JkO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsOiAnICsgdGhpcy51c2VyLmVtYWlsKTtcbiAgICAgICAgZmlyZWJhc2UucmVzZXRQYXNzd29yZCh7XG4gICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmZvcmdvdHRlbkVtYWlsUGFzc3dvcmRcbiAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHBhc3N3b3JkIHJlc2V0IHdhcyBzdWNjZXNzZnVsLFxuICAgICAgICAgICAgICAgIC8vIHlvdSBjb3VsZCBub3cgcHJvbXB0IHRoZSB1c2VyIHRvIGNoZWNrIGhpcyBlbWFpbFxuICAgICAgICAgICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmQgPSAhdGhpcy5mb3Jnb3RQYXNzd29yZDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uTG9naW4oKXtcbiAgICAgICAgdmFyIHJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgICAgICB2YXIgdXNlciA9IHRoaXMudXNlcjtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgRW1haWw6ICcgKyB0aGlzLnVzZXIuZW1haWwgKyAnOyBQYXNzd29yZDogJyArIHRoaXMudXNlci5wYXNzd29yZCk7XG4gICAgICAgIGlmKHRoaXMudXNlci5lbWFpbCA9PSBudWxsIHx8IHRoaXMudXNlci5lbWFpbCA9PSAnJyl7XG4gICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1pc3NpbmcgZW1haWxcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgPT0gbnVsbCB8fCB0aGlzLnVzZXIucGFzc3dvcmQgPT0gJycpe1xuICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJNaXNzaW5nIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIC8vIFN1Y2Nlc3NcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICAvL1JlZGlyZWN0IHRvIFNlYXJjaCBzY3JlZW5cbiAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBFcnJvclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIC8vIExvZ2luIEZhaWxlZFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5tYXRjaChcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIikpIHtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlciBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlLm1hdGNoKFwiVGhlcmUgaXMgbm8gdXNlciByZWNvcmQgY29ycmVzcG9uZGluZyB0byB0aGlzIGlkZW50aWZpZXIuIFRoZSB1c2VyIG1heSBoYXZlIGJlZW4gZGVsZXRlZC5cIikpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgVXNlclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgY3JlYXRlZCBzdWNlc3NmdWxseVwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNvbmdyYXR1bGF0aW9ucyEgSGFwcHkgRHJpbmtpbmchXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTd2VldCFcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBjb25maXJtYXRpb24gZW1haWxcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2Uuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCB2ZXJpZmljYXRpb24gc2VudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNlbmRpbmcgZW1haWwgdmVyaWZpY2F0aW9uOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAvL1JlZGlyZWN0IHRvIFNlYXJjaCBzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9nb3V0KCl7XG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xuICAgICAgICBhbGVydCh7XG4gICAgICAgIHRpdGxlOiBcIlVzZXIgbG9nZ2VkIG91dFwiLFxuICAgICAgICBtZXNzYWdlOiBcIlNvcnJ5IHRvIHNlZSB5b3UgZ28hXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zZWFyY2gnXSk7XG4gICAgfVxufSJdfQ==