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

  render() {
    const tableData = this.props.exercises.map(item => {
      return (
        <TableRow key={item.customExerciseId} name={item.exercise} description={item.description}/>
      );
    });
    return (
      <div className="border border-primary rounded">
        <table>
          {tableData}
        </table>
      </div>
    );
  }

}

export default Table;
