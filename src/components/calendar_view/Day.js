import React from 'react';
import './index.scss';

const Day = props => {
  return (
    <div className="day">
      <span>{props.day}</span>
    </div>
  );
};

export default Day;
