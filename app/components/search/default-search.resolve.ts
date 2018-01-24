import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { GoogleLocationService } from '../../services/google-location.service';
import { SearchResult } from '../../interfaces/search-result/search-result.interface';

@Injectable()
export class DefaultSearchResolver implements Resolve<SearchResult> {
  constructor(private googleLocationService: GoogleLocationService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<SearchResult> {
    console.log('DefaultSearchResolve()');
    return this.googleLocationService.defaultSearch();
  }
}