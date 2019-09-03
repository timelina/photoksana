import { Component, OnInit, Input } from '@angular/core';
import { cats, Photography, photos } from '../dataPhotography';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  @Input('category') categoryName: string;
  // mycats = cats;
  myphotos: Photography[] = [];

  constructor() { }

  ngOnInit() {
    let categoryId = cats.find(c=>c.name == this.categoryName).id;
    this.myphotos = photos.filter(p=>p.categoryId == categoryId);
  }

}
