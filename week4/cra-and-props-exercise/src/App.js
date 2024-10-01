
// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';  
function App() {
  console.log('App is rendering');  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
