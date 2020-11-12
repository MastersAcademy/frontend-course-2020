import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
} from './time.js';

(function () {
    const formNode = document.querySelector('[data-form]');
    const inputDateNode = document.querySelector('[data-input]');
    const inputZoneNode = document.querySelector('[data-select]');
    const isLongMonthNode = document.querySelector('[data-is-long]');
    const amountFridaysNode = document.querySelector('[data-amount-fridays]');
    const sizeWeekNode = document.querySelector('[data-size-week]');
    const weeksAmountNode = document.querySelector('[data-weeks-amount]');
    const timeNode = document.querySelector('[data-time]');

    let timer;
    let timeDifference; // in Greenwich Mean Time
    let timeZoneTime;
    let date;
    let hours;
    let minutes;
    let value = '';
    let today;

    // Setting defaults texts when user chose another date
    function clearingNodesValue() {
        amountFridaysNode.innerText = '';
        isLongMonthNode.innerText = 'Unknown';
        sizeWeekNode.innerText = '';
        weeksAmountNode.innerText = '';
    }

    // Processing the data that was entered
    function submiting(e) {
        e.preventDefault();
        if (e.target[0].value) {
            value = new Date(e.target[0].value);
            date = new Date(value);
            switch (e.submitter.value) {
                case 'getFridays':
                    amountFridaysNode.innerText = getFridaysOfMonth(date).toString();
                    break;
                case 'isLong':
                    isLongMonthNode.innerText = isMonthLong(date);
                    break;
                case 'shortestWeek':
                    sizeWeekNode.innerText = shortestWeekDaysNumber(date);
                    break;
                case 'fullWeeks':
                    weeksAmountNode.innerText = fullWeeksNumberInMonth(date);
                    break;
                default: break;
            }
        } else alert('please, choose date');
    }

    // Set current time or time changing to selected
    function settingTime(timeZone) {
        if (timeZone) {
            clearInterval(timer);
            timer = setInterval(() => {
                hours = timeZone.getHours();
                minutes = timeZone.getMinutes();
                timeNode.innerText = `${hours < 10 ? `0${hours}` : hours}  : ${minutes < 10 ? `0${minutes}` : minutes}`;
            }, 1000);
        } else {
            clearInterval(timer);
            timer = setInterval(() => {
                today = new Date();
                hours = today.getHours();
                minutes = today.getMinutes();
                timeNode.innerText = `${hours < 10 ? `0${hours}` : hours}  : ${minutes < 10 ? `0${minutes}` : minutes}`;
            }, 1000);
        }
    }

    function gettingTime() {
        // if another time zone was selected
        if (inputZoneNode.value) {
            timeDifference = parseInt(inputZoneNode.value, 10);
            today = new Date();
            if (timeDifference < 0) {
                timeZoneTime = subtractHours(today, timeDifference);
            } else {
                timeZoneTime = addHours(today, timeDifference);
            }
            settingTime(timeZoneTime);
        } else settingTime(); // if chose current time
    }

    // setting time when page is opening at first time
    settingTime();

    // Adding event listener
    inputDateNode.addEventListener('change', clearingNodesValue);
    formNode.addEventListener('submit', submiting);
    inputZoneNode.addEventListener('change', gettingTime);
}());
