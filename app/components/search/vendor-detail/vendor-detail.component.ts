import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { VendorService } from '../../../services/vendor.service';


@Component({
  selector: 'vendor-detail',
  templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
})
export class VendorDetailComponent {

  constructor(private location: Location, private selectedVendor: VendorService) { }

  goBack(){
    this.location.back();
  }
  
  onShare(){
    console.log("Shared button tapped."); 
    console.log('Current Vendor:', JSON.stringify(this.selectedVendor.getSelectedVendor()));
  }
}