import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { VendorService } from '../../../services/vendor.service';
import { Vendor } from '../../../interfaces/vendor.interface';

@Component({
  selector: 'vendor-detail',
  templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
})
export class VendorDetailComponent {

  public vendor: Vendor;

  constructor(private location: Location, private vendorService: VendorService) {
    this.vendor = this.vendorService.getSelectedVendor();
  }

  goBack(){
    this.location.back();
  }
  
  onShare(){
    console.log("Shared button tapped."); 
  }
}