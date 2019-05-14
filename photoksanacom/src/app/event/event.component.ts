import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/event/evn001.jpg'
      ,'../assets/event/evn002.jpg'
      ,'../assets/event/evn003.jpg'
      ,'../assets/event/evn004.jpg'
      ,'../assets/event/evn005.jpg'
      ,'../assets/event/evn006.jpg'
      ,'../assets/event/evn007.jpg'
      ,'../assets/event/evn008.jpg'
      ,'../assets/event/evn009.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
