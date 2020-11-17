import * as time from './time.js';

const dataInputNode = document.querySelector('[data-date-input]');
const ansGetFridaysOfMonthNode = document.querySelector('[data-time="getFridaysOfMonth"]');
const ansIsMonthLongNode = document.querySelector('[data-time="isMonthLong"]');
const ansShortestWeekDaysNumberNode = document.querySelector('[data-time="shortestWeekDaysNumber"]');
const ansFullWeeksNumberInMonthNode = document.querySelector('[data-time="fullWeeksNumberInMonth"]');

const timeHoursNode = document.querySelector('[data-time="hours"]');
const timeMinutesNode = document.querySelector('[data-time="minutes"]');
const timezoneNode = document.querySelector('[data-timezone-selector]');
let timezone = 0;
let dateNow = new Date();

dataInputNode.valueAsDate = new Date();
function calculate() {
    const date = new Date(dataInputNode.value);
    ansGetFridaysOfMonthNode.textContent = time.getFridaysOfMonth(date);
    ansIsMonthLongNode.textContent = time.isMonthLong(date);
    ansShortestWeekDaysNumberNode.textContent = time.shortestWeekDaysNumber(date);
    ansFullWeeksNumberInMonthNode.textContent = time.fullWeeksNumberInMonth(date);
} calculate();

dataInputNode.addEventListener('change', () => calculate());

function renderCurrentTime() {
    dateNow = new Date();
    if (timezone < 0) dateNow = time.subtractHours(dateNow, timezone * -1);
    if (timezone > 0) dateNow = time.addHours(dateNow, timezone);
    timeHoursNode.textContent = dateNow.getHours();
    timeMinutesNode.textContent = dateNow.getMinutes();
} renderCurrentTime();

setInterval(() => renderCurrentTime(), 1000);

timezoneNode.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'current':
            timezone = 0;
            renderCurrentTime();
            break;
        case 'tokyo':
            timezone = 9 + new Date().getTimezoneOffset() / 60;
            renderCurrentTime();
            break;
        case 'london':
            timezone = 0 + new Date().getTimezoneOffset() / 60;
            renderCurrentTime();
            break;
        case 'newyork':
            timezone = -5 + new Date().getTimezoneOffset() / 60;
            renderCurrentTime();
            break;
        default:
            timezone = 0 + new Date().getTimezoneOffset() / 60;
            renderCurrentTime();
            break;
    }
});
