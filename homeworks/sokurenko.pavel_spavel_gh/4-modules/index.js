import * as time from './time.js';

const dataInputNode = document.querySelector('[data-date-input]');
const ansGetFridaysOfMonthNode = document.querySelector('[data-time="getFridaysOfMonth"]');
const ansIsMonthLongNode = document.querySelector('[data-time="isMonthLong"]');
const ansShortestWeekDaysNumberNode = document.querySelector('[data-time="shortestWeekDaysNumber"]');
const ansFullWeeksNumberInMonthNode = document.querySelector('[data-time="fullWeeksNumberInMonth"]');

dataInputNode.valueAsDate = new Date();
function calculate() {
    const date = new Date(dataInputNode.value);
    ansGetFridaysOfMonthNode.textContent = time.getFridaysOfMonth(date);
    ansIsMonthLongNode.textContent = time.isMonthLong(date);
    ansShortestWeekDaysNumberNode.textContent = time.shortestWeekDaysNumber(date);
    ansFullWeeksNumberInMonthNode.textContent = time.fullWeeksNumberInMonth(date);
} calculate();

dataInputNode.addEventListener('change', () => calculate());
