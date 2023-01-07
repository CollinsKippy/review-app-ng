import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'my-container',
  },
})
export class AppComponent {
  title = 'review-app-ng';
}
