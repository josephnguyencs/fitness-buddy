import React from 'react';

function DefaultAndCustomModal() {

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="card">
        <div className="card-header text-center">Add Entry</div>
        <div className="card-body">
          <p className="card-text">Choose Default or Custom</p>
          <a href="#" className="btn btn-success btn-block">Default</a>
          <a href="#" className="btn btn-success btn-block">Custom</a>
          <a href="#" className="btn btn-danger btn-block col-5 mx-auto">Cancel</a>
        </div>
      </div>
    </div>
  );
}

export default DefaultAndCustomModal;
