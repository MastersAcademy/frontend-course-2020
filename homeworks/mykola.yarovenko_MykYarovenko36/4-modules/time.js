export function shortestWeekDaysNumber(date) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const inputDate = new Date(date);
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    const daysInMonth = (elemYear, elemMonth) => {
        const item = 32 - new Date(elemYear, elemMonth, 32).getDate();
        return item;
    };
    const monthLength = daysInMonth(year, month);
    const monthWeeks = [];
    let fullWeek = [];
    for (let i = 0; i <= monthLength; i++) {
        const monthDay = new Date(year, month, i).getDay();
        fullWeek.push(weekDays[monthDay]);
        if (weekDays[monthDay] === 'Sunday' || fullWeek.length === 7 || i === monthLength - 1) {
            monthWeeks.push(fullWeek);
            fullWeek = [];
        }
    }
    const shortestWeek = monthWeeks.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        if (a.length < b.length) {
            return -1;
        }
        return 0;
    });
    return shortestWeek[0].length;
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
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const inputDate = new Date(date);
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    const daysInMonth = (elemYear, elemMonth) => {
        const item = 32 - new Date(elemYear, elemMonth, 32).getDate();
        return item;
    };
    const monthLength = daysInMonth(year, month);
    const monthDays = [];
    for (let i = 1; i <= monthLength; i++) {
        const monthDay = new Date(year, month, i).getDay();
        monthDays.push(weekDays[monthDay]);
    }
    const regExp = new RegExp('Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday', 'gi');
    const result = monthDays.toString().match(regExp);
    return result.length;
}
