import * as timeModule from './modules/time.js';

let optionValue = '';
const date = document.querySelector('[data-date]');
const time = document.querySelector('[data-time]');
const option = document.querySelector('[data-sort]');
const fullWeeksP = document.querySelector('[data-full-weeks]');
const allFridayP = document.querySelector('[data-all-friday]');
const longMonthP = document.querySelector('[data-long-month]');
const fullWeeks = document.querySelector('[data-full-weeks-btn]');
const longMonth = document.querySelector('[data-long-month-btn]');
const allFridayBtn = document.querySelector('[data-all-friday-btn]');
const shortestWeekP = document.querySelector('[data-shortest-week]');
const shortestWeek = document.querySelector('[data-shortest-week-btn]');

allFridayBtn.addEventListener('click', () => {
    allFridayP.innerText = `[${timeModule.getFridays(date)}]`;
});

longMonth.addEventListener('click', () => {
    longMonthP.innerText = timeModule.isMonthLong(date);
});

shortestWeek.addEventListener('click', () => {
    shortestWeekP.innerText = timeModule.shortestWeekDaysNumber(date);
});

fullWeeks.addEventListener('click', () => {
    fullWeeksP.innerText = timeModule.fullWeeksNumberInMonth(date);
});

option.addEventListener('change', (event) => {
    optionValue = event.target.value;
});

setInterval(() => {
    time.innerText = timeModule.updateTime(optionValue);
}, 1000);
