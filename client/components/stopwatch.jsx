import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      workout: null,
      rest: null
    };
    this.countdown = this.countdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  countdown(workout, rest) {

  }

  render() {
    return (
      <div className="clock-container">
        <div className="clock">
          <h1>00:00</h1>
        </div>
        <button onClick={this.handleClick} className="set-time">Set Time</button>
      </div>
    );
  }
}

export default Stopwatch;
