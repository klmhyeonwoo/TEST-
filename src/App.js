//import logo from './logo.svg';
import './App.css';
import {Title, Subject} from './hello';
import logo from './img/mImg.png';
import { useState } from 'react';

function App() {

  return (
    <div className = "text">
      <div> 값 : {number} </div>
      <Title />
      <img className = "img"  src={logo} alt="aa"/>
      <Subject />
    </div>
  );
}

export default App;
