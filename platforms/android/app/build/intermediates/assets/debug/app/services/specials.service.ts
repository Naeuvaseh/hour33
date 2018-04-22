import { Injectable } from '@angular/core';
import { Specials } from '../interfaces/specials.interface';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Day } from '../enums/day.enum';
import { TimePeriod } from '../interfaces/time-period.interface';




@Injectable()
export class SpecialsService {
  private specialsList: ObservableArray<Specials>;
  private selectedSpecials: Specials;
  private selectedTab: number;
 
  public constructor() {
  this.specialsList = new ObservableArray([{
      id: 1,
      name: "Test ",
      description: "Testing this ",
      phone: "505-417-4067 ",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 2,
      name: "Happy hours at Anodyne Pool Hall & Cocktails",
      description: "Local brewery for the 505!",
      phone: "505-375-3073",
      rating: { likes: 28, dislikes: 8 },
    }, {
      id: 3,
      name: "High Noon Restaurant & Saloon",
      description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 4,
      name: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 5,
      name: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 6,
      name: "Geckos",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 7,
      name: "Marble",
      description: "Local brewery for the 505!",
      phone: "505-335-3973",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 8,
      name: "The Library",
      description: "Not yo' momma's normal library.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
    }, {
      id: 9,
      name: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      
    }, {
      id: 10,
      name: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: {
        likes: 60,
        dislikes: 18
      },
      
    }]);

    // firebase.getValue('/vendors').then(function(result) {
    //   console.log(JSON.stringify(result.value));
    // });
  }
  getSpecials(): ObservableArray<Specials> {
    return this.specialsList;
  }

  getSelectedSpecials(): Specials {
    return this.selectedSpecials;
  }

  setSelectedSpecials(specials: Specials) {
    this.selectedSpecials = specials;
  }

  getSelectedTab(): number {
    return this.selectedTab;
  }

  setSelectedTab(index: number) {
    this.selectedTab = index;
  }

}