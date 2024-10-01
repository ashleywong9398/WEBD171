import React from 'react';
import NavBar from './NavBar';
import './App.css'; 

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <h3>Basic Navbar Example</h3>
        <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
        <p>The navbar-expand-xxl|xl|lg|md|sm class determines when the navbar should stack vertically (on xxlarge, extra large, large, medium or small screens).</p>
      </div>
    </>
  );
}

export default App;
