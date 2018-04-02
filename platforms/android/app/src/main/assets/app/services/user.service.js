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
            console.log("User: " + JSON.stringify(user));
            _this._user = user;
        })
            .catch(function (error) { return console.log("Trouble in paradise: " + error); });
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            console.log("Getting current user: " + JSON.stringify(this._user));
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBR3pEO0lBR0U7UUFBQSxpQkFRQztRQVBDLFFBQVE7YUFDTCxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHNCQUFJLDZCQUFJO2FBQVI7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFoQlUsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FpQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3VzZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdXNlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBjdXJyZW50IHVzZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5fdXNlcikpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==