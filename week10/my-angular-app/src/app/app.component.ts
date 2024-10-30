import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a [routerLink]="['/']">Home</a> |
      <a [routerLink]="['/user']">User Page</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterModule] 
})
export class AppComponent {
  title = 'My Angular App';
}
