import React from 'react';
import Header from './header';
import Table from './table';
import TableDays from './table-days';
import DefaultAndCustomModal from './default-and-custom-modal';
import Custom from './custom';
import DefaultList from './default-list';
// import Footer from './footer';
import UpdateExercise from './update-exercise';
import CalorieCounter from './calorie-counter';
import CalorieCounterResult from './calorie-counter-result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'table',
      day: '1',
      exercises: [],
      defaultExercises: [],
      activeCard: {},
      message: null,
      isLoading: true
    };
    this.setDay = this.setDay.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDefaultClick = this.handleDefaultClick.bind(this);
    this.handleCustomClick = this.handleCustomClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.updateExercises = this.updateExercises.bind(this);
    this.setExercises = this.setExercises.bind(this);
    this.getDefaultExercises = this.getDefaultExercises.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.setExercises(this.state.day);
    this.getDefaultExercises();
  }

  getDefaultExercises() {
    fetch('/api/routine')
      .then(result => result.json())
      .then(data => {
        this.setState({ defaultExercises: data });
      });
  }

  setExercises(dayId) {
    fetch(`/api/routine/day/${dayId}`)
      .then(result => result.json())
      .then(data => this.setState({
        exercises: data
      }))
      .catch(err => console.error(err));
  }

  setDay(dayId) {
    this.setState({
      day: dayId
    });
  }

  handleClick(event) {
    const dayId = event.currentTarget.getAttribute('id');
    this.setDay(dayId);
    this.setExercises(dayId);
  }

  handleAddClick() {
    this.setState({
      view: 'choose'
    });
  }

  handleDefaultClick() {
    this.setState({
      view: 'default'
    });
  }

  handleCustomClick() {
    this.setState({
      view: 'custom'
    });
  }

  handleCancelClick() {
    this.setState({
      view: 'table'
    });
  }

  handleUpdateClick(event) {
    const exercises = this.state.exercises.map(element => ({ ...element }));
    const currentExerciseId = parseInt(event.currentTarget.getAttribute('id'), 10);
    exercises.forEach(element => {
      if (element.customExerciseId === currentExerciseId) {
        this.setState({
          activeCard: element
        });
      }
    });
    this.setState({
      view: 'update'
    });
  }

  updateExercises(exercise) {
    const exercises = this.state.exercises.map(element => ({ ...element }));
    exercises.push(exercise);
  }

  handleDeleteClick(event) {
    const itemId = event.currentTarget.getAttribute('id');
    const data = { customExerciseId: itemId, dayId: this.state.day };
    fetch('/api/routine', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.error(err));
    this.setExercises(this.state.day);
  }

  render() {

    if (this.state.view === 'table') {
      return (
        <div className="container">
          <Header />
          <TableDays handleClick={this.handleClick}/>
          <Table
            exercises={this.state.exercises}
            handleClick={this.handleAddClick}
            handleDeleteClick={this.handleDeleteClick}
            handleUpdateClick={this.handleUpdateClick}
          />
        </div>
      );
    } else if (this.state.view === 'choose') {
      return (
        <>
          <Header />
          <DefaultAndCustomModal handleCancelClick={this.handleCancelClick} handleDefaultClick={this.handleDefaultClick} handleCustomClick={this.handleCustomClick}/>
        </>
      );
    } else if (this.state.view === 'default') {
      return (
        <>
          <DefaultList list={this.state.defaultExercises} handleCancelClick={this.handleCancelClick}/>
        </>
      );
    } else if (this.state.view === 'custom') {
      return (
        <>
          <Custom setExercises={this.setExercises} updateExercises={this.updateExercises} handleCancelClick={this.handleCancelClick} day={this.state.day}/>
        </>
      );
    } else if (this.state.view === 'update') {
      return (
        <>
          <UpdateExercise setExercises={this.setExercises} handleCancelClick={this.handleCancelClick} exercise={this.state.activeCard} day={this.state.day}/>
        </>
      );
    } else if (this.state.view === 'calorie') {
      return (
        <>
          <CalorieCounter />
        </>
      );
    } else if (this.state.view === 'result') {
      return (
        <>
          <CalorieCounterResult/>
        </>
      );
    }
  }
}

export default App;
