import {
    fridaysInMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    addHours,
    subtractHours,
} from './time';

const getMonthButton = document.getElementById('getMonth');
const getIsLongButton = document.getElementById('getIsLong');
const getShortestButton = document.getElementById('getShortest');
const getFullWeeksButton = document.getElementById('getFullWeeks');

getMonthButton.addEventListener('click', () => {
    const showMonth = document.getElementById('showMonth');
    const inputValue = document.getElementById('inputDate').value;
    showMonth.innerText = fridaysInMonth(inputValue);
});
getIsLongButton.addEventListener('click', () => {
    const showIsLong = document.getElementById('showIsLong');
    const inputValue = document.getElementById('inputDate').value;
    showIsLong.innerText = isMonthLong(inputValue);
});
getShortestButton.addEventListener('click', () => {
    const showShortest = document.getElementById('showShortest');
    const inputValue = document.getElementById('inputDate').value;
    showShortest.innerText = shortestWeekDaysNumber(inputValue);
});

getFullWeeksButton.addEventListener('click', () => {
    const showFullWeeks = document.getElementById('showFullWeeks');
    const inputValue = document.getElementById('inputDate').value;
    showFullWeeks.innerText = fullWeeksNumberInMonth(inputValue);
});

const selectTime = document.getElementById('timeList');
const showTime = document.getElementById('showTime');

function getTime() {
    const selectedTime = selectTime.value;
    switch (selectedTime) {
        case 'current':
            showTime.innerText = new Date()
                .toTimeString()
                .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
            break;
        case 'tokyo':
            showTime.innerText = addHours(new Date(), 7)
                .toTimeString()
                .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
            break;
        case 'london':
            showTime.innerText = subtractHours(new Date(), 2)
                .toTimeString()
                .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
            break;
        case 'new-york':
            showTime.innerText = subtractHours(new Date(), 7)
                .toTimeString()
                .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
            break;

        default:
            showTime.innerText = new Date()
                .toTimeString()
                .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
            break;
    }
}

selectTime.addEventListener('change', getTime);
setInterval(() => {
    getTime();
}, 1000);
