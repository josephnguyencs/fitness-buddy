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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setView('choose');
  }

  render() {
    const tableData = this.props.exercises.map(item => {
      return (
        <TableRow
          key={item.customExerciseId}
          name={item.exercise}
          description={item.description}
          setView={this.props.setView}
          handleDeleteClick={this.props.handleDeleteClick}
          handleUpdateClick={this.props.handleUpdateClick}
          id={item.customExerciseId}
        />
      );
    });
    const numberOfExercises = tableData.length;
    if (numberOfExercises === 0) {
      return (
        <>
          <h1 className="text-center">No exercises added.</h1>
          <div className="row justify-content-center">
            <button className="btn btn-success mt-5" onClick={this.handleClick}>Add Exercise</button>
          </div>
        </>
      );
    }
    return (
      <div>

        <table className="w-100">
          <tbody>
            {tableData}
          </tbody>
        </table>

        <div className="row justify-content-center">
          <button className="btn btn-success mt-5" onClick={this.handleClick}>Add Exercise</button>
        </div>
      </div>
    );
  }

}

export default Table;
