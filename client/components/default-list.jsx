import React from 'react';
import Header from './header';
import TableDays from './table-days';

function DefaultList() {
  return (
    <div className="container">
      <Header />
      <TableDays />
      <div className="card">
        <div className="card-header text-center mb-2">Add Entry</div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="col-2">Diamond Pushups</td>
              <a className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</a>
            </tr>
            <tr>
              <td className="col-2">Diamond Pushups</td>
              <a className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</a>
            </tr>
            <tr>
              <td className="col-2">Diamond Pushups</td>
              <a className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</a>
            </tr>
            <tr>
              <td className="col-2">Diamond Pushups</td>
              <a className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</a>
            </tr>
            <tr>
              <td className="col-2">Diamond Pushups</td>
              <a className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</a>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DefaultList;
