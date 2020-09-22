import React from 'react';
import TableRow2 from './table-row2';

class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        { name: 'curls', description: 'curl it', exerciseId: 1 },
        { name: 'pushups', description: 'push', exerciseId: 2 },
        { name: 'pull-ups', description: 'pull', exerciseId: 3 }
      ]
    };
  }

  render() {
    const tableData = this.state.exercises.map(item => {
      return (
        <TableRow2 key={item.exerciseId} name={item.name} />
      );
    });
    return (
      <div className="container">
        <table>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    );
  }

}

export default Table2;
