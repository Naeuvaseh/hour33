import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../../settings';
import { TimePeriod } from '../../../interfaces/time-period.interface';
import { Vendor } from '../../../interfaces/vendor.interface';
import { DefaultDay } from '../../../const/default-day.enum';
import * as moment from 'moment';

@Component({
  selector: 'vendor-listing',
  templateUrl: './components/search/vendor-listing/vendor-listing.component.html'
})
export class VendorListingComponent implements OnInit {
  // Inputs
  @Input() vendor: Vendor;
  @Input() index: number;

  private currentDay: number;
  private theme;
  public tempIcons: Object[] = [
    {
      id: 1,
      src: 'res://account'
    },
    {
      id: 2,
      src: 'res://attachment'
    },
    {
      id: 3,
      src: 'res://back_arrow'
    },
    {
      id: 4,
      src: 'res://beenhere'
    },
    {
      id: 5,
      src: 'res://call'
    },
    {
      id: 6,
      src: 'res://download'
    },
    {
      id: 7,
      src: 'res://edit'
    },
    {
      id: 8,
      src: 'res://error'
    },
    {
      id: 9,
      src: 'res://favorite_empty'
    },
    {
      id: 10,
      src: 'res://favorite'
    },
    {
      id: 11,
      src: 'res://feedback'
    },
    {
      id: 12,
      src: 'res://filter'
    },
    {
      id: 13,
      src: 'res://info'
    },
    {
      id: 14,
      src: 'res://launch'
    },
    {
      id: 15,
      src: 'res://location'
    }
  ];

  constructor() {
    this.theme = Theme;
  }

  ngOnInit(){
    //Set current date
    this.currentDay = new Date().getDay();
    //orderByTime(this.vendor);
  }

  orderByTime(vendor: Vendor){
    //TODO 
    //Implement function to order vendor object array by time.
  }

  happyHourStatus(timePeriod: TimePeriod): string {
    var currentDate = new Date();
    var currentMinutes = currentDate.getMinutes() + (currentDate.getHours() * 60);
    var startMinutes = timePeriod.open.getMinutes() + (timePeriod.open.getHours() * 60);
    var endMinutes = timePeriod.close.getMinutes() + (timePeriod.close.getHours() * 60);
    // Not null && current day && start >= now && end <= now
    if (timePeriod !== null && timePeriod.day === new Date().getDay()){
      // Active
      if (startMinutes <= currentMinutes && endMinutes >= currentMinutes) {
        return Theme.greenColor;
      }
      // Ending Soon
      else if (startMinutes <= currentMinutes && ((endMinutes - currentMinutes) <= 60)){
        return Theme.yellowColor;
      }
      // Over
      else if (endMinutes <= currentMinutes){
        return Theme.accentColor;
      }
      // Coming Up
      else {
        return Theme.inactiveColor;
      }
    } 
  }

  todaysHappyHours(timePeriod: TimePeriod): string {
    var result: string = '';
    var currentDate = new Date();
    var currentMinutes = currentDate.getMinutes() + (currentDate.getHours() * 60);
    var startMinutes = timePeriod.open.getMinutes() + (timePeriod.open.getHours() * 60);
    var endMinutes = timePeriod.close.getMinutes() + (timePeriod.close.getHours() * 60);
    console.log('Start: ' + startMinutes + ', Current: ' + currentMinutes + ', End: ' + endMinutes);
    
    // Current and valid happy hour time period
    if (timePeriod !== null && timePeriod.day === new Date().getDay()){
      result = moment.utc(timePeriod.open).format("h:mma") + ' - ' + moment.utc(timePeriod.close).format("h:mma");
      
      // Append verbiage to times
      switch(this.happyHourStatus(timePeriod)){
        case Theme.greenColor:
          return result += " - In Progress!";
        case Theme.yellowColor:
          return result += " - Ending Soon!";
        case Theme.accentColor:
          return result += " - Over!";
        default: 
          return result;
      }
    }
    return 'Unavailable';
  }
}