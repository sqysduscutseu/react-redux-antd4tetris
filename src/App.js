import React from 'react';

import './App.css';

import {view as GameScene} from './game_scene';

function App() {
  return (
    <div className="App">
      <GameScene />
      俄罗斯方块
    </div>
  );
}

export default App;
