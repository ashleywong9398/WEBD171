import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div style="text-align: center;">
      <h2>Counter</h2>
      <p>This is a simple example of an Angular component.</p>
      <p>Current count: {{ count }}</p>
      <button (click)="increment()" style="background-color: green; color: white; padding: 5px 10px; border: none; border-radius: 5px;">
        Increment
      </button>
    </div>
  `,
  standalone: true
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
