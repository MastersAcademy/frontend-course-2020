import { fridaysInMonth, isMonthLong, shortestWeekDaysNumber, fullWeeksNumberInMonth } from './time.js';

const getMonthButton = document.getElementById('getMonth')
const getIsLongButton = document.getElementById('getIsLong')
const getShortestButton = document.getElementById('getShortest')
const getFullWeeksButton = document.getElementById('getFullWeeks')

getMonthButton.addEventListener('click', () => {
    const showMonth = document.getElementById('showMonth');
    const inputValue = document.getElementById('inputDate').value;
    showMonth.innerText = fridaysInMonth(inputValue);
});
getIsLongButton.addEventListener('click', () => {
    const showIsLong = document.getElementById('showIsLong');
    const inputValue = document.getElementById('inputDate').value;
    showIsLong.innerText = isMonthLong(inputValue);
})
getShortestButton.addEventListener('click', () => {
    const showShortest = document.getElementById('showShortest');
    const inputValue = document.getElementById('inputDate').value;
    showShortest.innerHTML = shortestWeekDaysNumber(inputValue);
})

getFullWeeksButton.addEventListener('click', () => {
    const showFullWeeks = document.getElementById('showFullWeeks');
    const inputValue = document.getElementById('inputDate').value;
    showFullWeeks.innerHTML = fullWeeksNumberInMonth(inputValue);
})

