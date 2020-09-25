import React from 'react';
import TimerModal from './timer-modal';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 'Workout',
      view: 'stopwatch',
      workoutMin: '00',
      workoutSec: '00',
      restMin: '00',
      restSec: '00'
    };
    this.countdown = this.countdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.workoutCountdown = this.workoutCountdown.bind(this);
    this.restCountdown = this.restCountdown.bind(this);
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

  workoutCountdown(workoutMin, workoutSec, restMin, restSec) {
    let newSec = workoutSec;
    let newMin = workoutMin;
    this.workoutInverval = setInterval(() => {
      this.setState(({ workoutSec: parseInt(newSec) - 1 }), state => {
        console.log(this.state.workoutSec);
        newSec--;
        if (this.state.workoutMin > 0 && this.state.workoutSec < 0) {
          this.setState({
            workoutMin: parseInt(newMin) - 1,
            workoutSec: 59
          });
          newMin--;
        } else if (this.state.workoutSec < 10 && this.state.workoutSec >= 0) {
          this.setState({ workoutSec: '0' + parseInt(this.state.workoutSec) });
        }
        if (this.state.workoutSec <= 0 && this.state.workoutMin === '00') {
          clearInterval(this.workoutInverval);
          this.setState({
            workoutMin: workoutMin,
            workoutSec: workoutSec,
            timer: 'Rest'
          });
          this.restCountdown(workoutMin, workoutSec, restMin, restSec);
        }
      });
    }, 1000);
  }

  restCountdown(workoutMin, workoutSec, restMin, restSec) {
    let newMin = restMin;
    let newSec = restSec;
    this.restInterval = setInterval(() => {
      this.setState(({ restSec: parseInt(newSec) - 1 }), state => {
        console.log(this.state.restSec);
        newSec--;
        if (this.state.restMin > 0 && this.state.restSec < 0) {
          this.setState({
            restMin: parseInt(newMin) - 1,
            restSec: 59
          });
          newMin--;
        } else if (this.state.restSec < 10 && this.state.restSec >= 0) {
          this.setState({ restSec: '0' + parseInt(this.state.restSec) });
        }
        if (this.state.restSec <= 0 && this.state.restMin === '00') {
          clearInterval(this.restInterval);
          this.setState({
            restMin: restMin,
            restSec: restSec,
            timer: 'Workout'
          });
          this.workoutCountdown(workoutMin, workoutSec, restMin, restSec);
        }
      });
    }, 1000);
  }

  countdown(workoutMin, workoutSec, restMin, restSec) {
    this.workoutCountdown(workoutMin, workoutSec, restMin, restSec);
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
    if (this.state.timer === 'Rest') {
      return (
        <div className="clock-container">
          <div className="clock">
            <h1>{this.state.restMin}:{this.state.restSec}</h1>
          </div>
          <h1 className="timer-state">{this.state.timer}</h1>
          <button onClick={this.handleClick} className="set-time">Set Time</button>
        </div>
      );
    } else {
      return (
        <div className="clock-container">
          <div className="clock">
            <h1>{this.state.workoutMin}:{this.state.workoutSec}</h1>
          </div>
          <h1 className="timer-state">{this.state.timer}</h1>
          <button onClick={this.handleClick} className="set-time">Set Time</button>
        </div>
      );
    }
  }
}

export default Stopwatch;
