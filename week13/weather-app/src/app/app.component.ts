
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Weather App</h1>
    <app-weather></app-weather> <!-- WeatherComponent -->
  `,
  standalone: true,
 
  imports: [WeatherComponent]
})
export class AppComponent {
  title = 'My Angular Weather App';
}
