import React from 'react';
import { Row, Col } from 'antd';

import './App.css';

import {view as GameScene} from './game_scene';
import {view as DisplayArea} from './display_area';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span = {4}></Col>
        <Col span = {8} ><GameScene /></Col>
        <Col span = {8} ><DisplayArea /></Col>
        <Col span = {4}></Col>
      </Row>
      <h2>俄罗斯方块</h2>
    </div>
  );
}

export default App;
