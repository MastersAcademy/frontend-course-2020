export function shortestWeekDaysNumber(date) {
    const inputDate = new Date(date);
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    const daysInMonth = (elemYear, elemMonth) => {
        const item = 32 - new Date(elemYear, elemMonth, 32).getDate();
        return item;
    };
    const monthLength = daysInMonth(year, month);
    const dayInMs = 86400000;
    const weekInMs = 604800000;
    const weeks = [];
    let currentWeek = 0;
    for (let i = 1; i <= monthLength; i++) {
        const dayNumber = new Date(year, month, i).getDay();
        currentWeek += dayInMs;
        if (currentWeek === weekInMs || dayNumber === 0 || i === monthLength) {
            weeks.push(currentWeek);
            currentWeek = 0;
        }
    }
    const result = weeks[0] < weeks[weeks.length - 1] ? weeks[0]
     / dayInMs : weeks[weeks.length - 1] / dayInMs;
    return result;
}

export function isMonthLong(date) {
    const inputDate = new Date(date);
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    const daysInMonth = (elemYear, elemMonth) => {
        const item = 32 - new Date(elemYear, elemMonth, 32).getDate();
        return item;
    };
    let result = '';
    if (month === 1 && daysInMonth(year, month) === 29) {
        result = true;
    } else if (daysInMonth(year, month) === 31) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

export function getFridaysOfMonth(date) {
    const weekDays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Wednesday', 'Sunday'];
    const inputDate = new Date(date);
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    const daysInMonth = (elemYear, elemMonth) => {
        const item = 32 - new Date(elemYear, elemMonth, 32).getDate();
        return item;
    };
    const monthLength = daysInMonth(year, month);
    const monthFridays = [];
    for (let i = 0; i <= monthLength; i++) {
        const monthDay = new Date(year, month, i);
        if (weekDays[monthDay.getDay()] === 'Friday') {
            monthFridays.push(monthDay.getDate());
        }
    }
    return monthFridays;
}

export function fullWeeksNumberInMonth(date) {
    const inputDate = new Date(date);
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    const daysInMonth = (elemYear, elemMonth) => {
        const item = 32 - new Date(elemYear, elemMonth, 32).getDate();
        return item;
    };
    const monthLength = daysInMonth(year, month);
    const dayInMs = 86400000;
    const weekInMs = 604800000;
    const weeks = [];
    let currentWeek = 0;
    for (let i = 1; i <= monthLength; i++) {
        const dayNumber = new Date(year, month, i).getDay();
        currentWeek += dayInMs;
        if (currentWeek === weekInMs || dayNumber === 0 || i === monthLength) {
            weeks.push(currentWeek);
            currentWeek = 0;
        }
    }
    const result = weeks.filter((item) => item === weekInMs);
    return result.length;
}
