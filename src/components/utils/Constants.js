import { getMonthsInAYear } from './Dateutils';
import moment from 'moment';

export const DATE = new Date();
export const WEEK = moment.weekdaysShort();
export const MONTH = moment.months();
export const WEEKSINAYEAR = 54;
export const MONTHSINAYEAR = 12;
export const DAYSINAWEEK = 7;
export const DAYSINAMONTH = getMonthsInAYear(2020);
