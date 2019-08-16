import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {

  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/portrait/prt001.jpg'
      //,'../assets/portrait/prt002.jpg'
      //,'../assets/portrait/prt003.jpg'
      //,'../assets/portrait/prt004.jpg'
      //,'../assets/portrait/prt005.jpg'
      ,'../assets/portrait/prt006.jpg'
      ,'../assets/portrait/prt007.jpg'
      ,'../assets/portrait/prt008.jpg'
      ,'../assets/portrait/prt009.jpg'
      ,'../assets/portrait/prt010.jpg'
      ,'../assets/portrait/prt011.jpg'
      //,'../assets/portrait/prt012.jpg'
      //,'../assets/portrait/prt013.jpg'
      //,'../assets/portrait/prt014.jpg'
      ,'../assets/portrait/prt015.jpg'
      ,'../assets/portrait/prt016.jpg'
      ,'../assets/portrait/prt017.jpg'
      //,'../assets/portrait/prt018.jpg'
      
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
