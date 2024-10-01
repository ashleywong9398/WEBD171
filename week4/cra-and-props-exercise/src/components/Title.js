// src/components/Title.js

// Import react
import React from 'react';

// Create a function component and set props as the argument
function Title (props) {
  
  return (
    <div>
      <h3>TITLE:</h3>
    	<h1 className="App-title">{props.appTitle}</h1>
    </div>
  );

};


// export the component
export default Title;
