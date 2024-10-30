import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class SportsService {
  private teams = [
    { name: 'Los Angeles Kings', sport: 'Hockey' },
    { name: 'Anaheim Ducks', sport: 'Hockey' },
    { name: 'Los Angeles Dodgers', sport: 'Baseball' },
    { name: 'Los Angeles Angels of Anaheim', sport: 'Baseball' },
    { name: 'San Diego Padres', sport: 'Baseball' }
  ];

  getTeamsBySport() {
    return this.teams.reduce((acc, team) => {
      if (!acc[team.sport]) {
        acc[team.sport] = [];
      }
      acc[team.sport].push(team.name);
      return acc;
    }, {} as { [key: string]: string[] });
  }
}


