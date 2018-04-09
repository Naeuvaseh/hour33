"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var firebase = require("nativescript-plugin-firebase");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        return Observable_1.Observable.fromPromise(firebase
            .getCurrentUser()
            .then(function (user) {
            //console.log("UserService.getUser()::: User: " + JSON.stringify(user));
            _this.user = user;
            return user;
        })
            .catch(function (error) { return console.log("UserService.getUser():[ERROR] " + error); }));
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return Observable_1.Observable.fromPromise(firebase.logout().then(function (success) {
            _this.user = null;
            _this.loggedIn = false;
            return true;
        }));
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDhDQUE2QztBQUM3QyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUd6RDtJQUlFO0lBQWUsQ0FBQztJQUVoQiw2QkFBTyxHQUFQO1FBQUEsaUJBV0M7UUFWQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxXQUFXLENBQzNCLFFBQVE7YUFDTCxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLHdFQUF3RTtZQUN4RSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFBQSxpQkFRQztRQVBDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFdBQVcsQ0FDM0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDNUIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBL0JVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBZ0N2QjtJQUFELGtCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgdXNlcjogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGxvZ2dlZEluOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldFVzZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmZyb21Qcm9taXNlKFxyXG4gICAgICBmaXJlYmFzZVxyXG4gICAgICAgIC5nZXRDdXJyZW50VXNlcigpXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVXNlclNlcnZpY2UuZ2V0VXNlcigpOjo6IFVzZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVXNlclNlcnZpY2UuZ2V0VXNlcigpOltFUlJPUl0gXCIgKyBlcnJvcikpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyOiBhbnkpIHtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmZyb21Qcm9taXNlKFxyXG4gICAgICBmaXJlYmFzZS5sb2dvdXQoKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19