"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var settings_1 = require("../settings");
var radius_enum_1 = require("../enums/radius.enum");
var settings_2 = require("../settings");
// Geolcation
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
// Google Places
var GooglePlaces = require("nativescript-plugin-google-places");
// Enums
var price_enum_1 = require("../enums/price.enum");
var GoogleLocationService = (function () {
    function GoogleLocationService(http) {
        this.http = http;
        // Google Places API
        this._placesNearbyApiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
        this._placesAutoCompleteApiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
        this._placesTextSearchApiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
        this._placesDetailsApiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
        this._placesImagesApiUrl = 'https://maps.googleapis.com/maps/api/place/photo';
        this._debug = settings_1.Debug;
    }
    GoogleLocationService.prototype.nearbySearch = function (text, types) {
        //var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
        // Required params
        var location = "?location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long
        var apiKey = "&key=" + settings_2.GooglePlacesAPIKey;
        var radius = "&radius=" + radius_enum_1.Radius.mi1;
        // Optinal params
        var keyword = "&keyword=bar"; //,brewery,restaurant,club,vineyard"; 
        var language = "&language=en";
        var rankBy = "&rankBy=distance";
        // Build URL
        var url = this._placesNearbyApiUrl + location + radius + keyword + apiKey;
        // Log URL
        console.log("############################### Nearby Search ###############################");
        console.log("URL=" + url);
        console.log("#############################################################################");
        // API Call
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) {
            console.log(JSON.stringify(response));
        })
            .catch(this.handleErrorPromise);
    };
    GoogleLocationService.prototype.textSearch = function (text, radius, language, minPrice, maxPrice, type) {
        var _this = this;
        // Required params
        var searchTextParam = "?query=" + ((text !== undefined) ? this.capitalize(text).replace(new RegExp(" ", 'g'), "") : "BAR");
        var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
        // Optional params
        var locationParam = "&location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long 
        var radiusParam = "&radius=" + radius_enum_1.Radius.mi1;
        var minPriceParam = "&minprice=" + ((minPrice !== undefined) ? minPrice : price_enum_1.Price.zero); // Default is lowest
        var maxPriceParam = "&maxprice=" + ((maxPrice !== undefined) ? maxPrice : price_enum_1.Price.four); // Default is highest
        var typeParam = ((type !== undefined) ? "&type=" + type : "");
        // Build URL
        var url = this._placesTextSearchApiUrl + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + typeParam + apiKeyParam;
        // Log URL
        console.log("############################### Text Search ###############################");
        console.log("URL=" + url);
        console.log("#############################################################################");
        // API Call
        return this.http
            .get(url)
            .map(function (response) {
            if (settings_1.Debug.console.GoogleLocation)
                console.log('GoogleLocationService.textSearch(): ' + JSON.stringify(response));
            _this.results = response;
            _this.vendorResults = response['results'];
            return response;
        }, function (error) {
            if (settings_1.Debug.console.GoogleLocation)
                console.log('GoogleLocationService.textSearch() ERROR: ' + error);
        });
    };
    GoogleLocationService.prototype.defaultSearch = function (location) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Required params
            var searchTextParam = "?query=BAR";
            var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
            // Optional params
            var locationParam = "&location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
            var radiusParam = "&radius=" + radius_enum_1.Radius.mi1;
            var minPriceParam = "&minprice=" + price_enum_1.Price.zero; // Default is lowest
            var maxPriceParam = "&maxprice=" + price_enum_1.Price.four; // Default is highest
            // Build URL
            var url = _this._placesTextSearchApiUrl + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + apiKeyParam;
            // Log URL
            console.log("############################### Default Search ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
            // API Call
            _this.http
                .get(url)
                .toPromise()
                .then(function (response) {
                if (response) {
                    console.log('Valid Response Recieved.');
                    resolve(response);
                }
            }, function (error) {
                if (settings_1.Debug.console.GoogleLocation)
                    console.log('GoogleLocationService.textSearch() ERROR: ' + error);
            });
        });
    };
    GoogleLocationService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    GoogleLocationService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    GoogleLocationService.prototype.getCurrentLocation = function () {
        if (this._debug.console.GoogleLocation)
            console.log('GoogleLocationService.getCurrentLocation()');
        return this.userLocation;
    };
    GoogleLocationService.prototype.setCurrentLocation = function (location) {
        if (this._debug.console.GoogleLocation)
            console.log('GoogleLocationService.setCurrentLocation()');
        // geolocation
        //     .getCurrentLocation({
        //         desiredAccuracy: Accuracy.high,
        //         updateTime: 500,
        //         maximumAge: 5000,
        //         timeout: 20000
        //     })
        //     .then((result) => {
        //         if (this._debug.console.GoogleLocation) console.log('GoogleLocationService.setCurrentLocation() Result: ' + JSON.stringify(result));
        //         this.userLocation = result;
        //     });   
        this.userLocation = location;
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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GoogleLocationService);
    return GoogleLocationService;
}());
exports.GoogleLocationService = GoogleLocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxhQUFhO0FBQ2Isc0RBQXdEO0FBQ3hELGtDQUFvQztBQUNwQyxnQkFBZ0I7QUFDaEIsZ0VBQWtFO0FBT2xFLFFBQVE7QUFDUixrREFBNEM7QUFLNUM7SUFlSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVgzQyxvQkFBb0I7UUFDWix3QkFBbUIsR0FBRyw4REFBOEQsQ0FBQztRQUNyRiw4QkFBeUIsR0FBRyw4REFBOEQsQ0FBQztRQUMzRiw0QkFBdUIsR0FBRyw0REFBNEQsQ0FBQztRQUN2Rix5QkFBb0IsR0FBRyx5REFBeUQsQ0FBQztRQUNqRix3QkFBbUIsR0FBRyxrREFBa0QsQ0FBQztRQU83RSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLDRDQUFZLEdBQW5CLFVBQW9CLElBQWEsRUFBRSxLQUFjO1FBQzdDLHlFQUF5RTtRQUN6RSxrQkFBa0I7UUFDbEIsSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVc7UUFDL0gsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFHLDZCQUFrQixDQUFDO1FBQzFDLElBQUksTUFBTSxHQUFHLFVBQVUsR0FBRyxvQkFBTSxDQUFDLEdBQUcsQ0FBQztRQUNyQyxpQkFBaUI7UUFDakIsSUFBSSxPQUFPLEdBQUcs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QUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFBO1FBQ04sK0JBQStCO0lBRW5DLENBQUM7SUFFTywwQ0FBVSxHQUFsQixVQUFtQixJQUFZO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUFBLENBQUM7SUFwTU8scUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBZ0J3QixpQkFBVTtPQWZsQyxxQkFBcUIsQ0FzTWpDO0lBQUQsNEJBQUM7Q0FBQSxBQXRNRCxJQXNNQztBQXRNWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQVBJS2V5IH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG4vLyBHZW9sY2F0aW9uXHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuLy8gR29vZ2xlIFBsYWNlc1xyXG5pbXBvcnQgKiBhcyBHb29nbGVQbGFjZXMgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICdtb21lbnQnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE5lYXJieVNlYXJjaFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9uZWFyYnktc2VhcmNoL25lYXJieS1zZWFyY2gtdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRleHRTZWFyY2hWZW5kb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtdmVuZG9yLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vZW51bXMvcHJpY2UuZW51bSc7XHJcbmltcG9ydCB7IFZlbmRvclR5cGUgfSBmcm9tICcuLi9lbnVtcy92ZW5kb3ItdHlwZS5lbnVtJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2RlYnVnO1xyXG4gICAgcHVibGljIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICAvLyBHb29nbGUgUGxhY2VzIEFQSVxyXG4gICAgcHJpdmF0ZSBfcGxhY2VzTmVhcmJ5QXBpVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9uZWFyYnlzZWFyY2gvanNvbic7XHJcbiAgICBwcml2YXRlIF9wbGFjZXNBdXRvQ29tcGxldGVBcGlVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uJztcclxuICAgIHByaXZhdGUgX3BsYWNlc1RleHRTZWFyY2hBcGlVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL3RleHRzZWFyY2gvanNvbic7XHJcbiAgICBwcml2YXRlIF9wbGFjZXNEZXRhaWxzQXBpVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9kZXRhaWxzL2pzb24nO1xyXG4gICAgcHJpdmF0ZSBfcGxhY2VzSW1hZ2VzQXBpVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9waG90byc7XHJcbiAgICAvLyBwcml2YXRlIF9lcnJvckNhbGxiYWNrO1xyXG5cclxuICAgIHB1YmxpYyByZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yUmVzdWx0czogQXJyYXk8TmVhcmJ5U2VhcmNoVmVuZG9yfFRleHRTZWFyY2hWZW5kb3I+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZyA9IERlYnVnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZWFyYnlTZWFyY2godGV4dD86IHN0cmluZywgdHlwZXM/OiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIC8vdmFyIHNlYXJjaEJ5ID0gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIik7XHJcbiAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gXCI/bG9jYXRpb249XCIgKyB0aGlzLnVzZXJMb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgdGhpcy51c2VyTG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nXHJcbiAgICAgICAgdmFyIGFwaUtleSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICB2YXIgcmFkaXVzID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgICAgICAvLyBPcHRpbmFsIHBhcmFtc1xyXG4gICAgICAgIHZhciBrZXl3b3JkID0gXCIma2V5d29yZD1iYXJcIjsgLy8sYnJld2VyeSxyZXN0YXVyYW50LGNsdWIsdmluZXlhcmRcIjsgXHJcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gXCImbGFuZ3VhZ2U9ZW5cIjtcclxuICAgICAgICB2YXIgcmFua0J5ID0gXCImcmFua0J5PWRpc3RhbmNlXCI7XHJcbiAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX3BsYWNlc05lYXJieUFwaVVybCArIGxvY2F0aW9uICsgcmFkaXVzICsga2V5d29yZCArIGFwaUtleTtcclxuICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE5lYXJieSBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JQcm9taXNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGV4dFNlYXJjaCh0ZXh0Pzogc3RyaW5nLCByYWRpdXM/OiBSYWRpdXMsIGxhbmd1YWdlPzogYm9vbGVhbiwgbWluUHJpY2U/OiBQcmljZSwgbWF4UHJpY2U/OiBQcmljZSwgdHlwZT86IFZlbmRvclR5cGUpOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdD4ge1xyXG4gICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgIHZhciBzZWFyY2hUZXh0UGFyYW0gPSBcIj9xdWVyeT1cIiArICgodGV4dCAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpIDogXCJCQVJcIik7XHJcbiAgICAgICAgdmFyIGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgIHZhciBsb2NhdGlvblBhcmFtID0gXCImbG9jYXRpb249XCIgKyB0aGlzLnVzZXJMb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgdGhpcy51c2VyTG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgIHZhciByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgdmFyIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArICgobWluUHJpY2UgIT09IHVuZGVmaW5lZCkgPyBtaW5QcmljZSA6IFByaWNlLnplcm8pOyAvLyBEZWZhdWx0IGlzIGxvd2VzdFxyXG4gICAgICAgIHZhciBtYXhQcmljZVBhcmFtID0gXCImbWF4cHJpY2U9XCIgKyAoKG1heFByaWNlICE9PSB1bmRlZmluZWQpID8gbWF4UHJpY2UgOiBQcmljZS5mb3VyKTsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAgICAgdmFyIHR5cGVQYXJhbSA9ICgodHlwZSAhPT0gdW5kZWZpbmVkKSA/IFwiJnR5cGU9XCIgKyB0eXBlIDogXCJcIik7XHJcbiAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX3BsYWNlc1RleHRTZWFyY2hBcGlVcmwgKyBzZWFyY2hUZXh0UGFyYW0gKyBsb2NhdGlvblBhcmFtICsgcmFkaXVzUGFyYW0gKyBtaW5QcmljZVBhcmFtICsgbWF4UHJpY2VQYXJhbSArIHR5cGVQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgIC8vIExvZyBVUkxcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVGV4dCBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldDxTZWFyY2hSZXN1bHQ+KHVybClcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yUmVzdWx0cyA9IHJlc3BvbnNlWydyZXN1bHRzJ107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0U2VhcmNoKGxvY2F0aW9uPzogTG9jYXRpb24pOiBQcm9taXNlPFNlYXJjaFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZWFyY2hSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0UGFyYW0gPSBcIj9xdWVyeT1CQVJcIjtcclxuICAgICAgICAgICAgdmFyIGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICAvLyBPcHRpb25hbCBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFyYW0gPSBcIiZsb2NhdGlvbj1cIiArIGxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyBsb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmcgXHJcbiAgICAgICAgICAgIHZhciByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgICAgIHZhciBtaW5QcmljZVBhcmFtID0gXCImbWlucHJpY2U9XCIgKyAgUHJpY2UuemVybzsgLy8gRGVmYXVsdCBpcyBsb3dlc3RcclxuICAgICAgICAgICAgdmFyIG1heFByaWNlUGFyYW0gPSBcIiZtYXhwcmljZT1cIiArIFByaWNlLmZvdXI7IC8vIERlZmF1bHQgaXMgaGlnaGVzdFxyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuX3BsYWNlc1RleHRTZWFyY2hBcGlVcmwgKyBzZWFyY2hUZXh0UGFyYW0gKyBsb2NhdGlvblBhcmFtICsgcmFkaXVzUGFyYW0gKyBtaW5QcmljZVBhcmFtICsgbWF4UHJpY2VQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEZWZhdWx0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhbGlkIFJlc3BvbnNlIFJlY2lldmVkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvclByb21pc2UgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudExvY2F0aW9uKCk6IExvY2F0aW9uIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5nZXRDdXJyZW50TG9jYXRpb24oKScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNldEN1cnJlbnRMb2NhdGlvbigpJyk7XHJcbiAgICAgICAgLy8gZ2VvbG9jYXRpb25cclxuICAgICAgICAvLyAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgLy8gICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgLy8gICAgICAgICB1cGRhdGVUaW1lOiA1MDAsXHJcbiAgICAgICAgLy8gICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgIC8vICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uuc2V0Q3VycmVudExvY2F0aW9uKCkgUmVzdWx0OiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IHJlc3VsdDtcclxuICAgICAgICAvLyAgICAgfSk7ICAgXHJcbiAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uR29vZ2xlUGxhY2VzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25Hb29nbGVQbGFjZXMoKScpO1xyXG4gICAgICAgIC8vIEdldFBsYWNlc0J5SWQoKVxyXG4gICAgICAgIEdvb2dsZVBsYWNlcy5nZXRQbGFjZXNCeUlkKFtcclxuICAgICAgICAgICAgXCJDaElKNHpQWHFJaUFoWUFSMzFYM1M2NFQ2VXdcIixcclxuICAgICAgICAgICAgXCJDaElKNnpNZTNvV0FoWUFSYVozM1oxQkFNUm9cIixcclxuICAgICAgICAgICAgXCJDaElKQVVXb0dJYUFoWUFSUTZ6dmt5X2YxMFFcIlxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKHBsYWNlczogR29vZ2xlUGxhY2VzLlBsYWNlW10pID0+IHtcclxuICAgICAgICAgICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4gY29uc29sZS5sb2cocGxhY2UubmFtZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUGlja1BsYWNlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVQbGFjZXNTZXJ2aWNlLm9uUGlja1BsYWNlKCknKTtcclxuICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXI6IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnICsgSlNPTi5zdHJpbmdpZnkoY2VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ydGhFYXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgKyAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlICsgMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXRoV2VzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlIC0gMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSAtIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdwb3J0OiAnICsgSlNPTi5zdHJpbmdpZnkodmlld3BvcnQpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdvb2dsZVBsYWNlcy5waWNrUGxhY2Uodmlld3BvcnQpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4ocGxhY2UgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2UpKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNldCBsb2NhdGlvbiBiYXNlZCBvbiB1cGRhdGVcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxufSJdfQ==