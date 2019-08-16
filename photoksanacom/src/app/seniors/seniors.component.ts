import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seniors',
  templateUrl: './seniors.component.html',
  styleUrls: ['./seniors.component.scss']
})
export class SeniorsComponent implements OnInit {

  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/seniors/sen001.jpg',
      '../assets/seniors/sen002.jpg',
      '../assets/seniors/sen003.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }

}
