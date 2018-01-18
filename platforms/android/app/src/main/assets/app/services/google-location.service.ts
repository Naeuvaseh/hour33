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

    public constructor() {
        this._debug = Debug;
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
        // Get/Update location
        this.getCurrentLocation();
        // Set location based on update
        let center: Location = {
            latitude: this.userLocation.latitude,
            longitude: this.userLocation.longitude
        }
         
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
         
        GooglePlaces.pickPlace(viewport)
            .then(place => console.log(JSON.stringify(place)))
            .catch(error => console.log(error));
    }

}