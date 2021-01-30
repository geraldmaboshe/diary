import {
  DATE,
  DAYSINAMONTH,
  DAYSINAWEEK,
  MONTHSINAYEAR,
  WEEKSINAYEAR
} from './Constants';

const isLeapYear = year => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

export const getMonthsInAYear = year => {
  return [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
};

const calculateFirstDayOfTheYear = (y, M = 0, k = 1) => {
  const m = ((M + 10) % 12) + 1;
  const D = (y % 100) - (m > 10 ? 1 : 0);
  const C = Math.floor(y / 100);
  const F =
    k +
    Math.floor((13 * m - 1) / 5) +
    D +
    Math.floor(D / 4) +
    Math.floor(C / 4) -
    2 * C;
  const T = F > 0 ? F : (F - (Math.floor(F) + 2) * 7) % 7;
  return T % 7;
};

export const generateDateGrid = () => {
  const dateGrid = Array.from({ length: WEEKSINAYEAR }, _ =>
    Array.from({ length: DAYSINAWEEK }, _ => [1])
  );
  const startDayOfTheYear = calculateFirstDayOfTheYear(DATE.getFullYear());

  for (let i = 0; i < startDayOfTheYear; i++) {
    dateGrid[0][i][0] = DAYSINAMONTH[11] - (startDayOfTheYear - 1) + 1;
  }

  let weekvalue = 0,
    k = startDayOfTheYear;

  for (let i = 0; i < MONTHSINAYEAR; i++) {
    for (let j = 0; j < DAYSINAMONTH[i]; j++) {
      dateGrid[weekvalue][k][0] = j + 1;
      k++;
      if (k === DAYSINAWEEK) {
        k = 0;
        weekvalue++;
      }
    }
  }
  for (let i = k; i < DAYSINAWEEK; i++) {
    dateGrid[weekvalue][i][0] = i - k + 1;
  }
  return dateGrid;
};
