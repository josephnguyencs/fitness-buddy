import React from 'react';
import TableRow from './table-row';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: [{ name: 'curls', description: 'curl it' }, { name: 'pushups', description: 'push' }]
      // monday: null
    };
  }

  // addMove(newMove) {
  //   fetch('', { method: 'GET' }
  //     .then(res => res.json())
  //     .then(data => this.setState({ day: data }))
  //   );
  // }

  render() {
    return (
      <div className="container">
        <table><TableRow /></table>
      </div>
    );
  }

}

export default Table;
