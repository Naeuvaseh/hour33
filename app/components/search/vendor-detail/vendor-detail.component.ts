import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { VendorService } from '../../../services/vendor.service';
import { Vendor } from '../../../interfaces/vendor.interface';
import { Theme } from '../../../settings';

@Component({
  selector: 'vendor-detail',
  templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
})
export class VendorDetailComponent implements OnInit {
  private theme;
  public vendor: Vendor;

  constructor(private location: Location, private vendorService: VendorService) {
    this.theme = Theme;
    this.vendor = this.vendorService.getSelectedVendor();
  }

  ngOnInit(){ }

  goBack(){
    this.location.back();
  }
  
  onShare(){
    console.log("Shared button tapped."); 
  }
}