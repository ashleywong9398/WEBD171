// src/components/Description.js

// Import react
import React from 'react';

// Create a function component and set props as the argument
function Description (props) {
  
  return (
    <div>
    	<h3>Description:</h3>
    	<p> { props.children } </p>
    </div>
  );
  
};


// export the component
export default Description;
