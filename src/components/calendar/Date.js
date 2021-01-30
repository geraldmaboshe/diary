import React from 'react';
import { DATE, MONTH } from '../utils/Constants';
import './calendar.scss';

const Date = ({ value, day, month, active }) => {
  let dateStyle = false;
  if (value === DATE.getDate() && month > 0) {
    if (
      (value === 1 && month - 1 === DATE.getMonth()) ||
      (value !== 1 && month - 1 == DATE.getMonth())
    ) {
      dateStyle = true;
    }
  }

  return (
    <div
      className={
        'date' +
        ' ' +
        (!day ? 'sunday' : '') +
        ' ' +
        (active ? 'active-month' : '')
      }
    >
      <div className="date-box">
        <span className={'text' + ' ' + (dateStyle ? 'active' : '')}>
          {value}
        </span>
        {value === 1 ? (
          <div
            className={
              'month' +
              ' ' +
              (DATE.getMonth() === month - 1 ? 'month-active' : '')
            }
          >
            {MONTH[month - 1] == undefined ? '' : MONTH[month - 1].substr(0, 3)}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Date;
