import React, { Component } from 'react';
import './App.css';
import Countdown from '../Countdown/Countdown';



class App extends Component {
  constructor(props) {
    super(props),
    this.title = 'Tel Aviv!',
    this.dateYear = 2018,
    this.dateMonth = 5,
    this.dateDay = 7,
    this.date = [this.dateYear, this.dateMonth, this.dateDay]
  }
  render() {
    return (
      <div className="App">
        <Countdown title={this.title} date={this.date} />
      </div>
    );
  }
}

export default App;
