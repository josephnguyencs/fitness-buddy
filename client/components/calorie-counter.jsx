import React from 'react';
import Header from './header';

class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderselect: 'default',
      activitylevel: 'default',
      age: '',
      weight: '',
      height: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    // this.setState({ view: 'result' });
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
      <div>
        <Header />
        <div className="container text-center border border-primary">
          <h1 className="calorie-title">Your Info</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <select name="genderselect" value={this.state.genderselect} onChange={this.handleChange}>
                <option disabled value="default">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <input name="age" type="text" placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input name="weight" type="text" placeholder="Weight (lbs)" value={this.state.weight} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input name="height" type="text" placeholder="Height (inches)" value={this.state.height} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <select name="activitylevel" className="form-control form-control-sm" value={this.state.activitylevel} onChange={this.handleChange}>
                <option disabled className="calorie-option" value="default">Activity Level</option>
                <option className="calorie-option" value="Sedentary">Sedentary (little or no exercise)</option>
                <option className="calorie-option" value="Lightly Active">Lightly Active (light exercise/sport 1-3 days a week)</option>
                <option className="calorie-option" value="Moderately Active">Moderately Active (moderate exercise/sport 3-5 days a week)</option>
                <option className="calorie-option" value="Very Active">Very Active (hard exercise/sport 6-7 days a week)</option>
                <option className="calorie-option" value="Extra Active">Extra Active (very hard exercise/sport & physical job or 2X training)</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-success calorie-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CalorieCounter;
