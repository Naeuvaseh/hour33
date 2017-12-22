import { Component, Input } from '@angular/core';
import { HoursOfOperation } from '../../../../interfaces/hours-of-operation.interface';
import { Theme } from '../../../../settings';
import { Weekdays } from '../../../../const/weekdays.const';

@Component({
  selector: 'vendor-regular-hours',
  templateUrl: './components/search/vendor-detail/vendor-regular-hours/vendor-regular-hours.component.html'
})
export class VendorRegularHoursComponent {
  @Input() hours: HoursOfOperation;
  @Input() index: number;

  private currentSystemDay: Date = new Date();

  public theme;

  constructor() {
    this.theme = Theme;
  }

  formatHours(hour: HoursOfOperation): string {
    return Weekdays[hour.day] + ":  " + hour.open + " - " + hour.close;
  }

  formatCurrentDay(hour: HoursOfOperation): boolean{
    var currentDay = new Date();
    return (hour.day.toString() === new Date().getDay().toString()) ? true : false;
  }
}