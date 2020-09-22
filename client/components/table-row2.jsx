import React from 'react';
import UpdateAndDelete from './update-and-delete';

class TableRow2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: []
    };
  }

  handleClick() {
    if (this.event.target.id === 'delete') {
      fetch('', {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => this.setState({ routine: data }));
    } else if (this.event.target.id === 'update') {
      fetch('', {
        method: 'PUT'
      })
        .then(res => res.json())
        .then(data => this.setState({ routine: data }));
    }
  }

  render() {
    return (
      <tr className="border border-primary rounded">
        <td>{this.props.name}</td>
        <UpdateAndDelete onClick={this.handleClick} />
      </tr>
    );
  }
}

export default TableRow2;