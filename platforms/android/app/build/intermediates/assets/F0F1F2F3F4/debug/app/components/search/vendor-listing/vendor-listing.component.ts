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

  todaysHappyHours(timePeriod: TimePeriod): string {
    var result: string = '';
    var currentDate: Date = new Date();
    // var start = moment(DefaultDay + 'T' + timePeriod.open);
    // var end = moment(DefaultDay + 'T' + timePeriod.close);
    // console.log(start);
    // console.log(end);    
    if (timePeriod !== null && timePeriod.day === new Date().getDay()){
      // var filteredTimePeriod = timePeriod.filter(result => result.day === new Date().getDay())
      //                                    .map(result => Object.assign({}, result));
      result = moment(timePeriod.open).format("h:mm A") + ' - ' + moment(timePeriod.close).format("h:mm A");
      
      // TODO
      // implement check (below)
      // Check if current time period is active
      // if (currentDate.toTimeString() >= timePeriod.open && currentDate.toTimeString() <= timePeriod.close){
      //   result += " In Progress!";
      // }
      
      return result;
    }
    return 'Unavailable';
  }
}