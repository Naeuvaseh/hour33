import { Component, Input } from '@angular/core';

@Component({
  selector: 'vendor-listing',
  templateUrl: './components/search/vendor-listing/vendor-listing.component.html'
})
export class VendorListingComponent {
  // Inputs
  @Input() vendor: any;
  @Input() index: number;

  constructor() { }

}