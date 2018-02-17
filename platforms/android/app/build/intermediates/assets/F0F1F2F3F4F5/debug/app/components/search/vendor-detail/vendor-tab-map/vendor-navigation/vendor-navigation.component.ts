import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../../interfaces/vendor.interface';
import { Theme } from '../../../../../settings';
@Component({
  selector: 'vendor-navigation',
  templateUrl: './components/search/vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component.html'
})
export class VendorNavigationComponent {
  @Input() vendor: Vendor;

  public theme;

  constructor() {
    this.theme = Theme;
  }

  formatAddress(vendor: Vendor): string {
    return "11700 Marquette Ave. NE,\n Albuquerque NM 87123";
  }

  navigate(vendor: Vendor){
    console.log('Navigation button tapped.');
  }
}