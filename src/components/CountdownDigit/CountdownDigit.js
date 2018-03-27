import React from 'react';
import './CountdownDigit.css';

export default class CountdownDigit extends React.Component {
  render() {
      return (
        <span className="day">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="digit">{this.props.digit}</div>
        </span>
      )
  }
}
