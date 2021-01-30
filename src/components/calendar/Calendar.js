import React from 'react';
import { DAYSINAWEEK, WEEKSINAYEAR } from '../utils/Constants';
import { generateDateGrid } from '../utils/Dateutils';
import Date from './Date';
import Month from './Month';
import './calendar.scss';

function Calendar() {
  const dateGrid = generateDateGrid();
  const firstDayInAMonth = [];
  const weekRowValue = [];

  for (let weekindex = 0; weekindex < WEEKSINAYEAR; weekindex++) {
    let weekRow = [];
    for (let dayindex = 0; dayindex < DAYSINAWEEK; dayindex++) {
      if (dateGrid[weekindex][dayindex][0] === 1) {
        firstDayInAMonth.push(weekindex);
      }
      weekRow.push(
        <Date
          value={dateGrid[weekindex][dayindex][0]}
          day={dayindex}
          month={firstDayInAMonth.length}
        />
      );
    }
    weekRowValue.push(<div className="week">{weekRow}</div>);
  }
  let currentMonth = 1,
    monthrow = [];
  const monthRow = Array(WEEKSINAYEAR)
    .fill(1)
    .map((val, index) => {
      if (index && index === firstDayInAMonth[currentMonth]) {
        const monthValue = <Month mid={currentMonth - 1}>{monthrow}</Month>;
        currentMonth++;
        monthrow = [weekRowValue[index]];
        return monthValue;
      } else {
        monthrow.push(weekRowValue[index]);
      }
    });
  return monthRow;
}

export default Calendar;
