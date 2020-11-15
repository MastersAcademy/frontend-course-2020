import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
} from './time.js';

(function () {
    const buttonFridayNode = document.querySelector('[data-button-month-friday]');
    const showFridayNode = document.querySelector('[data-month-friday]');

    const buttonIsLongNode = document.querySelector('[data-button-month-long]');
    const showIsLongNode = document.querySelector('[data-month-long]');

    const buttonWeekShortNode = document.querySelector('[data-button-week-short]');
    const showWeekShortNode = document.querySelector('[data-week-short]');

    const buttonFullWeeksNode = document.querySelector('[data-button-full-weeks]');
    const showFullWeeksNode = document.querySelector('[data-full-weeks]');

    const selectCityNodes = document.querySelector('[data-select-city]');
    const clockNode = document.querySelector('[data-clock]');

    let time;

    function updateClock() {
        const date = time || new Date();

        let hours = date.getHours();
        if (hours < 10) hours = `0${hours}`;
        clockNode.firstElementChild.textContent = hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = `0${minutes}`;
        clockNode.lastElementChild.textContent = minutes;
    }

    function setTimeCity() {
        const currentHour = new Date().getHours();

        switch (selectCityNodes.value) {
            case '0':
                time = addHours(currentHour, 0);
                break;
            case '+7':
                time = addHours(currentHour, 7);
                break;
            case '-2':
                time = subtractHours(currentHour, 2);
                break;
            case '-7':
                time = subtractHours(currentHour, 7);
                break;
            default:
                break;
        }
    }

    buttonFridayNode.addEventListener('click', (event) => {
        event.preventDefault();

        const inputDate = document.querySelector('[data-input-date]').value;

        if (!inputDate) return;

        showFridayNode.textContent = getFridaysOfMonth(inputDate);
    });

    buttonIsLongNode.addEventListener('click', (event) => {
        event.preventDefault();

        const inputDate = document.querySelector('[data-input-date]').value;

        if (!inputDate) return;

        showIsLongNode.textContent = isMonthLong(inputDate);
    });

    buttonWeekShortNode.addEventListener('click', (event) => {
        event.preventDefault();

        const inputDate = document.querySelector('[data-input-date]').value;

        if (!inputDate) return;

        showWeekShortNode.textContent = shortestWeekDaysNumber(inputDate);
    });

    buttonFullWeeksNode.addEventListener('click', (event) => {
        event.preventDefault();

        const inputDate = document.querySelector('[data-input-date]').value;

        if (!inputDate) return;

        showFullWeeksNode.textContent = fullWeeksNumberInMonth(inputDate);
    });

    selectCityNodes.addEventListener('change', setTimeCity);

    window.addEventListener('load', () => {
        setInterval(updateClock, 1000);
        updateClock();
    });
}());
