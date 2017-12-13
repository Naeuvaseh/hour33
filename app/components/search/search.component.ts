import { Component } from '@angular/core';
import { Theme } from '../../settings';
import { SearchResult } from '../../interfaces/search-result.interface';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent {

  private theme;
  private items: SearchResult[] = [{
    vendorName: "Geckos",
    description: "A venue that everyone and their dogs can enjoy!",
    phone: "505-239-9825",
    hoursOfOperation: [{
      day: "Monday",
      open: "11:00 AM",
      close: "2:00 AM",
      holiday: false
    },
    ]
  },
  {
    vendorName: "Geckos",
    description: "A venue that everyone and their dogs can enjoy!",
    phone: "505-239-9825",
    hoursOfOperation: [{
      day: "Monday",
      open: "11:00 AM",
      close: "2:00 AM",
      holiday: false
    },
    ]
  },
  {
    vendorName: "Geckos",
    description: "A venue that everyone and their dogs can enjoy!",
    phone: "505-239-9825",
    hoursOfOperation: [{
      day: "Monday",
      open: "11:00 AM",
      close: "2:00 AM",
      holiday: false
    },
    ]
  }]

  constructor() {
    this.theme = Theme;
  }
}