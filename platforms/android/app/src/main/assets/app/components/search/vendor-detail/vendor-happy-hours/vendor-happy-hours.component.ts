import { Component, Input } from '@angular/core';
import { HoursOfOperation } from '../../../../interfaces/hours-of-operation.interface';
import { Theme } from '../../../../settings';
import { Weekdays } from '../../../../const/weekdays.const';

@Component({
  selector: 'vendor-happy-hours',
  templateUrl: './components/search/vendor-detail/vendor-happy-hours/vendor-happy-hours.component.html'
})
export class VendorHappyHoursComponent {
  @Input() hours: HoursOfOperation;
  @Input() index: number;

  public theme;

  constructor() {
    this.theme = Theme;
  }

  formatHours(hour: HoursOfOperation): string {
    return Weekdays[hour.day] + ":  " + hour.open + " - " + hour.close;
  }
}