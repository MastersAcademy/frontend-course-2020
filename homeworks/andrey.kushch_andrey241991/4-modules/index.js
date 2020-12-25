import * as time from './time.js';

const inputElem = document.querySelector('[data-input]');
const fridaysElem = document.querySelector('[data-get-fridays]');
const monthLongElem = document.querySelector('[data-month-long]');
const shortestWeekElem = document.querySelector('[data-shortest-week]');
const fullWeeksElem = document.querySelector('[data-full-weeks]');
let selectedDate = new Date();

inputElem.lastElementChild.addEventListener('change', () => {
    console.log('selectedDate');
    selectedDate = new Date(inputElem.lastElementChild.valueAsDate);
    inputElem.firstElementChild.innerText = selectedDate.toDateString();
});

fridaysElem.firstElementChild.addEventListener('click', () => {
    fridaysElem.lastElementChild.innerText = time.getFridays(selectedDate);
});

monthLongElem.firstElementChild.addEventListener('click', () => {
    monthLongElem.lastElementChild.innerText = time.getMonthIsLong(selectedDate);
});

shortestWeekElem.firstElementChild.addEventListener('click', () => {
    shortestWeekElem.lastElementChild.innerText = time.getDaysShortestWeek(
        selectedDate,
    );
});

fullWeeksElem.firstElementChild.addEventListener('click', () => {
    fullWeeksElem.lastElementChild.innerText = time.getFullWeekInMonth(selectedDate);
});
