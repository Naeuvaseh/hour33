import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'vendor-detail',
  templateUrl: './components/search/vendor-detail/vendor-detail.component.html'
})
export class VendorDetailComponent {

  constructor(private location: Location) {

  }

  goBack(){
    this.location.back();
  }
  
  onShare(){
    console.log("Shared button tapped.");  
  }
}