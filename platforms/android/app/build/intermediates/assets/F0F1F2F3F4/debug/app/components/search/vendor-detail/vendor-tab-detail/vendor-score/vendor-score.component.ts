import { Component, Input } from '@angular/core';
import { Vendor } from '../../../../../interfaces/vendor.interface';
import { Theme } from '../../../../../settings';
import { Router } from '@angular/router';

@Component({
  selector: 'vendor-score',
  templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component.html'
})
export class VendorScoreComponent {
  @Input() vendor: Vendor;

  public theme;

  public tempIcons: Object[] = [
    {
      id: 1,
      src: 'res://account'
    },
    {
      id: 2,
      src: 'res://attachment'
    },
    {
      id: 3,
      src: 'res://back_arrow'
    },
    {
      id: 4,
      src: 'res://beenhere'
    },
    {
      id: 5,
      src: 'res://call'
    },
    {
      id: 6,
      src: 'res://download'
    },
    {
      id: 7,
      src: 'res://edit'
    },
    {
      id: 8,
      src: 'res://error'
    },
    {
      id: 9,
      src: 'res://favorite_empty'
    },
    {
      id: 10,
      src: 'res://favorite'
    },
    {
      id: 11,
      src: 'res://feedback'
    },
    {
      id: 12,
      src: 'res://filter'
    },
    {
      id: 13,
      src: 'res://info'
    },
    {
      id: 14,
      src: 'res://launch'
    },
    {
      id: 15,
      src: 'res://location'
    }
  ];

  constructor(private router: Router) {
    this.theme = Theme;
  }

  navToReviews(){
    console.log('VendorScoreComponent.navToReview() invoked.');
    
  }

}