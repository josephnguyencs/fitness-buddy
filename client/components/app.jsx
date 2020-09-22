import React from 'react';
import Header from './header';
import Table from './table';
import TableDays from './table-days';

// import Table2 from './table2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '1',
      message: null,
      isLoading: true
    };
    this.setDay = this.setDay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setDay(dayId) {
    this.setState({
      day: dayId
    });
  }

  handleClick(event) {
    const dayId = event.currentTarget.getAttribute('id');
    this.setDay(dayId);
  }

  render() {
    return (
      <div>
        <Header />
        <TableDays handleClick={this.handleClick}/>
        <Table />

        {/* <Table2 /> */}
      </div>
    );
  }
}

export default App;
