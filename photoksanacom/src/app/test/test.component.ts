import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  imagesColumn1:string[];
  imagesColumn2:string[];
  imagesColumn3:string[];
  imagesColumn4:string[];
  category = "Family";
  constructor() { }

  ngOnInit() {

    this.imagesColumn1 = [
      '../assets/family/fam001.jpg'
      ,'../assets/family/fam002.jpg'
      ,'../assets/family/fam003.jpg'
      ,'../assets/family/fam005.jpg'
    ]
    this.imagesColumn2 = [
      ,'../assets/family/fam006.jpg'
      ,'../assets/family/fam018.jpg'
      ,'../assets/family/fam007.jpg'
      ,'../assets/family/fam008.jpg'
    ]
    this.imagesColumn3 = [
      ,'../assets/family/fam010.jpg'
      ,'../assets/family/fam011.jpg'
      ,'../assets/family/fam012.jpg'
      ,'../assets/family/fam013.jpg'
    ]
    this.imagesColumn4 = [
      ,'../assets/family/fam014.jpg'
      ,'../assets/family/fam015.jpg'
      ,'../assets/family/fam016.jpg'
      ,'../assets/family/fam017.jpg'
    ]
  }

}
