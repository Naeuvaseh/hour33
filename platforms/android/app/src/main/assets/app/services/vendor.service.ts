import { Injectable } from '@angular/core';
import { Vendor } from '../interfaces/vendor.interface';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Day } from '../enums/day.enum';
import { TimePeriod } from '../interfaces/time-period.interface';
const firebase = require('nativescript-plugin-firebase');
import * as GooglePlaces from 'nativescript-plugin-google-places';
import { Location } from 'nativescript-plugin-google-places';
import { viewClassName } from '@angular/compiler';

@Injectable()
export class VendorService {
  private vendorList: ObservableArray<Vendor>;
  private selectedVendor: Vendor;
  private selectedTab: number;

  public constructor() {
  this.vendorList = new ObservableArray([{
      id: 1,
      name: "Geckos",
      description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Sunday,
        open: new Date("0001-01-01T08:00Z"),
        close: new Date("0001-01-01T19:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T21:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },
      {
        day: Day.Tuesday,
        open: new Date("0001-01-01T10:05Z"),
        close: new Date("0001-01-01T20:00Z"),
        holiday: false
      },
      {
        day: Day.Tuesday,
        open: new Date("0001-01-01T21:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },
      {
        day: Day.Wednesday,
        open: new Date("0001-01-01T08:00Z"),
        close: new Date("0001-01-01T11:00Z"),
        holiday: false
      },{
        day: Day.Wednesday,
        open: new Date("0001-01-01T11:30Z"),
        close: new Date("0001-01-01T14:30Z"),
        holiday: false
      },{
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T08:00Z"),
        close: new Date("0001-01-01T08:45Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T11:30Z"),
        close: new Date("0001-01-01T14:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T14:30Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T08:00Z"),
        close: new Date("0001-01-01T14:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T14:15Z"),
        close: new Date("0001-01-01T15:00Z"),
        holiday: false
      },{
        day: Day.Friday,
        open: new Date("0001-01-01T13:30Z"),
        close: new Date("0001-01-01T16:00Z"),
        holiday: false
      },{
        day: Day.Friday,
        open: new Date("0001-01-01T16:30Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T21:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }],
      hoursOfOperation: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T21:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T21:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T17:00Z"),
        holiday: false
      }]
    }, {
      id: 2,
      name: "Happy hours at Anodyne Pool Hall & Cocktails",
      description: "Local brewery for the 505!",
      phone: "505-375-3073",
      rating: { likes: 28, dislikes: 8 },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T16:00Z"),
        close: new Date("0001-01-01T22:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T17:30Z"),
        close: new Date("0001-01-01T23:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T18:00Z"),
        close: new Date("0001-01-01T19:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T16:15Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:30Z"),
        close: new Date("0001-01-01T22:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 3,
      name: "High Noon Restaurant & Saloon",
      description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T16:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T18:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:30Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T16:30Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T17:15Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T16:45Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 4,
      name: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 5,
      name: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 6,
      name: "Geckos",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 7,
      name: "Marble",
      description: "Local brewery for the 505!",
      phone: "505-335-3973",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 8,
      name: "The Library",
      description: "Not yo' momma's normal library.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 9,
      name: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }, {
      id: 10,
      name: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      happyHours: [{
        day: Day.Sunday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Monday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Tuesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Wednesday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Thursday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Friday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      }, {
        day: Day.Saturday,
        open: new Date("0001-01-01T15:00Z"),
        close: new Date("0001-01-01T02:00Z"),
        holiday: false
      },]
    }]);

    // firebase.getValue('/vendors').then(function(result) {
    //   console.log(JSON.stringify(result.value));
    // });
  }

  public onGooglePlaces(){
    // let center: Location = {
    //   latitude: -33.865143,
    //   longitude: 151.2099
    // }

    // let viewport = {
    //   northEast: {
    //     latitude: center.latitude + 0.001,
    //     longitude: center.longitude + 0.001
    //   },
    //   southWest: {
    //     latitude: center.latitude - 0.001,
    //     longitude: center.longitude - 0.001
    //   }
    // }
    // console.log('Viewport: ' + JSON.stringify(viewport));
    // GooglePlaces.pickPlace(viewport)
    // .then(place => console.log(JSON.stringify(place)))
    // .catch(error => console.log(error));
    console.log('VendorService.OnGooglePlaces()');
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

  getVendors(): ObservableArray<Vendor> {
    return this.vendorList;
  }

  getSelectedVendor(): Vendor {
    return this.selectedVendor;
  }

  setSelectedVendor(vendor: Vendor) {
    this.selectedVendor = vendor;
  }

  getSelectedTab(): number {
    return this.selectedTab;
  }

  setSelectedTab(index: number) {
    this.selectedTab = index;
  }

}