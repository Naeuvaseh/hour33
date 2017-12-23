import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../../interfaces/vendor.interface';

@Component({
  selector: 'vendor-score',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component.html'
})
export class VendorScoreComponent {
  @Input() vendor: Vendor;

  constructor() {

  }
}