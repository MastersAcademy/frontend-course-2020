function getCurrentDateEntities(date) {
    const currentDate = new Date(date);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysNumberInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    return { currentMonth, currentYear, daysNumberInMonth };
}

function getWeeksOfMonth(date) {
    const SUNDAY_VALUE = 0;
    const { currentYear, currentMonth, daysNumberInMonth } = getCurrentDateEntities(date);
    const weeks = [[]];

    for (let i = 1; i <= daysNumberInMonth; i++) {
        const newDate = new Date(currentYear, currentMonth, i);
        if (newDate.getDay() > SUNDAY_VALUE) {
            weeks[weeks.length - 1].push(newDate.getDate());
        } else {
            weeks[weeks.length - 1].push(newDate.getDate());
            weeks.push([]);
        }
    }

    return weeks;
}

export function getFridaysOfMonth(date) {
    const FRIDAY_VALUE = 5;
    const { currentMonth, currentYear, daysNumberInMonth } = getCurrentDateEntities(date);

    const days = [];
    for (let i = 1; i <= daysNumberInMonth; i++) {
        const newDate = new Date(currentYear, currentMonth, i);
        if (newDate.getDay() === FRIDAY_VALUE) {
            days.push(newDate.getDate());
        }
    }

    return days;
}

export function isMonthLong(date) {
    const DAYS_IN_FULL_MONTH = 31;
    const { daysNumberInMonth } = getCurrentDateEntities(date);

    return daysNumberInMonth === DAYS_IN_FULL_MONTH;
}

export function shortestWeekDaysNumber(date) {
    return getWeeksOfMonth(date).sort((a, b) => a.length - b.length)[0].length;
}

export function fullWeeksNumberInMonth(date) {
    const DAYS_IN_FULL_WEEK = 7;

    return getWeeksOfMonth(date).filter((week) => week.length === DAYS_IN_FULL_WEEK).length;
}

export function subtractHours(date, hours) {
    return new Date(new Date(date).getTime() - hours * 3600 * 1000);
}

export function addHours(date, hours) {
    return new Date(new Date(date).getTime() + hours * 3600 * 1000);
}

export function getCityTime(city) {
    const cities = {
        Kyiv: 0,
        Tokyo: 7,
        London: 2,
        NewYork: -7,
    };
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + cities[city]);

    return currentDate.toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, '$1');
}
