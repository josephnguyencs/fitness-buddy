import React from 'react';
import CalorieCounterResult from './calorie-counter-result';
import Header from './header';

class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderselect: 'default',
      activitylevel: 'default',
      age: '',
      weight: '',
      height: '',
      calories: null,
      view: 'calorie'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'genderselect' || name === 'activitylevel') {
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
    const gender = this.state.genderselect;
    const activity = this.state.activitylevel;
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
    const genderValue = this.state.genderselect;
    const activityValue = this.state.activitylevel;
    if (this.state.view === 'result') {
      return (
        <CalorieCounterResult values={this.state} calories={this.props.calories}/>
      );
    }
    return (
      <div>
        <Header />
        <div className="container text-center border border-primary">
          <h1 className="calorie-title">Your Info</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <select name="genderselect" value={genderValue} onChange={this.handleChange}>
                <option disabled value="default">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <input name="age" type="text" placeholder="Age" value={ageValue} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input name="weight" type="text" placeholder="Weight (lbs)" value={weightValue} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input name="height" type="text" placeholder="Height (inches)" value={heightValue} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <select name="activitylevel" className="form-control form-control-sm" value={activityValue} onChange={this.handleChange}>
                <option disabled className="calorie-option" value="default">Activity Level</option>
                <option className="calorie-option" value="sedentary">Sedentary (little or no exercise)</option>
                <option className="calorie-option" value="lightly-active">Lightly Active (light exercise/sport 1-3 days a week)</option>
                <option className="calorie-option" value="moderately-active">Moderately Active (moderate exercise/sport 3-5 days a week)</option>
                <option className="calorie-option" value="very-active">Very Active (hard exercise/sport 6-7 days a week)</option>
                <option className="calorie-option" value="extra-active">Extra Active (very hard exercise/sport & physical job or 2X training)</option>
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
