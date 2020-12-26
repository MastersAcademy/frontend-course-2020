import {
    getFridays,
    daysInMonth,
    checkWeek,
    getFullWeek,
    getClock,
}

    from './time.js';

const buttonGetFridaysEl = document.querySelector('[data-get-fridays]');
const fieldFridaysOutputEl = document.querySelector('[data-get-fridays-output]');
const buttonGetShortLongMonthEl = document.querySelector('[data-get-short-long]');
const fieldLongMonthOutputEl = document.querySelector('[data-get-short-long-output]');
const buttonGetShortWeekEl = document.querySelector('[data-get-short-week]');
const fieldShortWeekEl = document.querySelector('[data-get-short-week-output]');
const buttonGetFullWeekEl = document.querySelector('[data-get-full-week]');
const fieldFullWeekEl = document.querySelector('[data-get-full-week-output]');
const clockEl = document.querySelector('[data-clock]');
const selectEl = document.querySelector('[data-choice]');
buttonGetFridaysEl.addEventListener('click', () => {
    fieldFridaysOutputEl.textContent = getFridays();
});
buttonGetShortLongMonthEl.addEventListener('click', () => {
    fieldLongMonthOutputEl.textContent = daysInMonth();
});
buttonGetShortWeekEl.addEventListener('click', () => {
    fieldShortWeekEl.textContent = checkWeek();
});
buttonGetFullWeekEl.addEventListener('click', () => {
    fieldFullWeekEl.textContent = getFullWeek();
});
let choices;
selectEl.addEventListener('change', () => {
    choices = selectEl.value;
});
setInterval(() => {
    clockEl.textContent = getClock(choices);
}, 10);
