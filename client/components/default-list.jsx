import React from 'react';
import Header from './header';
import TableDays from './table-days';

function DefaultList(props) {
  return (
    <div>
      <Header />
      <TableDays />
      <div className="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                    Buddy Parts
              </button>
            </h2>
          </div>
        </div>
      </div>
      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="text-center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Chest and legs</td>
                <td className="float-right"><a className="btn btn-sm btn-success" href="#">Add</a></td>
              </tr>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </div>
            </tbody>
          </table>

        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <button className="btn btn-danger" onClick={props.handleCancelClick}>Return To Planner</button>
      </div>
    </div>
  );
}

export default DefaultList;
