import {
    getFridays,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth
} from './time.js'

const inputNode = document.querySelector('[data-date]');

document.querySelector('[data-get-fridays]').addEventListener('click', getFridays);



document.querySelector('[data-month-long]')
    .addEventListener('click', isMonthLong);

document.querySelector('[data-shortest-week]')
    .addEventListener('click', shortestWeekDaysNumber);


document.querySelector('[data-full-weeks]')
    .addEventListener('click', fullWeeksNumberInMonth);
