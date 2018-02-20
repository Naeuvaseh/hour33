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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFZbEUsOERBQXVEO0FBQ3ZELDhFQUE0RDtBQUc1RDtJQVdJLCtCQUEyQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLFVBQVUsRUFBRSw2QkFBVSxDQUFDLEdBQUc7WUFDMUIsUUFBUSxFQUFFLG9CQUFNLENBQUMsR0FBRztZQUNwQixPQUFPLEVBQUUsa0NBQU8sQ0FBQyxVQUFVO1NBQzlCLENBQUE7SUFDTCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE9BQXNCO1FBQXhFLGlCQTRDQztRQTNDRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsa0JBQWtCO1lBQ2xCLFdBQVc7aUJBQ1Ysa0JBQWtCLENBQUM7Z0JBQ2hCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7Z0JBQzlCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFDLFFBQWtCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxD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QUFDO1FBQ2pHLENBQUM7SUFDTCxDQUFDO0lBMU1RLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQVl3QixpQkFBVTtPQVhsQyxxQkFBcUIsQ0E0TWpDO0lBQUQsNEJBQUM7Q0FBQSxBQTVNRCxJQTRNQztBQTVNWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQVBJS2V5IH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG4vLyBDb25zdGFudHNcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXBpVXJscyB9IGZyb20gJy4uL2NvbnN0L2dvb2dsZS1wbGFjZXMtYXBpLXVybHMuY29uc3QnO1xyXG4vLyBEaXN0YW5jZVxyXG5pbXBvcnQgKiBhcyBkaXN0YW5jZSBmcm9tICdnb29nbGUtZGlzdGFuY2UnO1xyXG4vLyBHZW9sY2F0aW9uXHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuLy8gR29vZ2xlIFBsYWNlc1xyXG5pbXBvcnQgKiBhcyBHb29nbGVQbGFjZXMgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICdtb21lbnQnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGV4dFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZWFyYnlTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L25lYXJieS1zZWFyY2gvbmVhcmJ5LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuLi9lbnVtcy9wcmljZS5lbnVtJztcclxuaW1wb3J0IHsgVmVuZG9yVHlwZSB9IGZyb20gJy4uL2VudW1zL3ZlbmRvci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBEaXN0UG9wIH0gZnJvbSAnLi4vZW51bXMvZGlzdGFuY2UtcG9wdWxhcml0eS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdvb2dsZUxvY2F0aW9uU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVidWc7XHJcbiAgICBwdWJsaWMgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcbiAgICAvLyBHb29nbGUgUGxhY2VzIEFQSVxyXG4gICAgcHVibGljIHNlYXJjaEZpbHRlcjogRmlsdGVyO1xyXG4gICAgcHVibGljIHJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICAgIHB1YmxpYyB2ZW5kb3JSZXN1bHRzOiBBcnJheTxWZW5kb3I+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZyA9IERlYnVnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRmlsdGVyID0ge1xyXG4gICAgICAgICAgICB2ZW5kb3JUeXBlOiBWZW5kb3JUeXBlLkJhcixcclxuICAgICAgICAgICAgZGlzdGFuY2U6IFJhZGl1cy5taTUsXHJcbiAgICAgICAgICAgIGRpc3RQb3A6IERpc3RQb3AuUG9wdWxhcml0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKG5leHRQYWdlOiBib29sZWFuLCBmaWx0ZXI/OiBGaWx0ZXIsIHJlc3VsdHM/OiBTZWFyY2hSZXN1bHQpOiBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPigocmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGxvY2F0aW9uOiBMb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9jYXRpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBBUEkgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKG5leHRQYWdlKSA/IHRoaXMudXJsQnVpbGRlcihsb2NhdGlvbiwgcmVzdWx0cy5uZXh0X3BhZ2VfdG9rZW4sIGZpbHRlcikgOiB0aGlzLnVybEJ1aWxkZXIobG9jYXRpb24sIHVuZGVmaW5lZCwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQcmludCBVUkxcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi51cmwpIHRoaXMucHJpbnRVcmwodXJsLCBuZXh0UGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmRhdGEpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoKCkgREFUQTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnNlYXJjaCgpIEVSUk9SOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdXIgbG9jYXRpb24gaXMgY3VycmVudGx5IG5vdCBhdmFpbGFibGUuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnQ3VycmVudExvY2F0aW9uUmVzb2x2ZXIoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cmxCdWlsZGVyKGxvY2F0aW9uOiBMb2NhdGlvbiwgbmV4dFBhZ2VUb2tlbj86IHN0cmluZywgZmlsdGVyPzogRmlsdGVyKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgdXJsOiBzdHJpbmcgPSBHb29nbGVQbGFjZXNBcGlVcmxzLm5lYXJieUFwaTsgLy8gU2V0IGFwaSBiYXNlXHJcbiAgICAgICAgbGV0IGFwaTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBuZXh0UGFnZVBhcmFtID0gXCI/cGFnZXRva2VuPVwiO1xyXG4gICAgICAgIGxldCBsb2NhdGlvblBhcmFtOiBzdHJpbmcgPSAnP2xvY2F0aW9uPScgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nO1xyXG4gICAgICAgIGxldCBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICBsZXQgcmFkaXVzUGFyYW06IHN0cmluZyA9ICcmcmFkaXVzPSc7XHJcbiAgICAgICAgbGV0IHJhbmtieVBhcmFtOiBzdHJpbmcgPSAnJnJhbmtieT0nO1xyXG4gICAgICAgIGxldCB0eXBlUGFyYW06IHN0cmluZyA9ICcmdHlwZT0nO1xyXG4gICAgICAgIGxldCBrZXl3b3JkUGFyYW06IHN0cmluZyA9ICcma2V5d29yZD0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgbmV4dF9wYWdlIHRva2VuLlxyXG4gICAgICAgIGlmIChuZXh0UGFnZVRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmwgKz0gbmV4dFBhZ2VQYXJhbSArIG5leHRQYWdlVG9rZW4gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIGFuZCByZXR1cm4gVVJMIGJhc2VkIG9uIG1vZGUgYW5kIHByb3ZpZGVkIGZpbHRlciBwYXJhbXNcclxuICAgICAgICAgICAgdXJsICs9IGxvY2F0aW9uUGFyYW0gIC8vIHJlcXVpcmVkIHBhcmFtXHJcbiAgICAgICAgICAgIHVybCArPSAoZmlsdGVyLmRpc3RhbmNlICYmIGZpbHRlci5kaXN0UG9wID09IERpc3RQb3AuRGlzdGFuY2UpID8gcmFua2J5UGFyYW0gKyAnZGlzdGFuY2UnIDogJyc7XHJcbiAgICAgICAgICAgIHVybCArPSAoZmlsdGVyLmRpc3RQb3AgPT0gRGlzdFBvcC5Qb3B1bGFyaXR5KSA/IHJhZGl1c1BhcmFtICsgZmlsdGVyLmRpc3RhbmNlLnRvU3RyaW5nKCkgKyByYW5rYnlQYXJhbSArICdwcm9taW5lbmNlJyA6ICcnO1xyXG4gICAgICAgICAgICB1cmwgKz0gKGZpbHRlci5rZXl3b3JkICYmIGZpbHRlci5rZXl3b3JkICE9ICcnKSAgPyBrZXl3b3JkUGFyYW0gKyBmaWx0ZXIua2V5d29yZCA6ICcnO1xyXG4gICAgICAgICAgICB1cmwgKz0gKGZpbHRlci52ZW5kb3JUeXBlKSA/IHR5cGVQYXJhbSArIGZpbHRlci52ZW5kb3JUeXBlIDogdHlwZVBhcmFtICsgVmVuZG9yVHlwZS5CYXI7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsICs9IGFwaUtleVBhcmFtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yUHJvbWlzZSAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZW5kb3JEZXRhaWxzKHBsYWNlX2lkOiBzdHJpbmcpOiBQcm9taXNlPFZlbmRvckRldGFpbD57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFZlbmRvckRldGFpbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdGluZyB2ZW5kb3IgZGV0YWlscy4nKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IEdvb2dsZVBsYWNlc0FwaVVybHMuZGV0YWlsc0FwaTtcclxuICAgICAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VJZFBhcmFtID0gXCI/cGxhY2VpZD1cIiArIHBsYWNlX2lkO1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgcGxhY2VJZFBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgICAgIC8vIEFQSSBjYWxsXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogVmVuZG9yRGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UuZ2V0VmVuZG9yRGV0YWlscygpIEVSUk9SOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uR29vZ2xlUGxhY2VzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25Hb29nbGVQbGFjZXMoKScpO1xyXG4gICAgICAgIC8vIEdldFBsYWNlc0J5SWQoKVxyXG4gICAgICAgIEdvb2dsZVBsYWNlcy5nZXRQbGFjZXNCeUlkKFtcclxuICAgICAgICAgICAgXCJDaElKNHpQWHFJaUFoWUFSMzFYM1M2NFQ2VXdcIixcclxuICAgICAgICAgICAgXCJDaElKNnpNZTNvV0FoWUFSYVozM1oxQkFNUm9cIixcclxuICAgICAgICAgICAgXCJDaElKQVVXb0dJYUFoWUFSUTZ6dmt5X2YxMFFcIlxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKHBsYWNlczogR29vZ2xlUGxhY2VzLlBsYWNlW10pID0+IHtcclxuICAgICAgICAgICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4gY29uc29sZS5sb2cocGxhY2UubmFtZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUGlja1BsYWNlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVQbGFjZXNTZXJ2aWNlLm9uUGlja1BsYWNlKCknKTtcclxuICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXI6IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnICsgSlNPTi5zdHJpbmdpZnkoY2VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ydGhFYXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgKyAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlICsgMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXRoV2VzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlIC0gMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSAtIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdwb3J0OiAnICsgSlNPTi5zdHJpbmdpZnkodmlld3BvcnQpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdvb2dsZVBsYWNlcy5waWNrUGxhY2Uodmlld3BvcnQpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4ocGxhY2UgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2UpKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNldCBsb2NhdGlvbiBiYXNlZCBvbiB1cGRhdGVcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcHJpbnRVcmwodXJsOiBzdHJpbmcsIG5leHRwYWdlOiBib29sZWFuKXtcclxuICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==