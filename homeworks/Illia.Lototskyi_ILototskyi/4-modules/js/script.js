/* eslint-disable import/extensions */
import {
    getFridays,
    longMonth,
    shortestWeek,
    fullWeeks,
} from './time.js';

const currentDate = document.querySelector('[data-input]');
const btnFriday = document.querySelector('[data-get-friday]');
const btnMonthLong = document.querySelector('[data-month-long]');
const btnShort = document.querySelector('[data-shortest-week]');
const btnFull = document.querySelector('[data-full-weeks]');
const textGetFriday = document.querySelector('[data-text-friday]');
const textMonthLong = document.querySelector('[data-text-month-long]');
const textShort = document.querySelector('[data-text-shortest-week]');
const textFull = document.querySelector('[data-text-full-weeks]');

btnFriday.addEventListener('click', () => {
    const date = new Date(currentDate.value);
    textGetFriday.innerHTML = getFridays(date);
});

btnMonthLong.addEventListener('click', () => {
    const date = new Date(currentDate.value);
    textMonthLong.innerHTML = longMonth(date);
});

btnShort.addEventListener('click', () => {
    const date = new Date(currentDate.value);
    textShort.innerHTML = shortestWeek(date);
});

btnFull.addEventListener('click', () => {
    const date = new Date(currentDate.value);
    textFull.innerHTML = fullWeeks(date);
});
