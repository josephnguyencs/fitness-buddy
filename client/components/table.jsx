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
    // fillTable() {
    const tableData = this.state.monday.map(item => {
      return (
      // item.name;
        <TableRow key={item.exerciseId} name={item.name}/>
      );
    });
    // }
    // console.log(tableData);
    return (
      <div className="container border border-primary rounded">
        <table>
          <tbody>
            {/* <TableRow name={this.state.monday[0].name}/>
          <TableRow name={this.state.monday[1].name}/> */}
            {tableData}
          </tbody>
        </table>
      </div>
    );
  }

}

export default Table;
