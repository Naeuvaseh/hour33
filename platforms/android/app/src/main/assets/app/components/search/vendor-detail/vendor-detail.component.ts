import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private location: Location, 
    private vendorService: VendorService,
    private route: ActivatedRoute) {
    this.theme = Theme;
  }

  ngOnInit(){ 
    this.vendor = this.route.snapshot.data['vendor'];
  }

  goBack(){
    this.location.back();
  }
  
  onShare(){
    console.log("Shared button tapped."); 
  }
}