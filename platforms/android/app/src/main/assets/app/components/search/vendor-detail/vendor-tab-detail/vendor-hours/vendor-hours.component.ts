import { Component, Input } from '@angular/core';
import { TimePeriod } from '../../../../../interfaces/time-period.interface';
<<<<<<< HEAD
=======
import { Period } from '../../../../../interfaces/period.interface';
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
import { Theme } from '../../../../../settings';
import { Weekdays } from '../../../../../const/weekdays.const';
import * as moment from 'moment';

@Component({
  selector: 'vendor-hours',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-hours/vendor-hours.component.html'
})
export class VendorHoursComponent {
  @Input() happyHours: TimePeriod[];
<<<<<<< HEAD
  @Input() regularHours: TimePeriod[];
=======
  @Input() regularHours: Array<Period>;
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
  
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