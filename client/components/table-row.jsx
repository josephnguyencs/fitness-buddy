import React from 'react';
import UpdateAndDelete from './update-and-delete';

class TableRow extends React.Component {
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
      <div className="container">
        <tbody>
          <tr>
            <td>push-ups</td>
            <UpdateAndDelete onClick={this.handleClick}/>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default TableRow;
