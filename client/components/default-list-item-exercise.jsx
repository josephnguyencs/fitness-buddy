import React from 'react';

function Exercises(props) {
  const exercises = [];
  props.list.forEach(element => {
    if (element.bodyPart === props.bodyPart) {
      exercises.push(
        <div className="card row" key={element.exerciseId}>
          <div className="card-header row justify-content-between align-items-center collapsed  cursor-pointer"
            id={`exerciseHeading${element.exerciseId}`} data-toggle="collapse"
            data-target={`#collapseInner${element.exerciseId}`} aria-expanded="true"
            aria-controls={`collapseInner${element.exerciseId}`} >
            <div className="col-9">
              <h5>
                {element.exercise}
              </h5>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <button className="btn btn-success btn-block">
                    Add
              </button>
            </div>
          </div>
          <div id={`collapseInner${element.exerciseId}`} className="collapse" data-parent={`#${props.bodyPart}-exerciseAccordion`} aria-labelledby={`exerciseHeading${element.exerciseId}`}>
            <div className="card-body">
              <div>
                <p>
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div className={`${props.bodyPart}-accordion-inner`}>
        <div className="accordion" id={`${props.bodyPart}-exerciseAccordion`} >
          {exercises}
        </div>
      </div>
    </>
  );
}

export default Exercises;
