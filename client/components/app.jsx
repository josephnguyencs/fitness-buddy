import React from 'react';
import Header from './header';
import Table from './table';
import TableDays from './table-days';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: null,
  //     isLoading: true
  //   };
  // }

  // componentDidMount() {
  //   fetch('/api/health-check')
  //     .then(res => res.json())
  //     .then(data => this.setState({ message: data.message || data.error }))
  //     .catch(err => this.setState({ message: err.message }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  // render() {
  //   return this.state.isLoading
  //     ? <h1>Testing connections...</h1>
  //     : <h1>{this.state.message.toUpperCase()}</h1>;
  // }
  render() {
    return (
      <div>
        <Header />
        <TableDays />
        <Table />
      </div>
    );
  }
}

export default App;
