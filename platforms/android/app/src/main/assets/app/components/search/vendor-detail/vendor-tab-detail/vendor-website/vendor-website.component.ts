import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../../../../settings';
import  { Vendor } from '../../../../../interfaces/vendor.interface';
var utilityModule = require("utils/utils");

@Component({
  selector: 'vendor-website',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-website/vendor-website.component.html'
})
export class VendorWebsiteComponent implements OnInit {

  @Input() vendor: Vendor;

  public theme;

  constructor() { }

  ngOnInit(){
    this.theme = Theme;
  }
  
  openWebsite(){
    if(this.vendor.website){
      utilityModule.openUrl(this.vendor.website);
    }
    else {
      alert("This establishment does not have a website listed.");
    }
  }
}