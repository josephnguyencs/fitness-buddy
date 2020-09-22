import React from 'react';
import Header from './header';
import Table from './table';
import TableDays from './table-days';
import Footer from './footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '1',
      exercises: [],
      message: null,
      isLoading: true
    };
    this.setDay = this.setDay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setExercises(this.state.day);
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

  render() {
    return (
      <div className="container">
        <Header />
        <TableDays handleClick={this.handleClick}/>
        <Table exercises={this.state.exercises} />
        <Footer/>
      </div>
    );
  }
}

export default App;
