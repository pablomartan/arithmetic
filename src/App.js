import React, { useState, useEffect } from 'react';

import { Game } from './components/Game';

import './App.css';

export const App = () => {
  
  return(
    <div>
      <h1>This is a simple math game</h1>
      <Game />
    </div>
  );
};
