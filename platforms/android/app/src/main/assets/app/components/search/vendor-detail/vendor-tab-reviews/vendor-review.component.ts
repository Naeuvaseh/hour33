import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../../../settings';
import { VendorService } from '../../../../services/vendor.service';
import  { Vendor } from '../../../../interfaces/vendor.interface';

@Component({
  selector: 'vendor-review',
  templateUrl: './components/search/vendor-detail/vendor-tab-reviews/vendor-review.component.html'
})
export class VendorReviewComponent implements OnInit {

  @Input() vendor: Vendor;

  constructor(private vendorService: VendorService) {

  }

  ngOnInit(){
    
  }
}