"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
var firebase = require('nativescript-plugin-firebase');
var AccountComponent = /** @class */ (function () {
    function AccountComponent(router) {
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
        this.theme = settings_1.Theme;
    }
    AccountComponent.prototype.onLogin = function () {
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
    AccountComponent.prototype.onLogout = function () {
        firebase.logout();
        alert({
            title: "User logged out",
            message: "Sorry to see you go!",
            okButtonText: "Ok"
        });
        this.router.navigate(['/search']);
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'account',
            templateUrl: './components/account/account.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyQ0FBdUM7QUFFdkMsMENBQXlDO0FBQ3pDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBTXpEO0lBU0ksMEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDdCLFNBQUksR0FBRztZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFBO1FBS0csSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFSCxrQ0FBTyxHQUFQO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ25ELEtBQUssQ0FBQztnQkFDSixLQUFLLEVBQUUsZUFBZTtnQkFDdEIsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxD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Q1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDZDQUE2QztTQUMzRCxDQUFDO3lDQVU4QixlQUFNO09BVHpCLGdCQUFnQixDQXdHNUI7SUFBRCx1QkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9zcmMvYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhY2NvdW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29tcG9uZW50IHtcclxuXHJcbiAgcHVibGljIHVzZXIgPSB7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJydcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIH1cclxuXHJcbiAgb25Mb2dpbigpe1xyXG4gICAgdmFyIHJvdXRlciA9IHRoaXMucm91dGVyO1xyXG4gICAgdmFyIHVzZXIgPSB0aGlzLnVzZXI7XHJcbiAgICBjb25zb2xlLmxvZygnVXNlciBFbWFpbDogJyArIHRoaXMudXNlci5lbWFpbCArICc7IFBhc3N3b3JkOiAnICsgdGhpcy51c2VyLnBhc3N3b3JkKTtcclxuICAgIGlmKHRoaXMudXNlci5lbWFpbCA9PSBudWxsIHx8IHRoaXMudXNlci5lbWFpbCA9PSAnJyl7XHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJNaXNzaW5nIGVtYWlsXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMudXNlci5wYXNzd29yZCA9PSBudWxsIHx8IHRoaXMudXNlci5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJNaXNzaW5nIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBwYXNzd29yZC5cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgLy8gU3VjY2Vzc1xyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAvL1JlZGlyZWN0IHRvIFNlYXJjaCBzY3JlZW5cclxuICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgIC8vIExvZ2luIEZhaWxlZFxyXG4gICAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5tYXRjaChcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIikpIHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFuIGVycm9yIG9jY3VycmVkXCIsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBVc2VyIGRvZXNuJ3QgZXhpc3RcclxuICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UubWF0Y2goXCJUaGVyZSBpcyBubyB1c2VyIHJlY29yZCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgaWRlbnRpZmllci4gVGhlIHVzZXIgbWF5IGhhdmUgYmVlbiBkZWxldGVkLlwiKSkge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgVXNlclxyXG4gICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgY3JlYXRlZCBzdWNlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNvbmdyYXR1bGF0aW9ucyEgSGFwcHkgRHJpbmtpbmchXCIsXHJcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTd2VldCFcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbmZpcm1hdGlvbiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2Uuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgdmVyaWZpY2F0aW9uIHNlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb246IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBTZWFyY2ggc2NyZWVuXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LLCBnb3QgaXRcIlxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KCl7XHJcbiAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgIGFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiVXNlciBsb2dnZWQgb3V0XCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiU29ycnkgdG8gc2VlIHlvdSBnbyFcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VhcmNoJ10pO1xyXG4gIH1cclxufSJdfQ==