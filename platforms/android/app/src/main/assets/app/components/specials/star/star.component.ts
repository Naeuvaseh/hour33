import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './components/specials/star/star.component.html'
})
export class StarComponent implements OnInit {

  public myNums: number[];

  constructor() {

  }

  ngOnInit(){
      this.myNums = [1,2,3,4,5,6,7,8,9,0];
  }

  onTap(num: number){
    console.log('Number Tapped: ' + num);
  }

}