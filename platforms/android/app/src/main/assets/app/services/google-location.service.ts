import { Injectable } from '@angular/core';
import { Debug } from '../settings';
// Geolcation
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
// Google Places
import * as GooglePlaces from 'nativescript-plugin-google-places';
import { Location } from 'nativescript-plugin-google-places';


@Injectable()
export class GoogleLocationService {

    private _debug;
    private userLocation: Location;
    // Google Places API
    private _googleServerApiKey = 'AIzaSyDbY1JhYKBsuzW80PFMjWa2Pg3QMveBNSM';
    private _placesApiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    private _placesDetailsApiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
    private _placesImagesApiUrl = 'https://maps.googleapis.com/maps/api/place/photo';


    public constructor() {
        this._debug = Debug;
    }

    public search(text: string, types: string){
        var searchBy = this.capitalize(text).replace(new RegExp(" ", 'g'), "");
        var url = this._placesApiUrl + "?input=" + searchBy + "&types=" + types + "&language=pt_BR&key=" + this._googleServerApiKey;
        console.log("###############################");
        console.log("################### searchBy=" + types + ", value=" + searchBy);
        console.log("################### url=" + url);
        console.log("###############################");
    }

    public getCurrentLocation(): Location {
        if (this._debug.console.GoogleLocation) console.log('GoogleLocationService.getCurrentLocation()');
        return this.userLocation;
    }

    public setCurrentLocation(){
        if (this._debug.console.GoogleLocation) console.log('GoogleLocationService.setCurrentLocation()');
        geolocation
            .getCurrentLocation({
                desiredAccuracy: Accuracy.high,
                maximumAge: 5000,
                timeout: 20000
            })
            .then((result) => {
                if (this._debug.console.GoogleLocation) console.log('GoogleLocationService.setCurrentLocation() Result: ' + JSON.stringify(result));
                this.userLocation = result;
            })   
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

}