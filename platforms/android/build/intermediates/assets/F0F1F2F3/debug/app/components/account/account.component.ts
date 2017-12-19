import { Component } from '@angular/core';
import { Theme } from '../../settings';

@Component({
  selector: 'account',
  templateUrl: './components/account/account.component.html'
})
export class AccountComponent {

  private theme;
  
    constructor() {
      this.theme = Theme;
    }
}