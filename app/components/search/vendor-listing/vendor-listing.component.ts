import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../../settings';
import { HoursOfOperation } from '../../../interfaces/hours-of-operation.interface';

@Component({
  selector: 'vendor-listing',
  templateUrl: './components/search/vendor-listing/vendor-listing.component.html'
})
export class VendorListingComponent implements OnInit {
  // Inputs
  @Input() vendor: any;
  @Input() index: number;

  private theme;

  constructor() {
    this.theme = Theme;
  }

  ngOnInit(){
    
  }

  todaysHappyHours(hours: HoursOfOperation[]): string {
    if(hours !== null){
      var filteredHours = hours.filter(result => result.day === new Date().getDay())
                               .map(result => Object.assign({}, result));
      return filteredHours[0].open + ' - ' + filteredHours[0].close;
    }
    return 'Unavailable';
  }
}