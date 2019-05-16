import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-children',
  templateUrl: './portfolio-children.component.html',
  styleUrls: ['./portfolio-children.component.scss']
})
export class PortfolioChildrenComponent implements OnInit {
  images:string[];
  nRightClicks = 0;

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/children/cld001.jpg'
      ,'../assets/children/cld002.jpg'
      ,'../assets/children/cld003.jpg'
      ,'../assets/children/cld004.jpg'
      ,'../assets/children/cld005.jpg'
      ,'../assets/children/cld006.jpg'
      ,'../assets/children/cld007.jpg'
      ,'../assets/children/cld008.jpg'
      ,'../assets/children/cld009.jpg'
      ,'../assets/children/cld010.jpg'
      ,'../assets/children/cld011.jpg'
      ,'../assets/children/cld012.jpg'
      ,'../assets/children/cld013.jpg'
      ,'../assets/children/cld014.jpg'
      ,'../assets/children/cld015.jpg'
      ,'../assets/children/cld016.jpg'
      ,'../assets/children/cld017.jpg'
      ,'../assets/children/cld018.jpg'
      ,'../assets/children/cld019.jpg'
      ,'../assets/children/cld020.jpg'
    ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
