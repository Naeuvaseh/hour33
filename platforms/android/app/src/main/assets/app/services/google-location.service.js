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
var GoogleLocationService = (function () {
    function GoogleLocationService(http) {
        this.http = http;
        this._debug = settings_1.Debug;
        this.searchFilter = {
            vendorType: vendor_type_enum_1.VendorType.Bar,
            distance: radius_enum_1.Radius.mi5
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
    // public nearbySearch(text?: string, types?: string): Object {
    //     //var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
    //     // Required params
    //     var location = "?location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long
    //     var apiKey = "&key=" + GooglePlacesAPIKey;
    //     var radius = "&radius=" + Radius.mi5;
    //     // Optinal params
    //     var keyword = "&keyword=bar"; //,brewery,restaurant,club,vineyard"; 
    //     var language = "&language=en";
    //     var rankBy = "&rankBy=distance";
    //     // Build URL
    //     var url = this.api.nearbyApi + location + radius + keyword + apiKey;
    //     // Log URL
    //     console.log("############################### Nearby Search ###############################");
    //     console.log("URL=" + url);
    //     console.log("#############################################################################");
    //     // API Call
    //     return this.http
    //         .get(url)
    //         .toPromise()
    //         .then((response) =>{
    //             console.log(JSON.stringify(response));
    //         })
    //         .catch(this.handleErrorPromise);
    // }
    // public textSearch(text?: string, radius?: Radius, language?: boolean, minPrice?: Price, maxPrice?: Price, type?: VendorType): Promise<SearchResult> {
    //     return new Promise<SearchResult>((resolve, reject) => {
    //         // Required params
    //         var searchTextParam = "?query=" + ((text !== undefined) ? this.capitalize(text).replace(new RegExp(" ", 'g'), "") : "BAR");
    //         var apiKeyParam = "&key=" + GooglePlacesAPIKey;
    //         var locationParam = "&location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long 
    //         // Optional params
    //         var radiusParam = "&radius=" + Radius.mi1;
    //         var minPriceParam = "&minprice=" + ((minPrice !== undefined) ? minPrice : Price.zero); // Default is lowest
    //         var maxPriceParam = "&maxprice=" + ((maxPrice !== undefined) ? maxPrice : Price.four); // Default is highest
    //         var typeParam = ((type !== undefined) ? "&type=" + type : "");
    //         // Build URL
    //         var url = this.api.textSearchApi + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + typeParam + apiKeyParam;
    //         // Log URL
    //         console.log("############################### Text Search ###############################");
    //         console.log("URL=" + url);
    //         console.log("#############################################################################");
    //         // API Call
    //         this.http
    //         .get<SearchResult>(url)
    //             .toPromise()
    //             .then((response: SearchResult) => {
    //                 if (Debug.console.GoogleLocation) console.log('GoogleLocationService.textSearch(): ' + JSON.stringify(response));
    //                 this.results = response;
    //                 this.vendorResults = response['results'];
    //                 resolve(response);
    //             },
    //             (error) => {
    //                 if (Debug.console.GoogleLocation) console.log('GoogleLocationService.textSearch() ERROR: ' + error);
    //             });
    //         });
    // }
    // Default == Nearby Search 
    GoogleLocationService.prototype.urlBuilder = function (location, nextPageToken, filter) {
        var url = google_places_api_urls_const_1.GooglePlacesApiUrls.nearbyApi; // Set api base
        var api;
        var nextPageParam = "?pagetoken=";
        var locationParam = '?location=' + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long;
        var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
        var radiusParam = '&radius=';
        var typeParam = '&type=';
        var keywordParam = '&keyword=';
        // Check if there is a next_page token.
        if (nextPageToken) {
            return url += nextPageParam + nextPageToken + apiKeyParam;
        }
        // Build and return URL based on mode and provided filter params
        url += locationParam; // required param
        url += (this.searchFilter.distance) ? radiusParam + this.searchFilter.distance.toString() : radiusParam + radius_enum_1.Radius.mi25;
        url += (this.searchFilter.keyword && this.searchFilter.keyword != '') ? keywordParam + this.searchFilter.keyword : '';
        url += (this.searchFilter.vendorType) ? typeParam + this.searchFilter.vendorType : typeParam + vendor_type_enum_1.VendorType.Bar;
        // Build URL
        return url += apiKeyParam;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFZbEUsOERBQXVEO0FBS3ZEO0lBV0ksK0JBQTJCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsVUFBVSxFQUFFLDZCQUFVLENBQUMsR0FBRztZQUMxQixRQUFRLEVBQUUsb0JBQU0sQ0FBQyxHQUFHO1NBQ3ZCLENBQUE7SUFDTCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE9BQXNCO1FBQXhFLGlCQTRDQztRQTNDRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsa0JBQWtCO1lBQ2xCLFdBQVc7aUJBQ1Ysa0JBQWtCLENBQUM7Z0JBQ2hCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7Z0JBQzlCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFDLFFBQWtCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsa0JBQWtCO29CQUNsQixLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztvQkFDN0IsSUFBSSxHQUFHLFNBQVEsQ0FBQztvQkFDaEIsZ0JBQWdCO29CQUNoQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0gsWUFBWTtvQkFDWixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO3dCQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUN6RSxXQUFXO29CQUNYLEtBQUksQ0FBQyxJQUFJO3lCQUNKLEdBQUcsQ0FBQyxHQUFHLENBQUM7eUJBQ1IsU0FBUyxFQUFFO3lCQUNQLElBQUksQ0FBQyxVQUFDLFFBQXNCO3dCQUN6QixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDOzRCQUNULEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0NBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQzdILE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQztvQkFDTCxDQUFDLEVBQ0QsVUFBQyxLQUFLO3dCQUNGLEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7NEJBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzFILENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7b0JBQ3JFLE1BQU0sRUFBRSxDQUFDO2dCQUNiLENBQUM7WUFDTCxDQUFDLEVBQ0QsVUFBQyxLQUFLO2dCQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7b0JBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDdkcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELGdGQUFnRjtJQUNoRix5QkFBeUI7SUFDekIsc0lBQXNJO0lBQ3RJLGlEQUFpRDtJQUNqRCw0Q0FBNEM7SUFDNUMsd0JBQXdCO0lBQ3hCLDJFQUEyRTtJQUMzRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQiwyRUFBMkU7SUFDM0UsaUJBQWlCO0lBQ2pCLG9HQUFvRztJQUNwRyxpQ0FBaUM7SUFDakMsb0dBQW9HO0lBQ3BHLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IscURBQXFEO0lBQ3JELGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsSUFBSTtJQUVKLHdKQUF3SjtJQUN4Siw4REFBOEQ7SUFFOUQsNkJBQTZCO0lBQzdCLHNJQUFzSTtJQUN0SSwwREFBMEQ7SUFDMUQsZ0pBQWdKO0lBQ2hKLDZCQUE2QjtJQUM3QixxREFBcUQ7SUFDckQsc0hBQXNIO0lBQ3RILHVIQUF1SDtJQUN2SCx5RUFBeUU7SUFDekUsdUJBQXVCO0lBQ3ZCLHNKQUFzSjtJQUN0SixxQkFBcUI7SUFDckIsc0dBQXNHO0lBQ3RHLHFDQUFxQztJQUNyQyx3R0FBd0c7SUFDeEcsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGtEQUFrRDtJQUNsRCxvSUFBb0k7SUFDcEksMkNBQTJDO0lBQzNDLDREQUE0RDtJQUM1RCxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix1SEFBdUg7SUFDdkgsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxJQUFJO0lBRUosNEJBQTRCO0lBQ3JCLDBDQUFVLEdBQWpCLFVBQWtCLFFBQWtCLEVBQUUsYUFBc0IsRUFBRSxNQUFlO1FBQ3pFLElBQUksR0FBRyxHQUFXLGtEQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWU7UUFDaEUsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLElBQUksYUFBYSxHQUFXLFlBQVksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBWTtRQUMzSCxJQUFJLFdBQVcsR0FBRyxPQUFPLEdBQUcsNkJBQWtCLENBQUM7UUFDL0MsSUFBSSxXQUFXLEdBQVcsVUFBVSxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFXLFFBQVEsQ0FBQztRQUNqQyxJQUFJLFlBQVksR0FBVyxXQUFXLENBQUM7UUFFdkMsdUNBQXVDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxhQUFhLEdBQUcsYUFBYSxHQUFHLFdBQVcsQ0FBQztRQUM5RCxDQUFDO1FBRUQsZ0VBQWdFO1FBQ2hFLEdBQUcsSUFBSSxhQUFhLENBQUEsQ0FBRSxpQkFBaUI7UUFDdkMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsV0FBVyxHQUFHLG9CQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RILEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEgsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLDZCQUFVLENBQUMsR0FBRyxDQUFDO1FBRTlHLFlBQVk7UUFDWixNQUFNLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQztJQUM5QixDQUFDO0lBRU8sa0RBQWtCLEdBQTFCLFVBQTRCLEtBQXFCO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywyQ0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQzdCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsUUFBZ0I7UUFBakMsaUJBcUJDO1FBcEJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzdDLElBQUksR0FBRyxHQUFHLGtEQUFtQixDQUFDLFVBQVUsQ0FBQztZQUN6QyxJQUFJLFdBQVcsR0FBRyxPQUFPLEdBQUcsNkJBQWtCLENBQUM7WUFDL0MsSUFBSSxZQUFZLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUUxQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUM7WUFFdkMsS0FBSSxDQUFDLElBQUk7aUJBQ0osR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDUixTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUNELFVBQUMsUUFBc0I7Z0JBQ25CLHdDQUF3QztnQkFDeEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsRUFDRCxVQUFDLEtBQUs7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUYsQ0FBQyxDQUNKLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxrREFBa0IsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRU0sa0RBQWtCLEdBQXpCLFVBQTBCLFFBQWtCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFTSw4Q0FBYyxHQUFyQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUN0RCxrQkFBa0I7UUFDbEIsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUN2Qiw2QkFBNkI7WUFDN0IsNkJBQTZCO1lBQzdCLDZCQUE2QjtTQUNoQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsTUFBNEI7WUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSwyQ0FBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUN6RixXQUFXO2FBQ04sa0JBQWtCLENBQUM7WUFDaEIsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtZQUM5QixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksTUFBTSxHQUFhO2dCQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7Z0JBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUzthQUM5QixDQUFBO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRWpELElBQUksUUFBUSxHQUFHO2dCQUNYLFNBQVMsRUFBRTtvQkFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLO29CQUNqQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLO2lCQUN0QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSztvQkFDakMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSztpQkFDdEM7YUFDSixDQUFBO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRXJELG1DQUFtQztZQUNuQyx5REFBeUQ7WUFDekQsMkNBQTJDO1FBRS9DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFBO1FBQ04sK0JBQStCO0lBRW5DLENBQUM7SUFFTywwQ0FBVSxHQUFsQixVQUFtQixJQUFZO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUFBLENBQUM7SUFFTSx3Q0FBUSxHQUFoQixVQUFpQixHQUFXLEVBQUUsUUFBaUI7UUFDM0MsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztZQUNsRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLCtFQUErRSxDQUFDLENBQUM7UUFDakcsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0VBQStFLENBQUMsQ0FBQztRQUNqRyxDQUFDO0lBQ0wsQ0FBQztJQXBRUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FZd0IsaUJBQVU7T0FYbEMscUJBQXFCLENBc1FqQztJQUFELDRCQUFDO0NBQUEsQUF0UUQsSUFzUUM7QUF0UVksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FQSUtleSB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuLy8gQ29uc3RhbnRzXHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FwaVVybHMgfSBmcm9tICcuLi9jb25zdC9nb29nbGUtcGxhY2VzLWFwaS11cmxzLmNvbnN0JztcclxuLy8gRGlzdGFuY2VcclxuaW1wb3J0ICogYXMgZGlzdGFuY2UgZnJvbSAnZ29vZ2xlLWRpc3RhbmNlJztcclxuLy8gR2VvbGNhdGlvblxyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbi8vIEdvb2dsZSBQbGFjZXNcclxuaW1wb3J0ICogYXMgR29vZ2xlUGxhY2VzIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSAnbW9tZW50JztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRleHRTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3RleHQtc2VhcmNoL3RleHQtc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmVhcmJ5U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9uZWFyYnktc2VhcmNoL25lYXJieS1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvZmlsdGVyLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vZW51bXMvcHJpY2UuZW51bSc7XHJcbmltcG9ydCB7IFZlbmRvclR5cGUgfSBmcm9tICcuLi9lbnVtcy92ZW5kb3ItdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgUmFkaW9Db250cm9sUmVnaXN0cnkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2RlYnVnO1xyXG4gICAgcHVibGljIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG4gICAgLy8gR29vZ2xlIFBsYWNlcyBBUElcclxuICAgIHB1YmxpYyBzZWFyY2hGaWx0ZXI6IEZpbHRlcjtcclxuICAgIHB1YmxpYyByZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yUmVzdWx0czogQXJyYXk8VmVuZG9yPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlYXJjaEZpbHRlciA9IHtcclxuICAgICAgICAgICAgdmVuZG9yVHlwZTogVmVuZG9yVHlwZS5CYXIsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiBSYWRpdXMubWk1XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2gobmV4dFBhZ2U6IGJvb2xlYW4sIGZpbHRlcj86IEZpbHRlciwgcmVzdWx0cz86IFNlYXJjaFJlc3VsdCk6IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+KChyZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDUwMCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigobG9jYXRpb246IExvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2NhdGlvbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIEFQSSBVUkxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSAobmV4dFBhZ2UpID8gdGhpcy51cmxCdWlsZGVyKGxvY2F0aW9uLCByZXN1bHRzLm5leHRfcGFnZV90b2tlbiwgZmlsdGVyKSA6IHRoaXMudXJsQnVpbGRlcihsb2NhdGlvbiwgdW5kZWZpbmVkLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLnVybCkgdGhpcy5wcmludFVybCh1cmwsIG5leHRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZGF0YSkgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5zZWFyY2goKSBEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uuc2VhcmNoKCkgRVJST1I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBsb2NhdGlvbiBpcyBjdXJyZW50bHkgbm90IGF2YWlsYWJsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdDdXJyZW50TG9jYXRpb25SZXNvbHZlcigpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG5lYXJieVNlYXJjaCh0ZXh0Pzogc3RyaW5nLCB0eXBlcz86IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICAvLyAgICAgLy92YXIgc2VhcmNoQnkgPSB0aGlzLmNhcGl0YWxpemUodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKFwiIFwiLCAnZycpLCBcIlwiKTtcclxuICAgIC8vICAgICAvLyBSZXF1aXJlZCBwYXJhbXNcclxuICAgIC8vICAgICB2YXIgbG9jYXRpb24gPSBcIj9sb2NhdGlvbj1cIiArIHRoaXMudXNlckxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyB0aGlzLnVzZXJMb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmdcclxuICAgIC8vICAgICB2YXIgYXBpS2V5ID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgLy8gICAgIHZhciByYWRpdXMgPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWk1O1xyXG4gICAgLy8gICAgIC8vIE9wdGluYWwgcGFyYW1zXHJcbiAgICAvLyAgICAgdmFyIGtleXdvcmQgPSBcIiZrZXl3b3JkPWJhclwiOyAvLyxicmV3ZXJ5LHJlc3RhdXJhbnQsY2x1Yix2aW5leWFyZFwiOyBcclxuICAgIC8vICAgICB2YXIgbGFuZ3VhZ2UgPSBcIiZsYW5ndWFnZT1lblwiO1xyXG4gICAgLy8gICAgIHZhciByYW5rQnkgPSBcIiZyYW5rQnk9ZGlzdGFuY2VcIjtcclxuICAgIC8vICAgICAvLyBCdWlsZCBVUkxcclxuICAgIC8vICAgICB2YXIgdXJsID0gdGhpcy5hcGkubmVhcmJ5QXBpICsgbG9jYXRpb24gKyByYWRpdXMgKyBrZXl3b3JkICsgYXBpS2V5O1xyXG4gICAgLy8gICAgIC8vIExvZyBVUkxcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTmVhcmJ5IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgLy8gICAgIC8vIEFQSSBDYWxsXHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgLy8gICAgICAgICAuZ2V0KHVybClcclxuICAgIC8vICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvclByb21pc2UpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyB0ZXh0U2VhcmNoKHRleHQ/OiBzdHJpbmcsIHJhZGl1cz86IFJhZGl1cywgbGFuZ3VhZ2U/OiBib29sZWFuLCBtaW5QcmljZT86IFByaWNlLCBtYXhQcmljZT86IFByaWNlLCB0eXBlPzogVmVuZG9yVHlwZSk6IFByb21pc2U8U2VhcmNoUmVzdWx0PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNlYXJjaFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAvLyAgICAgICAgIHZhciBzZWFyY2hUZXh0UGFyYW0gPSBcIj9xdWVyeT1cIiArICgodGV4dCAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuY2FwaXRhbGl6ZSh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIgXCIsICdnJyksIFwiXCIpIDogXCJCQVJcIik7XHJcbiAgICAvLyAgICAgICAgIHZhciBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgIC8vICAgICAgICAgdmFyIGxvY2F0aW9uUGFyYW0gPSBcIiZsb2NhdGlvbj1cIiArIHRoaXMudXNlckxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyB0aGlzLnVzZXJMb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmcgXHJcbiAgICAvLyAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtc1xyXG4gICAgLy8gICAgICAgICB2YXIgcmFkaXVzUGFyYW0gPSBcIiZyYWRpdXM9XCIgKyBSYWRpdXMubWkxO1xyXG4gICAgLy8gICAgICAgICB2YXIgbWluUHJpY2VQYXJhbSA9IFwiJm1pbnByaWNlPVwiICsgKChtaW5QcmljZSAhPT0gdW5kZWZpbmVkKSA/IG1pblByaWNlIDogUHJpY2UuemVybyk7IC8vIERlZmF1bHQgaXMgbG93ZXN0XHJcbiAgICAvLyAgICAgICAgIHZhciBtYXhQcmljZVBhcmFtID0gXCImbWF4cHJpY2U9XCIgKyAoKG1heFByaWNlICE9PSB1bmRlZmluZWQpID8gbWF4UHJpY2UgOiBQcmljZS5mb3VyKTsgLy8gRGVmYXVsdCBpcyBoaWdoZXN0XHJcbiAgICAvLyAgICAgICAgIHZhciB0eXBlUGFyYW0gPSAoKHR5cGUgIT09IHVuZGVmaW5lZCkgPyBcIiZ0eXBlPVwiICsgdHlwZSA6IFwiXCIpO1xyXG4gICAgLy8gICAgICAgICAvLyBCdWlsZCBVUkxcclxuICAgIC8vICAgICAgICAgdmFyIHVybCA9IHRoaXMuYXBpLnRleHRTZWFyY2hBcGkgKyBzZWFyY2hUZXh0UGFyYW0gKyBsb2NhdGlvblBhcmFtICsgcmFkaXVzUGFyYW0gKyBtaW5QcmljZVBhcmFtICsgbWF4UHJpY2VQYXJhbSArIHR5cGVQYXJhbSArIGFwaUtleVBhcmFtO1xyXG4gICAgLy8gICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUZXh0IFNlYXJjaCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAvLyAgICAgICAgIC8vIEFQSSBDYWxsXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgLy8gICAgICAgICAuZ2V0PFNlYXJjaFJlc3VsdD4odXJsKVxyXG4gICAgLy8gICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChEZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLnRleHRTZWFyY2goKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JSZXN1bHRzID0gcmVzcG9uc2VbJ3Jlc3VsdHMnXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCA9PSBOZWFyYnkgU2VhcmNoIFxyXG4gICAgcHVibGljIHVybEJ1aWxkZXIobG9jYXRpb246IExvY2F0aW9uLCBuZXh0UGFnZVRva2VuPzogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciB1cmw6IHN0cmluZyA9IEdvb2dsZVBsYWNlc0FwaVVybHMubmVhcmJ5QXBpOyAvLyBTZXQgYXBpIGJhc2VcclxuICAgICAgICBsZXQgYXBpOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG5leHRQYWdlUGFyYW0gPSBcIj9wYWdldG9rZW49XCI7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uUGFyYW06IHN0cmluZyA9ICc/bG9jYXRpb249JyArIGxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCkgKyAnLCcgKyBsb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKTsgLy8gbGF0LGxvbmc7XHJcbiAgICAgICAgbGV0IGFwaUtleVBhcmFtID0gXCIma2V5PVwiICsgR29vZ2xlUGxhY2VzQVBJS2V5O1xyXG4gICAgICAgIGxldCByYWRpdXNQYXJhbTogc3RyaW5nID0gJyZyYWRpdXM9JztcclxuICAgICAgICBsZXQgdHlwZVBhcmFtOiBzdHJpbmcgPSAnJnR5cGU9JztcclxuICAgICAgICBsZXQga2V5d29yZFBhcmFtOiBzdHJpbmcgPSAnJmtleXdvcmQ9JztcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIG5leHRfcGFnZSB0b2tlbi5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsICs9IG5leHRQYWdlUGFyYW0gKyBuZXh0UGFnZVRva2VuICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEJ1aWxkIGFuZCByZXR1cm4gVVJMIGJhc2VkIG9uIG1vZGUgYW5kIHByb3ZpZGVkIGZpbHRlciBwYXJhbXNcclxuICAgICAgICB1cmwgKz0gbG9jYXRpb25QYXJhbSAgLy8gcmVxdWlyZWQgcGFyYW1cclxuICAgICAgICB1cmwgKz0gKHRoaXMuc2VhcmNoRmlsdGVyLmRpc3RhbmNlKSA/IHJhZGl1c1BhcmFtICsgdGhpcy5zZWFyY2hGaWx0ZXIuZGlzdGFuY2UudG9TdHJpbmcoKSA6IHJhZGl1c1BhcmFtICsgUmFkaXVzLm1pMjU7XHJcbiAgICAgICAgdXJsICs9ICh0aGlzLnNlYXJjaEZpbHRlci5rZXl3b3JkICYmIHRoaXMuc2VhcmNoRmlsdGVyLmtleXdvcmQgIT0gJycpID8ga2V5d29yZFBhcmFtICsgdGhpcy5zZWFyY2hGaWx0ZXIua2V5d29yZCA6ICcnO1xyXG4gICAgICAgIHVybCArPSAodGhpcy5zZWFyY2hGaWx0ZXIudmVuZG9yVHlwZSkgPyB0eXBlUGFyYW0gKyB0aGlzLnNlYXJjaEZpbHRlci52ZW5kb3JUeXBlIDogdHlwZVBhcmFtICsgVmVuZG9yVHlwZS5CYXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgcmV0dXJuIHVybCArPSBhcGlLZXlQYXJhbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yUHJvbWlzZSAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvckRldGFpbHMocGxhY2VfaWQ6IHN0cmluZyk6IFByb21pc2U8VmVuZG9yRGV0YWlsPntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VmVuZG9yRGV0YWlsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBHb29nbGVQbGFjZXNBcGlVcmxzLmRldGFpbHNBcGk7XHJcbiAgICAgICAgICAgIGxldCBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICAgICAgbGV0IHBsYWNlSWRQYXJhbSA9IFwiP3BsYWNlaWQ9XCIgKyBwbGFjZV9pZDtcclxuXHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIHBsYWNlSWRQYXJhbSArIGFwaUtleVBhcmFtO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBWZW5kb3JEZXRhaWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLmdldFZlbmRvckRldGFpbHMoKSBFUlJPUjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TG9jYXRpb24oKTogTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvbkdvb2dsZVBsYWNlcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uR29vZ2xlUGxhY2VzKCknKTtcclxuICAgICAgICAvLyBHZXRQbGFjZXNCeUlkKClcclxuICAgICAgICBHb29nbGVQbGFjZXMuZ2V0UGxhY2VzQnlJZChbXHJcbiAgICAgICAgICAgIFwiQ2hJSjR6UFhxSWlBaFlBUjMxWDNTNjRUNlV3XCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSjZ6TWUzb1dBaFlBUmFaMzNaMUJBTVJvXCIsXHJcbiAgICAgICAgICAgIFwiQ2hJSkFVV29HSWFBaFlBUlE2enZreV9mMTBRXCJcclxuICAgICAgICBdKVxyXG4gICAgICAgIC50aGVuKChwbGFjZXM6IEdvb2dsZVBsYWNlcy5QbGFjZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IGNvbnNvbGUubG9nKHBsYWNlLm5hbWUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBpY2tQbGFjZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uKSBjb25zb2xlLmxvZygnR29vZ2xlUGxhY2VzU2VydmljZS5vblBpY2tQbGFjZSgpJyk7XHJcbiAgICAgICAgZ2VvbG9jYXRpb25cclxuICAgICAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vblBpY2tQbGFjZSgpOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyOiBMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjogJyArIEpTT04uc3RyaW5naWZ5KGNlbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcnRoRWFzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlICsgMC4wMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSArIDAuMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzb3V0aFdlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSAtIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgLSAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWV3cG9ydDogJyArIEpTT04uc3RyaW5naWZ5KHZpZXdwb3J0KSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBHb29nbGVQbGFjZXMucGlja1BsYWNlKHZpZXdwb3J0KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKHBsYWNlID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBsYWNlKSkpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyBTZXQgbG9jYXRpb24gYmFzZWQgb24gdXBkYXRlXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYXBpdGFsaXplKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvVXBwZXJDYXNlKCk7IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHByaW50VXJsKHVybDogc3RyaW5nLCBuZXh0cGFnZTogYm9vbGVhbil7XHJcbiAgICAgICAgaWYgKG5leHRwYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBTZWFyY2ggKE5leHQgUGFnZSkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=