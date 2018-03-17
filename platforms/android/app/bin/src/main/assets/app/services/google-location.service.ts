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
import { VendorDetail } from '../interfaces/search-result/vendor-detail/vendor-detail.interface';
import { Filter } from '../interfaces/filter.interface';
// Enums
import { Price } from '../enums/price.enum';
import { VendorType } from '../enums/vendor-type.enum';
import { DistPop } from '../enums/distance-popularity.enum';

@Injectable()
export class GoogleLocationService {

    private _debug;
    public userLocation: Location;
    public searchResults: SearchResult;
    public vendors: Vendor[];
    // Google Places API
    public searchFilter: Filter;
    public results: SearchResult;
    public vendorResults: Array<Vendor>;

    public constructor(private http: HttpClient) {
        this._debug = Debug;
        this.searchFilter = {
            vendorType: VendorType.Bar,
            distance: Radius.mi5,
            distPop: DistPop.Popularity
        }
    }

    public search(nextPage: boolean, filter?: Filter, results?: SearchResult): Promise<SearchResult|null> {
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
                    let url: string;
                    // Build API URL
                    url = (nextPage) ? this.urlBuilder(location, results.next_page_token, filter) : this.urlBuilder(location, undefined, filter);
                    // Print URL
                    if (this._debug.console.GoogleLocation.url) this.printUrl(url, nextPage);
                    // API Call
                    this.http
                        .get(url)
                        .toPromise()
                            .then((response: SearchResult) => {
                                if(response){
                                    if (this._debug.console.GoogleLocation.data) console.log('GoogleLocationService.search() DATA: ' + JSON.stringify(response));                                            
                                    resolve(response);
                                }
                            },
                            (error) => {
                                if (Debug.console.GoogleLocation.error) console.log('GoogleLocationService.search() ERROR: ' + JSON.stringify(error));
                            });
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

    public urlBuilder(location: Location, nextPageToken?: string, filter?: Filter): string {
        var url: string = GooglePlacesApiUrls.nearbyApi; // Set api base
        let api: string;
        let nextPageParam = "?pagetoken=";
        let locationParam: string = '?location=' + location.latitude.toString() + ',' + location.longitude.toString(); // lat,long;
        let apiKeyParam = "&key=" + GooglePlacesAPIKey;
        let radiusParam: string = '&radius=';
        let rankbyParam: string = '&rankby=';
        let typeParam: string = '&type=';
        let keywordParam: string = '&keyword=';
        
        // Check if there is a next_page token.
        if (nextPageToken) {
            return url += nextPageParam + nextPageToken + apiKeyParam;
        }
        else {
            // Build and return URL based on mode and provided filter params
            url += locationParam  // required param
            url += (filter.distance && filter.distPop == DistPop.Distance) ? rankbyParam + 'distance' : '';
            url += (filter.distPop == DistPop.Popularity) ? radiusParam + filter.distance.toString() + rankbyParam + 'prominence' : '';
            url += (filter.keyword && filter.keyword != '')  ? keywordParam + filter.keyword : '';
            url += (filter.vendorType) ? typeParam + filter.vendorType : typeParam + VendorType.Bar;
            // Build URL
            return url += apiKeyParam;
        }
    }

    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    public getVendorDetails(place_id: string): Promise<VendorDetail>{
        return new Promise<VendorDetail>((resolve, reject) => {
            console.log('Requesting vendor details.');
            let url = GooglePlacesApiUrls.detailsApi;
            let apiKeyParam = "&key=" + GooglePlacesAPIKey;
            let placeIdParam = "?placeid=" + place_id;
            // Build URL
            url = url + placeIdParam + apiKeyParam;
            // API call
            this.http
                .get(url)
                .toPromise()
                .then(
                    (response: VendorDetail) => {
                        resolve(response);
                    },
                    (error) => {
                        console.log('GoogleLocationService.getVendorDetails() ERROR: ' + JSON.stringify(error));
                    }
                );
        })
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

    private printUrl(url: string, nextpage: boolean){
        if (nextpage) {
            console.log("############################### Search (Next Page) ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
        } else {
            console.log("############################### Search ###############################");
            console.log("URL=" + url);
            console.log("#############################################################################");
        }
    }

}