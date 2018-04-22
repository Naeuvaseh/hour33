import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { GoogleLocationService } from '../services/google-location.service';
import { SearchResult } from '../interfaces/search-result/search-result.interface';
import { Location } from 'nativescript-plugin-google-places';
import * as geolocation from 'nativescript-geolocation'
import { Accuracy } from 'ui/enums';

@Injectable()
export class CurrentLocationResolver implements Resolve<Location> {
  constructor(private googleLocationService: GoogleLocationService) { }

  resolve(route: ActivatedRouteSnapshot): Location {
    console.log('CurrentLocationResolver()');
    var location: Location;
    geolocation
        .getCurrentLocation({
            desiredAccuracy: Accuracy.high,
            updateTime: 500,
            maximumAge: 5000,
            timeout: 20000
        })
        .then(
        function(result: Location) {
            if (result){
                location = result;
            }
        }, 
        function(error){
            console.log('CurrentLocationResolver() ERROR: ' + error);
        });   
    return location;
  }
}