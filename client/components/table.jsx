import React from 'react';
import TableRow from './table-row';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: [
        { name: 'curls', description: 'curl it', exerciseId: 1 },
        { name: 'pushups', description: 'push', exerciseId: 2 },
        { name: 'pull-ups', description: 'pull', exerciseId: 3 }
      ]
    };
  }

  // addMove(newMove) {
  //   fetch('', { method: 'GET' }
  //     .then(res => res.json())
  //     .then(data => this.setState({ day: data }))
  //   );
  // }

  render() {
    const tableData = this.state.monday.map(item => {
      return (
        <TableRow key={item.exerciseId} name={item.name} description={item.description}/>
      );
    });
    return (
      <div className="container border border-primary rounded">
        <table>
          {tableData}
        </table>
      </div>
    );
  }

}

export default Table;
