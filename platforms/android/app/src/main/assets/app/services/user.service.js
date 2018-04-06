"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        firebase
            .getCurrentUser()
            .then(function (user) {
            if (user) {
                console.log("User: " + JSON.stringify(user));
                _this._user = user;
                _this.loggedIn = true;
            }
            else {
                _this._user = null;
                _this.loggedIn = false;
            }
        })
            .catch(function (error) {
            return console.log("UserService.constructor():[ERROR] " + error);
        });
    }
    UserService.prototype.getUser = function () {
        console.log("Getting current user: " + JSON.stringify(this._user));
        return this._user;
    };
    UserService.prototype.setUset = function (user) {
        this._user = user;
    };
    UserService.prototype.logout = function () {
        var _this = this;
        firebase.logout().then(function (success) {
            _this._user = null;
            _this.loggedIn = false;
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBR3pEO0lBSUU7UUFBQSxpQkFnQkM7UUFmQyxRQUFRO2FBQ0wsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEdBQUcsS0FBSyxDQUFDO1FBQXpELENBQXlELENBQzFELENBQUM7SUFDTixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDNUIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcENVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBcUN2QjtJQUFELGtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91c2VyOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgbG9nZ2VkSW46IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmdldEN1cnJlbnRVc2VyKClcclxuICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlcjogXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgICB0aGlzLl91c2VyID0gdXNlcjtcclxuICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl91c2VyID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlclNlcnZpY2UuY29uc3RydWN0b3IoKTpbRVJST1JdIFwiICsgZXJyb3IpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgY3VycmVudCB1c2VyOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3VzZXIpKTtcclxuICAgIHJldHVybiB0aGlzLl91c2VyO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNldCh1c2VyOiBhbnkpIHtcclxuICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgZmlyZWJhc2UubG9nb3V0KCkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgdGhpcy5fdXNlciA9IG51bGw7XHJcbiAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=