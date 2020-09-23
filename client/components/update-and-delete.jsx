import React from 'react';

function UpdateAndDelete(props) {

  return (
    <td>
      <button type="button" id={props.id} className="btn btn-primary u-d-buttons" onClick={props.handleUpdateClick}>Update</button>
      <button
        type="button"
        className="btn btn-danger u-d-buttons"
        onClick={props.handleDeleteClick}
        id={props.id}
      >Delete</button>
    </td>
  );
}

export default UpdateAndDelete;
