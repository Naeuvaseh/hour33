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
var GoogleLocationService = (function () {
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
            var url = google_places_api_urls_const_1.GooglePlacesApiUrls.detailsApi;
            var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
            var placeIdParam = "?placeid=" + place_id;
            url = url + placeIdParam + apiKeyParam;
            _this.http
                .get(url)
                .toPromise()
                .then(function (response) {
                //console.log(JSON.stringify(response));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFZbEUsOERBQXVEO0FBQ3ZELDhFQUE0RDtBQUc1RDtJQVdJLCtCQUEyQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLFVBQVUsRUFBRSw2QkFBVSxDQUFDLEdBQUc7WUFDMUIsUUFBUSxFQUFFLG9CQUFNLENBQUMsR0FBRztZQUNwQixPQUFPLEVBQUUsa0NBQU8sQ0FBQyxVQUFVO1NBQzlCLENBQUE7SUFDTCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE9BQXNCO1FBQXhFLGlCQTRDQztRQTNDRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsa0JBQWtCO1lBQ2xCLFdBQVc7aUJBQ1Ysa0JBQWtCLENBQUM7Z0JBQ2hCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7Z0JBQzlCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFDLFFBQWtCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxD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LEVBQUU7eUNBWXdCLGlCQUFVO09BWGxDLHFCQUFxQixDQTRNakM7SUFBRCw0QkFBQztDQUFBLEFBNU1ELElBNE1DO0FBNU1ZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSYWRpdXMgfSBmcm9tICcuLi9lbnVtcy9yYWRpdXMuZW51bSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBHb29nbGVQbGFjZXNBUElLZXkgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbi8vIENvbnN0YW50c1xyXG5pbXBvcnQgeyBHb29nbGVQbGFjZXNBcGlVcmxzIH0gZnJvbSAnLi4vY29uc3QvZ29vZ2xlLXBsYWNlcy1hcGktdXJscy5jb25zdCc7XHJcbi8vIERpc3RhbmNlXHJcbmltcG9ydCAqIGFzIGRpc3RhbmNlIGZyb20gJ2dvb2dsZS1kaXN0YW5jZSc7XHJcbi8vIEdlb2xjYXRpb25cclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG4vLyBHb29nbGUgUGxhY2VzXHJcbmltcG9ydCAqIGFzIEdvb2dsZVBsYWNlcyBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gJ21vbWVudCc7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUZXh0U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC90ZXh0LXNlYXJjaC90ZXh0LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE5lYXJieVNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvbmVhcmJ5LXNlYXJjaC9uZWFyYnktc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yRGV0YWlsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBQcmljZSB9IGZyb20gJy4uL2VudW1zL3ByaWNlLmVudW0nO1xyXG5pbXBvcnQgeyBWZW5kb3JUeXBlIH0gZnJvbSAnLi4vZW51bXMvdmVuZG9yLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IERpc3RQb3AgfSBmcm9tICcuLi9lbnVtcy9kaXN0YW5jZS1wb3B1bGFyaXR5LmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWJ1ZztcclxuICAgIHB1YmxpYyB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICAgIHB1YmxpYyB2ZW5kb3JzOiBWZW5kb3JbXTtcclxuICAgIC8vIEdvb2dsZSBQbGFjZXMgQVBJXHJcbiAgICBwdWJsaWMgc2VhcmNoRmlsdGVyOiBGaWx0ZXI7XHJcbiAgICBwdWJsaWMgcmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvclJlc3VsdHM6IEFycmF5PFZlbmRvcj47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gRGVidWc7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIHZlbmRvclR5cGU6IFZlbmRvclR5cGUuQmFyLFxyXG4gICAgICAgICAgICBkaXN0YW5jZTogUmFkaXVzLm1pNSxcclxuICAgICAgICAgICAgZGlzdFBvcDogRGlzdFBvcC5Qb3B1bGFyaXR5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2gobmV4dFBhZ2U6IGJvb2xlYW4sIGZpbHRlcj86IEZpbHRlciwgcmVzdWx0cz86IFNlYXJjaFJlc3VsdCk6IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+KChyZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDUwMCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigobG9jYXRpb246IExvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2NhdGlvbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIEFQSSBVUkxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSAobmV4dFBhZ2UpID8gdGhpcy51cmxCdWlsZGVyKGxvY2F0aW9uLCByZXN1bHRzLm5leHRfcGFnZV90b2tlbiwgZmlsdGVyKSA6IHRoaXMudXJsQnVpbGRlcihsb2NhdGlvbiwgdW5kZWZpbmVkLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLnVybCkgdGhpcy5wcmludFVybCh1cmwsIG5leHRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZGF0YSkgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2goKSBEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoKCkgRVJST1I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBsb2NhdGlvbiBpcyBjdXJyZW50bHkgbm90IGF2YWlsYWJsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdDdXJyZW50TG9jYXRpb25SZXNvbHZlcigpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVybEJ1aWxkZXIobG9jYXRpb246IExvY2F0aW9uLCBuZXh0UGFnZVRva2VuPzogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciB1cmw6IHN0cmluZyA9IEdvb2dsZVBsYWNlc0FwaVVybHMubmVhcmJ5QXBpOyAvLyBTZXQgYXBpIGJhc2VcclxuICAgICAgICBsZXQgYXBpOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG5leHRQYWdlUGFyYW0gPSBcIj9wYWdldG9rZW49XCI7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uUGFyYW06IHN0cmluZyA9ICc/bG9jYXRpb249JyArIGxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyBsb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmc7XHJcbiAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIGxldCByYWRpdXNQYXJhbTogc3RyaW5nID0gJyZyYWRpdXM9JztcclxuICAgICAgICBsZXQgcmFua2J5UGFyYW06IHN0cmluZyA9ICcmcmFua2J5PSc7XHJcbiAgICAgICAgbGV0IHR5cGVQYXJhbTogc3RyaW5nID0gJyZ0eXBlPSc7XHJcbiAgICAgICAgbGV0IGtleXdvcmRQYXJhbTogc3RyaW5nID0gJyZrZXl3b3JkPSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBuZXh0X3BhZ2UgdG9rZW4uXHJcbiAgICAgICAgaWYgKG5leHRQYWdlVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybCArPSBuZXh0UGFnZVBhcmFtICsgbmV4dFBhZ2VUb2tlbiArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQnVpbGQgYW5kIHJldHVybiBVUkwgYmFzZWQgb24gbW9kZSBhbmQgcHJvdmlkZWQgZmlsdGVyIHBhcmFtc1xyXG4gICAgICAgICAgICB1cmwgKz0gbG9jYXRpb25QYXJhbSAgLy8gcmVxdWlyZWQgcGFyYW1cclxuICAgICAgICAgICAgdXJsICs9IChmaWx0ZXIuZGlzdGFuY2UgJiYgZmlsdGVyLmRpc3RQb3AgPT0gRGlzdFBvcC5EaXN0YW5jZSkgPyByYW5rYnlQYXJhbSArICdkaXN0YW5jZScgOiAnJztcclxuICAgICAgICAgICAgdXJsICs9IChmaWx0ZXIuZGlzdFBvcCA9PSBEaXN0UG9wLlBvcHVsYXJpdHkpID8gcmFkaXVzUGFyYW0gKyBmaWx0ZXIuZGlzdGFuY2UudG9TdHJpbmcoKSArIHJhbmtieVBhcmFtICsgJ3Byb21pbmVuY2UnIDogJyc7XHJcbiAgICAgICAgICAgIHVybCArPSAoZmlsdGVyLmtleXdvcmQgJiYgZmlsdGVyLmtleXdvcmQgIT0gJycpICA/IGtleXdvcmRQYXJhbSArIGZpbHRlci5rZXl3b3JkIDogJyc7XHJcbiAgICAgICAgICAgIHVybCArPSAoZmlsdGVyLnZlbmRvclR5cGUpID8gdHlwZVBhcmFtICsgZmlsdGVyLnZlbmRvclR5cGUgOiB0eXBlUGFyYW0gKyBWZW5kb3JUeXBlLkJhcjtcclxuICAgICAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgICAgIHJldHVybiB1cmwgKz0gYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JQcm9taXNlIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVuZG9yRGV0YWlscyhwbGFjZV9pZDogc3RyaW5nKTogUHJvbWlzZTxWZW5kb3JEZXRhaWw+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxWZW5kb3JEZXRhaWw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IEdvb2dsZVBsYWNlc0FwaVVybHMuZGV0YWlsc0FwaTtcclxuICAgICAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VJZFBhcmFtID0gXCI/cGxhY2VpZD1cIiArIHBsYWNlX2lkO1xyXG5cclxuICAgICAgICAgICAgdXJsID0gdXJsICsgcGxhY2VJZFBhcmFtICsgYXBpS2V5UGFyYW07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IFZlbmRvckRldGFpbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UuZ2V0VmVuZG9yRGV0YWlscygpIEVSUk9SOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uR29vZ2xlUGxhY2VzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25Hb29nbGVQbGFjZXMoKScpO1xyXG4gICAgICAgIC8vIEdldFBsYWNlc0J5SWQoKVxyXG4gICAgICAgIEdvb2dsZVBsYWNlcy5nZXRQbGFjZXNCeUlkKFtcclxuICAgICAgICAgICAgXCJDaElKNHpQWHFJaUFoWUFSMzFYM1M2NFQ2VXdcIixcclxuICAgICAgICAgICAgXCJDaElKNnpNZTNvV0FoWUFSYVozM1oxQkFNUm9cIixcclxuICAgICAgICAgICAgXCJDaElKQVVXb0dJYUFoWUFSUTZ6dmt5X2YxMFFcIlxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKHBsYWNlczogR29vZ2xlUGxhY2VzLlBsYWNlW10pID0+IHtcclxuICAgICAgICAgICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4gY29uc29sZS5sb2cocGxhY2UubmFtZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUGlja1BsYWNlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVQbGFjZXNTZXJ2aWNlLm9uUGlja1BsYWNlKCknKTtcclxuICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXI6IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnICsgSlNPTi5zdHJpbmdpZnkoY2VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ydGhFYXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgKyAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlICsgMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXRoV2VzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlIC0gMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSAtIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdwb3J0OiAnICsgSlNPTi5zdHJpbmdpZnkodmlld3BvcnQpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdvb2dsZVBsYWNlcy5waWNrUGxhY2Uodmlld3BvcnQpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4ocGxhY2UgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2UpKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNldCBsb2NhdGlvbiBiYXNlZCBvbiB1cGRhdGVcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcHJpbnRVcmwodXJsOiBzdHJpbmcsIG5leHRwYWdlOiBib29sZWFuKXtcclxuICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==