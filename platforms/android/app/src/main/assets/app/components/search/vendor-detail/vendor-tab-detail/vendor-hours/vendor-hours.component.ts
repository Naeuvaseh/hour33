import { Component, Input } from '@angular/core';
import { TimePeriod } from '../../../../../interfaces/time-period.interface';
import { Period } from '../../../../../interfaces/period.interface';
import { Theme } from '../../../../../settings';
import { Weekdays } from '../../../../../const/weekdays.const';
import * as moment from 'moment';

@Component({
  selector: 'vendor-hours',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-hours/vendor-hours.component.html'
})
export class VendorHoursComponent {
  @Input() happyHours: TimePeriod[];
  @Input() regularHours: Array<Period>;
  
  public theme;

  constructor() {
    this.theme = Theme;
  }

  formatHours(hour: TimePeriod): string {
    return Weekdays[hour.day] + ":  " + moment(hour.open).format("h:mm A").toString() + " - " + moment(hour.close).format("h:mm A").toString();
  }

  getDay(day: number): string {
    return Weekdays[day] + ":";
  }

  formatCurrentDay(hour: number): boolean{
    var currentDay = new Date();
    return (hour === new Date().getDay()) ? true : false;
  }
}