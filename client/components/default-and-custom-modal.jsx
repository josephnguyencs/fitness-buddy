import React from 'react';

function defaultAndCustomModal() {

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="col">
        <h5 className="text-center mb-5">Add Entry</h5>
        <button className="btn btn-success btn-block mb-3 mx-auto col-3">Default</button>
        <button className="btn btn-success btn-block mb-3 mx-auto col-3">Custom</button>
        <button className="btn btn-danger btn-block mx-auto col-2">Cancel</button>
      </div>
    </div>
  );
}

export default defaultAndCustomModal;
