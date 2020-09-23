import React from 'react';
import UpdateAndDelete from './update-and-delete';
import Description from './description';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: [],
      isClicked: false
    };
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    // console.log(this.props);
    if (this.state.isClicked === true) {
      return (
        <tbody>
          <tr>
            <td onClick={this.showDescription}>{this.props.name}</td>
            <UpdateAndDelete
              onClick={this.handleClick}
              handleDeleteClick={this.props.handleDeleteClick}
              handleUpdateClick={this.props.handleUpdateClick}
              id={this.props.id}
            />
          </tr>
          <tr>
            <Description description={this.props.description} />
          </tr>
        </tbody>
      );
    } else {
      return (
        <tbody>
          <tr>
            <td onClick={this.showDescription}>{this.props.name}</td>
            <UpdateAndDelete
              onClick={this.handleClick}
              handleDeleteClick={this.props.handleDeleteClick}
              handleUpdateClick={this.props.handleUpdateClick}
              id={this.props.id}
            />
          </tr>
        </tbody>
      );
    }
  }
}

export default TableRow;
