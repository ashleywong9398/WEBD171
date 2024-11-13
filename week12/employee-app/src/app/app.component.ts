import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="text-align: center;">Welcome to employee!</h1>
    <nav style="text-align: center; margin-bottom: 10px;">
      <a routerLink="/" style="color: blue; text-decoration: none; margin-right: 10px;">Home</a> |
      <a routerLink="/employee" style="color: blue; text-decoration: none; margin-right: 10px;">Employee</a> |
      <a routerLink="/counter" style="color: blue; text-decoration: none; margin-right: 10px;">Counter</a> |
      <a routerLink="/fetch-data" style="color: blue; text-decoration: none;">Fetch Data</a>
    </nav>
    <hr style="border: 0.1px solid #ddd;"/>
    <router-outlet></router-outlet>
    <hr style="border: 0.1px solid #ddd;"/>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'employee';
}
