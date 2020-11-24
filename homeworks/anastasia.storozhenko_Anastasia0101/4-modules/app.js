import * as timeModule from './time.js';

function getDate() {
    const input = document.querySelector('[data-input-date]').value;
    return new Date(input);
}

document.querySelector('[data-btn-friday]').addEventListener(('click'), () => {
    document.querySelector('[data-fridays]').innerText = timeModule.getFridaysOfMonth(getDate());
});

document.querySelector('[data-btn-is-long]').addEventListener(('click'), () => {
    document.querySelector('[data-is-long]').innerText = timeModule.isMonthLong(getDate());
});

document.querySelector('[data-btn-full-week]').addEventListener(('click'), () => {
    document.querySelector('[data-full-week]').innerText = timeModule.fullWeeksNumberInMonth(getDate());
});

document.querySelector('[data-btn-short-week]').addEventListener(('click'), () => {
    document.querySelector('[data-short-week]').innerText = timeModule.shortestWeekDaysNumber(getDate());
});
