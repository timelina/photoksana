import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 constructor() {}


  ngOnInit() {
  }

  doScroll() {
    window.scroll(0, 0);
  }

}
