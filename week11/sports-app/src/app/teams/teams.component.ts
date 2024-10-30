import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // 引入 CommonModule
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule], // 將 CommonModule 添加到 imports 中
  template: `
    <h2>Teams</h2>
    <div *ngFor="let sport of sports">
      <h3>{{ sport }}</h3>
      <ul>
        <li *ngFor="let team of groupedTeams[sport]">{{ team }}</li>
      </ul>
    </div>
  `,
})
export class TeamsComponent implements OnInit {
  sports: string[] = [];
  groupedTeams: { [key: string]: string[] } = {};

  private sportsService = inject(SportsService);

  ngOnInit() {
    this.groupedTeams = this.sportsService.getTeamsBySport();
    this.sports = Object.keys(this.groupedTeams);
  }
}



