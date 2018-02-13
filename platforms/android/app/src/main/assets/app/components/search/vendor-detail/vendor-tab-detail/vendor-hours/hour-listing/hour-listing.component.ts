import { Component, Input } from '@angular/core';
import { Theme } from './../../../../../../settings';
import { TimePeriod } from '../../../../../../interfaces/time-period.interface';
import { Period } from '../../../../../../interfaces/period.interface';
import * as moment from 'moment';

@Component({
  selector: 'hour-listing',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-listing.component.html'
})
export class HourListingComponent {
  @Input() hours: TimePeriod[]; // Coming from our personal data
  @Input() period: Period[]; // Coming from Google Places API if provided
  @Input() row: number;
  @Input() col: number;
  @Input() day: number;

  public theme;
  
  constructor() {
    this.theme = Theme;
    console.log('Period: ' + JSON.stringify(this.period));
  }

  formatHours(hour: TimePeriod): string {
    return moment.utc(hour.open).format("h:mma").toString() + " - " + moment.utc(hour.close).format("h:mma").toString();
  }

  formatPeriod(period: Period): string {
    console.log(JSON.stringify(period));
    return moment.utc("0001-01-01 " + period.open.time).format("h:mma").toString() + " - " + moment.utc("0001-01-01 " + period.close.time).format("h:mma").toString();
  }

  formatCurrentDay(day: number): boolean{
    var currentDay = new Date();
    return (day === new Date().getDay()) ? true : false;
  }
} 