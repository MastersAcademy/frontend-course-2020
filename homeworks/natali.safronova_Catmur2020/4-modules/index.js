import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time';

document.querySelector('input').addEventListener('input', (event) => {
    window.e = (event.target.value);
    document.getElementById('friday').innerText = getFridaysOfMonth(event.target.value);
    document.getElementById('long').innerText = isMonthLong(event.target.value);
    document.getElementById('shortesweek').innerText = shortestWeekDaysNumber(event.target.value);
    document.getElementById('fullweeks').innerText = fullWeeksNumberInMonth(event.target.value);
});
