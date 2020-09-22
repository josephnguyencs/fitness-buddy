import React from 'react';
import Header from './header';
import TableDays from './table-days';

function Default() {
  return (
    <div className="container">
      <Header />
      <TableDays />
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
  );
}

export default Default;
