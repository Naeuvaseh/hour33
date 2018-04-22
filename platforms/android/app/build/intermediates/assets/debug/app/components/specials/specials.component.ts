import { Component } from '@angular/core';
import { Theme } from '../../settings';
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-pro-ui/listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
// Services
import { SpecialsService } from "../../services/specials.service";
import { GoogleLocationService } from '../../services/google-location.service';
// Interfaces
import { Specials } from '../../interfaces/specials.interface';
// Enums
import { Day } from '../../enums/day.enum';

@Component({
  selector: 'specials',
  templateUrl: './components/specials/specials.component.html'
})
export class SpecialsComponent {

  private theme;
  private items: ObservableArray<Specials>;

  
    constructor(private specialsService: SpecialsService) {
      this.theme = Theme;
    } 
    ngOnInit() {  
      this.items = this.specialsService.getSpecials();
    }
      
}