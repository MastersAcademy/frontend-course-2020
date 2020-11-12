import {
    getFridaysOfMonth,
    isMonthLong,
    fullWeeksNumberInMonth,
    shortestWeekDaysNumber,
} from './time.js';

const date = document.querySelector('[data-date]');
const buttonGetMonthFridays = document.querySelector('[data-button-get-month-fridays]');
const fridaysInMonth = document.querySelector('[data-fridays-in-month]');
const buttonIsMonthLong = document.querySelector('[data-button-is-month-long]');
const lengthInMonth = document.querySelector('[data-length-in-month]');
const buttonFullWeeks = document.querySelector('[data-button-full-weeks]');
const fullWeeks = document.querySelector('[data-full-weeks]');
const buttonDayOfShortestWeek = document.querySelector('[data-button-day-of-shortest-week]');
const dayOfShortestWeek = document.querySelector('[data-day-of-shortest-week]');

buttonGetMonthFridays.addEventListener('click', () => {
    fridaysInMonth.innerText = getFridaysOfMonth(new Date(date.value));
});

buttonIsMonthLong.addEventListener('click', () => {
    lengthInMonth.innerText = isMonthLong(new Date(date.value));
});

buttonDayOfShortestWeek.addEventListener('click', () => {
    dayOfShortestWeek.innerText = shortestWeekDaysNumber(new Date(date.value));
});

buttonFullWeeks.addEventListener('click', () => {
    fullWeeks.innerText = fullWeeksNumberInMonth(new Date(date.value));
});
