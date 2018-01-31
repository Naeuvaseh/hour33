import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../../interfaces/vendor.interface';
import { Theme } from '../../../../../settings';
import { Router } from '@angular/router';
import { TempIcons } from '../../../../../const/temp-icons.const';

@Component({
  selector: 'vendor-score',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component.html'
})
export class VendorScoreComponent {
  @Input() vendor: Vendor;

  public theme;

  public tempIcons: Object[] = TempIcons;

  constructor(private router: Router) {
    this.theme = Theme;
  }

  navToReviews(){
    console.log('VendorScoreComponent.navToReview() invoked.');
  }

  formatScore(rating: number){
    let result: string;
    return result = (rating) ? (rating * 2).toFixed(1).toString() : '??';
  }
  }
}