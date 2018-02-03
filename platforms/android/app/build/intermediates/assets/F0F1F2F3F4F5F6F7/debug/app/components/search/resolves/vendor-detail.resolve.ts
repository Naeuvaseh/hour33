import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GoogleLocationService } from '../../../services/google-location.service';
import { VendorDetail } from '../../../interfaces/search-result/vendor-detail/vendor-detail.interface';

@Injectable()
export class VendorDetailResolve implements Resolve<VendorDetail> {

  constructor(private googleLocationService: GoogleLocationService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.googleLocationService.getVendorDetails(route.paramMap.get('place_id'));
  }
}