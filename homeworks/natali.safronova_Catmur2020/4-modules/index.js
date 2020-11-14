import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time';

function updateData() {
    document.getElementById('friday').innerText = getFridaysOfMonth();
    document.getElementById('long').innerText = isMonthLong();
    document.getElementById('shortesweek').innerText = shortestWeekDaysNumber();
    document.getElementById('fullweeks').innerText = fullWeeksNumberInMonth();
}
document.querySelector('input').addEventListener('input', updateData);
