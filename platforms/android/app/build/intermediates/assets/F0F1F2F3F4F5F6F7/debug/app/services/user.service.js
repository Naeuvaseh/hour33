"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        firebase.getCurrentUser()
            .then(function (user) {
            console.log("User: " + JSON.stringify(user));
            _this._user = user;
        })
            .catch(function (error) { return console.log("Trouble in paradise: " + error); });
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            console.log('Getting current user: ' + JSON.stringify(this._user));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBSXpEO0lBSUk7UUFBQSxpQkFPQztRQU5HLFFBQVEsQ0FBQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFoQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FtQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF91c2VyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBjdXJyZW50IHVzZXI6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl91c2VyKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXI7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==