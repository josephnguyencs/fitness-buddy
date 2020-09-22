import React from 'react';
import Header from './header';
import Table from './table';
import TableDays from './table-days';
import DefaultAndCustomModal from './default-and-custom-modal';
import Custom from './custom';
import DefaultList from './default-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'table',
      day: '1',
      exercises: [],
      message: null,
      isLoading: true
    };
    this.setDay = this.setDay.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDefaultClick = this.handleDefaultClick.bind(this);
    this.handleCustomClick = this.handleCustomClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
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

  render() {
    if (this.state.view === 'table') {
      return (
        <div>
          <Header />
          <TableDays handleClick={this.handleClick}/>
          <Table exercises={this.state.exercises} handleClick={this.handleAddClick}/>
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
          <DefaultList handleCancelClick={this.handleCancelClick}/>
        </>
      );
    } else if (this.state.view === 'custom') {
      return (
        <>
          <Custom handleCancelClick={this.handleCancelClick}/>
        </>
      );
    }
  }
}

export default App;
