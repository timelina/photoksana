import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

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
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }

}
