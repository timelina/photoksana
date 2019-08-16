import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 constructor(@Inject(WINDOW) private window: Window, ) {}


  ngOnInit() {
  }

  doScroll() {
    this.window.scroll(0, 0);
  }

}
