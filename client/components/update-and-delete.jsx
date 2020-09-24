import React from 'react';

function UpdateAndDelete(props) {

  return (
    <td>
      <button type="button" id={props.id} className="btn btn-success btn-sm ml-5" onClick={props.handleUpdateClick}>Update</button>
      <button
        type="button"
        className="btn btn-danger btn-sm ml-1"
        onClick={props.handleDeleteClick}
        id={props.id}
      >Delete</button>

    </td>
  );
}

export default UpdateAndDelete;
