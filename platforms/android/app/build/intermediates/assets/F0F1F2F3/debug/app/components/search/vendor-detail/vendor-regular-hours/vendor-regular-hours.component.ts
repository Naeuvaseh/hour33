import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../interfaces/vendor.interface';

@Component({
  selector: 'vendor-regular-hours',
  templateUrl: './components/search/vendor-details/vendor-regular-hours/vendor-regular-hours.component.html'
})
export class VendorRegularHoursComponent {
  @Input() vendor: Vendor;
  @Input() index: number;

  constructor() {

  }
}