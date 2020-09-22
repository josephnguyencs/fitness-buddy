import React from 'react';
import TableRow from './table-row';

class Table2 extends React.Component {
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

  render() {
    const tableData = this.state.monday.map(item => {
      return (
        <TableRow key={item.exerciseId} name={item.name} />
      );
    });
    return (
      <div className="container border border-primary rounded">
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
