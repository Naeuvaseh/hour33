import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../../settings';
import { Location } from '@angular/common';
import { SpecialsService } from '../../../services/specials.service';
import { Specials } from '../../../interfaces/specials.interface';
import * as moment from 'moment';

 
@Component({
  selector: 'star',
  templateUrl: './components/specials/star/star.component.html'
})
export class StarComponent implements OnInit {
    // Inputs
    @Input() specials: Specials;
    @Input() index: number;
    
  private currentDay: number;
  public theme;
  public currentDate = moment();

  /*public specials: Specials;*/

  constructor(private location: Location,private specialsService: SpecialsService ) {
    this.theme = Theme;
   /* this.specials = this.specialsService.getSpecials();*/
  } 
 
  ngOnInit(){ }

  goBack(){
    this.location.back();
}
}
