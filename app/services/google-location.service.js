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
        if (nextPageToken) {
            var nextPageParam = "?pagetoken=" + nextPageToken;
            url = this.api.textSearchApi + nextPageParam + apiKeyParam;
        }
        else {
            // Required params
            searchTextParam = "?query=BAR";
            // Optional params
            locationParam = "&location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
            radiusParam = "&radius=" + radius_enum_1.Radius.mi1;
            minPriceParam = "&minprice=" + price_enum_1.Price.zero; // Default is lowest
            maxPriceParam = "&maxprice=" + price_enum_1.Price.four; // Default is highest
            // Build URL
            url = this.api.textSearchApi + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + apiKeyParam;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBQzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFRbEUsUUFBUTtBQUNSLGtEQUE0QztBQUU1Qyw4REFBdUQ7QUFJdkQ7SUFXSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVAzQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFPOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBZ0IsRUFBRSxRQUFpQixFQUFFLE9BQXNCLEVBQUUsT0FBZ0I7UUFBM0YsaUJBd0VDO1FBdkVHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRCxrQkFBa0I7WUFDbEIsV0FBVztpQkFDVixrQkFBa0IsQ0FBQztnQkFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtnQkFDOUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDWCxJQUFJLEdBQVcsQ0FBQztvQkFDaEIsaUNBQWlDO29CQUNqQyxNQUFNLENBQUEsQ0FBQyxJQUFJ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IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBSYWRpdXMgfSBmcm9tICcuLi9lbnVtcy9yYWRpdXMuZW51bSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBHb29nbGVQbGFjZXNBUElLZXkgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbi8vIENvbnN0YW50c1xyXG5pbXBvcnQgeyBHb29nbGVQbGFjZXNBcGlVcmxzIH0gZnJvbSAnLi4vY29uc3QvZ29vZ2xlLXBsYWNlcy1hcGktdXJscy5jb25zdCc7XHJcbi8vIEdlb2xjYXRpb25cclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG4vLyBHb29nbGUgUGxhY2VzXHJcbmltcG9ydCAqIGFzIEdvb2dsZVBsYWNlcyBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gJ21vbWVudCc7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUZXh0U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC90ZXh0LXNlYXJjaC90ZXh0LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE5lYXJieVNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvbmVhcmJ5LXNlYXJjaC9uZWFyYnktc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuLi9lbnVtcy9wcmljZS5lbnVtJztcclxuaW1wb3J0IHsgVmVuZG9yVHlwZSB9IGZyb20gJy4uL2VudW1zL3ZlbmRvci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hNb2RlIH0gZnJvbSAnLi4vZW51bXMvc2VhcmNoLW1vZGUuZW51bSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWJ1ZztcclxuICAgIHB1YmxpYyB1c2VyTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgLy8gR29vZ2xlIFBsYWNlcyBBUElcclxuICAgIHByaXZhdGUgYXBpID0gR29vZ2xlUGxhY2VzQXBpVXJscztcclxuICAgIC8vIHByaXZhdGUgX2Vycm9yQ2FsbGJhY2s7XHJcblxyXG4gICAgcHVibGljIHJlc3VsdHM6IFNlYXJjaFJlc3VsdDtcclxuICAgIHB1YmxpYyB2ZW5kb3JSZXN1bHRzOiBBcnJheTxWZW5kb3I+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZyA9IERlYnVnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2gobW9kZTogU2VhcmNoTW9kZSwgbmV4dFBhZ2U6IGJvb2xlYW4sIHJlc3VsdHM/OiBTZWFyY2hSZXN1bHQsIG9wdGlvbnM/OiBWZW5kb3IpOiBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdHxudWxsPigocmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25cclxuICAgICAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGxvY2F0aW9uOiBMb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9jYXRpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3dpdGNoIHRvIHNwZWNpZmljIHNlYXJjaCBtb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKG1vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuRGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgQVBJIFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gKG5leHRQYWdlKSA/IHRoaXMuZGVmYXVsdFNlYXJjaChsb2NhdGlvbiwgcmVzdWx0cy5uZXh0X3BhZ2VfdG9rZW4pIDogdGhpcy5kZWZhdWx0U2VhcmNoKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByaW50IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24udXJsKSB0aGlzLnByaW50VXJsKHVybCwgU2VhcmNoTW9kZS5EZWZhdWx0LCBuZXh0UGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZGF0YSkgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5TZWFyY2gobW9kZTpEZWZhdWx0KSBEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5OZWFyYnk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZWFyY2ggbW9kZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGxvY2F0aW9uIGlzIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5lcnJvcikgY29uc29sZS5sb2coJ0N1cnJlbnRMb2NhdGlvblJlc29sdmVyKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmVhcmJ5U2VhcmNoKHRleHQ/OiBzdHJpbmcsIHR5cGVzPzogc3RyaW5nKTogT2JqZWN0IHtcclxuICAgICAgICAvL3ZhciBzZWFyY2hCeSA9IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpO1xyXG4gICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IFwiP2xvY2F0aW9uPVwiICsgdGhpcy51c2VyTG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIHRoaXMudXNlckxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZ1xyXG4gICAgICAgIHZhciBhcGlLZXkgPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgLy8gT3B0aW5hbCBwYXJhbXNcclxuICAgICAgICB2YXIga2V5d29yZCA9IFwiJmtleXdvcmQ9YmFyXCI7IC8vLGJyZXdlcnkscmVzdGF1cmFudCxjbHViLHZpbmV5YXJkXCI7IFxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IFwiJmxhbmd1YWdlPWVuXCI7XHJcbiAgICAgICAgdmFyIHJhbmtCeSA9IFwiJnJhbmtCeT1kaXN0YW5jZVwiO1xyXG4gICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmFwaS5uZWFyYnlBcGkgKyBsb2NhdGlvbiArIHJhZGl1cyArIGtleXdvcmQgKyBhcGlLZXk7XHJcbiAgICAgICAgLy8gTG9nIFVSTFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yUHJvbWlzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRleHRTZWFyY2godGV4dD86IHN0cmluZywgcmFkaXVzPzogUmFkaXVzLCBsYW5ndWFnZT86IGJvb2xlYW4sIG1pblByaWNlPzogUHJpY2UsIG1heFByaWNlPzogUHJpY2UsIHR5cGU/OiBWZW5kb3JUeXBlKTogUHJvbWlzZTxTZWFyY2hSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIHNlYXJjaFRleHRQYXJhbSA9IFwiP3F1ZXJ5PVwiICsgKCh0ZXh0ICE9PSB1bmRlZmluZWQpID8gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIikgOiBcIkJBUlwiKTtcclxuICAgICAgICAgICAgdmFyIGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJhbSA9IFwiJmxvY2F0aW9uPVwiICsgdGhpcy51c2VyTG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIHRoaXMudXNlckxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZyBcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1zXHJcbiAgICAgICAgICAgIHZhciByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgICAgIHZhciBtaW5QcmljZVBhcmFtID0gXCImbWlucHJpY2U9XCIgKyAoKG1pblByaWNlICE9PSB1bmRlZmluZWQpID8gbWluUHJpY2UgOiBQcmljZS56ZXJvKTsgLy8gRGVmYXVsdCBpcyBsb3dlc3RcclxuICAgICAgICAgICAgdmFyIG1heFByaWNlUGFyYW0gPSBcIiZtYXhwcmljZT1cIiArICgobWF4UHJpY2UgIT09IHVuZGVmaW5lZCkgPyBtYXhQcmljZSA6IFByaWNlLmZvdXIpOyAvLyBEZWZhdWx0IGlzIGhpZ2hlc3RcclxuICAgICAgICAgICAgdmFyIHR5cGVQYXJhbSA9ICgodHlwZSAhPT0gdW5kZWZpbmVkKSA/IFwiJnR5cGU9XCIgKyB0eXBlIDogXCJcIik7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgdHlwZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgICAgIC8vIExvZyBVUkxcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQ8U2VhcmNoUmVzdWx0Pih1cmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvclJlc3VsdHMgPSByZXNwb25zZVsncmVzdWx0cyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmYXVsdFNlYXJjaChsb2NhdGlvbjogTG9jYXRpb24sIG5leHRQYWdlVG9rZW4/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZztcclxuICAgICAgICBsZXQgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgbGV0IHNlYXJjaFRleHRQYXJhbTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBsb2NhdGlvblBhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHJhZGl1c1BhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1pblByaWNlUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgbWF4UHJpY2VQYXJhbTogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2VQYXJhbSA9IFwiP3BhZ2V0b2tlbj1cIiArIG5leHRQYWdlVG9rZW47XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMuYXBpLnRleHRTZWFyY2hBcGkgKyBuZXh0UGFnZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICAgICAgc2VhcmNoVGV4dFBhcmFtID0gXCI/cXVlcnk9QkFSXCI7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgICAgICBsb2NhdGlvblBhcmFtID0gXCImbG9jYXRpb249XCIgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgICAgICByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgICAgIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArIFByaWNlLnplcm87IC8vIERlZmF1bHQgaXMgbG93ZXN0XHJcbiAgICAgICAgICAgIG1heFByaWNlUGFyYW0gPSBcIiZtYXhwcmljZT1cIiArIFByaWNlLmZvdXI7IC8vIERlZmF1bHQgaXMgaGlnaGVzdFxyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIGRlZmF1bHRTZWFyY2gobG9jYXRpb24/OiBMb2NhdGlvbik6IFByb21pc2U8U2VhcmNoUmVzdWx0PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgIC8vICAgICAgICAgdmFyIHNlYXJjaFRleHRQYXJhbSA9IFwiP3F1ZXJ5PUJBUlwiO1xyXG4gICAgLy8gICAgICAgICB2YXIgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAvLyAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgLy8gICAgICAgICB2YXIgbG9jYXRpb25QYXJhbSA9IFwiJmxvY2F0aW9uPVwiICsgbG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIGxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZyBcclxuICAgIC8vICAgICAgICAgdmFyIHJhZGl1c1BhcmFtID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgIC8vICAgICAgICAgdmFyIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArICBQcmljZS56ZXJvOyAvLyBEZWZhdWx0IGlzIGxvd2VzdFxyXG4gICAgLy8gICAgICAgICB2YXIgbWF4UHJpY2VQYXJhbSA9IFwiJm1heHByaWNlPVwiICsgUHJpY2UuZm91cjsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAvLyAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgLy8gICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAvLyAgICAgICAgIC8vIExvZyBVUkxcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgIC8vICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgIC8vICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAvLyAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgLy8gICAgICAgICAudG9Qcm9taXNlKClcclxuICAgIC8vICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Upe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsaWQgUmVzcG9uc2UgUmVjaWV2ZWQuJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yUHJvbWlzZSAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TG9jYXRpb24oKTogTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvbkdvb2dsZVBsYWNlcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uR29vZ2xlUGxhY2VzKCknKTtcclxuICAgICAgICAvLyBHZXRQbGFjZXNCeUlkKClcclxuICAgICAgICBHb29nbGVQbGFjZXMuZ2V0UGxhY2VzQnlJZChbXHJcbiAgICAgICAgICAgIFwiQ2hJSjR6UFhxSWlBaFlBUjMxWDNTNjRUNlV3XCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSjZ6TWUzb1dBaFlBUmFaMzNaMUJBTVJvXCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSkFVV29HSWFBaFlBUlE2enZreV9mMTBRXCJcclxuICAgICAgICBdKVxyXG4gICAgICAgIC50aGVuKChwbGFjZXM6IEdvb2dsZVBsYWNlcy5QbGFjZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IGNvbnNvbGUubG9nKHBsYWNlLm5hbWUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBpY2tQbGFjZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlUGxhY2VzU2VydmljZS5vblBpY2tQbGFjZSgpJyk7XHJcbiAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyOiBMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjogJyArIEpTT04uc3RyaW5naWZ5KGNlbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcnRoRWFzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlICsgMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSArIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzb3V0aFdlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSAtIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgLSAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWV3cG9ydDogJyArIEpTT04uc3RyaW5naWZ5KHZpZXdwb3J0KSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBHb29nbGVQbGFjZXMucGlja1BsYWNlKHZpZXdwb3J0KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKHBsYWNlID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBsYWNlKSkpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyBTZXQgbG9jYXRpb24gYmFzZWQgb24gdXBkYXRlXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYXBpdGFsaXplKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvVXBwZXJDYXNlKCk7IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHByaW50VXJsKHVybDogc3RyaW5nLCBtb2RlOiBTZWFyY2hNb2RlLCBuZXh0cGFnZTogYm9vbGVhbil7XHJcbiAgICAgICAgc3dpdGNoKG1vZGUpe1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuRGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRGVmYXVsdCBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLk5lYXJieTpcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0cGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVGV4dCBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UucHJpbnRVcmwoKTogQSBtb2RlIG11c3QgYmUgc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==