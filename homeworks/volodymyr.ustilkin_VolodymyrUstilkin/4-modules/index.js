import * as time from './time.js';

(function () {
    function updateTime() {
        const timeBind = document.querySelector('[data-country-select]').value;
        const zonedDateTime = time.getTimeWithBind(timeBind);
        document.querySelector('[data-time-display-container]').innerText = `${zonedDateTime.getHours()} : ${zonedDateTime.getMinutes()} : ${zonedDateTime.getSeconds()}`;
    }

    document.querySelector('[data-get-month-fridays-button]')
        .addEventListener('click', () => {
            const date = new Date(document.querySelector('[data-main-task-input]').value);
            document.querySelector('[data-month-fridays-result]').innerText = time.getFridaysOfMonth(date);
        });

    document.querySelector('[data-is-month-long-button]')
        .addEventListener('click', () => {
            const date = new Date(document.querySelector('[data-main-task-input]').value);
            document.querySelector('[data-is-month-long-result]').innerText = time.isMonthLong(date);
        });

    document.querySelector('[data-get-month-shortest-week-button]')
        .addEventListener('click', () => {
            const date = new Date(document.querySelector('[data-main-task-input]').value);
            document.querySelector('[data-get-month-shortest-week-result]').innerText = time.shortestWeekDaysNumber(date);
        });

    document.querySelector('[data-get-month-full-weeks-button]')
        .addEventListener('click', () => {
            const date = new Date(document.querySelector('[data-main-task-input]').value);
            document.querySelector('[data-get-month-full-weeks-result]').innerText = time.fullWeeksNumberInMonth(date);
        });

    document.querySelector('[data-default-data-select-option]').value = new Date(Date.now()).getTimezoneOffset() / -60;
    updateTime();

    setInterval(updateTime, 1000);
}());
