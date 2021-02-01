import React from 'react';
import '../App.scss';
const Day = props => {
  return (
    <div className="day">
      <span className="title">{props.day}</span>
    </div>
  );
};

export default Day;
