import React from 'react';
import './home.scss';
const Day = props => {
  return (
    <div className="day">
      <span className="title">{props.day}</span>
    </div>
  );
};

export default Day;
