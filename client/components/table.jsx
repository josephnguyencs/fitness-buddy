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
          <div className="container">
            <h3 className="text-center mt-5">No exercises added.</h3>
            <div className="row justify-content-center">
              <button className="btn btn-success margin-top-12 text-center" onClick={this.handleClick}>Add Exercise</button>
            </div>
          </div>
        </>
      );
    }
    return (
      <div>
        <div className="container">
          <table className="w-95 mx-auto">
            <tbody className="text-center">
              {tableData}
            </tbody>
          </table>

          <div className="text-center">
            <button className="btn btn-success mt-5" onClick={this.handleClick}>Add Exercise</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Table;
