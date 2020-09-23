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

  // handleClick() {
  //   if (this.event.target.id === 'delete') {
  //     fetch('', {
  //       method: 'DELETE'
  //     })
  //       .then(res => res.json())
  //       .then(data => this.setState({ routine: data }));
  //   } else if (this.event.target.id === 'update') {
  //     fetch('', {
  //       method: 'PUT'
  //     })
  //       .then(res => res.json())
  //       .then(data => this.setState({ routine: data }));
  //   }
  // }

  showDescription() {
    // if (event.target.this) {
    //   this.setState({
    //     isClicked: true
    //   });
    // }
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    // console.log(this.props);
    if (this.state.isClicked === true) {
      return (
        <tbody>
          <tr>
            <td onClick={this.showDescription}>{this.props.name}</td>
            <UpdateAndDelete id={this.props.id} handleUpdateClick={this.props.handleUpdateClick} />
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
            <UpdateAndDelete id={this.props.id} handleUpdateClick={this.props.handleUpdateClick}/>
          </tr>
        </tbody>
      );
    }
  }
}

export default TableRow;
