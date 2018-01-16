import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../../settings';
import { TimePeriod } from '../../../interfaces/time-period.interface';
import { Vendor } from '../../../interfaces/vendor.interface';
import { DefaultDay } from '../../../const/default-day.enum';
import { TimePeriodThreshold } from '../../../const/time-period-threshold.const';
import { TempIcons } from '../../../const/temp-icons.const';
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
  public theme;
  public currentDate = moment();
  public tempIcons: Object[] = TempIcons;

  constructor() {
    this.theme = Theme;
  }

  ngOnInit(){
    //Set current date
    this.currentDay = new Date().getDay();
  }

  orderByTime(vendor: Vendor){
    //TODO 
    //Implement function to order vendor object array by time.
  }

  happyHourStatus(timePeriod: TimePeriod): string {
    //console.log('Start: ' + this.getStartMinutes(timePeriod) + ', Current: ' + this.getCurrentMinutes() + ', End: ' + this.getEndMinutes(timePeriod) + ', Remaining: ' + this.getRemainingMinutes(timePeriod));
    
    // Not null && current day && start >= now && end <= now
    if (timePeriod !== null && moment.utc(timePeriod).day() === moment.utc().day()) {
      // Active
      if (this.getStartMinutes(timePeriod) <= this.getCurrentMinutes() && 
          this.getCurrentMinutes() <= this.getEndMinutes(timePeriod) &&
          this.getRemainingMinutes(timePeriod) > 60) {
        return Theme.greenColor;
      }
      // Ending Soon (less than 60 minutes left)
      else if (this.getRemainingMinutes(timePeriod) > 0 && this.getRemainingMinutes(timePeriod) <= 60) {
        return Theme.yellowColor;
      }
      // Over
      else if (this.getRemainingMinutes(timePeriod) <= 0) {
        return Theme.lightGrey;
      }
      // Coming Up
      else {
        return Theme.inactiveColor;
      }
    } 
  }

  todaysHappyHours(timePeriod: TimePeriod): string {
    var result: string = '';
    
    // Valid happy hour time period
    if (timePeriod !== null){
      // Format time period
      result = this.formatTimePeriod(timePeriod);
      // Append verbiage to times
      switch(this.happyHourStatus(timePeriod)){
        case Theme.greenColor:
          return result = String.fromCharCode(0xf111) + " " + result + " - In Progress!";
        case Theme.yellowColor:
          return result = String.fromCharCode(0xf111) + " " + result + " - Ending Soon!";
        default: 
          return result;
      }
    }
    return 'Unavailable';
  }

  isOver(timePeriod: TimePeriod): string {
    switch(this.happyHourStatus(timePeriod)){
      case Theme.lightGrey:
        return 'text-decoration: line-through;';
      default:
        return '';
    } 
  }

  isActive(timePeriod: TimePeriod): string {
    switch(this.happyHourStatus(timePeriod)){
      case Theme.greenColor:
        return '0 0 2 10';
      case Theme.yellowColor:
        return '0 0 2 10';
      default:
        return '0 0 2 26';
    } 
  }

  getCurrentMinutes(): number {
    return this.currentDate.minutes() + (this.currentDate.hours() * 60);
  }

  getStartMinutes(timePeriod: TimePeriod): number {
    return this.getMinutes(timePeriod.open);
  }

  getEndMinutes(timePeriod: TimePeriod): number {
    return this.getMinutes(timePeriod.close);
  }

  getRemainingMinutes(timePeriod: TimePeriod): number {
    return this.getEndMinutes(timePeriod) - this.getCurrentMinutes();
  }

  getMinutes(date: Date): number {
    var minutes = (moment.utc(date).minutes() + (moment.utc(date).hours() * 60));
    return (minutes <= TimePeriodThreshold.end.minutes) ? (minutes += 1440) : minutes; // Offset 24 hours if past midnight
  }

  formatTimePeriod(timePeriod: TimePeriod): string {
    return moment.utc(timePeriod.open).format("h:mma") + ' - ' + moment.utc(timePeriod.close).format("h:mma");
  }
}