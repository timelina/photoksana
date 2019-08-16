import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  images:string[];
  nRightClicks = 0;

  constructor() { }

  ngOnInit() {
    this.images = [
      '../assets/family/fam001.jpg'
      ,'../assets/family/fam002.jpg'
      ,'../assets/family/fam003.jpg'
      //,'../assets/family/fam004.jpg'
      ,'../assets/family/fam005.jpg'
      ,'../assets/family/fam006.jpg'
      ,'../assets/family/fam018.jpg'
      ,'../assets/family/fam007.jpg'
      ,'../assets/family/fam008.jpg'
      ,'../assets/family/fam009.jpg'
      ,'../assets/family/fam010.jpg'
      ,'../assets/family/fam011.jpg'
      ,'../assets/family/fam012.jpg'
      ,'../assets/family/fam013.jpg'
      ,'../assets/family/fam014.jpg'
      ,'../assets/family/fam015.jpg'
      ,'../assets/family/fam016.jpg'
      ,'../assets/family/fam017.jpg'
    ]
    // this.images=[
    //   '../assets/portfolio/pf001.jpg'
    //   ,'../assets/portfolio/pf002.jpg'
    //   ,'../assets/portfolio/pf003.jpg'
    //   ,'../assets/portfolio/pf004.jpg'
    //   ,'../assets/portfolio/pf005.jpg'
    //   ,'../assets/portfolio/pf006.jpg'
    //   ,'../assets/portfolio/pf007.jpg'
    //   ,'../assets/portfolio/pf008.jpg'
    //   ,'../assets/portfolio/pf009.jpg'
    //   ,'../assets/portfolio/pf010.jpg'
    //   ,'../assets/portfolio/pf011.jpg'
    //   ,'../assets/portfolio/pf012.jpg'
    //   ,'../assets/portfolio/pf013.jpg'
    //   ,'../assets/portfolio/pf014.jpg'
    //   ,'../assets/portfolio/pf015.jpg'
    //   ,'../assets/portfolio/pf016.jpg'
    //   ,'../assets/portfolio/pf017.jpg'
    //   ,'../assets/portfolio/pf018.jpg'
    //   ,'../assets/portfolio/pf019.jpg'
    //   ,'../assets/portfolio/pf020.jpg'
    //   ,'../assets/portfolio/pf021.jpg'
    //   ,'../assets/portfolio/pf022.jpg'
    //   ,'../assets/portfolio/pf023.jpg'
    //   ,'../assets/portfolio/pf024.jpg'
    //   ,'../assets/portfolio/pf025.jpg'
    //   ,'../assets/portfolio/pf026.jpg'
    //   ,'../assets/portfolio/pf027.jpg'
    //   ,'../assets/portfolio/pf028.jpg'
    //   ,'../assets/portfolio/pf029.jpg'
    // ]
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
