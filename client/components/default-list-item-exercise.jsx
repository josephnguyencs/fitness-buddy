import React from 'react';

function Exercises(props) {
  const exercises = [];
  props.list.forEach(element => {
    if (element.bodyPart === props.bodyPart) {
      exercises.push(
        <div key={element.exerciseId} className="row justify-content-between mt-2">
          <h5 id={element.exerciseId}>
            {element.exercise}
          </h5>
          <button className="btn btn-success">
            Add
          </button>
        </div>
      );
    }
  });

  return (
    <>
      {exercises}
    </>
  );
}

export default Exercises;
