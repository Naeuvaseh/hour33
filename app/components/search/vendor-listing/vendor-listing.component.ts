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
  private theme;
  public currentDate = moment.utc();

  public tempIcons: Object[] = TempIcons;

  constructor() {
    this.theme = Theme;
  }

  ngOnInit(){
    //Set current date
    this.currentDay = new Date().getDay();
   // console.log('Current Date: ' + this.currentDate);
  }

  orderByTime(vendor: Vendor){
    //TODO 
    //Implement function to order vendor object array by time.
  }

  happyHourStatus(timePeriod: TimePeriod): string {
    // Not null && current day && start >= now && end <= now
    if (timePeriod !== null && moment.utc(timePeriod).day() === moment.utc().day()) {
      //console.log('Current: ' + this.getCurrentMinutes());
      // console.log('Time Range: ' + this.getStartMinutes(timePeriod) + ' - ' + this.getEndMinutes(timePeriod));
      // console.log('Start <= Current: ' + (this.getStartMinutes(timePeriod) <= this.getCurrentMinutes()));
      // console.log('Current <= End: ' + (this.getCurrentMinutes() <= this.getEndMinutes(timePeriod)));
      // console.log('Remaining: ' + this.getRemainingMinutes(timePeriod));
      // console.log('');
      // Active
      if (this.getStartMinutes(timePeriod) <= this.getCurrentMinutes() && 
          this.getCurrentMinutes() <= this.getEndMinutes(timePeriod)) {
        return Theme.greenColor;
      }
      // Ending Soon (less than 60 minutes left)
      else if (this.getRemainingMinutes(timePeriod) > 0 && this.getRemainingMinutes(timePeriod) <= 60) {
        return Theme.yellowColor;
      }
      // Over
      else if (this.getRemainingMinutes(timePeriod) <= 0) {
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
   //console.log('Start: ' + this.getStartMinutes(timePeriod) + ', Current: ' + this.getCurrentMinutes() + ', End: ' + this.getEndMinutes(timePeriod) + ', Remaining: ' + this.getRemainingMinutes(timePeriod));
    
    // Valid happy hour time period
    if (timePeriod !== null){
      // Format time period
      result = this.formatTimePeriod(timePeriod);
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

  getCurrentMinutes(): number {
    return this.afterMidnightOffset(this.currentDate);
  }

  getStartMinutes(timePeriod: TimePeriod): number {
    return this.afterMidnightOffset(timePeriod.open);
  }

  getEndMinutes(timePeriod: TimePeriod): number {
    return this.afterMidnightOffset(timePeriod.close);
  }

  getRemainingMinutes(timePeriod: TimePeriod): number {
    return this.getEndMinutes(timePeriod) - this.getCurrentMinutes();
  }

  afterMidnightOffset(date: any): number {
    var minutes = (moment.utc(date).minutes() + (moment.utc(date).hours() * 60));
    return (minutes <= TimePeriodThreshold.end.minutes) ? (minutes += 1440) : minutes;
  }

  formatTimePeriod(timePeriod: TimePeriod): string {
    return moment.utc(timePeriod.open).format("h:mma") + ' - ' + moment.utc(timePeriod.close).format("h:mma");
  }
}