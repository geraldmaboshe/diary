import React from 'react';

const Day = props => {
  return (
    <div className="day">
      <span className="title">{props.day}</span>
    </div>
  );
};

export default Day;
