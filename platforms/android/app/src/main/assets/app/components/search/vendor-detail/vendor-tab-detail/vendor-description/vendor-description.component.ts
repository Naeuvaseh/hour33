import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../../interfaces/vendor.interface';
import { Theme } from '../../../../../settings';

@Component({
  selector: 'vendor-description',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-description/vendor-description.component.html'
})
export class VendorDescriptionComponent {
  @Input() vendor: Vendor;

  public theme;
  public websiteText: string;

  constructor() {
    this.theme = Theme;
    this.websiteText = 'Website ' + String.fromCharCode(0xf35d);
  }

  openVendorWebsite(){
    console.log('Vendor website link tapped.');
  }
}