import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../../../../settings';
import  { VendorDetail } from '../../../../../interfaces/search-result/vendor-detail/vendor-detail.interface';
var utilityModule = require("utils/utils");

@Component({
  selector: 'vendor-website',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-website/vendor-website.component.html'
})
export class VendorWebsiteComponent implements OnInit {

  @Input() vendor: VendorDetail;

  public theme;

  constructor() { }

  ngOnInit(){
    this.theme = Theme;
  }
  
  openWebsite(){
    if(this.vendor.result.website){
      utilityModule.openUrl(this.vendor.result.website);
    }
    else {
      alert("This establishment does not have a website listed.");
    }
  }
}