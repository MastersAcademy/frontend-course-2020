import {
    isMonthLong,
    getFridaysOfMonth,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
} from './time.js';

const paragFridayNode = document.querySelector('[data-p-friday]');
const inputNode = document.querySelector('[data-input]');
const btnFridaysNode = document.querySelector('[data-btn-friday]');
const btnBooleanNode = document.querySelector('[data-btn-boolean]');
const paragBooleanNode = document.querySelector('[data-p-boolean]');
const btnShortestWeekNode = document.querySelector('[data-btn-shortest-week]');
const paragShortestWeekNode = document.querySelector('[data-p-shortest-week]');
const btnFullWeekNode = document.querySelector('[data-btn-full-week]');
const paragFullWeekNode = document.querySelector('[data-p-full-week]');
const currentHourNode = document.querySelector('[data-current-hour]');
const selectNode = document.querySelector('[data-select]');

btnFridaysNode.addEventListener('click', () => {
    const array = getFridaysOfMonth(inputNode);
    if (array) {
        paragFridayNode.innerHTML = `[${array}]`;
    }
});

btnBooleanNode.addEventListener('click', () => {
    const lastDay = isMonthLong(inputNode);
    if (lastDay.getDate() === 31) {
        paragBooleanNode.innerHTML = 'true';
    } else {
        paragBooleanNode.innerHTML = 'false';
    }
});

btnShortestWeekNode.addEventListener('click', () => {
    const arrElem = shortestWeekDaysNumber(inputNode);
    paragShortestWeekNode.innerHTML = arrElem.length;
});

btnFullWeekNode.addEventListener('click', () => {
    const sum = fullWeeksNumberInMonth(inputNode);
    paragFullWeekNode.innerHTML = sum;
});

function cutString(str) {
    return str.substr(0, 8);
}

function getTime() {
    const date = new Date();
    const strCurrent = date.toTimeString();
    const strTokyo = addHours(date, 7).toTimeString();
    const strLondon = subtractHours(date, 2).toTimeString();
    const strNewYork = subtractHours(date, 7).toTimeString();
    switch (selectNode.value) {
        case 'Current':
            currentHourNode.innerText = cutString(strCurrent);
            break;
        case 'Tokyo':
            currentHourNode.innerText = cutString(strTokyo);
            break;
        case 'London':
            currentHourNode.innerText = cutString(strLondon);
            break;
        case 'NewYork':
            currentHourNode.innerText = cutString(strNewYork);
            break;
        default:
            currentHourNode.innerText = cutString(strCurrent);
            break;
    }
}

getTime();

selectNode.addEventListener('change', getTime);

setInterval(() => {
    getTime();
}, 1000);
