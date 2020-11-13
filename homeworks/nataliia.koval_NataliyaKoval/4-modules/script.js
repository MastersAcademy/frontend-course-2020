import * as module from './module.js';

const input = document.querySelector('[data-input]');
const buttonFridays = document.querySelector('[data-button="fridays"]');
const resultFridays = document.querySelector('[data-fridays]');
const buttonLong = document.querySelector('[data-button="long"]');
const resultLong = document.querySelector('[data-long]');
const buttonShortest = document.querySelector('[data-button="shortest"]');
const resultShortest = document.querySelector('[data-shortest]');
const buttonFull = document.querySelector('[data-button="full"]');
const resultFull = document.querySelector('[data-full]');

buttonFridays.addEventListener('click', () => {
    const date = new Date(input.value);
    resultFridays.innerText = module.getFridaysOfMonth(date);
});

buttonLong.addEventListener('click', () => {
    const date = new Date(input.value);
    resultLong.innerText = module.isMonthLong(date);
});

buttonShortest.addEventListener('click', () => {
    const date = new Date(input.value);
    resultShortest.innerText = module.getShortestWeek(date);
});

buttonFull.addEventListener('click', () => {
    const date = new Date(input.value);
    resultFull.innerText = module.getFullWeeks(date);
});
