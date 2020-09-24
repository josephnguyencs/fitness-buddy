import React from 'react';

function Exercises(props) {
  const exercises = [];
  props.list.forEach(element => {
    if (element.bodyPart === props.bodyPart) {
      exercises.push(
        <div key={element.exerciseId} className="row justify-content-between mt-2">
          <h3 id={element.exerciseId}>
            {element.exercise}
          </h3>
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
