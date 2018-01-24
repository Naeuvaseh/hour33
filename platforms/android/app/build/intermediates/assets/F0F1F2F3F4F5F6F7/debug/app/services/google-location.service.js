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
        this._placesAutoCompleteApiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
        this._placesNearbyApiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        this._placesDetailsApiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
        this._placesImagesApiUrl = 'https://maps.googleapis.com/maps/api/place/photo';
        this._debug = settings_1.Debug;
    }
    GoogleLocationService.prototype.search = function (text, types) {
        //     var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
        //    // TODO 
        //    // Update url to reflect Nearb By url parameters.
        //    // var url = this._placesNearbyApiUrl + "?input=" + searchBy + "&types=" + types + "&language=pt_BR&key=" + this._googleServerApiKey;
        //     console.log("###############################");
        //     console.log("################### searchBy=" + types + ", value=" + searchBy);
        //     console.log("################### url=" + url);
        //     console.log("###############################");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBb0M7QUFDcEMsYUFBYTtBQUNiLHNEQUF3RDtBQUN4RCxrQ0FBb0M7QUFDcEMsZ0JBQWdCO0FBQ2hCLGdFQUFrRTtBQUtsRTtJQVlJO1FBUkEsb0JBQW9CO1FBQ1osd0JBQW1CLEdBQUcseUNBQXlDLENBQUM7UUFDaEUsOEJBQXlCLEdBQUcsOERBQThELENBQUM7UUFDM0Ysd0JBQW1CLEdBQUcsOERBQThELENBQUM7UUFDckYseUJBQW9CLEdBQUcseURBQXlELENBQUM7UUFDakYsd0JBQW1CLEdBQUcsa0RBQWtELENBQUM7UUFJN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBWSxFQUFFLEtBQWE7UUFDekMsOEVBQThFO1FBQzlFLGNBQWM7UUFDZCx1REFBdUQ7UUFDdkQsMklBQTJJO1FBQzNJLHNEQUFzRDtRQUN0RCxvRkFBb0Y7UUFDcEYscURBQXFEO1FBQ3JELHNEQUFzRDtJQUN0RCxDQUFDO0lBRU0sa0RBQWtCLEdBQXpCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2xHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFTSxrREFBa0IsR0FBekI7UUFBQSxpQkFZQztRQVhHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNsRyxXQUFXO2FBQ04s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LENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUFBLENBQUM7SUF0R08scUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7O09BQ0EscUJBQXFCLENBd0dqQztJQUFELDRCQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuLy8gR2VvbGNhdGlvblxyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbi8vIEdvb2dsZSBQbGFjZXNcclxuaW1wb3J0ICogYXMgR29vZ2xlUGxhY2VzIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2RlYnVnO1xyXG4gICAgcHJpdmF0ZSB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgLy8gR29vZ2xlIFBsYWNlcyBBUElcclxuICAgIHByaXZhdGUgX2dvb2dsZVNlcnZlckFwaUtleSA9ICdBSXphU3lEYlkxSmhZS0JzdXpXODBQRk1qV2EyUGczUU12ZUJOU00nO1xyXG4gICAgcHJpdmF0ZSBfcGxhY2VzQXV0b0NvbXBsZXRlQXBpVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbic7XHJcbiAgICBwcml2YXRlIF9wbGFjZXNOZWFyYnlBcGlVcmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9uZWFyYnlzZWFyY2gvanNvblwiO1xyXG4gICAgcHJpdmF0ZSBfcGxhY2VzRGV0YWlsc0FwaVVybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvZGV0YWlscy9qc29uJztcclxuICAgIHByaXZhdGUgX3BsYWNlc0ltYWdlc0FwaVVybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvcGhvdG8nO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHRleHQ6IHN0cmluZywgdHlwZXM6IHN0cmluZyl7XHJcbiAgICAvLyAgICAgdmFyIHNlYXJjaEJ5ID0gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIik7XHJcbiAgICAvLyAgICAvLyBUT0RPIFxyXG4gICAgLy8gICAgLy8gVXBkYXRlIHVybCB0byByZWZsZWN0IE5lYXJiIEJ5IHVybCBwYXJhbWV0ZXJzLlxyXG4gICAgLy8gICAgLy8gdmFyIHVybCA9IHRoaXMuX3BsYWNlc05lYXJieUFwaVVybCArIFwiP2lucHV0PVwiICsgc2VhcmNoQnkgKyBcIiZ0eXBlcz1cIiArIHR5cGVzICsgXCImbGFuZ3VhZ2U9cHRfQlIma2V5PVwiICsgdGhpcy5fZ29vZ2xlU2VydmVyQXBpS2V5O1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMgc2VhcmNoQnk9XCIgKyB0eXBlcyArIFwiLCB2YWx1ZT1cIiArIHNlYXJjaEJ5KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMgdXJsPVwiICsgdXJsKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UuZ2V0Q3VycmVudExvY2F0aW9uKCknKTtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRMb2NhdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNldEN1cnJlbnRMb2NhdGlvbigpJyk7XHJcbiAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uuc2V0Q3VycmVudExvY2F0aW9uKCkgUmVzdWx0OiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSkgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Hb29nbGVQbGFjZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vbkdvb2dsZVBsYWNlcygpJyk7XHJcbiAgICAgICAgLy8gR2V0UGxhY2VzQnlJZCgpXHJcbiAgICAgICAgR29vZ2xlUGxhY2VzLmdldFBsYWNlc0J5SWQoW1xyXG4gICAgICAgICAgICBcIkNoSUo0elBYcUlpQWhZQVIzMVgzUzY0VDZVd1wiLFxyXG4gICAgICAgICAgICBcIkNoSUo2ek1lM29XQWhZQVJhWjMzWjFCQU1Sb1wiLFxyXG4gICAgICAgICAgICBcIkNoSUpBVVdvR0lhQWhZQVJRNnp2a3lfZjEwUVwiXHJcbiAgICAgICAgXSlcclxuICAgICAgICAudGhlbigocGxhY2VzOiBHb29nbGVQbGFjZXMuUGxhY2VbXSkgPT4ge1xyXG4gICAgICAgICAgICBwbGFjZXMuZm9yRWFjaChwbGFjZSA9PiBjb25zb2xlLmxvZyhwbGFjZS5uYW1lKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QaWNrUGxhY2UoKXtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZVBsYWNlc1NlcnZpY2Uub25QaWNrUGxhY2UoKScpO1xyXG4gICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbnRlcjogTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcgKyBKU09OLnN0cmluZ2lmeShjZW50ZXIpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBub3J0aEVhc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSArIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgKyAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc291dGhXZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgLSAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlIC0gMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlld3BvcnQ6ICcgKyBKU09OLnN0cmluZ2lmeSh2aWV3cG9ydCkpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR29vZ2xlUGxhY2VzLnBpY2tQbGFjZSh2aWV3cG9ydClcclxuICAgICAgICAgICAgICAgIC8vICAgICAudGhlbihwbGFjZSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwbGFjZSkpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gU2V0IGxvY2F0aW9uIGJhc2VkIG9uIHVwZGF0ZVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpOyB9KTtcclxuICAgIH07XHJcblxyXG59Il19