import React from 'react';

class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select',
      view: 'calorie'
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

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <select>
            <option disabled selected value="null">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Age" value="Age"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Weight" value="Weight"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Height" value="Height"/>
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
    );
  }
}

export default CalorieCounter;
