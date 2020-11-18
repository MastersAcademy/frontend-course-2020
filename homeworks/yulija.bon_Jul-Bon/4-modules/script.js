import {
    daysInThisMonth,
    isMonthLong,
    getFridaysOfMonth,
    shortestWeekDaysNumber,
    fulWeeksCount,
} from './time.js';

const dateInput = document.querySelector('input[type="date"]');
const fridaysBtn = document.querySelector('[data-fridays-action]');
const fridaysInfo = document.querySelector('[data-fridays-info]');
const isLongMonthBtn = document.querySelector('[data-longes-montht-action]');
const isLongMonthInfo = document.querySelector('[data-longes-montht-info]');
const shotestWeekBtn = document.querySelector('[data-shotest-week-action]');
const shotestWeekInfo = document.querySelector('[data-shotest-week-info]');
const fullWeekBtn = document.querySelector('[data-number-full-week-action]');
const fullWeekInfo = document.querySelector('[data-number-full-week-info]');

dateInput.addEventListener('change', () => {
    fridaysInfo.innerHTML = '';
    isLongMonthInfo.innerHTML = '';
    shotestWeekInfo.innerHTML = '';
    fullWeekInfo.innerHTML = '';
});

fridaysBtn.addEventListener('click', () => {
    const days = daysInThisMonth(dateInput.value);
    fridaysInfo.innerHTML = getFridaysOfMonth(days).join(', ');
});

isLongMonthBtn.addEventListener('click', () => {
    const days = daysInThisMonth(dateInput.value);
    isLongMonthInfo.innerHTML = isMonthLong(days);
});

shotestWeekBtn.addEventListener('click', () => {
    const days = daysInThisMonth(dateInput.value);
    shotestWeekInfo.innerHTML = shortestWeekDaysNumber(days);
});

fullWeekBtn.addEventListener('click', () => {
    const days = daysInThisMonth(dateInput.value);
    fullWeekInfo.innerHTML = fulWeeksCount(days);
});
