"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../settings");
// Geolcation
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
// Google Places
var GooglePlaces = require("nativescript-plugin-google-places");
var GoogleLocationService = (function () {
    function GoogleLocationService() {
        // Google Places API
        this._googleServerApiKey = 'AIzaSyDbY1JhYKBsuzW80PFMjWa2Pg3QMveBNSM';
        this._placesApiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
        this._placesDetailsApiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
        this._placesImagesApiUrl = 'https://maps.googleapis.com/maps/api/place/photo';
        this._debug = settings_1.Debug;
    }
    GoogleLocationService.prototype.search = function (text, types) {
        var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
        var url = this._placesApiUrl + "?input=" + searchBy + "&types=" + types + "&language=pt_BR&key=" + this._googleServerApiKey;
        console.log("###############################");
        console.log("################### searchBy=" + types + ", value=" + searchBy);
        console.log("################### url=" + url);
        console.log("###############################");
    };
    GoogleLocationService.prototype.getCurrentLocation = function () {
        if (this._debug.console.GoogleLocation)
            console.log('GoogleLocationService.getCurrentLocation()');
        return this.userLocation;
    };
    GoogleLocationService.prototype.setCurrentLocation = function () {
        var _this = this;
        if (this._debug.console.GoogleLocation)
            console.log('GoogleLocationService.setCurrentLocation()');
        geolocation
            .getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            maximumAge: 5000,
            timeout: 20000
        })
            .then(function (result) {
            if (_this._debug.console.GoogleLocation)
                console.log('GoogleLocationService.setCurrentLocation() Result: ' + JSON.stringify(result));
            _this.userLocation = result;
        });
    };
    GoogleLocationService.prototype.onGooglePlaces = function () {
        console.log('GoogleLocationService.onGooglePlaces()');
        // GetPlacesById()
        GooglePlaces.getPlacesById([
            "ChIJ4zPXqIiAhYAR31X3S64T6Uw",
            "ChIJ6zMe3oWAhYARaZ33Z1BAMRo",
            "ChIJAUWoGIaAhYARQ6zvky_f10Q"
        ])
            .then(function (places) {
            places.forEach(function (place) { return console.log(place.name); });
        })
            .catch(function (error) { return console.log(error); });
    };
    GoogleLocationService.prototype.onPickPlace = function () {
        if (this._debug.console.GoogleLocation)
            console.log('GooglePlacesService.onPickPlace()');
        geolocation
            .getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            maximumAge: 5000,
            timeout: 20000
        })
            .then(function (result) {
            console.log('GoogleLocationService.onPickPlace(): ' + JSON.stringify(result));
            var center = {
                latitude: result.latitude,
                longitude: result.longitude
            };
            console.log('center: ' + JSON.stringify(center));
            var viewport = {
                northEast: {
                    latitude: center.latitude + 0.001,
                    longitude: center.longitude + 0.001
                },
                southWest: {
                    latitude: center.latitude - 0.001,
                    longitude: center.longitude - 0.001
                }
            };
            console.log('viewport: ' + JSON.stringify(viewport));
            // GooglePlaces.pickPlace(viewport)
            //     .then(place => console.log(JSON.stringify(place)))
            //     .catch(error => console.log(error));
        })
            .catch(function (error) {
            console.log('GoogleLocationService.onPickPlace() ERROR: ' + error);
        });
        // Set location based on update
    };
    GoogleLocationService.prototype.capitalize = function (text) {
        return text.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    };
    ;
    GoogleLocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GoogleLocationService);
    return GoogleLocationService;
}());
exports.GoogleLocationService = GoogleLocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBb0M7QUFDcEMsYUFBYTtBQUNiLHNEQUF3RDtBQUN4RCxrQ0FBb0M7QUFDcEMsZ0JBQWdCO0FBQ2hCLGdFQUFrRTtBQUtsRTtJQVdJO1FBUEEsb0JBQW9CO1FBQ1osd0JBQW1CLEdBQUcseUNBQXlDLENBQUM7UUFDaEUsa0JBQWEsR0FBRyw4REFBOEQsQ0FBQztRQUMvRSx5QkFBb0IsR0FBRyx5REFBeUQsQ0FBQztRQUNqRix3QkFBbUIsR0FBRyxrREFBa0QsQ0FBQztRQUk3RSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLHNDQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsS0FBYTtRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQzVILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLEtBQUssR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDbkQsQ0FB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QyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVyRCxtQ0FBbUM7WUFDbkMseURBQXlEO1lBQ3pELDJDQUEyQztRQUUvQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQTtRQUNOLCtCQUErQjtJQUVuQyxDQUFDO0lBRU8sMENBQVUsR0FBbEIsVUFBbUIsSUFBWTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBUyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFBQSxDQUFDO0lBbkdPLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFOztPQUNBLHFCQUFxQixDQXFHakM7SUFBRCw0QkFBQztDQUFBLEFBckdELElBcUdDO0FBckdZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbi8vIEdlb2xjYXRpb25cclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG4vLyBHb29nbGUgUGxhY2VzXHJcbmltcG9ydCAqIGFzIEdvb2dsZVBsYWNlcyBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWJ1ZztcclxuICAgIHByaXZhdGUgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIC8vIEdvb2dsZSBQbGFjZXMgQVBJXHJcbiAgICBwcml2YXRlIF9nb29nbGVTZXJ2ZXJBcGlLZXkgPSAnQUl6YVN5RGJZMUpoWUtCc3V6VzgwUEZNaldhMlBnM1FNdmVCTlNNJztcclxuICAgIHByaXZhdGUgX3BsYWNlc0FwaVVybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24nO1xyXG4gICAgcHJpdmF0ZSBfcGxhY2VzRGV0YWlsc0FwaVVybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvZGV0YWlscy9qc29uJztcclxuICAgIHByaXZhdGUgX3BsYWNlc0ltYWdlc0FwaVVybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvcGhvdG8nO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHRleHQ6IHN0cmluZywgdHlwZXM6IHN0cmluZyl7XHJcbiAgICAgICAgdmFyIHNlYXJjaEJ5ID0gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIik7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX3BsYWNlc0FwaVVybCArIFwiP2lucHV0PVwiICsgc2VhcmNoQnkgKyBcIiZ0eXBlcz1cIiArIHR5cGVzICsgXCImbGFuZ3VhZ2U9cHRfQlIma2V5PVwiICsgdGhpcy5fZ29vZ2xlU2VydmVyQXBpS2V5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMgc2VhcmNoQnk9XCIgKyB0eXBlcyArIFwiLCB2YWx1ZT1cIiArIHNlYXJjaEJ5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMgdXJsPVwiICsgdXJsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UuZ2V0Q3VycmVudExvY2F0aW9uKCknKTtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRMb2NhdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNldEN1cnJlbnRMb2NhdGlvbigpJyk7XHJcbiAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uuc2V0Q3VycmVudExvY2F0aW9uKCkgUmVzdWx0OiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSkgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Hb29nbGVQbGFjZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vbkdvb2dsZVBsYWNlcygpJyk7XHJcbiAgICAgICAgLy8gR2V0UGxhY2VzQnlJZCgpXHJcbiAgICAgICAgR29vZ2xlUGxhY2VzLmdldFBsYWNlc0J5SWQoW1xyXG4gICAgICAgICAgICBcIkNoSUo0elBYcUlpQWhZQVIzMVgzUzY0VDZVd1wiLFxyXG4gICAgICAgICAgICBcIkNoSUo2ek1lM29XQWhZQVJhWjMzWjFCQU1Sb1wiLFxyXG4gICAgICAgICAgICBcIkNoSUpBVVdvR0lhQWhZQVJRNnp2a3lfZjEwUVwiXHJcbiAgICAgICAgXSlcclxuICAgICAgICAudGhlbigocGxhY2VzOiBHb29nbGVQbGFjZXMuUGxhY2VbXSkgPT4ge1xyXG4gICAgICAgICAgICBwbGFjZXMuZm9yRWFjaChwbGFjZSA9PiBjb25zb2xlLmxvZyhwbGFjZS5uYW1lKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QaWNrUGxhY2UoKXtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZVBsYWNlc1NlcnZpY2Uub25QaWNrUGxhY2UoKScpO1xyXG4gICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbnRlcjogTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcgKyBKU09OLnN0cmluZ2lmeShjZW50ZXIpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBub3J0aEVhc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSArIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgKyAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc291dGhXZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgLSAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlIC0gMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlld3BvcnQ6ICcgKyBKU09OLnN0cmluZ2lmeSh2aWV3cG9ydCkpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR29vZ2xlUGxhY2VzLnBpY2tQbGFjZSh2aWV3cG9ydClcclxuICAgICAgICAgICAgICAgIC8vICAgICAudGhlbihwbGFjZSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwbGFjZSkpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gU2V0IGxvY2F0aW9uIGJhc2VkIG9uIHVwZGF0ZVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpOyB9KTtcclxuICAgIH07XHJcblxyXG59Il19