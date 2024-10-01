// src/components/Header.js

import React from 'react';
import Title from './Title';  
import Description from './Description';  
import logoFileFromSRC from '../logo.svg';  

function Header() {
  return (
    <header className="App-header">
      <img src={logoFileFromSRC} className="App-logo" alt="logo" />

      <Title appTitle="Welcome To React, Ironhacker!" />
      <Description>
        You are ready to take this to the next level!
      </Description>
    </header>
  );
}

export default Header;
