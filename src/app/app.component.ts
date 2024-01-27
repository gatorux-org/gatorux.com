import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <h2>Current count is {{ count }}</h2>
    <div class="btn-container">
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
    <router-outlet />
  `,
  styles: [`
    :host {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    
    .btn-container {
      width: 500px;
      height: 50px;
      display: flex;
      
      button {
        width: 100%;
        height: 100%;
      }
    }
  `],
})
export class AppComponent {
  title = 'Gretl';
  count: number = 0;

  increment(){
    this.count += 1
  }

  decrement(){
    this.count -= 1
  }
}
