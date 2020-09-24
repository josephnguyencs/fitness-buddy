import React from 'react';
import CalorieCounterResult from './calorie-counter-result';

class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      weight: null,
      height: null,
      gender: null,
      activity: null,
      calories: null,
      view: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'gender' || name === 'activity') {
      this.setState({
        [name]: value
      });
    } else {
      this.setState({
        [name]: parseInt(value)
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const age = this.state.age;
    const weight = this.state.weight;
    const height = this.state.height;
    const gender = this.state.gender;
    const activity = this.state.activity;
    this.props.caloriesFunction(gender, age, weight, height, activity);
    this.setState({
      calories: this.props.calories,
      view: 'result'
    });
  }

  render() {
    const ageValue = this.state.age;
    const weightValue = this.state.weight;
    const heightValue = this.state.height;
    const genderValue = this.state.gender;
    const activityValue = this.state.activity;
    if (this.state.view === 'result') {
      return (
        <CalorieCounterResult values={this.state} calories={this.props.calories}/>
      );
    }
    return (
      <div className="container calorie-form">
        <h1>Your Info</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <select name="gender" value={genderValue} onChange={this.handleChange}>
              <option disabled selected value="null">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <input name="age" type="text" placeholder="Age" value={ageValue} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input name="weight" type="text" placeholder="Weight" value={weightValue} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input name="height" type="text" placeholder="Height" value={heightValue} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <select name="activity" value={activityValue} onChange={this.handleChange}>
              <option disabled selected value="null">Select</option>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="lightly-active">Lightly Active (light exercise/sport 1-3 days a week)</option>
              <option value="moderately-active">Moderately Active (moderate exercise/sport 3-5 days a week)</option>
              <option value="very-active">Very Active (hard exercise/sport 6-7 days a week)</option>
              <option value="extra-active">Extra Active (very hard exercise/sport and physical job or 2X training)</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CalorieCounter;
