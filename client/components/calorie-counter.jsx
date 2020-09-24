import React from 'react';

class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      weight: null,
      height: null,
      gender: null,
      activity: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const calorie = {
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height,
      gender: this.state.gender,
      activity: this.state.activity
    };

  }

  getCalories() {
    const maleCalories = 66 + (6.3 * this.state.weight) + (12.9 * this.state.height) - (6.8 * this.state.age);
    const femaleCalories = 655 + (4.3 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.age);
    if (this.state.gender === 'male') {
      switch (this.state.activity) {
        case ('sedentary'):
          console.log('test');
      }
    } else if (this.state.gender === 'female') {
      const caloriesBeforeActivity = femaleCalories;
    }
  }

  calculateCalories() {

  }

  render() {
    const ageValue = this.state.age;
    const weightValue = this.state.weight;
    const heightValue = this.state.height;
    const genderValue = this.state.gender;
    const activityValue = this.state.activity;
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
