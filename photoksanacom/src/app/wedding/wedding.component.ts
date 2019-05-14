import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {

  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/wedding/wed001.jpg'
      ,'../assets/wedding/wed002.jpg'
      ,'../assets/wedding/wed003.jpg'
      ,'../assets/wedding/wed004.jpg'
      ,'../assets/wedding/wed005.jpg'
      ,'../assets/wedding/wed006.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
