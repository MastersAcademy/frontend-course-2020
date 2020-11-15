import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
    getCityTime,
} from './time.js';

const getNode = (selector) => document.querySelector(selector);
const dateNode = getNode('[data-date-picker]');
const fridaysBtnNode = getNode('[data-date-get-fridays-of-month-btn]');
const fridaysListNode = getNode('[data-date-fridays-list]');
const isMonthLongNode = getNode('[data-date-is-month-long]');
const isMonthLongBtnNode = getNode('[data-date-is-month-long-btn]');
const shortestWeekNode = getNode('[data-date-shortest-week]');
const shortestWeekBtnNode = getNode('[data-date-shortest-week-btn]');
const fullWeeksNode = getNode('[data-date-full-weeks]');
const fullWeeksBtnNode = getNode('[data-date-full-weeks-btn]');
const subtractNode = getNode('[data-date-subtract-hours-input]');
const subtractHoursBtnNode = getNode('[data-date-subtract-hours-btn]');
const subtractHoursNode = getNode('[data-date-subtract-hours]');
const addNode = getNode('[data-date-add-hours-input]');
const addHoursBtnNode = getNode('[data-date-add-hours-btn]');
const addHoursNode = getNode('[data-date-add-hours]');
const cityNode = getNode('[data-date-city-time]');
const citySelectNode = getNode('[data-date-city]');

dateNode.valueAsDate = new Date();
cityNode.innerText = getCityTime('Kyiv');

fridaysBtnNode.addEventListener('click', () => {
    fridaysListNode.innerText = `[${getFridaysOfMonth(dateNode.value)}]`;
});
isMonthLongBtnNode.addEventListener('click', () => {
    isMonthLongNode.innerText = isMonthLong(dateNode.value);
});
shortestWeekBtnNode.addEventListener('click', () => {
    shortestWeekNode.innerText = shortestWeekDaysNumber(dateNode.value);
});
fullWeeksBtnNode.addEventListener('click', () => {
    fullWeeksNode.innerText = fullWeeksNumberInMonth(dateNode.value);
});
subtractHoursBtnNode.addEventListener('click', () => {
    subtractHoursNode.innerText = subtractHours(dateNode.value, subtractNode.value);
});
addHoursBtnNode.addEventListener('click', () => {
    addHoursNode.innerText = addHours(dateNode.value, addNode.value);
});
citySelectNode.addEventListener('change', () => {
    cityNode.innerText = getCityTime(citySelectNode.value);
});
