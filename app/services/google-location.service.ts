import { Injectable } from '@angular/core';
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { Debug } from '../settings';
import { Radius } from '../enums/radius.enum';
import { Observable } from 'rxjs/Observable';
import { GooglePlacesAPIKey } from '../settings';
// Constants
import { GooglePlacesApiUrls } from '../const/google-places-api-urls.const';
// Distance
import * as distance from 'google-distance';
// Geolcation
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
// Google Places
import * as GooglePlaces from 'nativescript-plugin-google-places';
import { Location } from 'nativescript-plugin-google-places';
import { locale } from 'moment';
// Interfaces
import { Vendor } from '../interfaces/search-result/vendor.interface';
import { SearchResult } from '../interfaces/search-result/search-result.interface';
import { TextSearchOptions } from '../interfaces/search-result/text-search/text-search-options.interface';
import { NearbySearchOptions } from '../interfaces/search-result/nearby-search/nearby-search-options.interface';
// Enums
import { Price } from '../enums/price.enum';
import { VendorType } from '../enums/vendor-type.enum';
import { SearchMode } from '../enums/search-mode.enum';


@Injectable()
export class GoogleLocationService {

    private _debug;
    public userLocation: Location;
    public searchResults: SearchResult;
    public vendors: Vendor[];
    // Google Places API
    private api = GooglePlacesApiUrls;
    // private _errorCallback;

    public results: SearchResult;
    public vendorResults: Array<Vendor>;

    public constructor(private http: HttpClient) {
        this._debug = Debug;
    }

