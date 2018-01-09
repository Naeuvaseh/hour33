import { Component, Input } from '@angular/core';
import { TimePeriod } from '../../../../../interfaces/time-period.interface';
import { Theme } from '../../../../../settings';
import { Weekdays } from '../../../../../const/weekdays.const';
import * as moment from 'moment';

@Component({
  selector: 'vendor-happy-hours',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-happy-hours/vendor-happy-hours.component.html'
})
export class VendorHappyHoursComponent {
  @Input() hours: TimePeriod;

  public theme;

  constructor() {
    this.theme = Theme;
  }

  formatHours(hour: TimePeriod): string {
    return Weekdays[hour.day] + ":  " + moment(hour.open).format("h:mm A").toString() + " - " + moment(hour.close).format("h:mm A").toString();
  }

  formatCurrentDay(hour: TimePeriod): boolean{
    var currentDay = new Date();
    return (hour.day.toString() === new Date().getDay().toString()) ? true : false;
  }
}