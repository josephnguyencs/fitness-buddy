import React from 'react';

function TimerModal(props) {
  return (
    <div className="fitness-modal-background">
      <div className="fitness-modal-content">
        <form>
          <i className="fas fa-times close-modal"></i>
          <h3 className="text-center">Workout Time</h3>
          <div className="form-row justify-content-center align-items-center">
            <div className="col-5 d-flex justify-content-end">
              <label className="sr-only" htmlFor="workout-time-minutes"></label>
              <input className="time-input" type="number" id="workout-time-minutes" name="workout-time-minutes" placeholder="00" min="0" max="59" />
            </div>
            <p className="d-inline time-seperator">:</p>
            <div className="col-5">
              <label className="sr-only" htmlFor="workout-time-seconds"></label>
              <input className="time-input" type="number" id="workout-time-seconds" name="workout-time-seconds" placeholder="00" min="0" max="59" />
            </div>
          </div>
          <h3 className="text-center mt-5">Rest Time</h3>
          <div className="form-row justify-content-center align-items-center ">
            <div className="col-5 d-flex justify-content-end">
              <label className="sr-only" htmlFor="rest-time-minutes"></label>
              <input className="time-input" type="number" id="rest-time-minutes" name="rest-time-minutes" placeholder="00" min="0" max="59" />
            </div>
            <p className="d-inline time-seperator">:</p>
            <div className="col-5">
              <label className="sr-only" htmlFor="rest-time-seconds"></label>
              <input className="time-input" type="number" id="rest-time-seconds" name="rest-time-seconds" placeholder="00" min="0" max="59" />
            </div>
          </div>
          <div className="form-row justify-content-center mt-5">
            <button className="btn btn-primary set-time">Set Time</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TimerModal;
