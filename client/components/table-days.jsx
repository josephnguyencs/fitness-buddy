import React from 'react';

function TableDays(props) {

  return (
    <div>
      <button type="button" className="btn btn-primary button day-button" id="1" onClick={props.handleClick}>Sunday</button>
      <button type="button" className="btn btn-primary button day-button" id="2" onClick={props.handleClick}>Monday</button>
      <button type="button" className="btn btn-primary button day-button" id="3" onClick={props.handleClick}>Tuesday</button>
      <button type="button" className="btn btn-primary button day-button" id="4" onClick={props.handleClick}>Wednesday</button>
      <button type="button" className="btn btn-primary button day-button" id="5" onClick={props.handleClick}>Thursday</button>
      <button type="button" className="btn btn-primary button day-button" id="6" onClick={props.handleClick}>Friday</button>
      <button type="button" className="btn btn-primary button day-button" id="7" onClick={props.handleClick}>Saturday</button>
    </div>
  );
}

export default TableDays;
