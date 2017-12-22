import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../interfaces/vendor.interface';
import { Theme } from '../../../../settings';

@Component({
  selector: 'vendor-description',
  templateUrl: './components/search/vendor-detail/vendor-description/vendor-description.component.html'
})
export class VendorDescriptionComponent {
  @Input() vendor: Vendor;
  @Input() index: number;

  public theme;

  constructor() {
    this.theme = Theme;
  }
}