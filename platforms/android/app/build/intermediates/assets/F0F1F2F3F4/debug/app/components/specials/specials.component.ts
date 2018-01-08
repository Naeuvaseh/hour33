import { Component } from '@angular/core';
import { Theme } from '../../settings';

@Component({
  selector: 'specials',
  templateUrl: './components/specials/specials.component.html'
})
export class SpecialsComponent {

  private theme;
  
    constructor() {
      this.theme = Theme;
    }
}