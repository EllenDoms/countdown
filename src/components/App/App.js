import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Countdown from '../Countdown/Countdown';

const date = {
  title: 'Tel Aviv!',
  dateYear: 2018,
  dateMonth: 5,
  dateDay: 7
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countdown date={date}/>
        <img src='https://media.giphy.com/media/jNCT0DtwX6GFG/giphy.gif' />
      </div>
    );
  }
}

export default App;
