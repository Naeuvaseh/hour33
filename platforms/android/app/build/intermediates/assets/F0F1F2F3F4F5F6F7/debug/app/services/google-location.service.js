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
var vendor_type_enum_1 = require("../enums/vendor-type.enum");
var GoogleLocationService = (function () {
    function GoogleLocationService(http) {
        this.http = http;
        // Google Places API
        this.api = google_places_api_urls_const_1.GooglePlacesApiUrls;
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
                                console.log('GoogleLocationService.Search(mode:Default) DATA: ' + JSON.stringify(response));
                            resolve(response);
                        }
                    }, function (error) {
                        if (settings_1.Debug.console.GoogleLocation.error)
                            console.log('GoogleLocationService.textSearch() ERROR: ' + JSON.stringify(error));
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
    GoogleLocationService.prototype.urlBuilder = function (location, nextPageToken, filter) {
        var url;
        var api;
        var nextPageParam = "?pagetoken=";
        var locationParam = '?location=' + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long;
        var apiKeyParam = "&key=" + settings_2.GooglePlacesAPIKey;
        var radiusParam = '&radius=';
        var typeParam = '&type=';
        var keywordParam = '&keyword=';
        // Set api base
        api = this.api.nearbyApi;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUM5Qix3Q0FBb0M7QUFDcEMsb0RBQThDO0FBRTlDLHdDQUFpRDtBQUNqRCxZQUFZO0FBQ1osc0ZBQTRFO0FBRzVFLGFBQWE7QUFDYixzREFBd0Q7QUFDeEQsa0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixnRUFBa0U7QUFVbEUsUUFBUTtBQUNSLGtEQUE0QztBQUM1Qyw4REFBdUQ7QUFLdkQ7SUFZSSwrQkFBMkIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQU4zQyxvQkFBb0I7UUFDWixRQUFHLEdBQUcsa0RBQW1CLENBQUM7UUFNOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsVUFBVSxFQUFFLDZCQUFVLENBQUMsR0FBRztZQUMxQixRQUFRLEVBQUUsb0JBQU0sQ0FBQyxHQUFHO1NBQ3ZCLENBQUE7SUFDTCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE9BQXNCO1FBQXhFLGlCQTRDQztRQTNDRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsa0JBQWtCO1lBQ2xCLFdBQVc7aUJBQ1Ysa0JBQWtCLENBQUM7Z0JBQ2hCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7Z0JBQzlCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFDLFFBQWtCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FB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L2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FQSUtleSB9IGZyb20gJy4uL3NldHRpbmdzJztcclxuLy8gQ29uc3RhbnRzXHJcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0FwaVVybHMgfSBmcm9tICcuLi9jb25zdC9nb29nbGUtcGxhY2VzLWFwaS11cmxzLmNvbnN0JztcclxuLy8gRGlzdGFuY2VcclxuaW1wb3J0ICogYXMgZGlzdGFuY2UgZnJvbSAnZ29vZ2xlLWRpc3RhbmNlJztcclxuLy8gR2VvbGNhdGlvblxyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbi8vIEdvb2dsZSBQbGFjZXNcclxuaW1wb3J0ICogYXMgR29vZ2xlUGxhY2VzIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1nb29nbGUtcGxhY2VzJztcclxuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSAnbW9tZW50JztcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRleHRTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3RleHQtc2VhcmNoL3RleHQtc2VhcmNoLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmVhcmJ5U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9uZWFyYnktc2VhcmNoL25lYXJieS1zZWFyY2gtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvZmlsdGVyLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vZW51bXMvcHJpY2UuZW51bSc7XHJcbmltcG9ydCB7IFZlbmRvclR5cGUgfSBmcm9tICcuLi9lbnVtcy92ZW5kb3ItdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgUmFkaW9Db250cm9sUmVnaXN0cnkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2RlYnVnO1xyXG4gICAgcHVibGljIHVzZXJMb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gICAgcHVibGljIHZlbmRvcnM6IFZlbmRvcltdO1xyXG4gICAgLy8gR29vZ2xlIFBsYWNlcyBBUElcclxuICAgIHByaXZhdGUgYXBpID0gR29vZ2xlUGxhY2VzQXBpVXJscztcclxuICAgIHB1YmxpYyBzZWFyY2hGaWx0ZXI6IEZpbHRlcjtcclxuICAgIHB1YmxpYyByZXN1bHRzOiBTZWFyY2hSZXN1bHQ7XHJcbiAgICBwdWJsaWMgdmVuZG9yUmVzdWx0czogQXJyYXk8VmVuZG9yPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBEZWJ1ZztcclxuICAgICAgICB0aGlzLnNlYXJjaEZpbHRlciA9IHtcclxuICAgICAgICAgICAgdmVuZG9yVHlwZTogVmVuZG9yVHlwZS5CYXIsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiBSYWRpdXMubWk1XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2gobmV4dFBhZ2U6IGJvb2xlYW4sIGZpbHRlcj86IEZpbHRlciwgcmVzdWx0cz86IFNlYXJjaFJlc3VsdCk6IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VhcmNoUmVzdWx0fG51bGw+KChyZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDUwMCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigobG9jYXRpb246IExvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2NhdGlvbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIEFQSSBVUkxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSAobmV4dFBhZ2UpID8gdGhpcy51cmxCdWlsZGVyKGxvY2F0aW9uLCByZXN1bHRzLm5leHRfcGFnZV90b2tlbiwgZmlsdGVyKSA6IHRoaXMudXJsQnVpbGRlcihsb2NhdGlvbiwgdW5kZWZpbmVkLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLnVybCkgdGhpcy5wcmludFVybCh1cmwsIG5leHRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZGF0YSkgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5TZWFyY2gobW9kZTpEZWZhdWx0KSBEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24uZXJyb3IpIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdXIgbG9jYXRpb24gaXMgY3VycmVudGx5IG5vdCBhdmFpbGFibGUuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zy5jb25zb2xlLkdvb2dsZUxvY2F0aW9uLmVycm9yKSBjb25zb2xlLmxvZygnQ3VycmVudExvY2F0aW9uUmVzb2x2ZXIoKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZWFyYnlTZWFyY2godGV4dD86IHN0cmluZywgdHlwZXM/OiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIC8vdmFyIHNlYXJjaEJ5ID0gdGhpcy5jYXBpdGFsaXplKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiBcIiwgJ2cnKSwgXCJcIik7XHJcbiAgICAgICAgLy8gUmVxdWlyZWQgcGFyYW1zXHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gXCI/bG9jYXRpb249XCIgKyB0aGlzLnVzZXJMb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgdGhpcy51c2VyTG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nXHJcbiAgICAgICAgdmFyIGFwaUtleSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICB2YXIgcmFkaXVzID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pNTtcclxuICAgICAgICAvLyBPcHRpbmFsIHBhcmFtc1xyXG4gICAgICAgIHZhciBrZXl3b3JkID0gXCIma2V5d29yZD1iYXJcIjsgLy8sYnJld2VyeSxyZXN0YXVyYW50LGNsdWIsdmluZXlhcmRcIjsgXHJcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gXCImbGFuZ3VhZ2U9ZW5cIjtcclxuICAgICAgICB2YXIgcmFua0J5ID0gXCImcmFua0J5PWRpc3RhbmNlXCI7XHJcbiAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuYXBpLm5lYXJieUFwaSArIGxvY2F0aW9uICsgcmFkaXVzICsga2V5d29yZCArIGFwaUtleTtcclxuICAgICAgICAvLyBMb2cgVVJMXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE5lYXJieSBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVSTD1cIiArIHVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JQcm9taXNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGV4dFNlYXJjaCh0ZXh0Pzogc3RyaW5nLCByYWRpdXM/OiBSYWRpdXMsIGxhbmd1YWdlPzogYm9vbGVhbiwgbWluUHJpY2U/OiBQcmljZSwgbWF4UHJpY2U/OiBQcmljZSwgdHlwZT86IFZlbmRvclR5cGUpOiBQcm9taXNlPFNlYXJjaFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZWFyY2hSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcXVpcmVkIHBhcmFtc1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoVGV4dFBhcmFtID0gXCI/cXVlcnk9XCIgKyAoKHRleHQgIT09IHVuZGVmaW5lZCkgPyB0aGlzLmNhcGl0YWxpemUodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKFwiIFwiLCAnZycpLCBcIlwiKSA6IFwiQkFSXCIpO1xyXG4gICAgICAgICAgICB2YXIgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvblBhcmFtID0gXCImbG9jYXRpb249XCIgKyB0aGlzLnVzZXJMb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgdGhpcy51c2VyTG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nIFxyXG4gICAgICAgICAgICAvLyBPcHRpb25hbCBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIHJhZGl1c1BhcmFtID0gXCImcmFkaXVzPVwiICsgUmFkaXVzLm1pMTtcclxuICAgICAgICAgICAgdmFyIG1pblByaWNlUGFyYW0gPSBcIiZtaW5wcmljZT1cIiArICgobWluUHJpY2UgIT09IHVuZGVmaW5lZCkgPyBtaW5QcmljZSA6IFByaWNlLnplcm8pOyAvLyBEZWZhdWx0IGlzIGxvd2VzdFxyXG4gICAgICAgICAgICB2YXIgbWF4UHJpY2VQYXJhbSA9IFwiJm1heHByaWNlPVwiICsgKChtYXhQcmljZSAhPT0gdW5kZWZpbmVkKSA/IG1heFByaWNlIDogUHJpY2UuZm91cik7IC8vIERlZmF1bHQgaXMgaGlnaGVzdFxyXG4gICAgICAgICAgICB2YXIgdHlwZVBhcmFtID0gKCh0eXBlICE9PSB1bmRlZmluZWQpID8gXCImdHlwZT1cIiArIHR5cGUgOiBcIlwiKTtcclxuICAgICAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmFwaS50ZXh0U2VhcmNoQXBpICsgc2VhcmNoVGV4dFBhcmFtICsgbG9jYXRpb25QYXJhbSArIHJhZGl1c1BhcmFtICsgbWluUHJpY2VQYXJhbSArIG1heFByaWNlUGFyYW0gKyB0eXBlUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuICAgICAgICAgICAgLy8gTG9nIFVSTFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVGV4dCBTZWFyY2ggIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkw9XCIgKyB1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgICAgICAvLyBBUEkgQ2FsbFxyXG4gICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldDxTZWFyY2hSZXN1bHQ+KHVybClcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS50ZXh0U2VhcmNoKCk6ICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yUmVzdWx0cyA9IHJlc3BvbnNlWydyZXN1bHRzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlYnVnLmNvbnNvbGUuR29vZ2xlTG9jYXRpb24pIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2UudGV4dFNlYXJjaCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgPT0gTmVhcmJ5IFNlYXJjaCBcclxuICAgIHB1YmxpYyB1cmxCdWlsZGVyKGxvY2F0aW9uOiBMb2NhdGlvbiwgbmV4dFBhZ2VUb2tlbj86IHN0cmluZywgZmlsdGVyPzogRmlsdGVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGFwaTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBuZXh0UGFnZVBhcmFtID0gXCI/cGFnZXRva2VuPVwiO1xyXG4gICAgICAgIGxldCBsb2NhdGlvblBhcmFtOiBzdHJpbmcgPSAnP2xvY2F0aW9uPScgKyBsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpICsgJywnICsgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCk7IC8vIGxhdCxsb25nO1xyXG4gICAgICAgIGxldCBhcGlLZXlQYXJhbSA9IFwiJmtleT1cIiArIEdvb2dsZVBsYWNlc0FQSUtleTtcclxuICAgICAgICBsZXQgcmFkaXVzUGFyYW06IHN0cmluZyA9ICcmcmFkaXVzPSc7XHJcbiAgICAgICAgbGV0IHR5cGVQYXJhbTogc3RyaW5nID0gJyZ0eXBlPSc7XHJcbiAgICAgICAgbGV0IGtleXdvcmRQYXJhbTogc3RyaW5nID0gJyZrZXl3b3JkPSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2V0IGFwaSBiYXNlXHJcbiAgICAgICAgYXBpID0gdGhpcy5hcGkubmVhcmJ5QXBpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIG5leHRfcGFnZSB0b2tlbi5cclxuICAgICAgICBpZiAobmV4dFBhZ2VUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsICs9IG5leHRQYWdlUGFyYW0gKyBuZXh0UGFnZVRva2VuICsgYXBpS2V5UGFyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEJ1aWxkIGFuZCByZXR1cm4gVVJMIGJhc2VkIG9uIG1vZGUgYW5kIHByb3ZpZGVkIGZpbHRlciBwYXJhbXNcclxuICAgICAgICB1cmwgKz0gbG9jYXRpb25QYXJhbSAgLy8gcmVxdWlyZWQgcGFyYW1cclxuICAgICAgICB1cmwgKz0gKHRoaXMuc2VhcmNoRmlsdGVyLmRpc3RhbmNlKSA/IHJhZGl1c1BhcmFtICsgdGhpcy5zZWFyY2hGaWx0ZXIuZGlzdGFuY2UudG9TdHJpbmcoKSA6IHJhZGl1c1BhcmFtICsgUmFkaXVzLm1pMjU7XHJcbiAgICAgICAgdXJsICs9ICh0aGlzLnNlYXJjaEZpbHRlci5rZXl3b3JkICYmIHRoaXMuc2VhcmNoRmlsdGVyLmtleXdvcmQgIT0gJycpID8ga2V5d29yZFBhcmFtICsgdGhpcy5zZWFyY2hGaWx0ZXIua2V5d29yZCA6ICcnO1xyXG4gICAgICAgIHVybCArPSAodGhpcy5zZWFyY2hGaWx0ZXIudmVuZG9yVHlwZSkgPyB0eXBlUGFyYW0gKyB0aGlzLnNlYXJjaEZpbHRlci52ZW5kb3JUeXBlIDogdHlwZVBhcmFtICsgVmVuZG9yVHlwZS5CYXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQnVpbGQgVVJMXHJcbiAgICAgICAgcmV0dXJuIHVybCArPSBhcGlLZXlQYXJhbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yUHJvbWlzZSAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvckRldGFpbHMocGxhY2VfaWQ6IHN0cmluZyk6IFByb21pc2U8VmVuZG9yRGV0YWlsPntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VmVuZG9yRGV0YWlsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmFwaS5kZXRhaWxzQXBpO1xyXG4gICAgICAgICAgICBsZXQgYXBpS2V5UGFyYW0gPSBcIiZrZXk9XCIgKyBHb29nbGVQbGFjZXNBUElLZXk7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZUlkUGFyYW0gPSBcIj9wbGFjZWlkPVwiICsgcGxhY2VfaWQ7XHJcblxyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBwbGFjZUlkUGFyYW0gKyBhcGlLZXlQYXJhbTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogVmVuZG9yRGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5nZXRWZW5kb3JEZXRhaWxzKCkgRVJST1I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudExvY2F0aW9uKCk6IExvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVzZXJMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgb25Hb29nbGVQbGFjZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dvb2dsZUxvY2F0aW9uU2VydmljZS5vbkdvb2dsZVBsYWNlcygpJyk7XHJcbiAgICAgICAgLy8gR2V0UGxhY2VzQnlJZCgpXHJcbiAgICAgICAgR29vZ2xlUGxhY2VzLmdldFBsYWNlc0J5SWQoW1xyXG4gICAgICAgICAgICBcIkNoSUo0elBYcUlpQWhZQVIzMVgzUzY0VDZVd1wiLFxyXG4gICAgICAgICAgICBcIkNoSUo2ek1lM29XQWhZQVJhWjMzWjFCQU1Sb1wiLFxyXG4gICAgICAgICAgICBcIkNoSUpBVVdvR0lhQWhZQVJRNnp2a3lfZjEwUVwiXHJcbiAgICAgICAgXSlcclxuICAgICAgICAudGhlbigocGxhY2VzOiBHb29nbGVQbGFjZXMuUGxhY2VbXSkgPT4ge1xyXG4gICAgICAgICAgICBwbGFjZXMuZm9yRWFjaChwbGFjZSA9PiBjb25zb2xlLmxvZyhwbGFjZS5uYW1lKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QaWNrUGxhY2UoKXtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcuY29uc29sZS5Hb29nbGVMb2NhdGlvbikgY29uc29sZS5sb2coJ0dvb2dsZVBsYWNlc1NlcnZpY2Uub25QaWNrUGxhY2UoKScpO1xyXG4gICAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGVMb2NhdGlvblNlcnZpY2Uub25QaWNrUGxhY2UoKTogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbnRlcjogTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcgKyBKU09OLnN0cmluZ2lmeShjZW50ZXIpKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBub3J0aEVhc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSArIDAuMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUgKyAwLjAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc291dGhXZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUgLSAwLjAwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlIC0gMC4wMDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlld3BvcnQ6ICcgKyBKU09OLnN0cmluZ2lmeSh2aWV3cG9ydCkpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR29vZ2xlUGxhY2VzLnBpY2tQbGFjZSh2aWV3cG9ydClcclxuICAgICAgICAgICAgICAgIC8vICAgICAudGhlbihwbGFjZSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwbGFjZSkpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlTG9jYXRpb25TZXJ2aWNlLm9uUGlja1BsYWNlKCkgRVJST1I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gU2V0IGxvY2F0aW9uIGJhc2VkIG9uIHVwZGF0ZVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpOyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludFVybCh1cmw6IHN0cmluZywgbmV4dHBhZ2U6IGJvb2xlYW4pe1xyXG4gICAgICAgIGlmIChuZXh0cGFnZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgU2VhcmNoIChOZXh0IFBhZ2UpICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgU2VhcmNoICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMPVwiICsgdXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19