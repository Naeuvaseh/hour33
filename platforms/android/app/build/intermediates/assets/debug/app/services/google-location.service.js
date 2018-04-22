"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var settings_1 = require("../settings");
var radius_enum_1 = require("../enums/radius.enum");
var settings_2 = require("../settings");
// Constants
var google_places_api_urls_const_1 = require("../const/google-places-api-urls.const");
// Geolcation
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
// Google Places
var GooglePlaces = require("nativescript-plugin-google-places");
var vendor_type_enum_1 = require("../enums/vendor-type.enum");
var distance_popularity_enum_1 = require("../enums/distance-popularity.enum");
var GoogleLocationService = /** @class */ (function () {
    function GoogleLocationService(http) {
        this.http = http;
        this._debug = settings_1.Debug;
        this.searchFilter = {
            vendorType: vendor_type_enum_1.VendorType.Bar,
            distance: radius_enum_1.Radius.mi5,
            distPop: distance_popularity_enum_1.DistPop.Popularity
        };
    }
    GoogleLocationService.prototype.search = function (nextPage, filter, results) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Update location
            geolocation
                .getCurrentLocation({
                desiredAccuracy: enums_1.Accuracy.high,
                updateTime: 500,
                maximumAge: 5000,
                timeout: 20000
            })
                .then(function (location) {
                // Location available
                if (location) {
                    // Update location
                    _this.userLocation = location;
                    var url = void 0;
                    // Build API URL
                    url = (nextPage) ? _this.urlBuilder(location, results.next_page_token, filter) : _this.urlBuilder(location, undefined, filter);
                    // Print URL
                    if (_this._debug.console.GoogleLocation.url)
                        _this.printUrl(url, nextPage);
                    // API Call
                    _this.http
                        .get(url)
                        .toPromise()
                        .then(function (response) {
                        if (response) {
                            if (_this._debug.console.GoogleLocation.data)
                                console.log('GoogleLocationService.search() DATA: ' + JSON.stringify(response));
                            resolve(response);
                        }
                    }, function (error) {
                        if (settings_1.Debug.console.GoogleLocation.error)
                            console.log('GoogleLocationService.search() ERROR: ' + JSON.stringify(error));
                    });
                }
                else {
                    alert('Your location is currently not available. Please try again.');
                    reject();
                }
            }, function (error) {
                if (_this._debug.console.GoogleLocation.error)
                    console.log('CurrentLocationResolver() ERROR: ' + error);
                reject(error);
            });
        });
    };
    GoogleLocationService.prototype.urlBuilder = function (location, nextPageToken, filter) {
        var url = google_places_api_urls_const_1.GooglePlacesApiUrls.nearbyApi; // Set api base
        var api;
        var nextPageParam = "?pagetoken=";
        var locationParam = '?location=' + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long;
        var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
        var radiusParam = '&radius=';
        var rankbyParam = '&rankby=';
        var typeParam = '&type=';
        var keywordParam = '&keyword=';
        // Check if there is a next_page token.
        if (nextPageToken) {
            return url += nextPageParam + nextPageToken + apiKeyParam;
        }
        else {
            // Build and return URL based on mode and provided filter params
            url += locationParam; // required param
            url += (filter.distance && filter.distPop == distance_popularity_enum_1.DistPop.Distance) ? rankbyParam + 'distance' : '';
            url += (filter.distPop == distance_popularity_enum_1.DistPop.Popularity) ? radiusParam + filter.distance.toString() + rankbyParam + 'prominence' : '';
            url += (filter.keyword && filter.keyword != '') ? keywordParam + filter.keyword : '';
            url += (filter.vendorType) ? typeParam + filter.vendorType : typeParam + vendor_type_enum_1.VendorType.Bar;
            // Build URL
            return url += apiKeyParam;
        }
    };
    GoogleLocationService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    GoogleLocationService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    GoogleLocationService.prototype.getVendorDetails = function (place_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('Requesting vendor details.');
            var url = google_places_api_urls_const_1.GooglePlacesApiUrls.detailsApi;
            var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
            var placeIdParam = "?placeid=" + place_id;
            // Build URL
            url = url + placeIdParam + apiKeyParam;
            // API call
            _this.http
                .get(url)
                .toPromise()
                .then(function (response) {
                resolve(response);
            }, function (error) {
                console.log('GoogleLocationService.getVendorDetails() ERROR: ' + JSON.stringify(error));
            });
        });
    };
    GoogleLocationService.prototype.getCurrentLocation = function () {
        return this.userLocation;
    };
    GoogleLocationService.prototype.setCurrentLocation = function (location) {
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
    GoogleLocationService.prototype.printUrl = function (url, nextpage) {
        if (nextpage) {
            console.log("############################### Search (Next Page) ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
        }
        else {
            console.log("############################### Search ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
        }
    };
    GoogleLocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GoogleLocationService);
    return GoogleLocationService;
}());
exports.GoogleLocationService = GoogleLocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFZbEUsOERBQXVEO0FBQ3ZELDhFQUE0RDtBQUc1RDtJQVdJLCtCQUEyQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLFVBQVUsRUFBRSw2QkFBVSxDQUFDLEdBQUc7WUFDMUIsUUFBUSxFQUFFLG9CQUFNLENBQUMsR0FBRztZQUNwQixPQUFPLEVBQUUsa0NBQU8sQ0FBQyxVQUFVO1NBQzlCLENBQUE7SUFDTCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE9BQXNCO1FBQXhFLGlCQTRDQztRQTNDRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsa0JBQWtCO1lBQ2xCLFdBQVc7aUJBQ1Ysa0JBQWtCLENBQUM7Z0JBQ2hCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7Z0JBQzlCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFDLFFBQWtCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxD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Q0FBQyxDQUFDO1lBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0VBQStFLENBQUMsQ0FBQztRQUNqRyxDQUFDO0lBQ0wsQ0FBQztJQTFNUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FZd0IsaUJBQVU7T0FYbEMscUJBQXFCLENBNE1qQztJQUFELDRCQUFDO0NBQUEsQUE1TUQsSUE0TUM7QUE1TVksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FQSUtleSB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuLy8gQ29uc3RhbnRzXHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FwaVVybHMgfSBmcm9tICcuLi9jb25zdC9nb29nbGUtcGxhY2VzLWFwaS11cmxzLmNvbnN0JztcclxuLy8gRGlzdGFuY2VcclxuaW1wb3J0ICogYXMgZGlzdGFuY2UgZnJvbSAnZ29vZ2xlLWRpc3RhbmNlJztcclxuLy8gR2VvbGNhdGlvblxyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbi8vIEdvb2dsZSBQbGFjZXNcclxuaW1wb3J0ICogYXMgR29vZ2xlUGxhY2VzIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSAnbW9tZW50JztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRleHRTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3RleHQtc2VhcmNoL3RleHQtc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmVhcmJ5U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9uZWFyYnktc2VhcmNoL25lYXJieS1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvZmlsdGVyLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vZW51bXMvcHJpY2UuZW51bSc7XHJcbmltcG9ydCB7IFZlbmRvclR5cGUgfSBmcm9tICcuLi9lbnVtcy92ZW5kb3ItdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRGlzdFBvcCB9IGZyb20gJy4uL2VudW1zL2Rpc3RhbmNlLXBvcHVsYXJpdHkuZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2RlYnVnO1xyXG4gICAgcHVibGljIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG4gICAgLy8gR29vZ2xlIFBsYWNlcyBBUElcclxuICAgIHB1YmxpYyBzZWFyY2hGaWx0ZXI6IEZpbHRlcjtcclxuICAgIHB1YmxpYyByZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yUmVzdWx0czogQXJyYXk8VmVuZG9yPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlYXJjaEZpbHRlciA9IHtcclxuICAgICAgICAgICAgdmVuZG9yVHlwZTogVmVuZG9yVHlwZS5CYXIsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiBSYWRpdXMubWk1LFxyXG4gICAgICAgICAgICBkaXN0UG9wOiBEaXN0UG9wLlBvcHVsYXJpdHlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaChuZXh0UGFnZTogYm9vbGVhbiwgZmlsdGVyPzogRmlsdGVyLCByZXN1bHRzPzogU2VhcmNoUmVzdWx0KTogUHJvbWlzZTxTZWFyY2hSZXN1bHR8bnVsbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZWFyY2hSZXN1bHR8bnVsbD4oKHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9uXHJcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZTogNTAwLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChsb2NhdGlvbjogTG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIExvY2F0aW9uIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgQVBJIFVSTFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IChuZXh0UGFnZSkgPyB0aGlzLnVybEJ1aWxkZXIobG9jYXRpb24sIHJlc3VsdHMubmV4dF9wYWdlX3Rva2VuLCBmaWx0ZXIpIDogdGhpcy51cmxCdWlsZGVyKGxvY2F0aW9uLCB1bmRlZmluZWQsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJpbnQgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24udXJsKSB0aGlzLnByaW50VXJsKHVybCwgbmV4dFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5kYXRhKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaCgpIERBVEE6ICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5lcnJvcikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2goKSBFUlJPUjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGxvY2F0aW9uIGlzIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5lcnJvcikgY29uc29sZS5sb2coJ0N1cnJlbnRMb2NhdGlvblJlc29sdmVyKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXJsQnVpbGRlcihsb2NhdGlvbjogTG9jYXRpb24sIG5leHRQYWdlVG9rZW4/OiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHVybDogc3RyaW5nID0gR29vZ2xlUGxhY2VzQXBpVXJscy5uZWFyYnlBcGk7IC8vIFNldCBhcGkgYmFzZVxyXG4gICAgICAgIGxldCBhcGk6IHN0cmluZztcclxuICAgICAgICBsZXQgbmV4dFBhZ2VQYXJhbSA9IFwiP3BhZ2V0b2tlbj1cIjtcclxuICAgICAgICBsZXQgbG9jYXRpb25QYXJhbTogc3RyaW5nID0gJz9sb2NhdGlvbj0nICsgbG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIGxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZztcclxuICAgICAgICBsZXQgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgbGV0IHJhZGl1c1BhcmFtOiBzdHJpbmcgPSAnJnJhZGl1cz0nO1xyXG4gICAgICAgIGxldCByYW5rYnlQYXJhbTogc3RyaW5nID0gJyZyYW5rYnk9JztcclxuICAgICAgICBsZXQgdHlwZVBhcmFtOiBzdHJpbmcgPSAnJnR5cGU9JztcclxuICAgICAgICBsZXQga2V5d29yZFBhcmFtOiBzdHJpbmcgPSAnJmtleXdvcmQ9JztcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIG5leHRfcGFnZSB0b2tlbi5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsICs9IG5leHRQYWdlUGFyYW0gKyBuZXh0UGFnZVRva2VuICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBhbmQgcmV0dXJuIFVSTCBiYXNlZCBvbiBtb2RlIGFuZCBwcm92aWRlZCBmaWx0ZXIgcGFyYW1zXHJcbiAgICAgICAgICAgIHVybCArPSBsb2NhdGlvblBhcmFtICAvLyByZXF1aXJlZCBwYXJhbVxyXG4gICAgICAgICAgICB1cmwgKz0gKGZpbHRlci5kaXN0YW5jZSAmJiBmaWx0ZXIuZGlzdFBvcCA9PSBEaXN0UG9wLkRpc3RhbmNlKSA/IHJhbmtieVBhcmFtICsgJ2Rpc3RhbmNlJyA6ICcnO1xyXG4gICAgICAgICAgICB1cmwgKz0gKGZpbHRlci5kaXN0UG9wID09IERpc3RQb3AuUG9wdWxhcml0eSkgPyByYWRpdXNQYXJhbSArIGZpbHRlci5kaXN0YW5jZS50b1N0cmluZygpICsgcmFua2J5UGFyYW0gKyAncHJvbWluZW5jZScgOiAnJztcclxuICAgICAgICAgICAgdXJsICs9IChmaWx0ZXIua2V5d29yZCAmJiBmaWx0ZXIua2V5d29yZCAhPSAnJykgID8ga2V5d29yZFBhcmFtICsgZmlsdGVyLmtleXdvcmQgOiAnJztcclxuICAgICAgICAgICAgdXJsICs9IChmaWx0ZXIudmVuZG9yVHlwZSkgPyB0eXBlUGFyYW0gKyBmaWx0ZXIudmVuZG9yVHlwZSA6IHR5cGVQYXJhbSArIFZlbmRvclR5cGUuQmFyO1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgcmV0dXJuIHVybCArPSBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvclByb21pc2UgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmVuZG9yRGV0YWlscyhwbGFjZV9pZDogc3RyaW5nKTogUHJvbWlzZTxWZW5kb3JEZXRhaWw+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxWZW5kb3JEZXRhaWw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3RpbmcgdmVuZG9yIGRldGFpbHMuJyk7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBHb29nbGVQbGFjZXNBcGlVcmxzLmRldGFpbHNBcGk7XHJcbiAgICAgICAgICAgIGxldCBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICAgICAgbGV0IHBsYWNlSWRQYXJhbSA9IFwiP3BsYWNlaWQ9XCIgKyBwbGFjZV9pZDtcclxuICAgICAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIHBsYWNlSWRQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgICAgICAvLyBBUEkgY2FsbFxyXG4gICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IFZlbmRvckRldGFpbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLmdldFZlbmRvckRldGFpbHMoKSBFUlJPUjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TG9jYXRpb24oKTogTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvbkdvb2dsZVBsYWNlcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uR29vZ2xlUGxhY2VzKCknKTtcclxuICAgICAgICAvLyBHZXRQbGFjZXNCeUlkKClcclxuICAgICAgICBHb29nbGVQbGFjZXMuZ2V0UGxhY2VzQnlJZChbXHJcbiAgICAgICAgICAgIFwiQ2hJSjR6UFhxSWlBaFlBUjMxWDNTNjRUNlV3XCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSjZ6TWUzb1dBaFlBUmFaMzNaMUJBTVJvXCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSkFVV29HSWFBaFlBUlE2enZreV9mMTBRXCJcclxuICAgICAgICBdKVxyXG4gICAgICAgIC50aGVuKChwbGFjZXM6IEdvb2dsZVBsYWNlcy5QbGFjZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IGNvbnNvbGUubG9nKHBsYWNlLm5hbWUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBpY2tQbGFjZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlUGxhY2VzU2VydmljZS5vblBpY2tQbGFjZSgpJyk7XHJcbiAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyOiBMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjogJyArIEpTT04uc3RyaW5naWZ5KGNlbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcnRoRWFzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlICsgMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSArIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzb3V0aFdlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSAtIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgLSAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWV3cG9ydDogJyArIEpTT04uc3RyaW5naWZ5KHZpZXdwb3J0KSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBHb29nbGVQbGFjZXMucGlja1BsYWNlKHZpZXdwb3J0KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKHBsYWNlID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBsYWNlKSkpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyBTZXQgbG9jYXRpb24gYmFzZWQgb24gdXBkYXRlXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYXBpdGFsaXplKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvVXBwZXJDYXNlKCk7IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHByaW50VXJsKHVybDogc3RyaW5nLCBuZXh0cGFnZTogYm9vbGVhbil7XHJcbiAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=