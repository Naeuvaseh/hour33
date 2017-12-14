import { Component, OnInit } from '@angular/core';
import { Theme } from '../../settings';

// Interfaces
import { SearchResult } from '../../interfaces/search-result.interface';
import { HoursOfOperation } from '../../interfaces/hours-of-operation.interface';

// Enums
import { Day } from '../../enums/day.enum';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent implements OnInit {

  private theme;
  private items: SearchResult[];


  constructor() {
    this.theme = Theme;
  }

  ngOnInit() {
    this.items = [{
      vendorName: "Geckos",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "Marble",
      description: "Local brewery for the 505!",
      phone: "505-335-3973",
      rating: { likes: 60, dislikes: 18 }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "The Library",
      description: "Not yo' momma's normal library.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "Geckos",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "Marble",
      description: "Local brewery for the 505!",
      phone: "505-335-3973",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "The Library",
      description: "Not yo' momma's normal library.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      vendorName: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "11:00 AM",
        close: "2:00 AM",
        holiday: false
      },]
    },]
  }

  todaysHappyHours(hours: HoursOfOperation[]): string {
    let result: string;


    
    return "11:00 AM - 2:00 AM";
  }
}