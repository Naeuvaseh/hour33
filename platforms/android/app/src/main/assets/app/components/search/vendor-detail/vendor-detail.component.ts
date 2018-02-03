import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../services/vendor.service';
import { Vendor } from '../../../interfaces/vendor.interface';
import { Theme } from '../../../settings';
import { VendorDetail } from '../../../interfaces/search-result/vendor-detail/vendor-detail.interface';

@Component({
  selector: 'vendor-detail',
  templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
})
export class VendorDetailComponent implements OnInit {
  private theme;
  public vendor: VendorDetail;

  constructor(
    private location: Location, 
    private route: ActivatedRoute) {
    this.theme = Theme;
  }

  ngOnInit(){ 
    this.vendor = this.route.snapshot.data['vendor'] as VendorDetail;
<<<<<<< HEAD
    console.log(JSON.stringify(this.vendor));
=======
    //console.log(JSON.stringify(this.vendor));
    console.log('Period: ' + JSON.stringify(this.vendor.result.opening_hours.periods));
    
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
  }

  goBack(){
    this.location.back();
  }
  
  onShare(){
    console.log("Shared button tapped."); 
  }
}