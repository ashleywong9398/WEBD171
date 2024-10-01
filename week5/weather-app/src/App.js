import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date()); // Calendar state
  const [notes, setNotes] = useState(''); // Notes state

  const apiKey = 'f6b0084c5da865d7ded4f360f784b540'; 
  const city = 'San Diego';  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched weather data:", data);
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [apiUrl]);

  // Handle loading state
  if (loading) {
    return <div>Loading weather...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Extract weather data
  const cityName = weatherData.name;
  const description = weatherData.weather[0].description;
  const temperature = (weatherData.main.temp - 273.15).toFixed(2);  // Convert Kelvin to Celsius
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;

  return (
    <div className="App">
      <div className="container">
        {/* Weather section */}
        <div className="weather">
          <h1>Weather in {cityName}</h1>
          <p>Description: {description}</p>
          <p>Temperature: {temperature}°C</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} m/s</p>
        </div>

        {/* Calendar section */}
        <div className="calendar">
          <h2>Calendar</h2>
          <Calendar onChange={setDate} value={date} />
          <p>Selected Date: {date.toDateString()}</p>
        </div>

        {/* Notes section */}
        <div className="notes">
          <h2>Notes</h2>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Write your notes here..."
            rows="10"
            cols="30"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
