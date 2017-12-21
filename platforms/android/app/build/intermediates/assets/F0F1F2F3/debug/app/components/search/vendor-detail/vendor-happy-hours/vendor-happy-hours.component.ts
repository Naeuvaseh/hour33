import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../interfaces/vendor.interface';

@Component({
  selector: 'vendor-happy-hours',
  templateUrl: './components/search/vendor-detail/vendor-happy-hours/vendor-happy-hours.component.html'
})
export class VendorHappyHoursComponent {
  @Input() vendor: Vendor;
  @Input() index: number;

  constructor() {

  }
}