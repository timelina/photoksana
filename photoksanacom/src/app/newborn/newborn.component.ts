import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.scss']
})
export class NewbornComponent implements OnInit {

  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/newborn/newborn001.jpg'
      ,'../assets/newborn/newborn002.jpg'
      ,'../assets/newborn/newborn003.jpg'
      
      ,'../assets/newborn/newborn004.jpg'
      ,'../assets/newborn/newborn007.jpg'
      ,'../assets/newborn/newborn006.jpg'
      
      ,'../assets/newborn/newborn008.jpg'
      ,'../assets/newborn/newborn005.jpg'
      ,'../assets/newborn/newborn009.jpg'
      
      ,'../assets/newborn/newborn013.jpg'
      ,'../assets/newborn/newborn014.jpg'
      ,'../assets/newborn/newborn015.jpg'
      
      ,'../assets/newborn/newborn012.jpg'
      ,'../assets/newborn/newborn017.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
