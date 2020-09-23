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

  handleClick() {
    this.props.handleClick('choose');
  }

  render() {
    const tableData = this.props.exercises.map(item => {
      return (
        <TableRow
          key={item.customExerciseId}
          name={item.exercise}
          description={item.description}
          handleDeleteClick={this.props.handleDeleteClick}
          id={item.customExerciseId}
        />
      );
    });
    const numberOfExercises = tableData.length;
    if (numberOfExercises === 0) {
      return (
        <h1 className="text-center">No exercises added.</h1>
      );
    }
    return (
      <div>
        <div className="container border border-primary rounded">
          <table>
            {tableData}
          </table>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-success mt-5" onClick={this.props.handleClick}>Add Exercise</button>
        </div>
      </div>
    );
  }

}

export default Table;
