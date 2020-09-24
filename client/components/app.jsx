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
      view: 'calorie',
      day: '1',
      exercises: [],
      defaultExercises: [],
      activeCard: {},
      message: null,
      isLoading: true,
      calories: 100
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
    this.updateCalories = this.updateCalories.bind(this);
    this.handleAddDefault = this.handleAddDefault.bind(this);
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

  updateCalories(gender, age, weight, height, activity) {
    let bmr = null;
    if (gender === 'male') {
      bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
    } else {
      bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
    }
    let calories = null;
    switch (activity) {
      case 'sedentary':
        calories = bmr * 1.2;
        break;
      case 'lightly-active':
        calories = bmr * 1.375;
        break;
      case 'moderately-active':
        calories = bmr * 1.55;
        break;
      case 'very-active':
        calories = bmr * 1.725;
        break;
      case 'extra-active':
        calories = bmr * 1.9;
        break;
      default:
        calories = 0;
    }
    const data = { calories: calories };
    fetch('/api/routine/calories', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(result => result.json())
      .then(data => this.setState({ calories: data.recommendedCalories }));
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
    const dayId = this.state.day;
    this.setState({
      view: 'table',
      activeCard: {
        exercise: '',
        description: '',
        dayId
      }
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

  handleAddDefault(event) {
    if (event.target.tagName === 'BUTTON') {
      const target = event.currentTarget;
      const day = this.state.day;
      const name = target.firstElementChild.firstElementChild.textContent;
      const desc = target.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.textContent;
      this.setState({
        activeCard: {
          exercise: name,
          description: desc,
          dayId: day
        }
      });
      this.setState({
        view: 'custom'
      });
    }
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
        <>
          <Header />
          <TableDays handleClick={this.handleClick}/>
          <Table
            exercises={this.state.exercises}
            handleClick={this.handleAddClick}
            handleDeleteClick={this.handleDeleteClick}
            handleUpdateClick={this.handleUpdateClick}
          />
        </>
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
          <DefaultList list={this.state.defaultExercises} handleCancelClick={this.handleCancelClick} handleAddDefault={this.handleAddDefault} />
        </>
      );
    } else if (this.state.view === 'custom') {
      return (
        <>
          <Custom setExercises={this.setExercises} updateExercises={this.updateExercises} activeCard={this.state.activeCard} handleCancelClick={this.handleCancelClick} day={this.state.day}/>
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
          <CalorieCounter caloriesFunction={this.updateCalories} calories={this.state.calories}/>
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
