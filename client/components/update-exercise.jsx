import React from 'react';
import Header from './header';

class UpdateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      dayId: this.props.day
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h2 className="text-center mt-3">Update Entry</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="sr-only">Exercise Name</label>
            <input type="text" className="form-control" id="name" name="name"
              placeholder="Exercise Name" defaultValue={this.props.exercise.exercise} onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="desc" className="sr-only">Exercise Description</label>
            <textarea className="form-control" name="desc" id="desc" rows="10"
              placeholder="Describe your exercise here..." defaultValue={this.props.exercise.description}
              onChange={this.handleDescChange}></textarea>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-success">Update Exercise</button>
            <button type="button" className="btn btn-danger ml-3" onClick={this.props.handleCancelClick}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateExercise;