    public search(mode: SearchMode, nextPage: boolean, results?: SearchResult, options?: Vendor): Promise<SearchResult|null> {
        return new Promise<SearchResult|null>((resolve, reject ) => {
            // Update location
            geolocation
            .getCurrentLocation({
                desiredAccuracy: Accuracy.high,
                updateTime: 500,
                maximumAge: 5000,
                timeout: 20000
            })
            .then((location: Location) => {
                // Location available
                if (location) {
                    // Update location
                    this.userLocation = location;
                    var url: string;
                    // Switch to specific search mode
                    switch(mode){
                        case SearchMode.Default:
                        {   
                            // Build API URL
                            url = (nextPage) ? this.defaultSearch(location, results.next_page_token) : this.defaultSearch(location);
                            // Print URL
                            if (this._debug.console.GoogleLocation.url) this.printUrl(url, SearchMode.Default, nextPage);
                            // API Call
                            this.http
                                .get(url)
                                .toPromise()
                                    .then((response: SearchResult) => {
                                        if(response){
                                            if (this._debug.console.GoogleLocation.data) console.log('GoogleLocationService.Search(mode:Default) DATA: ' + JSON.stringify(response));                                            
                                            resolve(response);
                                        }
                                    },
                                    (error) => {
                                        if (Debug.console.GoogleLocation.error) console.log('GoogleLocationService.textSearch() ERROR: ' + JSON.stringify(error));
                                    });
                            break;
                        }
                        case SearchMode.Text:
                        {
                            if (nextPage){

                            }
                            else{

                            }
                            break;
                        }
                        case SearchMode.Nearby:
                        {
                            if (nextPage){

                            }
                            else{

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
            }, 
            (error) => {
                if (this._debug.console.GoogleLocation.error) console.log('CurrentLocationResolver() ERROR: ' + error);
                reject(error);
            });
        });
    }

    public nearbySearch(text?: string, types?: string): Object {
        //var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
        // Required params
        var location = "?location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long
        var apiKey = "&key=" + GooglePlacesAPIKey;
        var radius = "&radius=" + Radius.mi5;
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
            .then((response) =>{
                console.log(JSON.stringify(response));
            })
            .catch(this.handleErrorPromise);
    }

    public textSearch(text?: string, radius?: Radius, language?: boolean, minPrice?: Price, maxPrice?: Price, type?: VendorType): Promise<SearchResult> {
        return new Promise<SearchResult>((resolve, reject) => {

            // Required params
            var searchTextParam = "?query=" + ((text !== undefined) ? this.capitalize(text).replace(new RegExp(" ", 'g'), "") : "BAR");
            var apiKeyParam = "&key=" + GooglePlacesAPIKey;
            var locationParam = "&location=" + this.userLocation.latitude.toString() + ',' + this.userLocation.longitude.toString(); // lat,long 
            // Optional params
            var radiusParam = "&radius=" + Radius.mi1;
            var minPriceParam = "&minprice=" + ((minPrice !== undefined) ? minPrice : Price.zero); // Default is lowest
            var maxPriceParam = "&maxprice=" + ((maxPrice !== undefined) ? maxPrice : Price.four); // Default is highest
            var typeParam = ((type !== undefined) ? "&type=" + type : "");
            // Build URL
            var url = this.api.textSearchApi + searchTextParam + locationParam + radiusParam + minPriceParam + maxPriceParam + typeParam + apiKeyParam;
            // Log URL
            console.log("############################### Text Search ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
            // API Call
            this.http
            .get<SearchResult>(url)
                .toPromise()
                .then((response: SearchResult) => {
                    if (Debug.console.GoogleLocation) console.log('GoogleLocationService.textSearch(): ' + JSON.stringify(response));
                    this.results = response;
                    this.vendorResults = response['results'];
                    resolve(response);
                },
                (error) => {
                    if (Debug.console.GoogleLocation) console.log('GoogleLocationService.textSearch() ERROR: ' + error);
                });
            });
    }

    public defaultSearch(location: Location, nextPageToken?: string): string {
        let url: string;
        let apiKeyParam = "&key=" + GooglePlacesAPIKey;
        let locationParam: string;
        let radiusParam: string;
        let typeParam: string;
        let rankbyParam: string;

        if (nextPageToken) {
            let nextPageParam = "?pagetoken=" + nextPageToken;
            url = this.api.nearbyApi + nextPageParam + apiKeyParam;
        }
        else {
            // Optional params
            locationParam = "?location=" + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long 
            radiusParam = "&radius=" + Radius.mi25;
            typeParam = "&type=bar";
            rankbyParam = "&rankby=distance"
            // Build URL
            url = this.api.nearbyApi + locationParam + radiusParam + typeParam + apiKeyParam;
        }
        return url;
    }

    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    public getCurrentLocation(): Location {
        return this.userLocation;
    }

    public setCurrentLocation(location: Location) {
        this.userLocation = location;
    }
    
    public onGooglePlaces() {
        console.log('GoogleLocationService.onGooglePlaces()');
        // GetPlacesById()
        GooglePlaces.getPlacesById([
            "ChIJ4zPXqIiAhYAR31X3S64T6Uw",
            "ChIJ6zMe3oWAhYARaZ33Z1BAMRo",
            "ChIJAUWoGIaAhYARQ6zvky_f10Q"
        ])
        .then((places: GooglePlaces.Place[]) => {
            places.forEach(place => console.log(place.name));
        })
        .catch(error => console.log(error));
    }

    public onPickPlace(){
        if (this._debug.console.GoogleLocation) console.log('GooglePlacesService.onPickPlace()');
        geolocation
            .getCurrentLocation({
                desiredAccuracy: Accuracy.high,
                maximumAge: 5000,
                timeout: 20000
            })
            .then((result) => {
                console.log('GoogleLocationService.onPickPlace(): ' + JSON.stringify(result));
                let center: Location = {
                    latitude: result.latitude,
                    longitude: result.longitude
                }
                console.log('center: ' + JSON.stringify(center));
                 
                let viewport = {
                    northEast: {
                        latitude: center.latitude + 0.001,
                        longitude: center.longitude + 0.001
                    },
                    southWest: {
                        latitude: center.latitude - 0.001,
                        longitude: center.longitude - 0.001
                    }
                }
                console.log('viewport: ' + JSON.stringify(viewport));
                 
                // GooglePlaces.pickPlace(viewport)
                //     .then(place => console.log(JSON.stringify(place)))
                //     .catch(error => console.log(error));

            })
            .catch((error) =>{
                console.log('GoogleLocationService.onPickPlace() ERROR: ' + error);
            })
        // Set location based on update
        
    }

    private capitalize(text: string) {
        return text.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };

    private printUrl(url: string, mode: SearchMode, nextpage: boolean){
        switch(mode){
            case SearchMode.Default: 
                if (nextpage) {
                    console.log("############################### Default (Nearby) Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                } else {
                    console.log("############################### Default (Nearby) Search ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                break;
            case SearchMode.Nearby:
                if (nextpage) {
                    console.log("############################### Nearby Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                } else {
                    console.log("############################### Nearby Search ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                break;
            case SearchMode.Text:
                if (nextpage) {
                    console.log("############################### Text Search (Next Page) ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                } else {
                    console.log("############################### Text Search ###############################");
                    console.log("URL=" + url);
                    console.log("#############################################################################");
                }
                break;
            default:
                console.log('GoogleLocationService.printUrl(): A mode must be selected');
                break;
        }        
    }

}