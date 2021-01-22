import * as timeModules from './time.js';

const locations = {
    Kiev: { timeZone: 'Europe/Kiev' },
    Tokyo: { timeZone: 'Asia/Tokyo' },
    London: { timeZone: 'Europe/London' },
    NewYork: { timeZone: 'America/New_York' },
};
let currentTimeZone = locations.Kiev;

const setTime = (timeZone) => {
    const setDate = new Date().toLocaleTimeString('en-GB', timeZone);
    return setDate;
};

setInterval(() => {
    document.querySelector('.current-time').innerText = `${setTime(currentTimeZone)}`;
}, 1000);

document.querySelector('[data-time-zone]').addEventListener('change', () => {
    const currentIndex = document.querySelector('.time-zone').options.selectedIndex;
    switch (currentIndex) {
        case 0: currentTimeZone = locations.Kiev;
            break;
        case 1: currentTimeZone = locations.Tokyo;
            break;
        case 2: currentTimeZone = locations.London;
            break;
        case 3: currentTimeZone = locations.NewYork;
            break;
        default:
            break;
    }
    document.querySelector('.current-time').innerText = setTime(currentTimeZone);
});

let currentDate = '2020-11-01';

document.querySelector('[data-input-field]').addEventListener('input', (e) => {
    document.querySelectorAll('.info_text').forEach((item) => {
        const element = item;
        element.innerText = '';
        return element;
    });
    currentDate = e.currentTarget.value;
});

document.querySelector('[data-month-fridays-btn]').addEventListener('click', () => {
    document.querySelector('.month_fridays').innerText = `[${timeModules.getFridaysOfMonth(currentDate)}]`;
});
document.querySelector('[data-month-long-btn]').addEventListener('click', () => {
    document.querySelector('.month_long').innerText = `${timeModules.isMonthLong(currentDate)}`;
});
document.querySelector('[data-month-shortest-week-btn]').addEventListener('click', () => {
    document.querySelector('.month_shortest_week').innerText = `${timeModules.shortestWeekDaysNumber(currentDate)}`;
});
document.querySelector('[data-month-full-weeks-btn]').addEventListener('click', () => {
    document.querySelector('.month_full-weeks').innerText = `${timeModules.fullWeeksNumberInMonth(currentDate)}`;
});
