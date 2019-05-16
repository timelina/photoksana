import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-newborn',
  templateUrl: './portfolio-newborn.component.html',
  styleUrls: ['./portfolio-newborn.component.scss']
})
export class PortfolioNewbornComponent implements OnInit {

  nRightClicks = 0;
  images:string[];

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/maternity/newborn001.jpg'
      ,'../assets/maternity/newborn002.jpg'
      ,'../assets/maternity/newborn003.jpg'
      
      ,'../assets/maternity/newborn004.jpg'
      ,'../assets/maternity/newborn007.jpg'
      ,'../assets/maternity/newborn006.jpg'
      
      ,'../assets/maternity/newborn008.jpg'
      ,'../assets/maternity/newborn005.jpg'
      ,'../assets/maternity/newborn009.jpg'
      
      ,'../assets/maternity/newborn013.jpg'
      ,'../assets/maternity/newborn014.jpg'
      ,'../assets/maternity/newborn015.jpg'
      
      ,'../assets/maternity/newborn012.jpg'
      ,'../assets/maternity/newborn017.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
