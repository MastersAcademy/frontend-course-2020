import * as time from './time.js';

const inputElem = document.querySelector('[data-input]');
const fridaysElem = document.querySelector('[data-get-fridays]');
const monthLongElem = document.querySelector('[data-month-long]');
const shortestWeekElem = document.querySelector('[data-shortest-week]');
const fullWeeksElem = document.querySelector('[data-full-weeks]');
const timeElem = document.querySelector('[data-time]');
const timeSelectedElem = document.querySelector('[data-time-select]');
const selectedArrowElem = document.querySelector('[data-select-arrow]');
let selectedDate = new Date();
let currentLocation = 'Europe/Kiev';

const locations = {
    current: 'Europe/Kiev',
    london: 'Europe/London',
    tokyo: 'Asia/Tokyo',
    'new-york': 'America/New_York',
};

inputElem.lastElementChild.addEventListener('change', () => {
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

function onCloseSelect() {
    selectedArrowElem.classList.remove('select-arrow-open');
    timeSelectedElem.blur();
}

timeSelectedElem.addEventListener('change', () => {
    /* stylelint-disable */
    for (const [key, value] of Object.entries(locations)) {
        if (key === timeSelectedElem.value) {
            currentLocation = value;
        }
    }
    /* stylelint-enable */
    onCloseSelect();
});

timeSelectedElem.addEventListener('focus', () => {
    selectedArrowElem.classList.add('select-arrow-open');
});

timeSelectedElem.addEventListener('blur', () => {
    onCloseSelect();
});

setInterval(() => {
    timeElem.innerText = new Date().toLocaleTimeString('en-US', {
        timeZone: currentLocation,
    });
}, 1000);
