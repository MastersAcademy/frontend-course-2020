import {
    getFridaysInMonth,
    isMonthLong,
    aboutShortWeek,
    aboutFullWeeks,
} from './script.js';

const inputMonth = document.querySelector('.js-date-info');
const btnGetFridaysInMonth = document.querySelector('.js-get-dates');

btnGetFridaysInMonth.addEventListener('click', () => {
    const { value } = inputMonth;
    if (!value) return;
    const date = new Date(value);
    const p = document.createElement('p');
    p.innerHTML = getFridaysInMonth(date);
    document.querySelector('.js-get-dates').append(p);
});

const btnAboutMonth = document.querySelector('.js-about-month');

btnAboutMonth.addEventListener('click', () => {
    const { value } = inputMonth;
    if (!value) return;
    const date = new Date(value);
    const p = document.createElement('p');
    p.innerHTML = isMonthLong(date);
    document.querySelector('.js-about-month').append(p);
});

const aboutShortWeekButton = document.querySelector('.about-short__week');
aboutShortWeekButton.addEventListener('click', () => {
    const { value } = inputMonth;
    if (!value) return;
    const date = new Date(value);
    const p = document.createElement('p');
    p.innerHTML = aboutShortWeek(date);
    document.querySelector('.about-short__week').append(p);
});

const aboutFullWeeksButton = document.querySelector('.about-full__week');
aboutFullWeeksButton.addEventListener('click', () => {
    const { value } = inputMonth;
    if (!value) return;
    const date = new Date(value);
    const p = document.createElement('p');
    p.innerHTML = aboutFullWeeks(date);
    document.querySelector('.about-full__week').append(p);
});
