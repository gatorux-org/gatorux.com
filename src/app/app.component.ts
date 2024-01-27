import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <h2>Testing triggers</h2>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'gatorux.com';
}
