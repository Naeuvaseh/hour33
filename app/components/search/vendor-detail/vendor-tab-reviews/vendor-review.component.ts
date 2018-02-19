import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../../../settings';
import { VendorDetail } from '../../../../interfaces/search-result/vendor-detail/vendor-detail.interface';
import { Reviews } from '../../../../interfaces/search-result/vendor-detail/reviews.interface';

@Component({
  selector: 'vendor-review',
  templateUrl: './components/search/vendor-detail/vendor-tab-reviews/vendor-review.component.html'
})
export class VendorReviewComponent implements OnInit {

  @Input() reviews: Array<Reviews>;
  public theme;

  constructor() {
    this.theme = Theme;
  }

  ngOnInit(){ }

  thumb(rating: number): string {
    return (rating < 2.5) ? 'res://thumb_down' : 'res://thumb_up';
  }
}