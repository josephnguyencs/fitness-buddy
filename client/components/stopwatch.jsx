import React from 'react';
import TimerModal from './timer-modal';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'stopwatch',
      workoutMin: '00',
      workoutSec: '00',
      restMin: '00',
      restSec: '00'
    };
    this.countdown = this.countdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.workoutInverval = null;
    this.restInterval = null;
  }

  handleClick() {
    if (this.state.view === 'stopwatch') {
      this.setState({ view: 'timer-modal' });
    } else {
      this.setState({
        view: 'stopwatch'
      });
    }
  }

  onChange(event) {
    const name = event.target.name;
    const value = parseInt(event.target.value);
    this.setState({ [name]: value });
  }

  countdown(workoutMin, workoutSec, restMin, restSec) {
    this.workoutInverval = setInterval(() => {
      this.setState(({ workoutSec: parseInt(this.state.workoutSec) - 1 }), state => {
        if (this.state.workoutMin > 0 && this.state.workoutSec < 0) {
          this.setState({
            workoutMin: parseInt(this.state.workoutMin) - 1,
            workoutSec: 59
          });
        } else if (this.state.workoutSec < 10 && this.state.workoutSec >= 0) {
          this.setState({ workoutSec: '0' + parseInt(this.state.workoutSec) });
        }
        if (this.state.workoutSec <= 0 && this.state.workoutMin === '00') {
          clearInterval(this.workoutInverval);
          this.setState({
            workoutMin: '00',
            workoutSec: '00'
          });
        }
      });
    }, 1000);
    this.restInverval = setInterval(() => {
      this.setState(({ restSec: parseInt(this.state.restSec) - 1 }), state => {
        if (this.state.restMin > 0 && this.state.restSec < 0) {
          this.setState({
            restMin: parseInt(this.state.restMin) - 1,
            restSec: 59
          });
        } else if (this.state.restSec < 10 && this.state.restSec >= 0) {
          this.setState({ restSec: '0' + parseInt(this.state.restSec) });
        }
        if (this.state.restSec <= 0 && this.state.restMin === '00') {
          clearInterval(this.restInverval);
          this.setState({
            restMin: '00',
            restSec: '00'
          });
        }
      });
    }, 1000);
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
    if (this.state.workoutMin === '00' && this.state.workoutSec === '00') {
      return (
        <div className="clock-container">
          <div className="clock">
            <h1>{this.state.restMin}:{this.state.restSec}</h1>
          </div>
          <button onClick={this.handleClick} className="set-time">Set Time</button>
        </div>
      );
    } else {
      return (
        <div className="clock-container">
          <div className="clock">
            <h1>{this.state.workoutMin}:{this.state.workoutSec}</h1>
          </div>
          <button onClick={this.handleClick} className="set-time">Set Time</button>
        </div>
      );
    }
  }
}

export default Stopwatch;
