import { Component, Input } from '@angular/core';
import { Theme } from './../../../../../../settings';
import { TimePeriod } from '../../../../../../interfaces/time-period.interface';
import * as moment from 'moment';

@Component({
  selector: 'hour-listing',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-listing.component.html'
})
export class HourListingComponent {
  @Input() hours: TimePeriod[];
  @Input() row: number;
  @Input() col: number;
  @Input() day: number;

  public theme;
  constructor() {
    this.theme = Theme;
  }

  formatHours(hour: TimePeriod): string {
    return moment.utc(hour.open).format("h:mma").toString() + " - " + moment.utc(hour.close).format("h:mma").toString();
  }

  formatCurrentDay(day: number): boolean{
    var currentDay = new Date();
    return (day === new Date().getDay()) ? true : false;
  }
}