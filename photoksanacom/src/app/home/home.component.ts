import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nRightClicks = 0;
  color1 = "";
  color2 = "";
  color3 = "";
  color4 = "";
  color5 = "";
  color6 = "";
  constructor() { }

  ngOnInit() {
  }

  onRightClick(event) {
    this.nRightClicks++;
    return false;
  }
}
