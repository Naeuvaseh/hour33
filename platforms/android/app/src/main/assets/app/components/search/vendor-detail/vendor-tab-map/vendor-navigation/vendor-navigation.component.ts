import { Component, Input } from '@angular/core';
import { VendorDetail } from '../../../../../interfaces/search-result/vendor-detail/vendor-detail.interface';
import { Theme } from '../../../../../settings';
var utilityModule = require("utils/utils");

@Component({
  selector: 'vendor-navigation',
  templateUrl: './components/search/vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component.html'
})
export class VendorNavigationComponent {
  @Input() vendor: VendorDetail;

  public theme;

  constructor() {
    this.theme = Theme;
  }

   navigate(){
     console.log(this.vendor.result.url);
     utilityModule
      .openUrl(this.vendor.result.url)
      .catch((error) => {
        console.log('VendorNavigationComponent.navigate() ERROR: ' + JSON.stringify(error));
      });
  }
}