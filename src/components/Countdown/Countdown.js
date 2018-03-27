import React from 'react';
import './Countdown.css';
import CountdownDigit from '../CountdownDigit/CountdownDigit';

class Countdown extends React.Component {
  renderDigits() {
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let today = new Date(); // date today
    let secondDate = new Date(this.props.date); // countdown date
    //difference between days
    let diffDays = Math.ceil(Math.abs((today.getTime() - secondDate.getTime())/(oneDay)));
    //split in different digits
    let digits = ('' + diffDays).split("");
    //we need 3 digits, if smaller add 0 in front
    while (digits.length < 3) { digits.unshift("0") }
    console.log(digits);
    return (
      <div className="days">
        {digits.map(digit => {
          return <CountdownDigit digit={digit}/>;
        })}
      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <h1>Trip to {this.props.title}</h1>
        <div className="days">
          <div className="clock">{this.renderDigits()}</div>
          <div className="label">Days</div>
        </div>
      </div>
    )
  }
}



export default Countdown;
