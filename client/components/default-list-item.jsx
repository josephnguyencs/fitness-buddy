import React from 'react';

function DefaultListItem(props) {
  const list = props.list.list.map(item => {
    if (item.bodyPart === 'Chest') {
      return (
        <div key={item.exerciseId}>
          <h3 id={item.exerciseId}>
            {item.exercise}
          </h3>
          <button className="btn btn-success">
            Add
          </button>
        </div>
      );
    }
  });

  return (
    <div>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Chest
                </button>
              </h2>
            </div>
            <div id="collapseOne" className="collapse" data-parent="#accordionExample" aria-labelledby="headingOne">
              <div className="card-body">
                {list}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  Chest
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordionExample" aria-labelledby="headingTwo">
              <div className="card-body">
                {list}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <button className="btn btn-danger" onClick={props.list.handleCancelClick}>Return To Planner</button>
      </div>
    </div>
  );
}

export default DefaultListItem;
