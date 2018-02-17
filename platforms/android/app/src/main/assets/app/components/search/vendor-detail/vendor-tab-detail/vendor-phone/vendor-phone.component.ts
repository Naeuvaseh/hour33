import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../../../../settings';
import  { VendorDetail } from '../../../../../interfaces/search-result/vendor-detail/vendor-detail.interface';
import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';
declare var android;

@Component({
  selector: 'vendor-phone',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-phone/vendor-phone.component.html'
})
export class VendorPhoneComponent implements OnInit {

  @Input() vendor: VendorDetail;

  public theme;

  constructor() { }

  ngOnInit(){
    this.theme = Theme;
  }

  dialNumber(){
    if (this.vendor.result.formatted_phone_number){
      permissions
        .requestPermission(android.Manifest.permission.CALL_PHONE, "App Needs This Permission To Make Phone Calls")
        .then(()=>{
          console.log("Got Permission!");
          console.log("Vendor Phone: " + this.vendor.result.formatted_phone_number);
          TNSPhone.dial(String(this.vendor.result.formatted_phone_number), false);
        })
        .catch(()=>{
          console.log("Permission Denied!");
        });
    }
    else {
      alert("This establishment does not have a phone number listed.");
    }
  }
}