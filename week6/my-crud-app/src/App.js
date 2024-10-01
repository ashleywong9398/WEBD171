
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';  

function App() {
  const [weatherDataSanDiego, setWeatherDataSanDiego] = useState(null);
  const [weatherDataHouston, setWeatherDataHouston] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : {};
  });

  const apiKey = 'f6b0084c5da865d7ded4f360f784b540';
  const apiUrlSanDiego = `https://api.openweathermap.org/data/2.5/weather?q=San Diego&appid=${apiKey}`;
  const apiUrlHouston = `https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrlSanDiego)
      .then(response => response.ok ? response.json() : Promise.reject('Failed to load'))
      .then(data => setWeatherDataSanDiego(data))
      .catch(error => setError(error));
      
    fetch(apiUrlHouston)
      .then(response => response.ok ? response.json() : Promise.reject('Failed to load'))
      .then(data => setWeatherDataHouston(data))
      .catch(error => setError(error));
      
    setLoading(false);
  }, [apiUrlSanDiego, apiUrlHouston]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  const handleNoteChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSaveNote = () => {
    const currentNote = savedNotes[selectedDate.toDateString()];
    if (notes.trim() !== '' && notes !== currentNote) {
      setSavedNotes((prevNotes) => ({
        ...prevNotes,
        [selectedDate.toDateString()]: notes
      }));
      setNotes('');
    }
  };

  const handleDeleteNote = () => {
    if (savedNotes[selectedDate.toDateString()]) {
      setSavedNotes((prevNotes) => {
        const updatedNotes = { ...prevNotes };
        delete updatedNotes[selectedDate.toDateString()]; 
        return updatedNotes;
      });
    }
  };

  
  const tileContent = ({ date, view }) => {
    if (view === 'month' && savedNotes[date.toDateString()]) {
      return <div className="dot"></div>; 
    }
  };

  if (loading) {
    return <div>Loading weather...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>My Moving Journal</h1>
      </header>
      <div className="left-section">
        {weatherDataHouston && (
          <div className="weather-section">
            <h2>Weather in Houston</h2>
            <p>Description: {weatherDataHouston.weather[0].description}</p>
            <p>Temperature: {(weatherDataHouston.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Humidity: {weatherDataHouston.main.humidity}%</p>
            <p>Wind Speed: {weatherDataHouston.wind.speed} m/s</p>
          </div>
        )}
        {weatherDataSanDiego && (
          <div className="weather-section">
            <h2>Weather in San Diego</h2>
            <p>Description: {weatherDataSanDiego.weather[0].description}</p>
            <p>Temperature: {(weatherDataSanDiego.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Humidity: {weatherDataSanDiego.main.humidity}%</p>
            <p>Wind Speed: {weatherDataSanDiego.wind.speed} m/s</p>
          </div>
        )}
      </div>
      <div className="right-section">
        <Calendar 
          onChange={setSelectedDate} 
          value={selectedDate} 
          tileContent={tileContent} 
        />
        <h2>{selectedDate.toDateString()}</h2>
        <textarea value={notes} onChange={handleNoteChange} placeholder="Add your note here" />
        <div className="button-group">
          <button onClick={handleSaveNote}>Save Note</button>
          <button onClick={handleDeleteNote}>Delete Note</button>
        </div>
        {savedNotes[selectedDate.toDateString()] ? (
          <p>{savedNotes[selectedDate.toDateString()]}</p>
        ) : (
          <p>No notes for this day</p>
        )}
      </div>
    </div>
  );
}

export default App;
