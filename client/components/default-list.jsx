import React from 'react';
import Header from './header';
import TableDays from './table-days';

function DefaultList(props) {
  return (
    <>
      <div className="container">
        <Header />
        <TableDays />
        <div className="card">
          <div className="card-header text-center mb-2">Add Entry</div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="col-2">Diamond Pushups</td>
                <td className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</td>
              </tr>
              <tr>
                <td className="col-2">Diamond Pushups</td>
                <td className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</td>
              </tr>
              <tr>
                <td className="col-2">Diamond Pushups</td>
                <td className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</td>
              </tr>
              <tr>
                <td className="col-2">Diamond Pushups</td>
                <td className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</td>
              </tr>
              <tr>
                <td className="col-2">Diamond Pushups</td>
                <td className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <button className="btn btn-danger" onClick={props.handleCancelClick}>Return To Planner</button>
      </div>
    </>
  );
}

export default DefaultList;
