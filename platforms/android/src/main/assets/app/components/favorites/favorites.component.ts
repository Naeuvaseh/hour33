import { Component } from '@angular/core';
import { Theme } from '../../settings';

@Component({
  selector: 'favorites',
  templateUrl: './components/favorites/favorites.component.html'
})
export class FavoritesComponent {

  private theme;
  
    constructor() {
      this.theme = Theme;
    }
}