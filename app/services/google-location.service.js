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
        this.searchFilter = {
            mode: search_mode_enum_1.SearchMode.Nearby,
            searchText: null,
            distance: radius_enum_1.Radius.mi5
        };
    }
    GoogleLocationService.prototype.search = function (mode, nextPage, filter, results) {
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
                        case search_mode_enum_1.SearchMode.Nearby:
                            {
                                // Build API URL
                                url = (nextPage) ? _this.defaultSearch(location, results.next_page_token) : _this.defaultSearch(location);
                                // Print URL
                                if (_this._debug.console.GoogleLocation.url)
                                    _this.printUrl(url, search_mode_enum_1.SearchMode.Nearby, nextPage);
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
    // Default == Nearby Search 
    GoogleLocationService.prototype.defaultSearch = function (location, nextPageToken) {
        var url;
        var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
        var locationParam;
        var radiusParam = this.searchFilter.distance.toString();
        var typeParam;
        var rankbyParam;
        if (nextPageToken) {
            var nextPageParam = "?pagetoken=" + nextPageToken;
            url = this.api.nearbyApi + nextPageParam + apiKeyParam;
        }
        else {
            // Optional params
            locationParam = "?location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
            radiusParam = "&radius=";
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
            case search_mode_enum_1.SearchMode.Nearby:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFVbEUsUUFBUTtBQUNSLGtEQUE0QztBQUU1Qyw4REFBdUQ7QUFJdkQ7SUFZSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQU4zQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFNOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsSUFBSSxFQUFFLDZCQUFVLENBQUMsTUFBTTtZQUN2QixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsb0JBQU0sQ0FBQyxHQUFHO1NBQ3ZCLENBQUE7SUFDTCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLElBQWdCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsT0FBc0I7UUFBMUYsaUJBZ0VDO1FBL0RHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRCxrQkFBa0I7WUFDbEIsV0FBVztpQkFDVixrQkFBa0IsQ0FBQztnQkFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtnQkFDOUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFB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QURqQyxpQkFBVSxFQUFFO3lDQWF3QixpQkFBVTtPQVpsQyxxQkFBcUIsQ0F3VGpDO0lBQUQsNEJBQUM7Q0FBQSxBQXhURCxJQXdUQztBQXhUWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQVBJS2V5IH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG4vLyBDb25zdGFudHNcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXBpVXJscyB9IGZyb20gJy4uL2NvbnN0L2dvb2dsZS1wbGFjZXMtYXBpLXVybHMuY29uc3QnO1xyXG4vLyBEaXN0YW5jZVxyXG5pbXBvcnQgKiBhcyBkaXN0YW5jZSBmcm9tICdnb29nbGUtZGlzdGFuY2UnO1xyXG4vLyBHZW9sY2F0aW9uXHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuLy8gR29vZ2xlIFBsYWNlc1xyXG5pbXBvcnQgKiBhcyBHb29nbGVQbGFjZXMgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICdtb21lbnQnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGV4dFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZWFyYnlTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L25lYXJieS1zZWFyY2gvbmVhcmJ5LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuLi9lbnVtcy9wcmljZS5lbnVtJztcclxuaW1wb3J0IHsgVmVuZG9yVHlwZSB9IGZyb20gJy4uL2VudW1zL3ZlbmRvci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hNb2RlIH0gZnJvbSAnLi4vZW51bXMvc2VhcmNoLW1vZGUuZW51bSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWJ1ZztcclxuICAgIHB1YmxpYyB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICAgIHB1YmxpYyB2ZW5kb3JzOiBWZW5kb3JbXTtcclxuICAgIC8vIEdvb2dsZSBQbGFjZXMgQVBJXHJcbiAgICBwcml2YXRlIGFwaSA9IEdvb2dsZVBsYWNlc0FwaVVybHM7XHJcbiAgICBwdWJsaWMgc2VhcmNoRmlsdGVyOiBGaWx0ZXI7XHJcbiAgICBwdWJsaWMgcmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvclJlc3VsdHM6IEFycmF5PFZlbmRvcj47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gRGVidWc7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIG1vZGU6IFNlYXJjaE1vZGUuTmVhcmJ5LFxyXG4gICAgICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxyXG4gICAgICAgICAgICBkaXN0YW5jZTogUmFkaXVzLm1pNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKG1vZGU6IFNlYXJjaE1vZGUsIG5leHRQYWdlOiBib29sZWFuLCBmaWx0ZXI/OiBGaWx0ZXIsIHJlc3VsdHM/OiBTZWFyY2hSZXN1bHQpOiBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPigocmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGxvY2F0aW9uOiBMb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9jYXRpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggdG8gc3BlY2lmaWMgc2VhcmNoIG1vZGVcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gobW9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIEFQSSBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IChuZXh0UGFnZSkgPyB0aGlzLmRlZmF1bHRTZWFyY2gobG9jYXRpb24sIHJlc3VsdHMubmV4dF9wYWdlX3Rva2VuKSA6IHRoaXMuZGVmYXVsdFNlYXJjaChsb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmludCBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLnVybCkgdGhpcy5wcmludFVybCh1cmwsIFNlYXJjaE1vZGUuTmVhcmJ5LCBuZXh0UGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZGF0YSkgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5TZWFyY2gobW9kZTpEZWZhdWx0KSBEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZWFyY2ggbW9kZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGxvY2F0aW9uIGlzIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5lcnJvcikgY29uc29sZS5sb2coJ0N1cnJlbnRMb2NhdGlvblJlc29sdmVyKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmVhcmJ5U2VhcmNoKHRleHQ/OiBzdHJpbmcsIHR5cGVzPzogc3RyaW5nKTogT2JqZWN0IHtcclxuICAgICAgICAvL3ZhciBzZWFyY2hCeSA9IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpO1xyXG4gICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IFwiP2xvY2F0aW9uPVwiICsgdGhpcy51c2VyTG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIHRoaXMudXNlckxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZ1xyXG4gICAgICAgIHZhciBhcGlLZXkgPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTU7XHJcbiAgICAgICAgLy8gT3B0aW5hbCBwYXJhbXNcclxuICAgICAgICB2YXIga2V5d29yZCA9IFwiJmtleXdvcmQ9YmFyXCI7IC8vLGJyZXdlcnkscmVzdGF1cmFudCxjbHViLHZpbmV5YXJkXCI7IFxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IFwiJmxhbmd1YWdlPWVuXCI7XHJcbiAgICAgICAgdmFyIHJhbmtCeSA9IFwiJnJhbmtCeT1kaXN0YW5jZVwiO1xyXG4gICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmFwaS5uZWFyYnlBcGkgKyBsb2NhdGlvbiArIHJhZGl1cyArIGtleXdvcmQgKyBhcGlLZXk7XHJcbiAgICAgICAgLy8gTG9nIFVSTFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yUHJvbWlzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRleHRTZWFyY2godGV4dD86IHN0cmluZywgcmFkaXVzPzogUmFkaXVzLCBsYW5ndWFnZT86IGJvb2xlYW4sIG1pblByaWNlPzogUHJpY2UsIG1heFByaWNlPzogUHJpY2UsIHR5cGU/OiBWZW5kb3JUeXBlKTogUHJvbWlzZTxTZWFyY2hSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIHNlYXJjaFRleHRQYXJhbSA9IFwiP3F1ZXJ5PVwiICsgKCh0ZXh0ICE9PSB1bmRlZmluZWQpID8gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIikgOiBcIkJBUlwiKTtcclxuICAgICAgICAgICAgdmFyIGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJhbSA9IFwiJmxvY2F0aW9uPVwiICsgdGhpcy51c2VyTG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIHRoaXMudXNlckxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZyBcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1zXHJcbiAgICAgICAgICAgIHZhciByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgICAgIHZhciBtaW5QcmljZVBhcmFtID0gXCImbWlucHJpY2U9XCIgKyAoKG1pblByaWNlICE9PSB1bmRlZmluZWQpID8gbWluUHJpY2UgOiBQcmljZS56ZXJvKTsgLy8gRGVmYXVsdCBpcyBsb3dlc3RcclxuICAgICAgICAgICAgdmFyIG1heFByaWNlUGFyYW0gPSBcIiZtYXhwcmljZT1cIiArICgobWF4UHJpY2UgIT09IHVuZGVmaW5lZCkgPyBtYXhQcmljZSA6IFByaWNlLmZvdXIpOyAvLyBEZWZhdWx0IGlzIGhpZ2hlc3RcclxuICAgICAgICAgICAgdmFyIHR5cGVQYXJhbSA9ICgodHlwZSAhPT0gdW5kZWZpbmVkKSA/IFwiJnR5cGU9XCIgKyB0eXBlIDogXCJcIik7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgdHlwZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgICAgIC8vIExvZyBVUkxcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQ8U2VhcmNoUmVzdWx0Pih1cmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvclJlc3VsdHMgPSByZXNwb25zZVsncmVzdWx0cyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZhdWx0ID09IE5lYXJieSBTZWFyY2ggXHJcbiAgICBwdWJsaWMgZGVmYXVsdFNlYXJjaChsb2NhdGlvbjogTG9jYXRpb24sIG5leHRQYWdlVG9rZW4/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZztcclxuICAgICAgICBsZXQgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgcmFkaXVzUGFyYW06IHN0cmluZyA9IHRoaXMuc2VhcmNoRmlsdGVyLmRpc3RhbmNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHR5cGVQYXJhbTogc3RyaW5nO1xyXG4gICAgICAgIGxldCByYW5rYnlQYXJhbTogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2VQYXJhbSA9IFwiP3BhZ2V0b2tlbj1cIiArIG5leHRQYWdlVG9rZW47XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMuYXBpLm5lYXJieUFwaSArIG5leHRQYWdlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgICAgICBsb2NhdGlvblBhcmFtID0gXCI/bG9jYXRpb249XCIgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgICAgICByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIjtcclxuICAgICAgICAgICAgdHlwZVBhcmFtID0gXCImdHlwZT1iYXJcIjtcclxuICAgICAgICAgICAgcmFua2J5UGFyYW0gPSBcIiZyYW5rYnk9ZGlzdGFuY2VcIlxyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5hcGkubmVhcmJ5QXBpICsgbG9jYXRpb25QYXJhbSArIHJhbmtieVBhcmFtICsgdHlwZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvclByb21pc2UgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JEZXRhaWxzKHBsYWNlX2lkOiBzdHJpbmcpOiBQcm9taXNlPFZlbmRvckRldGFpbD57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFZlbmRvckRldGFpbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5hcGkuZGV0YWlsc0FwaTtcclxuICAgICAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VJZFBhcmFtID0gXCI/cGxhY2VpZD1cIiArIHBsYWNlX2lkO1xyXG5cclxuICAgICAgICAgICAgdXJsID0gdXJsICsgcGxhY2VJZFBhcmFtICsgYXBpS2V5UGFyYW07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IFZlbmRvckRldGFpbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UuZ2V0VmVuZG9yRGV0YWlscygpIEVSUk9SOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uR29vZ2xlUGxhY2VzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25Hb29nbGVQbGFjZXMoKScpO1xyXG4gICAgICAgIC8vIEdldFBsYWNlc0J5SWQoKVxyXG4gICAgICAgIEdvb2dsZVBsYWNlcy5nZXRQbGFjZXNCeUlkKFtcclxuICAgICAgICAgICAgXCJDaElKNHpQWHFJaUFoWUFSMzFYM1M2NFQ2VXdcIixcclxuICAgICAgICAgICAgXCJDaElKNnpNZTNvV0FoWUFSYVozM1oxQkFNUm9cIixcclxuICAgICAgICAgICAgXCJDaElKQVVXb0dJYUFoWUFSUTZ6dmt5X2YxMFFcIlxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKHBsYWNlczogR29vZ2xlUGxhY2VzLlBsYWNlW10pID0+IHtcclxuICAgICAgICAgICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4gY29uc29sZS5sb2cocGxhY2UubmFtZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUGlja1BsYWNlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVQbGFjZXNTZXJ2aWNlLm9uUGlja1BsYWNlKCknKTtcclxuICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXI6IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnICsgSlNPTi5zdHJpbmdpZnkoY2VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ydGhFYXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgKyAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlICsgMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXRoV2VzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlIC0gMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSAtIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdwb3J0OiAnICsgSlNPTi5zdHJpbmdpZnkodmlld3BvcnQpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdvb2dsZVBsYWNlcy5waWNrUGxhY2Uodmlld3BvcnQpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4ocGxhY2UgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2UpKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNldCBsb2NhdGlvbiBiYXNlZCBvbiB1cGRhdGVcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcHJpbnRVcmwodXJsOiBzdHJpbmcsIG1vZGU6IFNlYXJjaE1vZGUsIG5leHRwYWdlOiBib29sZWFuKXtcclxuICAgICAgICBzd2l0Y2gobW9kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6IFxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgKE5lYXJieSkgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEZWZhdWx0IChOZWFyYnkpIFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAoTmV4dCBQYWdlKSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnByaW50VXJsKCk6IEEgbW9kZSBtdXN0IGJlIHNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0=