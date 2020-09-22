import React from 'react';

function DefaultAndCustomModal(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center">Add Entry</div>
        <div className="card-body">
          <p className="card-text">Choose Default or Custom</p>
          <a href="#" className="btn btn-success btn-block" onClick={props.handleDefaultClick}>Default</a>
          <a href="#" className="btn btn-success btn-block" onClick={props.handleCustomClick}>Custom</a>
          <a href="#" className="btn btn-danger btn-block col-5 mx-auto" onClick={props.handleCancelClick}>Cancel</a>
        </div>
      </div>
    </div>
  );
}

export default DefaultAndCustomModal;
