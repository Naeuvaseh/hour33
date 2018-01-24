"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var google_location_service_1 = require("../services/google-location.service");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var CurrentLocationResolver = (function () {
    function CurrentLocationResolver(googleLocationService) {
        this.googleLocationService = googleLocationService;
    }
    CurrentLocationResolver.prototype.resolve = function (route) {
        console.log('CurrentLocationResolver()');
        var location;
        geolocation
            .getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            updateTime: 500,
            maximumAge: 5000,
            timeout: 20000
        })
            .then(function (result) {
            if (result) {
                location = result;
            }
        }, function (error) {
            console.log('CurrentLocationResolver() ERROR: ' + error);
        });
        return location;
    };
    CurrentLocationResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [google_location_service_1.GoogleLocationService])
    ], CurrentLocationResolver);
    return CurrentLocationResolver;
}());
exports.CurrentLocationResolver = CurrentLocationResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1sb2NhdGlvbi5yZXNvbHZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1sb2NhdGlvbi5yZXNvbHZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLCtFQUE0RTtBQUc1RSxzREFBdUQ7QUFDdkQsa0NBQW9DO0FBR3BDO0lBQ0UsaUNBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUksQ0FBQztJQUVyRSx5Q0FBTyxHQUFQLFVBQVEsS0FBNkI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksUUFBa0IsQ0FBQztRQUN2QixXQUFXO2FBQ04sa0JBQWtCLENBQUM7WUFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtZQUM5QixVQUFVLEVBQUUsR0FBRztZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7YUFDRCxJQUFJLENBQ0wsVUFBUyxNQUFnQjtZQUNyQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUNSLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFTLEtBQUs7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBdkJVLHVCQUF1QjtRQURuQyxpQkFBVSxFQUFFO3lDQUVnQywrQ0FBcUI7T0FEckQsdUJBQXVCLENBd0JuQztJQUFELDhCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJ1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gJ3VpL2VudW1zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRMb2NhdGlvblJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxMb2NhdGlvbj4ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlTG9jYXRpb25TZXJ2aWNlOiBHb29nbGVMb2NhdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogTG9jYXRpb24ge1xyXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnRMb2NhdGlvblJlc29sdmVyKCknKTtcclxuICAgIHZhciBsb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDUwMCxcclxuICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uKHJlc3VsdDogTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnRMb2NhdGlvblJlc29sdmVyKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICByZXR1cm4gbG9jYXRpb247XHJcbiAgfVxyXG59Il19