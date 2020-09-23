import React from 'react';

function UpdateAndDelete(props) {

  return (
    <td>
      <button type="button" id="update" className="btn btn-primary u-d-buttons" onClick={props.handleUpdateClick}>Update</button>
      <button type="button" id="delete" className="btn btn-danger u-d-buttons">Delete</button>
    </td>
  );
}

export default UpdateAndDelete;
