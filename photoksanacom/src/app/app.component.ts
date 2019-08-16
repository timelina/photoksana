import { Component, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhotoKsana';
 constructor(@Inject(WINDOW) private window: Window) {}


  doScroll() {
    this.window.scroll(0, 0);
  }
}
