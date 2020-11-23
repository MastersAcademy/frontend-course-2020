import {
    isMonthLong,
    getFridaysOfMonth,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const selectedDate = document.querySelector('[data-date-field]');
const buttonGetMonthFridays = document.querySelector('[data-button-month-fridays]');
const buttonMonthLong = document.querySelector('[data-button-month-long]');
const buttonFullWeeks = document.querySelector('[data-button-full-weeks]');
const buttonShortestWeek = document.querySelector('[data-button-shortest-week]');
const outputMonthFridays = document.querySelector('[data-month-fridays]');
const outputMonthLong = document.querySelector('[data-month-long]');
const outputShortestWeek = document.querySelector('[data-shortest-week]');
const outputFullWeek = document.querySelector('[data-full-weeks]');

buttonGetMonthFridays.addEventListener('click', () => {
    outputMonthFridays.innerHTML = `<p>${getFridaysOfMonth(selectedDate.value)}</p>`;
});

buttonMonthLong.addEventListener('click', () => {
    outputMonthLong.innerHTML = `<p>${isMonthLong(selectedDate.value)}</p>`;
});

buttonShortestWeek.addEventListener('click', () => {
    outputShortestWeek.innerHTML = `<p>${shortestWeekDaysNumber(selectedDate.value)}</p>`;
});

buttonFullWeeks.addEventListener('click', () => {
    outputFullWeek.innerHTML = `<p>${fullWeeksNumberInMonth(selectedDate.value)}</p>`;
});
