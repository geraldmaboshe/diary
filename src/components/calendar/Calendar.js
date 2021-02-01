import React from 'react';
import { DAYSINAWEEK, WEEKSINAYEAR } from '../../utils/Constants';
import { generateDateGrid } from '../../utils/DateUtils';
import Date from './Date';
import Month from './Month';
import './calendar.scss';

function Calendar({ activeMonth, setActiveMonth, items }) {
  const dateGrid = generateDateGrid(activeMonth);
  const firstDayInAMonth = [];
  const weekRowValue = [];

  for (let weekIndex = 0; weekIndex < WEEKSINAYEAR; weekIndex++) {
    let weekRow = [];
    for (let dayIndex = 0; dayIndex < DAYSINAWEEK; dayIndex++) {
      if (dateGrid[weekIndex][dayIndex][0] === 1) {
        firstDayInAMonth.push(weekIndex);
      }
      weekRow.push(
        <Date
          value={dateGrid[weekIndex][dayIndex][0]}
          day={dayIndex}
          month={firstDayInAMonth.length}
          active={dateGrid[weekIndex][dayIndex][1]}
          items={items}
        />
      );
    }
    weekRowValue.push(<div className="week">{weekRow}</div>);
  }
  let currentMonth = 1,
    monthRowItems = [];
  const monthRow = Array(WEEKSINAYEAR)
    .fill(1)
    .map((val, index) => {
      if (index && index === firstDayInAMonth[currentMonth]) {
        const monthValue = (
          <Month mid={currentMonth - 1} onVisible={setActiveMonth}>
            {monthRowItems}
          </Month>
        );
        currentMonth++;
        monthRowItems = [weekRowValue[index]];
        return monthValue;
      } else {
        monthRowItems.push(weekRowValue[index]);
      }
    });
  return monthRow;
}

export default Calendar;
