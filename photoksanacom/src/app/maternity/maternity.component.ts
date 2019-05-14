import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrls: ['./maternity.component.scss']
})
export class MaternityComponent implements OnInit {

  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/maternity/newborn001.jpg'
      ,'../assets/maternity/newborn002.jpg'
      ,'../assets/maternity/newborn003.jpg'
      ,'../assets/maternity/newborn004.jpg'
      ,'../assets/maternity/newborn005.jpg'
      ,'../assets/maternity/newborn006.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
