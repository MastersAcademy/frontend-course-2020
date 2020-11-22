import {
    getFridays,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
// eslint-disable-next-line import/extensions
} from './time.js';

// eslint-disable-next-line no-unused-vars
const inputNode = document.querySelector('[data-date]');

document.querySelector('[data-get-fridays]')
    .addEventListener('click', () => {
        document.querySelector('[data-fridays]')
            .classList
            .add('result-friday');
        document.querySelector('[data-fridays]').innerHTML = (getFridays(inputNode.value));
    });

document.querySelector('[data-month-long]')
    .addEventListener('click', () => {
        document.querySelector('[data-result-month-long]').innerHTML = (isMonthLong(inputNode.value));
    });

document.querySelector('[data-shortest-week]')
    .addEventListener('click', () => {
        document.querySelector('[data-result-shortest-week]').innerHTML = (shortestWeekDaysNumber(inputNode.value));
    });

document.querySelector('[data-full-weeks]')
    .addEventListener('click', () => {
        document.querySelector('[data-result-full-weeks]').innerHTML = (fullWeeksNumberInMonth(inputNode.value));
    });
