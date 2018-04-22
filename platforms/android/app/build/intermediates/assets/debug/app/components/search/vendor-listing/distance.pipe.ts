import { Pipe, PipeTransform } from '@angular/core';
import { Location } from 'nativescript-plugin-google-places';
import { GoogleLocationService } from '../../../services/google-location.service';

@Pipe({
    name: 'distance'
})
export class DistancePipe implements PipeTransform{
    private userLocation: Location;
    
    constructor(private googleLocationService: GoogleLocationService) {
        this.userLocation = this.googleLocationService.userLocation;
    }
    
    transform(vendorLocation){
        let lat1 = vendorLocation.lat;
        let lon1 = vendorLocation.lng;
        let lat2 = this.userLocation.latitude;
        let lon2 = this.userLocation.longitude;
        // Checking for undefined param
        if (vendorLocation === undefined || this.userLocation === undefined) { return null };
        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        let dLon = this.deg2rad(lon2-lon1); 
        let a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = R * c; // Distance in km
        return '(' + (d / 0.621371).toFixed(2).toString() + ' miles)' // Distance in miles
    }

    deg2rad(deg) {
        return deg * (Math.PI/180)
    }
}

