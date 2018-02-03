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
            radiusParam = "&radius=" + radius_enum_1.Radius.mi25;
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
    GoogleLocationService.prototype.getVendorDetails = function (place_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.api.detailsApi;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFTbEUsUUFBUTtBQUNSLGtEQUE0QztBQUU1Qyw4REFBdUQ7QUFJdkQ7SUFhSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVAzQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFPOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBZ0IsRUFBRSxRQUFpQixFQUFFLE9BQXNCLEVBQUUsT0FBZ0I7UUFBM0YsaUJBMEVDO1FBekVHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRCxrQkFBa0I7WUFDbEIsV0FBVztpQkFDVixrQkFBa0IsQ0FBQztnQkFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtnQkFDOUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDWCxrQkFBa0I7b0JBQ2xCLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO29CQUM3QixJQUFJ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QkFBVSxFQUFFO3lDQWN3QixpQkFBVTtPQWJsQyxxQkFBcUIsQ0E2VGpDO0lBQUQsNEJBQUM7Q0FBQSxBQTdURCxJQTZUQztBQTdUWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQVBJS2V5IH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG4vLyBDb25zdGFudHNcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXBpVXJscyB9IGZyb20gJy4uL2NvbnN0L2dvb2dsZS1wbGFjZXMtYXBpLXVybHMuY29uc3QnO1xyXG4vLyBEaXN0YW5jZVxyXG5pbXBvcnQgKiBhcyBkaXN0YW5jZSBmcm9tICdnb29nbGUtZGlzdGFuY2UnO1xyXG4vLyBHZW9sY2F0aW9uXHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuLy8gR29vZ2xlIFBsYWNlc1xyXG5pbXBvcnQgKiBhcyBHb29nbGVQbGFjZXMgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICdtb21lbnQnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGV4dFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZWFyYnlTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L25lYXJieS1zZWFyY2gvbmVhcmJ5LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuLi9lbnVtcy9wcmljZS5lbnVtJztcclxuaW1wb3J0IHsgVmVuZG9yVHlwZSB9IGZyb20gJy4uL2VudW1zL3ZlbmRvci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hNb2RlIH0gZnJvbSAnLi4vZW51bXMvc2VhcmNoLW1vZGUuZW51bSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWJ1ZztcclxuICAgIHB1YmxpYyB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICAgIHB1YmxpYyB2ZW5kb3JzOiBWZW5kb3JbXTtcclxuICAgIC8vIEdvb2dsZSBQbGFjZXMgQVBJXHJcbiAgICBwcml2YXRlIGFwaSA9IEdvb2dsZVBsYWNlc0FwaVVybHM7XHJcbiAgICAvLyBwcml2YXRlIF9lcnJvckNhbGxiYWNrO1xyXG5cclxuICAgIHB1YmxpYyByZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yUmVzdWx0czogQXJyYXk8VmVuZG9yPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKG1vZGU6IFNlYXJjaE1vZGUsIG5leHRQYWdlOiBib29sZWFuLCByZXN1bHRzPzogU2VhcmNoUmVzdWx0LCBvcHRpb25zPzogVmVuZG9yKTogUHJvbWlzZTxTZWFyY2hSZXN1bHR8bnVsbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZWFyY2hSZXN1bHR8bnVsbD4oKHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9uXHJcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZTogNTAwLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChsb2NhdGlvbjogTG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIExvY2F0aW9uIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3dpdGNoIHRvIHNwZWNpZmljIHNlYXJjaCBtb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKG1vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuRGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgQVBJIFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gKG5leHRQYWdlKSA/IHRoaXMuZGVmYXVsdFNlYXJjaChsb2NhdGlvbiwgcmVzdWx0cy5uZXh0X3BhZ2VfdG9rZW4pIDogdGhpcy5kZWZhdWx0U2VhcmNoKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByaW50IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24udXJsKSB0aGlzLnByaW50VXJsKHVybCwgU2VhcmNoTW9kZS5EZWZhdWx0LCBuZXh0UGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZGF0YSkgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5TZWFyY2gobW9kZTpEZWZhdWx0KSBEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuTmVhcmJ5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2Upe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgc2VhcmNoIG1vZGUuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBsb2NhdGlvbiBpcyBjdXJyZW50bHkgbm90IGF2YWlsYWJsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdDdXJyZW50TG9jYXRpb25SZXNvbHZlcigpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5lYXJieVNlYXJjaCh0ZXh0Pzogc3RyaW5nLCB0eXBlcz86IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICAgICAgLy92YXIgc2VhcmNoQnkgPSB0aGlzLmNhcGl0YWxpemUodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKFwiIFwiLCAnZycpLCBcIlwiKTtcclxuICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBcIj9sb2NhdGlvbj1cIiArIHRoaXMudXNlckxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyB0aGlzLnVzZXJMb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmdcclxuICAgICAgICB2YXIgYXBpS2V5ID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIHZhciByYWRpdXMgPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWk1O1xyXG4gICAgICAgIC8vIE9wdGluYWwgcGFyYW1zXHJcbiAgICAgICAgdmFyIGtleXdvcmQgPSBcIiZrZXl3b3JkPWJhclwiOyAvLyxicmV3ZXJ5LHJlc3RhdXJhbnQsY2x1Yix2aW5leWFyZFwiOyBcclxuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSBcIiZsYW5ndWFnZT1lblwiO1xyXG4gICAgICAgIHZhciByYW5rQnkgPSBcIiZyYW5rQnk9ZGlzdGFuY2VcIjtcclxuICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkubmVhcmJ5QXBpICsgbG9jYXRpb24gKyByYWRpdXMgKyBrZXl3b3JkICsgYXBpS2V5O1xyXG4gICAgICAgIC8vIExvZyBVUkxcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvclByb21pc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0ZXh0U2VhcmNoKHRleHQ/OiBzdHJpbmcsIHJhZGl1cz86IFJhZGl1cywgbGFuZ3VhZ2U/OiBib29sZWFuLCBtaW5QcmljZT86IFByaWNlLCBtYXhQcmljZT86IFByaWNlLCB0eXBlPzogVmVuZG9yVHlwZSk6IFByb21pc2U8U2VhcmNoUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0UGFyYW0gPSBcIj9xdWVyeT1cIiArICgodGV4dCAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpIDogXCJCQVJcIik7XHJcbiAgICAgICAgICAgIHZhciBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFyYW0gPSBcIiZsb2NhdGlvbj1cIiArIHRoaXMudXNlckxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyB0aGlzLnVzZXJMb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmcgXHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzUGFyYW0gPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWkxO1xyXG4gICAgICAgICAgICB2YXIgbWluUHJpY2VQYXJhbSA9IFwiJm1pbnByaWNlPVwiICsgKChtaW5QcmljZSAhPT0gdW5kZWZpbmVkKSA/IG1pblByaWNlIDogUHJpY2UuemVybyk7IC8vIERlZmF1bHQgaXMgbG93ZXN0XHJcbiAgICAgICAgICAgIHZhciBtYXhQcmljZVBhcmFtID0gXCImbWF4cHJpY2U9XCIgKyAoKG1heFByaWNlICE9PSB1bmRlZmluZWQpID8gbWF4UHJpY2UgOiBQcmljZS5mb3VyKTsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAgICAgICAgIHZhciB0eXBlUGFyYW0gPSAoKHR5cGUgIT09IHVuZGVmaW5lZCkgPyBcIiZ0eXBlPVwiICsgdHlwZSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuYXBpLnRleHRTZWFyY2hBcGkgKyBzZWFyY2hUZXh0UGFyYW0gKyBsb2NhdGlvblBhcmFtICsgcmFkaXVzUGFyYW0gKyBtaW5QcmljZVBhcmFtICsgbWF4UHJpY2VQYXJhbSArIHR5cGVQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0PFNlYXJjaFJlc3VsdD4odXJsKVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JSZXN1bHRzID0gcmVzcG9uc2VbJ3Jlc3VsdHMnXTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRTZWFyY2gobG9jYXRpb246IExvY2F0aW9uLCBuZXh0UGFnZVRva2VuPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIGxldCBsb2NhdGlvblBhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHJhZGl1c1BhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHR5cGVQYXJhbTogc3RyaW5nO1xyXG4gICAgICAgIGxldCByYW5rYnlQYXJhbTogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2VQYXJhbSA9IFwiP3BhZ2V0b2tlbj1cIiArIG5leHRQYWdlVG9rZW47XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMuYXBpLm5lYXJieUFwaSArIG5leHRQYWdlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgICAgICBsb2NhdGlvblBhcmFtID0gXCI/bG9jYXRpb249XCIgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgICAgICByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTI1O1xyXG4gICAgICAgICAgICB0eXBlUGFyYW0gPSBcIiZ0eXBlPWJhclwiO1xyXG4gICAgICAgICAgICByYW5rYnlQYXJhbSA9IFwiJnJhbmtieT1kaXN0YW5jZVwiXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLmFwaS5uZWFyYnlBcGkgKyBsb2NhdGlvblBhcmFtICsgcmFua2J5UGFyYW0gKyB0eXBlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yUHJvbWlzZSAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvckRldGFpbHMocGxhY2VfaWQ6IHN0cmluZyk6IFByb21pc2U8VmVuZG9yRGV0YWlsPntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VmVuZG9yRGV0YWlsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmFwaS5kZXRhaWxzQXBpO1xyXG4gICAgICAgICAgICBsZXQgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZUlkUGFyYW0gPSBcIj9wbGFjZWlkPVwiICsgcGxhY2VfaWQ7XHJcblxyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBwbGFjZUlkUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogVmVuZG9yRGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5nZXRWZW5kb3JEZXRhaWxzKCkgRVJST1I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudExvY2F0aW9uKCk6IExvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgb25Hb29nbGVQbGFjZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vbkdvb2dsZVBsYWNlcygpJyk7XHJcbiAgICAgICAgLy8gR2V0UGxhY2VzQnlJZCgpXHJcbiAgICAgICAgR29vZ2xlUGxhY2VzLmdldFBsYWNlc0J5SWQoW1xyXG4gICAgICAgICAgICBcIkNoSUo0elBYcUlpQWhZQVIzMVgzUzY0VDZVd1wiLFxyXG4gICAgICAgICAgICBcIkNoSUo2ek1lM29XQWhZQVJhWjMzWjFCQU1Sb1wiLFxyXG4gICAgICAgICAgICBcIkNoSUpBVVdvR0lhQWhZQVJRNnp2a3lfZjEwUVwiXHJcbiAgICAgICAgXSlcclxuICAgICAgICAudGhlbigocGxhY2VzOiBHb29nbGVQbGFjZXMuUGxhY2VbXSkgPT4ge1xyXG4gICAgICAgICAgICBwbGFjZXMuZm9yRWFjaChwbGFjZSA9PiBjb25zb2xlLmxvZyhwbGFjZS5uYW1lKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QaWNrUGxhY2UoKXtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZVBsYWNlc1NlcnZpY2Uub25QaWNrUGxhY2UoKScpO1xyXG4gICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbnRlcjogTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcgKyBKU09OLnN0cmluZ2lmeShjZW50ZXIpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBub3J0aEVhc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSArIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgKyAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc291dGhXZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgLSAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlIC0gMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlld3BvcnQ6ICcgKyBKU09OLnN0cmluZ2lmeSh2aWV3cG9ydCkpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR29vZ2xlUGxhY2VzLnBpY2tQbGFjZSh2aWV3cG9ydClcclxuICAgICAgICAgICAgICAgIC8vICAgICAudGhlbihwbGFjZSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwbGFjZSkpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gU2V0IGxvY2F0aW9uIGJhc2VkIG9uIHVwZGF0ZVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpOyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludFVybCh1cmw6IHN0cmluZywgbW9kZTogU2VhcmNoTW9kZSwgbmV4dHBhZ2U6IGJvb2xlYW4pe1xyXG4gICAgICAgIHN3aXRjaChtb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLkRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgKE5lYXJieSkgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEZWZhdWx0IChOZWFyYnkpIFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnByaW50VXJsKCk6IEEgbW9kZSBtdXN0IGJlIHNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0=