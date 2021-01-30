import React from 'react';
import { MONTH } from '../utils/Constants';

const Date = ({ value, day, month }) => {
  return (
    <div className="date">
      <div className="date-box">
        <span className="text">{value}</span>
        {value === 1 ? (
          <div className="month">{MONTH[month - 1].substr(0, 3)}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Date;
