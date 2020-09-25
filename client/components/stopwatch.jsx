import React from 'react';
import TimerModal from './timer-modal';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'stopwatch',
      workoutMin: 0,
      workoutSec: 0,
      restMin: 0,
      restSec: 0
    };
    this.countdown = this.countdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick() {
    if (this.state.view === 'stopwatch') {
      this.setState({ view: 'timer-modal' });
    } else {
      this.setState({ view: 'stopwatch' });
    }
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  countdown(workoutMin, workoutSec, restMin, restSec) {
    this.interval = setInterval(() => {
      this.setState(({ workoutSec: this.state.workoutSec - 1 }), state => {
        if (state.workoutSec === 0) {
          clearInterval(this.interval);
        }
      });
    }, 1000);
    if (this.state.workoutSec === 0) {
      clearInterval(this.interval);
    }
    this.handleClick();
  }

  render() {
    if (this.state.view === 'timer-modal') {
      return (
        <>
          <TimerModal countdown={this.countdown} onChange={this.onChange} handleClick={this.handleClick} values={this.state}/>
        </>
      );
    }
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
