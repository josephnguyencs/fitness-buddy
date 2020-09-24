import React from 'react';
import Header from './header';

class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select',
      view: 'calorie',
      age: null,
      weight: null,
      height: null,
      gender: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ view: 'result' });
  }

  // getCalories() {
  //   const maleCalories = 66 + (6.3 * this.state.weight) + (12.9 * this.state.height) - (6.8 * this.state.age);
  //   const femaleCalories = 655 + (4.3 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.age);
  //   if (this.state.value === Male) {
  //     const caloriesBeforeActivity = maleCalories;
  //   } else {
  //     const caloriesBeforeActivity = femaleCalories;
  //   }

  // }

  render() {

    return (
      <div className="container text-center border border-primary">
        <Header />
        <h1>Your Info</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <select>
              <option disabled selected value="null">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Age" value={this.state.age}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Weight (lbs)" value={this.state.weight}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Height (inches)" value={this.state.height}/>
          </div>
          <div className="form-group">
            <select>
              <option disabled selected value="null">Select</option>
              <option value="Sedentary">Sedentary (little or no exercise)</option>
              <option value="Lightly Active">Lightly Active (light exercise/sport 1-3 days a week)</option>
              <option value="Moderately Active">Moderately Active (moderate exercise/sport 3-5 days a week)</option>
              <option value="Very Active">Very Active (hard exercise/sport 6-7 days a week)</option>
              <option value="Extra Active">Extra Active (very hard exercise/sport & physical job or 2X training)</option>
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
