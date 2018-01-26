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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBQzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFRbEUsUUFBUTtBQUNSLGtEQUE0QztBQUU1Qyw4REFBdUQ7QUFJdkQ7SUFhSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVAzQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFPOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBZ0IsRUFBRSxRQUFpQixFQUFFLE9BQXNCLEVBQUUsT0FBZ0I7UUFBM0YsaUJBd0VDO1FBdkVHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRCxrQkFBa0I7WUFDbEIsV0FBVztpQkFDVixrQkFBa0IsQ0FBQztnQkFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtnQkFDOUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDWCxJQUFJLEdBQVcsQ0FBQztvQkFDaEIsaUNBQWlDO29CQUNqQyxNQUFNLENBQUEsQ0FBQyxJQUFJ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O0lBQUQsNEJBQUM7Q0FBQSxBQXpVRCxJQXlVQztBQXpVWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQVBJS2V5IH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG4vLyBDb25zdGFudHNcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzQXBpVXJscyB9IGZyb20gJy4uL2NvbnN0L2dvb2dsZS1wbGFjZXMtYXBpLXVybHMuY29uc3QnO1xyXG4vLyBHZW9sY2F0aW9uXHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuLy8gR29vZ2xlIFBsYWNlc1xyXG5pbXBvcnQgKiBhcyBHb29nbGVQbGFjZXMgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICdtb21lbnQnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGV4dFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZWFyYnlTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L25lYXJieS1zZWFyY2gvbmVhcmJ5LXNlYXJjaC1vcHRpb25zLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vZW51bXMvcHJpY2UuZW51bSc7XHJcbmltcG9ydCB7IFZlbmRvclR5cGUgfSBmcm9tICcuLi9lbnVtcy92ZW5kb3ItdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgU2VhcmNoTW9kZSB9IGZyb20gJy4uL2VudW1zL3NlYXJjaC1tb2RlLmVudW0nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdvb2dsZUxvY2F0aW9uU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVidWc7XHJcbiAgICBwdWJsaWMgdXNlckxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yczogVmVuZG9yW107XHJcbiAgICAvLyBHb29nbGUgUGxhY2VzIEFQSVxyXG4gICAgcHJpdmF0ZSBhcGkgPSBHb29nbGVQbGFjZXNBcGlVcmxzO1xyXG4gICAgLy8gcHJpdmF0ZSBfZXJyb3JDYWxsYmFjaztcclxuXHJcbiAgICBwdWJsaWMgcmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvclJlc3VsdHM6IEFycmF5PFZlbmRvcj47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gRGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaChtb2RlOiBTZWFyY2hNb2RlLCBuZXh0UGFnZTogYm9vbGVhbiwgcmVzdWx0cz86IFNlYXJjaFJlc3VsdCwgb3B0aW9ucz86IFZlbmRvcik6IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+KChyZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDUwMCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigobG9jYXRpb246IExvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2NhdGlvbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggdG8gc3BlY2lmaWMgc2VhcmNoIG1vZGVcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gobW9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5EZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBBUEkgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSAobmV4dFBhZ2UpID8gdGhpcy5kZWZhdWx0U2VhcmNoKGxvY2F0aW9uLCByZXN1bHRzLm5leHRfcGFnZV90b2tlbikgOiB0aGlzLmRlZmF1bHRTZWFyY2gobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJpbnQgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi51cmwpIHRoaXMucHJpbnRVcmwodXJsLCBTZWFyY2hNb2RlLkRlZmF1bHQsIG5leHRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbi5kYXRhKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLlNlYXJjaChtb2RlOkRlZmF1bHQpIERBVEE6ICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU2VhcmNoTW9kZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2Upe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLk5lYXJieTpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIHNlYXJjaCBtb2RlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdXIgbG9jYXRpb24gaXMgY3VycmVudGx5IG5vdCBhdmFpbGFibGUuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnQ3VycmVudExvY2F0aW9uUmVzb2x2ZXIoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZWFyYnlTZWFyY2godGV4dD86IHN0cmluZywgdHlwZXM/OiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIC8vdmFyIHNlYXJjaEJ5ID0gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIik7XHJcbiAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gXCI/bG9jYXRpb249XCIgKyB0aGlzLnVzZXJMb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgdGhpcy51c2VyTG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nXHJcbiAgICAgICAgdmFyIGFwaUtleSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICB2YXIgcmFkaXVzID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgICAgICAvLyBPcHRpbmFsIHBhcmFtc1xyXG4gICAgICAgIHZhciBrZXl3b3JkID0gXCIma2V5d29yZD1iYXJcIjsgLy8sYnJld2VyeSxyZXN0YXVyYW50LGNsdWIsdmluZXlhcmRcIjsgXHJcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gXCImbGFuZ3VhZ2U9ZW5cIjtcclxuICAgICAgICB2YXIgcmFua0J5ID0gXCImcmFua0J5PWRpc3RhbmNlXCI7XHJcbiAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuYXBpLm5lYXJieUFwaSArIGxvY2F0aW9uICsgcmFkaXVzICsga2V5d29yZCArIGFwaUtleTtcclxuICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE5lYXJieSBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JQcm9taXNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGV4dFNlYXJjaCh0ZXh0Pzogc3RyaW5nLCByYWRpdXM/OiBSYWRpdXMsIGxhbmd1YWdlPzogYm9vbGVhbiwgbWluUHJpY2U/OiBQcmljZSwgbWF4UHJpY2U/OiBQcmljZSwgdHlwZT86IFZlbmRvclR5cGUpOiBQcm9taXNlPFNlYXJjaFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZWFyY2hSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoVGV4dFBhcmFtID0gXCI/cXVlcnk9XCIgKyAoKHRleHQgIT09IHVuZGVmaW5lZCkgPyB0aGlzLmNhcGl0YWxpemUodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKFwiIFwiLCAnZycpLCBcIlwiKSA6IFwiQkFSXCIpO1xyXG4gICAgICAgICAgICB2YXIgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvblBhcmFtID0gXCImbG9jYXRpb249XCIgKyB0aGlzLnVzZXJMb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgdGhpcy51c2VyTG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgICAgICAvLyBPcHRpb25hbCBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIHJhZGl1c1BhcmFtID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgICAgICAgICAgdmFyIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArICgobWluUHJpY2UgIT09IHVuZGVmaW5lZCkgPyBtaW5QcmljZSA6IFByaWNlLnplcm8pOyAvLyBEZWZhdWx0IGlzIGxvd2VzdFxyXG4gICAgICAgICAgICB2YXIgbWF4UHJpY2VQYXJhbSA9IFwiJm1heHByaWNlPVwiICsgKChtYXhQcmljZSAhPT0gdW5kZWZpbmVkKSA/IG1heFByaWNlIDogUHJpY2UuZm91cik7IC8vIERlZmF1bHQgaXMgaGlnaGVzdFxyXG4gICAgICAgICAgICB2YXIgdHlwZVBhcmFtID0gKCh0eXBlICE9PSB1bmRlZmluZWQpID8gXCImdHlwZT1cIiArIHR5cGUgOiBcIlwiKTtcclxuICAgICAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmFwaS50ZXh0U2VhcmNoQXBpICsgc2VhcmNoVGV4dFBhcmFtICsgbG9jYXRpb25QYXJhbSArIHJhZGl1c1BhcmFtICsgbWluUHJpY2VQYXJhbSArIG1heFByaWNlUGFyYW0gKyB0eXBlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICAgICAgLy8gTG9nIFVSTFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVGV4dCBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldDxTZWFyY2hSZXN1bHQ+KHVybClcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yUmVzdWx0cyA9IHJlc3BvbnNlWydyZXN1bHRzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0U2VhcmNoKGxvY2F0aW9uOiBMb2NhdGlvbiwgbmV4dFBhZ2VUb2tlbj86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICBsZXQgc2VhcmNoVGV4dFBhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgcmFkaXVzUGFyYW06IHN0cmluZztcclxuICAgICAgICBsZXQgbWluUHJpY2VQYXJhbTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtYXhQcmljZVBhcmFtOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHR5cGVQYXJhbTogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2VQYXJhbSA9IFwiP3BhZ2V0b2tlbj1cIiArIG5leHRQYWdlVG9rZW47XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMuYXBpLnRleHRTZWFyY2hBcGkgKyBuZXh0UGFnZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgICAgICAgICAgc2VhcmNoVGV4dFBhcmFtID0gXCI/cXVlcnk9XCI7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgICAgICAgICBsb2NhdGlvblBhcmFtID0gXCImbG9jYXRpb249XCIgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgICAgICByYWRpdXNQYXJhbSA9IFwiJnJhZGl1cz1cIiArIFJhZGl1cy5taTE7XHJcbiAgICAgICAgICAgIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArIFByaWNlLnplcm87IC8vIERlZmF1bHQgaXMgbG93ZXN0XHJcbiAgICAgICAgICAgIG1heFByaWNlUGFyYW0gPSBcIiZtYXhwcmljZT1cIiArIFByaWNlLmZvdXI7IC8vIERlZmF1bHQgaXMgaGlnaGVzdFxyXG4gICAgICAgICAgICB0eXBlUGFyYW0gPSBcIiZ0eXBlPWJhclwiO1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgdHlwZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIGRlZmF1bHRTZWFyY2gobG9jYXRpb24/OiBMb2NhdGlvbik6IFByb21pc2U8U2VhcmNoUmVzdWx0PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgIC8vICAgICAgICAgdmFyIHNlYXJjaFRleHRQYXJhbSA9IFwiP3F1ZXJ5PUJBUlwiO1xyXG4gICAgLy8gICAgICAgICB2YXIgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAvLyAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgLy8gICAgICAgICB2YXIgbG9jYXRpb25QYXJhbSA9IFwiJmxvY2F0aW9uPVwiICsgbG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArICcsJyArIGxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpOyAvLyBsYXQsbG9uZyBcclxuICAgIC8vICAgICAgICAgdmFyIHJhZGl1c1BhcmFtID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgIC8vICAgICAgICAgdmFyIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArICBQcmljZS56ZXJvOyAvLyBEZWZhdWx0IGlzIGxvd2VzdFxyXG4gICAgLy8gICAgICAgICB2YXIgbWF4UHJpY2VQYXJhbSA9IFwiJm1heHByaWNlPVwiICsgUHJpY2UuZm91cjsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAvLyAgICAgICAgIC8vIEJ1aWxkIFVSTFxyXG4gICAgLy8gICAgICAgICB2YXIgdXJsID0gdGhpcy5hcGkudGV4dFNlYXJjaEFwaSArIHNlYXJjaFRleHRQYXJhbSArIGxvY2F0aW9uUGFyYW0gKyByYWRpdXNQYXJhbSArIG1pblByaWNlUGFyYW0gKyBtYXhQcmljZVBhcmFtICsgYXBpS2V5UGFyYW07XHJcbiAgICAvLyAgICAgICAgIC8vIExvZyBVUkxcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgIC8vICAgICAgICAgLy8gQVBJIENhbGxcclxuICAgIC8vICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAvLyAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgLy8gICAgICAgICAudG9Qcm9taXNlKClcclxuICAgIC8vICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Upe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsaWQgUmVzcG9uc2UgUmVjaWV2ZWQuJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yUHJvbWlzZSAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TG9jYXRpb24oKTogTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvbkdvb2dsZVBsYWNlcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uR29vZ2xlUGxhY2VzKCknKTtcclxuICAgICAgICAvLyBHZXRQbGFjZXNCeUlkKClcclxuICAgICAgICBHb29nbGVQbGFjZXMuZ2V0UGxhY2VzQnlJZChbXHJcbiAgICAgICAgICAgIFwiQ2hJSjR6UFhxSWlBaFlBUjMxWDNTNjRUNlV3XCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSjZ6TWUzb1dBaFlBUmFaMzNaMUJBTVJvXCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSkFVV29HSWFBaFlBUlE2enZreV9mMTBRXCJcclxuICAgICAgICBdKVxyXG4gICAgICAgIC50aGVuKChwbGFjZXM6IEdvb2dsZVBsYWNlcy5QbGFjZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IGNvbnNvbGUubG9nKHBsYWNlLm5hbWUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBpY2tQbGFjZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlUGxhY2VzU2VydmljZS5vblBpY2tQbGFjZSgpJyk7XHJcbiAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyOiBMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjogJyArIEpTT04uc3RyaW5naWZ5KGNlbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcnRoRWFzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlICsgMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSArIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzb3V0aFdlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSAtIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgLSAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWV3cG9ydDogJyArIEpTT04uc3RyaW5naWZ5KHZpZXdwb3J0KSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBHb29nbGVQbGFjZXMucGlja1BsYWNlKHZpZXdwb3J0KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKHBsYWNlID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBsYWNlKSkpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyBTZXQgbG9jYXRpb24gYmFzZWQgb24gdXBkYXRlXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYXBpdGFsaXplKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvVXBwZXJDYXNlKCk7IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHByaW50VXJsKHVybDogc3RyaW5nLCBtb2RlOiBTZWFyY2hNb2RlLCBuZXh0cGFnZTogYm9vbGVhbil7XHJcbiAgICAgICAgc3dpdGNoKG1vZGUpe1xyXG4gICAgICAgICAgICBjYXNlIFNlYXJjaE1vZGUuRGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRGVmYXVsdCBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERlZmF1bHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLk5lYXJieTpcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0cGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOZWFyYnkgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWFyY2hNb2RlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVGV4dCBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRleHQgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UucHJpbnRVcmwoKTogQSBtb2RlIG11c3QgYmUgc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==