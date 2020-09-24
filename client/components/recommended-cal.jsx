import React from 'react';

function RecommendedCalories(props) {
  return (
    <div className="header navbar navbar-brand justify-content-center border-top">
      <p className="mb-0">{`Recommended Daily Calories: ${props.calories}`}</p>
    </div>
  );
}

export default RecommendedCalories;
