import React from 'react';
import Header from './header';
import TableDays from './table-days';

function Custom(props) {
  return (
    <div className="container">
      <Header />
      <TableDays />
      <div className="card">
        <div className="card-header text-center">Add Entry</div>
        <input type="text" className="form-control" placeholder="Title"></input>
        <textarea className="form-control" placeholder="Enter text here.." style={{ height: '15rem' }}></textarea>
      </div>
      <div className="row">
        <div className="col text-center">
          <a className="btn btn-success col-2 mt-2 mr-2" href="#" role="button">Add</a>
          <a className="btn btn-danger col-2 mt-2" href="#" role="button" onClick={props.handleCancelClick}>Cancel</a>
        </div>
      </div>
    </div>
  );
}

export default Custom;
