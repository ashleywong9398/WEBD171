import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  template: `
    <h1>Weather in San Diego</h1>
    <p><strong>Description:</strong> {{ weatherDescription }}</p>
    <p><strong>Temperature:</strong> {{ temperature }}°C</p>
    <p><strong>Humidity:</strong> {{ humidity }}%</p>
    <p><strong>Wind Speed:</strong> {{ windSpeed }} m/s</p>
  `,
  standalone: true,
  imports: [HttpClientModule]
})
export class WeatherComponent implements OnInit {
  weatherDescription: string = '';
  temperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiKey = 'f6b0084c5da865d7ded4f360f784b540';  
    const city = 'San Diego';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherDescription = data.weather[0].description;
      this.temperature = data.main.temp;
      this.humidity = data.main.humidity;
      this.windSpeed = data.wind.speed;
    });
  }
}
