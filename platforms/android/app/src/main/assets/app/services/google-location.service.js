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
// Enums
var price_enum_1 = require("../enums/price.enum");
var search_mode_enum_1 = require("../enums/search-mode.enum");
var GoogleLocationService = (function () {
    function GoogleLocationService(http) {
        this.http = http;
        // Google Places API
        this.api = google_places_api_urls_const_1.GooglePlacesApiUrls;
        this._debug = settings_1.Debug;
    }
    GoogleLocationService.prototype.search = function (mode, nextPage, results, options) {
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
                    var url;
                    // Switch to specific search mode
                    switch (mode) {
                        case search_mode_enum_1.SearchMode.Default:
                            {
                                // Build API URL
                                url = (nextPage) ? _this.defaultSearch(location, results.next_page_token) : _this.defaultSearch(location);
                                // Print URL
                                if (_this._debug.console.GoogleLocation.url)
                                    _this.printUrl(url, search_mode_enum_1.SearchMode.Default, nextPage);
                                // API Call
                                _this.http
                                    .get(url)
                                    .toPromise()
                                    .then(function (response) {
                                    if (response) {
                                        if (_this._debug.console.GoogleLocation.data)
                                            console.log('GoogleLocationService.Search(mode:Default) DATA: ' + JSON.stringify(response));
                                        resolve(response);
                                    }
                                }, function (error) {
                                    if (settings_1.Debug.console.GoogleLocation.error)
                                        console.log('GoogleLocationService.textSearch() ERROR: ' + JSON.stringify(error));
                                });
                                break;
                            }
                        case search_mode_enum_1.SearchMode.Text:
                            {
                                if (nextPage) {
                                }
                                else {
                                }
                                break;
                            }
                        case search_mode_enum_1.SearchMode.Nearby:
                            {
                                if (nextPage) {
                                }
                                else {
                                }
                                break;
                            }
                        default:
                            alert('Please select a search mode.');
                            return null;
                    }
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
    GoogleLocationService.prototype.nearbySearch = function (text, types) {
        //var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
        // Required params
        var location = "?location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long
        var apiKey = "&key=" + settings_2.GooglePlacesAPIKey;
        var radius = "&radius=" + radius_enum_1.Radius.mi5;
        // Optinal params
        var keyword = "&keyword=bar"; //,brewery,restaurant,club,vineyard"; 
        var language = "&language=en";
        var rankBy = "&rankBy=distance";
        // Build URL
        var url = this.api.nearbyApi + location + radius + keyword + apiKey;
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
        return new Promise(function (resolve, reject) {
            // Required params
            var searchTextParam = "?query=" + ((text !== undefined) ? _this.capitalize(text).replace(new RegExp(" ", 'g'), "") : "BAR");
            var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
            var locationParam = "&location=" + _this.userLocation.latitude.toString() + ',' + _this.userLocation.longitude.toString(); // lat,long 
            // Optional params
            var radiusParam = "&radius=" + radius_enum_1.Radius.mi1;
            var minPriceParam = "&minprice=" + ((minPrice !== undefined) ? minPrice : price_enum_1.Price.zero); // Default is lowest
            var maxPriceParam = "&maxprice=" + ((maxPrice !== undefined) ? maxPrice : price_enum_1.Price.four); // Default is highest
            var typeParam = ((type !== undefined) ? "&type=" + type : "");
            // Build URL
            var url = _this.api.textSearchApi + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + typeParam + apiKeyParam;
            // Log URL
            console.log("############################### Text Search ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
            // API Call
            _this.http
                .get(url)
                .toPromise()
                .then(function (response) {
                if (settings_1.Debug.console.GoogleLocation)
                    console.log('GoogleLocationService.textSearch(): ' + JSON.stringify(response));
                _this.results = response;
                _this.vendorResults = response['results'];
                resolve(response);
            }, function (error) {
                if (settings_1.Debug.console.GoogleLocation)
                    console.log('GoogleLocationService.textSearch() ERROR: ' + error);
            });
        });
    };
    GoogleLocationService.prototype.defaultSearch = function (location, nextPageToken) {
        var url;
        var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
        var locationParam;
        var radiusParam;
        var typeParam;
        var rankbyParam;
        if (nextPageToken) {
            var nextPageParam = "?pagetoken=" + nextPageToken;
            url = this.api.nearbyApi + nextPageParam + apiKeyParam;
        }
        else {
            // Optional params
            locationParam = "?location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
            radiusParam = "&radius=" + radius_enum_1.Radius.mi5;
            typeParam = "&type=bar";
            rankbyParam = "&rankby=distance";
            // Build URL
            url = this.api.nearbyApi + locationParam + rankbyParam + typeParam + apiKeyParam;
        }
        return url;
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
    GoogleLocationService.prototype.printUrl = function (url, mode, nextpage) {
        switch (mode) {
            case search_mode_enum_1.SearchMode.Default:
                if (nextpage) {
                    console.log("############################### Default (Nearby) Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                else {
                    console.log("############################### Default (Nearby) Search ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                break;
            case search_mode_enum_1.SearchMode.Nearby:
                if (nextpage) {
                    console.log("############################### Nearby Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                else {
                    console.log("############################### Nearby Search ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                break;
            case search_mode_enum_1.SearchMode.Text:
                if (nextpage) {
                    console.log("############################### Text Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                else {
                    console.log("############################### Text Search ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                break;
            default:
                console.log('GoogleLocationService.printUrl(): A mode must be selected');
                break;
        }
    };
    GoogleLocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GoogleLocationService);
    return GoogleLocationService;
}());
exports.GoogleLocationService = GoogleLocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFRbEUsUUFBUTtBQUNSLGtEQUE0QztBQUU1Qyw4REFBdUQ7QUFJdkQ7SUFhSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVAzQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFPOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBZ0IsRUFBRSxRQUFpQixFQUFFLE9BQXNCLEVBQUUsT0FBZ0I7UUFBM0YsaUJBMEVDO1FBekVHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRCxrQkFBa0I7WUFDbEIsV0FBVztpQkFDVixrQkFBa0IsQ0FBQztnQkFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtnQkFDOUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDWCxrQkFBa0I7b0JBQ2xCLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO29CQUM3QixJQUFJ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QyxHQUFHLENBQUMsK0VBQStFLENBQUMsQ0FBQztnQkFDakcsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7b0JBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLCtFQUErRSxDQUFDLENBQUM7Z0JBQ2pHLENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2dCQUN6RSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQXBTUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0Fjd0IsaUJBQVU7T0FibEMscUJBQXFCLENBc1NqQztJQUFELDRCQUFDO0NBQUEsQUF0U0QsSUFzU0M7QUF0U1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FQSUtleSB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuLy8gQ29uc3RhbnRzXHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FwaVVybHMgfSBmcm9tICcuLi9jb25zdC9nb29nbGUtcGxhY2VzLWFwaS11cmxzLmNvbnN0JztcclxuLy8gRGlzdGFuY2VcclxuaW1wb3J0ICogYXMgZGlzdGFuY2UgZnJvbSAnZ29vZ2xlLWRpc3RhbmNlJztcclxuLy8gR2VvbGNhdGlvblxyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbi8vIEdvb2dsZSBQbGFjZXNcclxuaW1wb3J0ICogYXMgR29vZ2xlUGxhY2VzIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSAnbW9tZW50JztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRleHRTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3RleHQtc2VhcmNoL3RleHQtc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmVhcmJ5U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9uZWFyYnktc2VhcmNoL25lYXJieS1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG4vLyBFbnVtc1xyXG5pbXBvcnQgeyBQcmljZSB9IGZyb20gJy4uL2VudW1zL3ByaWNlLmVudW0nO1xyXG5pbXBvcnQgeyBWZW5kb3JUeXBlIH0gZnJvbSAnLi4vZW51bXMvdmVuZG9yLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFNlYXJjaE1vZGUgfSBmcm9tICcuLi9lbnVtcy9zZWFyY2gtbW9kZS5lbnVtJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2RlYnVnO1xyXG4gICAgcHVibGljIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG4gICAgLy8gR29vZ2xlIFBsYWNlcyBBUElcclxuICAgIHByaXZhdGUgYXBpID0gR29vZ2xlUGxhY2VzQXBpVXJscztcclxuICAgIC8vIHByaXZhdGUgX2Vycm9yQ2FsbGJhY2s7XHJcblxyXG4gICAgcHVibGljIHJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICAgIHB1YmxpYyB2ZW5kb3JSZXN1bHRzOiBBcnJheTxWZW5kb3I+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZyA9IERlYnVnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2gobW9kZTogU2VhcmNoTW9kZSwgbmV4dFBhZ2U6IGJvb2xlYW4sIHJlc3VsdHM/OiBTZWFyY2hSZXN1bHQsIG9wdGlvbnM/OiBWZW5kb3IpOiBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPigocmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGxvY2F0aW9uOiBMb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9jYXRpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggdG8gc3BlY2lmaWMgc2VhcmNoIG1vZGVcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gobW9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5EZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBBUEkgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSAobmV4dFBhZ2UpID8gdGhpcy5kZWZhdWx0U2VhcmNoKGxvY2F0aW9uLCByZXN1bHRzLm5leHRfcGFnZV90b2tlbikgOiB0aGlzLmRlZmF1bHRTZWFyY2gobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJpbnQgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi51cmwpIHRoaXMucHJpbnRVcmwodXJsLCBTZWFyY2hNb2RlLkRlZmF1bHQsIG5leHRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5kYXRhKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLlNlYXJjaChtb2RlOkRlZmF1bHQpIERBVEE6ICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZWFyY2ggbW9kZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGxvY2F0aW9uIGlzIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5lcnJvcikgY29uc29sZS5sb2coJ0N1cnJlbnRMb2NhdGlvblJlc29sdmVyKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmVhcmJ5U2VhcmNoKHRleHQ/OiBzdHJpbmcsIHR5cGVzPzogc3RyaW5nKTogT2JqZWN0IHtcclxuICAgICAgICAvL3ZhciBzZWFyY2hCeSA9IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpO1xyXG4gICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IFwiP2xvY2F0aW9uPVwiICsgdGhpcy51c2VyTG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIHRoaXMudXNlckxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZ1xyXG4gICAgICAgIHZhciBhcGlLZXkgPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTU7XHJcbiAgICAgICAgLy8gT3B0aW5hbCBwYXJhbXNcclxuICAgICAgICB2YXIga2V5d29yZCA9IFwiJmtleXdvcmQ9YmFyXCI7IC8vLGJyZXdlcnkscmVzdGF1cmFudCxjbHViLHZpbmV5YXJkXCI7IFxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IFwiJmxhbmd1YWdlPWVuXCI7XHJcbiAgICAgICAgdmFyIHJhbmtCeSA9IFwiJnJhbmtCeT1kaXN0YW5jZVwiO1xyXG4gICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmFwaS5uZWFyYnlBcGkgKyBsb2NhdGlvbiArIHJhZGl1cyArIGtleXdvcmQgKyBhcGlLZXk7XHJcbiAgICAgICAgLy8gTG9nIFVSTFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yUHJvbWlzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRleHRTZWFyY2godGV4dD86IHN0cmluZywgcmFkaXVzPzogUmFkaXVzLCBsYW5ndWFnZT86IGJvb2xlYW4sIG1pblByaWNlPzogUHJpY2UsIG1heFByaWNlPzogUHJpY2UsIHR5cGU/OiBWZW5kb3JUeXBlKTogUHJvbWlzZTxTZWFyY2hSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIHNlYXJjaFRleHRQYXJhbSA9IFwiP3F1ZXJ5PVwiICsgKCh0ZXh0ICE9PSB1bmRlZmluZWQpID8gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIikgOiBcIkJBUlwiKTtcclxuICAgICAgICAgICAgdmFyIGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJhbSA9IFwiJmxvY2F0aW9uPVwiICsgdGhpcy51c2VyTG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIHRoaXMudXNlckxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZyBcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1zXHJcbiAgICAgICAgICAgIHZhciByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgICAgIHZhciBtaW5QcmljZVBhcmFtID0gXCImbWlucHJpY2U9XCIgKyAoKG1pblByaWNlICE9PSB1bmRlZmluZWQpID8gbWluUHJpY2UgOiBQcmljZS56ZXJvKTsgLy8gRGVmYXVsdCBpcyBsb3dlc3RcclxuICAgICAgICAgICAgdmFyIG1heFByaWNlUGFyYW0gPSBcIiZtYXhwcmljZT1cIiArICgobWF4UHJpY2UgIT09IHVuZGVmaW5lZCkgPyBtYXhQcmljZSA6IFByaWNlLmZvdXIpOyAvLyBEZWZhdWx0IGlzIGhpZ2hlc3RcclxuICAgICAgICAgICAgdmFyIHR5cGVQYXJhbSA9ICgodHlwZSAhPT0gdW5kZWZpbmVkKSA/IFwiJnR5cGU9XCIgKyB0eXBlIDogXCJcIik7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgdHlwZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgICAgIC8vIExvZyBVUkxcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQ8U2VhcmNoUmVzdWx0Pih1cmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvclJlc3VsdHMgPSByZXNwb25zZVsncmVzdWx0cyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmYXVsdFNlYXJjaChsb2NhdGlvbjogTG9jYXRpb24sIG5leHRQYWdlVG9rZW4/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZztcclxuICAgICAgICBsZXQgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgcmFkaXVzUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgdHlwZVBhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHJhbmtieVBhcmFtOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChuZXh0UGFnZVRva2VuKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0UGFnZVBhcmFtID0gXCI/cGFnZXRva2VuPVwiICsgbmV4dFBhZ2VUb2tlbjtcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5hcGkubmVhcmJ5QXBpICsgbmV4dFBhZ2VQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1zXHJcbiAgICAgICAgICAgIGxvY2F0aW9uUGFyYW0gPSBcIj9sb2NhdGlvbj1cIiArIGxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyBsb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmcgXHJcbiAgICAgICAgICAgIHJhZGl1c1BhcmFtID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pNTtcclxuICAgICAgICAgICAgdHlwZVBhcmFtID0gXCImdHlwZT1iYXJcIjtcclxuICAgICAgICAgICAgcmFua2J5UGFyYW0gPSBcIiZyYW5rYnk9ZGlzdGFuY2VcIlxyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5hcGkubmVhcmJ5QXBpICsgbG9jYXRpb25QYXJhbSArIHJhbmtieVBhcmFtICsgdHlwZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvclByb21pc2UgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudExvY2F0aW9uKCk6IExvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgb25Hb29nbGVQbGFjZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vbkdvb2dsZVBsYWNlcygpJyk7XHJcbiAgICAgICAgLy8gR2V0UGxhY2VzQnlJZCgpXHJcbiAgICAgICAgR29vZ2xlUGxhY2VzLmdldFBsYWNlc0J5SWQoW1xyXG4gICAgICAgICAgICBcIkNoSUo0elBYcUlpQWhZQVIzMVgzUzY0VDZVd1wiLFxyXG4gICAgICAgICAgICBcIkNoSUo2ek1lM29XQWhZQVJhWjMzWjFCQU1Sb1wiLFxyXG4gICAgICAgICAgICBcIkNoSUpBVVdvR0lhQWhZQVJRNnp2a3lfZjEwUVwiXHJcbiAgICAgICAgXSlcclxuICAgICAgICAudGhlbigocGxhY2VzOiBHb29nbGVQbGFjZXMuUGxhY2VbXSkgPT4ge1xyXG4gICAgICAgICAgICBwbGFjZXMuZm9yRWFjaChwbGFjZSA9PiBjb25zb2xlLmxvZyhwbGFjZS5uYW1lKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QaWNrUGxhY2UoKXtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZVBsYWNlc1NlcnZpY2Uub25QaWNrUGxhY2UoKScpO1xyXG4gICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbnRlcjogTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcgKyBKU09OLnN0cmluZ2lmeShjZW50ZXIpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBub3J0aEVhc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSArIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgKyAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc291dGhXZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgLSAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlIC0gMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlld3BvcnQ6ICcgKyBKU09OLnN0cmluZ2lmeSh2aWV3cG9ydCkpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR29vZ2xlUGxhY2VzLnBpY2tQbGFjZSh2aWV3cG9ydClcclxuICAgICAgICAgICAgICAgIC8vICAgICAudGhlbihwbGFjZSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwbGFjZSkpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gU2V0IGxvY2F0aW9uIGJhc2VkIG9uIHVwZGF0ZVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpOyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludFVybCh1cmw6IHN0cmluZywgbW9kZTogU2VhcmNoTW9kZSwgbmV4dHBhZ2U6IGJvb2xlYW4pe1xyXG4gICAgICAgIHN3aXRjaChtb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLkRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgKE5lYXJieSkgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEZWZhdWx0IChOZWFyYnkpIFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnByaW50VXJsKCk6IEEgbW9kZSBtdXN0IGJlIHNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0=