import {
    addHours,
    fullWeeksNumberInMonth,
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    subtractHours,
} from './time.js';

const mainTasksBlockNode = document.querySelector('[data-main-tasks-block]');
const inputNode = document.querySelector('[data-input]');
const errorMessage = document.querySelector('[data-error-message]');
const outputGetAllFridaysNode = document.querySelector('[data-output-get-all-fridays]');
const outputIsMonthLongNode = document.querySelector('[data-output-is-month-long]');
const outputShortestWeekDaysNumberNode = document.querySelector('[data-output-shortest-week-days-number]');
const outputFullWeeksNumberInMonthNode = document.querySelector('[data-output-full-weeks-number-in-month]');
const clockOutputNode = document.querySelector('[data-clock-output]');
const selectNode = document.querySelector('[data-select]');

mainTasksBlockNode.addEventListener('click', (evt) => {
    if (!inputNode.value) {
        errorMessage.innerText = 'Enter date, please!';
        return;
    }
    const date = new Date(inputNode.value);

    if (evt.target.closest('[data-btn-get-all-fridays]')) {
        outputGetAllFridaysNode.innerText = getFridaysOfMonth(date);
    }

    if (evt.target.closest('[data-btn-is-month-long]')) {
        outputIsMonthLongNode.innerText = isMonthLong(date);
    }

    if (evt.target.closest('[data-btn-shortest-week-days-number]')) {
        outputShortestWeekDaysNumberNode.innerText = shortestWeekDaysNumber(date);
    }

    if (evt.target.closest('[data-btn-full-weeks-number-in-month]')) {
        outputFullWeeksNumberInMonthNode.innerText = fullWeeksNumberInMonth(date);
    }
});

inputNode.addEventListener('change', () => {
    errorMessage.innerText = '';
    outputGetAllFridaysNode.innerText = '';
    outputIsMonthLongNode.innerText = '';
    outputShortestWeekDaysNumberNode.innerText = '';
    outputFullWeeksNumberInMonthNode.innerText = '';
});

function getCurrentTime() {
    switch (selectNode.value) {
        case 'Current':
            clockOutputNode.innerText = new Date().toTimeString()
                .replace(/ .*/, '');
            break;
        case 'Tokyo':
            clockOutputNode.innerText = addHours(new Date(), 7)
                .toTimeString()
                .replace(/ .*/, '');
            break;
        case 'London':
            clockOutputNode.innerText = subtractHours(new Date(), 2)
                .toTimeString()
                .replace(/ .*/, '');
            break;
        case 'NewYork':
            clockOutputNode.innerText = subtractHours(new Date(), 7)
                .toTimeString()
                .replace(/ .*/, '');
            break;
        default:
            clockOutputNode.innerText = new Date().toTimeString()
                .replace(/ .*/, '');
            break;
    }
}

getCurrentTime();

selectNode.addEventListener('change', getCurrentTime);

setInterval(() => {
    getCurrentTime();
}, 1000);
