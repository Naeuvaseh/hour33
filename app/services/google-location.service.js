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
                                        console.log('GoogleLocationService.textSearch() ERROR: ' + error);
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
        var radius = "&radius=" + radius_enum_1.Radius.mi1;
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
        var searchTextParam;
        var locationParam;
        var radiusParam;
        var minPriceParam;
        var maxPriceParam;
        var typeParam;
        if (nextPageToken) {
            var nextPageParam = "?pagetoken=" + nextPageToken;
            url = this.api.textSearchApi + nextPageParam + apiKeyParam;
        }
        else {
            // Required params
            searchTextParam = "?query=";
            // Optional params
            locationParam = "&location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
            radiusParam = "&radius=" + radius_enum_1.Radius.mi1;
            minPriceParam = "&minprice=" + price_enum_1.Price.zero; // Default is lowest
            maxPriceParam = "&maxprice=" + price_enum_1.Price.four; // Default is highest
            typeParam = "&type=bar";
            // Build URL
            url = this.api.textSearchApi + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + typeParam + apiKeyParam;
        }
        return url;
    };
    // public defaultSearch(location?: Location): Promise<SearchResult> {
    //     return new Promise<SearchResult>((resolve, reject) => {
    //         // Required params
    //         var searchTextParam = "?query=BAR";
    //         var apiKeyParam = "&key=" + GooglePlacesAPIKey;
    //         // Optional params
    //         var locationParam = "&location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
    //         var radiusParam = "&radius=" + Radius.mi1;
    //         var minPriceParam = "&minprice=" +  Price.zero; // Default is lowest
    //         var maxPriceParam = "&maxprice=" + Price.four; // Default is highest
    //         // Build URL
    //         var url = this.api.textSearchApi + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + apiKeyParam;
    //         // Log URL
    //         console.log("############################### Default Search ###############################");
    //         console.log("URL=" + url);
    //         console.log("#############################################################################");
    //         // API Call
    //         this.http
    //         .get(url)
    //         .toPromise()
    //             .then((response: SearchResult) => {
    //                 if(response){
    //                     console.log('Valid Response Recieved.');
    //                     resolve(response);
    //                 }
    //             },
    //             (error) => {
    //                 if (Debug.console.GoogleLocation) console.log('GoogleLocationService.textSearch() ERROR: ' + error);
    //             });
    //     });
    // }
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
                    console.log("############################### Default Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                else {
                    console.log("############################### Default Search ###############################");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBQzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFRbEUsUUFBUTtBQUNSLGtEQUE0QztBQUU1Qyw4REFBdUQ7QUFJdkQ7SUFXSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVAzQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFPOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBZ0IsRUFBRSxRQUFpQixFQUFFLE9BQXNCLEVBQUUsT0FBZ0I7UUFBM0YsaUJBd0VDO1FBdkVHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRCxrQkFBa0I7WUFDbEIsV0FBVztpQkFDVixrQkFBa0IsQ0FBQztnQkFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtnQkFDOUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDWCxJQUFJLEdBQVcsQ0FBQztvQkFDaEIsaUNBQWlDO29CQUNqQyxNQUFNLENBQUEsQ0FBQyxJQUFJ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O0lBQUQsNEJBQUM7Q0FBQSxBQXZVRCxJQXVVQztBQXZVWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQVBJS2V5IH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG4vLyBDb25zdGFudHNcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXBpVXJscyB9IGZyb20gJy4uL2NvbnN0L2dvb2dsZS1wbGFjZXMtYXBpLXVybHMuY29uc3QnO1xyXG4vLyBHZW9sY2F0aW9uXHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuLy8gR29vZ2xlIFBsYWNlc1xyXG5pbXBvcnQgKiBhcyBHb29nbGVQbGFjZXMgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICdtb21lbnQnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGV4dFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZWFyYnlTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L25lYXJieS1zZWFyY2gvbmVhcmJ5LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vZW51bXMvcHJpY2UuZW51bSc7XHJcbmltcG9ydCB7IFZlbmRvclR5cGUgfSBmcm9tICcuLi9lbnVtcy92ZW5kb3ItdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdvb2dsZUxvY2F0aW9uU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVidWc7XHJcbiAgICBwdWJsaWMgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIC8vIEdvb2dsZSBQbGFjZXMgQVBJXHJcbiAgICBwcml2YXRlIGFwaSA9IEdvb2dsZVBsYWNlc0FwaVVybHM7XHJcbiAgICAvLyBwcml2YXRlIF9lcnJvckNhbGxiYWNrO1xyXG5cclxuICAgIHB1YmxpYyByZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yUmVzdWx0czogQXJyYXk8VmVuZG9yPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKG1vZGU6IFNlYXJjaE1vZGUsIG5leHRQYWdlOiBib29sZWFuLCByZXN1bHRzPzogU2VhcmNoUmVzdWx0LCBvcHRpb25zPzogVmVuZG9yKTogUHJvbWlzZTxTZWFyY2hSZXN1bHR8bnVsbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZWFyY2hSZXN1bHR8bnVsbD4oKHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9uXHJcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZTogNTAwLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChsb2NhdGlvbjogTG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIExvY2F0aW9uIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN3aXRjaCB0byBzcGVjaWZpYyBzZWFyY2ggbW9kZVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChtb2RlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLkRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIEFQSSBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IChuZXh0UGFnZSkgPyB0aGlzLmRlZmF1bHRTZWFyY2gobG9jYXRpb24sIHJlc3VsdHMubmV4dF9wYWdlX3Rva2VuKSA6IHRoaXMuZGVmYXVsdFNlYXJjaChsb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmludCBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLnVybCkgdGhpcy5wcmludFVybCh1cmwsIFNlYXJjaE1vZGUuRGVmYXVsdCwgbmV4dFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmRhdGEpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UuU2VhcmNoKG1vZGU6RGVmYXVsdCkgREFUQTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5lcnJvcikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuTmVhcmJ5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2Upe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgc2VhcmNoIG1vZGUuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBsb2NhdGlvbiBpcyBjdXJyZW50bHkgbm90IGF2YWlsYWJsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdDdXJyZW50TG9jYXRpb25SZXNvbHZlcigpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5lYXJieVNlYXJjaCh0ZXh0Pzogc3RyaW5nLCB0eXBlcz86IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICAgICAgLy92YXIgc2VhcmNoQnkgPSB0aGlzLmNhcGl0YWxpemUodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKFwiIFwiLCAnZycpLCBcIlwiKTtcclxuICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBcIj9sb2NhdGlvbj1cIiArIHRoaXMudXNlckxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyB0aGlzLnVzZXJMb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmdcclxuICAgICAgICB2YXIgYXBpS2V5ID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIHZhciByYWRpdXMgPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWkxO1xyXG4gICAgICAgIC8vIE9wdGluYWwgcGFyYW1zXHJcbiAgICAgICAgdmFyIGtleXdvcmQgPSBcIiZrZXl3b3JkPWJhclwiOyAvLyxicmV3ZXJ5LHJlc3RhdXJhbnQsY2x1Yix2aW5leWFyZFwiOyBcclxuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSBcIiZsYW5ndWFnZT1lblwiO1xyXG4gICAgICAgIHZhciByYW5rQnkgPSBcIiZyYW5rQnk9ZGlzdGFuY2VcIjtcclxuICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkubmVhcmJ5QXBpICsgbG9jYXRpb24gKyByYWRpdXMgKyBrZXl3b3JkICsgYXBpS2V5O1xyXG4gICAgICAgIC8vIExvZyBVUkxcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvclByb21pc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0ZXh0U2VhcmNoKHRleHQ/OiBzdHJpbmcsIHJhZGl1cz86IFJhZGl1cywgbGFuZ3VhZ2U/OiBib29sZWFuLCBtaW5QcmljZT86IFByaWNlLCBtYXhQcmljZT86IFByaWNlLCB0eXBlPzogVmVuZG9yVHlwZSk6IFByb21pc2U8U2VhcmNoUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0UGFyYW0gPSBcIj9xdWVyeT1cIiArICgodGV4dCAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpIDogXCJCQVJcIik7XHJcbiAgICAgICAgICAgIHZhciBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFyYW0gPSBcIiZsb2NhdGlvbj1cIiArIHRoaXMudXNlckxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyB0aGlzLnVzZXJMb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmcgXHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzUGFyYW0gPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWkxO1xyXG4gICAgICAgICAgICB2YXIgbWluUHJpY2VQYXJhbSA9IFwiJm1pbnByaWNlPVwiICsgKChtaW5QcmljZSAhPT0gdW5kZWZpbmVkKSA/IG1pblByaWNlIDogUHJpY2UuemVybyk7IC8vIERlZmF1bHQgaXMgbG93ZXN0XHJcbiAgICAgICAgICAgIHZhciBtYXhQcmljZVBhcmFtID0gXCImbWF4cHJpY2U9XCIgKyAoKG1heFByaWNlICE9PSB1bmRlZmluZWQpID8gbWF4UHJpY2UgOiBQcmljZS5mb3VyKTsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAgICAgICAgIHZhciB0eXBlUGFyYW0gPSAoKHR5cGUgIT09IHVuZGVmaW5lZCkgPyBcIiZ0eXBlPVwiICsgdHlwZSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuYXBpLnRleHRTZWFyY2hBcGkgKyBzZWFyY2hUZXh0UGFyYW0gKyBsb2NhdGlvblBhcmFtICsgcmFkaXVzUGFyYW0gKyBtaW5QcmljZVBhcmFtICsgbWF4UHJpY2VQYXJhbSArIHR5cGVQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0PFNlYXJjaFJlc3VsdD4odXJsKVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JSZXN1bHRzID0gcmVzcG9uc2VbJ3Jlc3VsdHMnXTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRTZWFyY2gobG9jYXRpb246IExvY2F0aW9uLCBuZXh0UGFnZVRva2VuPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIGxldCBzZWFyY2hUZXh0UGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgbG9jYXRpb25QYXJhbTogc3RyaW5nO1xyXG4gICAgICAgIGxldCByYWRpdXNQYXJhbTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtaW5QcmljZVBhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1heFByaWNlUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgdHlwZVBhcmFtOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChuZXh0UGFnZVRva2VuKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0UGFnZVBhcmFtID0gXCI/cGFnZXRva2VuPVwiICsgbmV4dFBhZ2VUb2tlbjtcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIG5leHRQYWdlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgICAgICBzZWFyY2hUZXh0UGFyYW0gPSBcIj9xdWVyeT1cIjtcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1zXHJcbiAgICAgICAgICAgIGxvY2F0aW9uUGFyYW0gPSBcIiZsb2NhdGlvbj1cIiArIGxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyBsb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmcgXHJcbiAgICAgICAgICAgIHJhZGl1c1BhcmFtID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgICAgICAgICAgbWluUHJpY2VQYXJhbSA9IFwiJm1pbnByaWNlPVwiICsgUHJpY2UuemVybzsgLy8gRGVmYXVsdCBpcyBsb3dlc3RcclxuICAgICAgICAgICAgbWF4UHJpY2VQYXJhbSA9IFwiJm1heHByaWNlPVwiICsgUHJpY2UuZm91cjsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAgICAgICAgIHR5cGVQYXJhbSA9IFwiJnR5cGU9YmFyXCI7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLmFwaS50ZXh0U2VhcmNoQXBpICsgc2VhcmNoVGV4dFBhcmFtICsgbG9jYXRpb25QYXJhbSArIHJhZGl1c1BhcmFtICsgbWluUHJpY2VQYXJhbSArIG1heFByaWNlUGFyYW0gKyB0eXBlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZGVmYXVsdFNlYXJjaChsb2NhdGlvbj86IExvY2F0aW9uKTogUHJvbWlzZTxTZWFyY2hSZXN1bHQ+IHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgLy8gICAgICAgICB2YXIgc2VhcmNoVGV4dFBhcmFtID0gXCI/cXVlcnk9QkFSXCI7XHJcbiAgICAvLyAgICAgICAgIHZhciBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgIC8vICAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1zXHJcbiAgICAvLyAgICAgICAgIHZhciBsb2NhdGlvblBhcmFtID0gXCImbG9jYXRpb249XCIgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgLy8gICAgICAgICB2YXIgcmFkaXVzUGFyYW0gPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWkxO1xyXG4gICAgLy8gICAgICAgICB2YXIgbWluUHJpY2VQYXJhbSA9IFwiJm1pbnByaWNlPVwiICsgIFByaWNlLnplcm87IC8vIERlZmF1bHQgaXMgbG93ZXN0XHJcbiAgICAvLyAgICAgICAgIHZhciBtYXhQcmljZVBhcmFtID0gXCImbWF4cHJpY2U9XCIgKyBQcmljZS5mb3VyOyAvLyBEZWZhdWx0IGlzIGhpZ2hlc3RcclxuICAgIC8vICAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAvLyAgICAgICAgIHZhciB1cmwgPSB0aGlzLmFwaS50ZXh0U2VhcmNoQXBpICsgc2VhcmNoVGV4dFBhcmFtICsgbG9jYXRpb25QYXJhbSArIHJhZGl1c1BhcmFtICsgbWluUHJpY2VQYXJhbSArIG1heFByaWNlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgIC8vICAgICAgICAgLy8gTG9nIFVSTFxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRGVmYXVsdCBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgLy8gICAgICAgICB0aGlzLmh0dHBcclxuICAgIC8vICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAvLyAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWYWxpZCBSZXNwb25zZSBSZWNpZXZlZC4nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JQcm9taXNlIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uR29vZ2xlUGxhY2VzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25Hb29nbGVQbGFjZXMoKScpO1xyXG4gICAgICAgIC8vIEdldFBsYWNlc0J5SWQoKVxyXG4gICAgICAgIEdvb2dsZVBsYWNlcy5nZXRQbGFjZXNCeUlkKFtcclxuICAgICAgICAgICAgXCJDaElKNHpQWHFJaUFoWUFSMzFYM1M2NFQ2VXdcIixcclxuICAgICAgICAgICAgXCJDaElKNnpNZTNvV0FoWUFSYVozM1oxQkFNUm9cIixcclxuICAgICAgICAgICAgXCJDaElKQVVXb0dJYUFoWUFSUTZ6dmt5X2YxMFFcIlxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKHBsYWNlczogR29vZ2xlUGxhY2VzLlBsYWNlW10pID0+IHtcclxuICAgICAgICAgICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4gY29uc29sZS5sb2cocGxhY2UubmFtZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUGlja1BsYWNlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVQbGFjZXNTZXJ2aWNlLm9uUGlja1BsYWNlKCknKTtcclxuICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXI6IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnICsgSlNPTi5zdHJpbmdpZnkoY2VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ydGhFYXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgKyAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlICsgMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXRoV2VzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlIC0gMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSAtIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdwb3J0OiAnICsgSlNPTi5zdHJpbmdpZnkodmlld3BvcnQpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdvb2dsZVBsYWNlcy5waWNrUGxhY2Uodmlld3BvcnQpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4ocGxhY2UgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2UpKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNldCBsb2NhdGlvbiBiYXNlZCBvbiB1cGRhdGVcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcHJpbnRVcmwodXJsOiBzdHJpbmcsIG1vZGU6IFNlYXJjaE1vZGUsIG5leHRwYWdlOiBib29sZWFuKXtcclxuICAgICAgICBzd2l0Y2gobW9kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5EZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0cGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEZWZhdWx0IFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRGVmYXVsdCBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuTmVhcmJ5OlxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE5lYXJieSBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE5lYXJieSBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuVGV4dDpcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0cGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVGV4dCBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5wcmludFVybCgpOiBBIG1vZGUgbXVzdCBiZSBzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG59Il19