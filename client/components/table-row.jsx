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

        <>
          <div>
            <tr className="text-right">
              <td onClick={this.showDescription}>{this.props.name}</td>
              <UpdateAndDelete
                onClick={this.handleClick}
                handleDeleteClick={this.props.handleDeleteClick}
                handleUpdateClick={this.props.handleUpdateClick}
                id={this.props.id}
              />
            </tr>
            <tr className="text-left">
              <Description description={this.props.description} />
            </tr>
          </div>
        </>

      );
    } else {
      return (

        <>

          <tr className="text-left">
            <td onClick={this.showDescription}>{this.props.name}</td>
            <UpdateAndDelete
              onClick={this.handleClick}
              handleDeleteClick={this.props.handleDeleteClick}
              handleUpdateClick={this.props.handleUpdateClick}
              id={this.props.id}
            />
          </tr>

        </>

      );
    }
  }
}

export default TableRow;
