import React from 'react';
import './Countdown.less';

class Countdown extends React.Component {
  renderDiffDays() {
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let today = new Date(); // date today
    let secondDate = new Date([this.props.date.dateYear, this.props.date.dateMonth, this.props.date.dateDay]); // countdown date
    //difference between days
    let diffDays = Math.ceil(Math.abs((today.getTime() - secondDate.getTime())/(oneDay)));
    if (diffDays < 100) {
      return '0' + diffDays;
    } else if (diffDays < 10) {
      return '00' + diffDays;
    } else {
      return diffDays;
    }
  }
  render() {
    return (
      <div class="container">
        <h1>{this.props.date.title}</h1>
        <div class="days">
          <div class="clock">{this.renderDiffDays()}</div>
          <div class="label">Days</div>
        </div>
      </div>
    )
  }
}



export default Countdown;
