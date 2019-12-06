import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>compareit</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'CompareItApp';
}
