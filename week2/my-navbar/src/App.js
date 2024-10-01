import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
 
  const leftAlignStyle = {
    textAlign: 'left'
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid mt-3" style={leftAlignStyle}>
        <h3>Basic Navbar Example</h3>
        <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
        <p>The navbar-expand-xxl|xl|lg|md|sm class determines when the navbar should stack vertically (on xxlarge, extra large, large, medium or small screens).</p>
      </div>
    </div>
  );
}

export default App;


