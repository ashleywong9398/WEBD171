import { Component } from '@angular/core';
import { TeamsComponent } from './teams/teams.component';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeamsComponent],
  providers: [SportsService],
  template: `
    <h1>{{ title }}</h1>
    <app-teams></app-teams>
  `,
})
export class AppComponent {
  title = 'My Sports Teams App';
}

