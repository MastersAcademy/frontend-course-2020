/* eslint-disable import/extensions */
import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const inputDate = document.querySelector('.input-date');
const btnGetMonthFridays = document.querySelector('.btn-get-month-fridays');
const btnIsMonthLong = document.querySelector('.btn-is-month-long');
const btnDays = document.querySelector('.btn-days');
const btnFullWeeks = document.querySelector('.btn-full-weeks');
const textGetMonth = document.querySelector('.text-get-month');
const textIsMonth = document.querySelector('.text-is-month');
const textDays = document.querySelector('.text-days');
const textFullWeeks = document.querySelector('.text-full-weeks');

btnGetMonthFridays.addEventListener('click', () => {
    const date = new Date(inputDate.value);
    textGetMonth.innerHTML = getFridaysOfMonth(date);
});

btnIsMonthLong.addEventListener('click', () => {
    const date = new Date(inputDate.value);
    textIsMonth.innerHTML = isMonthLong(date);
});

btnDays.addEventListener('click', () => {
    const date = new Date(inputDate.value);
    textDays.innerHTML = shortestWeekDaysNumber(date);
});

btnFullWeeks.addEventListener('click', () => {
    const date = new Date(inputDate.value);
    textFullWeeks.innerHTML = fullWeeksNumberInMonth(date);
});
