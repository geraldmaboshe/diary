import { getMonthsInAYear } from './Dateutils';

export const DATE = new Date();
export const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export const WEEKSINAYEAR = 54;
export const MONTHSINAYEAR = 12;
export const DAYSINAWEEK = 7;
export const DAYSINAMONTH = getMonthsInAYear(DATE.getFullYear());
