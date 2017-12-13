import { Component } from '@angular/core';
import { Theme } from '../../settings';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent {

  private theme;

  constructor() {
    this.theme = Theme;
  }
}