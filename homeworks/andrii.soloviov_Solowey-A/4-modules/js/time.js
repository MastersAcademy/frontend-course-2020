const dateEl = document.querySelector('[data-date]');

function getFridays() {
    const date = new Date(dateEl.value);
    const month = date.getMonth();
    const fridays = [];
    date.setDate(1);
    while (date.getDay() !== 5) {
        date.setDate(date.getDate() + 1);
    }
    while (date.getMonth() === month) {
        fridays.push(new Date(date.getTime()));
        date.setDate(date.getDate() + 7);
    }
    const allFridays = [];
    for (let i = 0; i < fridays.length; i++) {
        allFridays.push(fridays[i].getDate());
    }
    return allFridays;
}

function daysInMonth() {
    const date = new Date(dateEl.value);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthLength = new Date(year, month, 0).getDate();
    let result = '';
    if (monthLength < 31) {
        result = 'false';
    } else result = 'true';
    return result;
}

function checkWeek() {
    const date = new Date(dateEl.value);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const secondWeekLength = lastDay.getDay();
    let check = '';
    if (firstDay.getDay() !== 0) {
        const firstWeekLength = (7 - firstDay.getDay() + 1);
        if (firstWeekLength <= secondWeekLength || secondWeekLength === 0) {
            check = firstWeekLength;
        } else {
            check = secondWeekLength;
        }
    } else {
        check = 1;
    }
    return check;
}

function getFullWeek() {
    const date = new Date(dateEl.value);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthLength = new Date(year, month, 0).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const secondWeekLength = lastDay.getDay();
    let weekCount = '';
    if (firstDay.getDay() !== 0) {
        if (firstDay.getDay() === 1) {
            weekCount = (monthLength - secondWeekLength) / 7;
        } else {
            const firstWeekLength = (7 - firstDay.getDay() + 1);
            weekCount = (monthLength - firstWeekLength - secondWeekLength) / 7;
        }
    } else {
        weekCount = (monthLength - 1 - secondWeekLength) / 7;
    }
    return weekCount;
}

function getClock(choices) {
    const date = new Date();
    switch (choices) {
        case 'local': date.setHours(date.getHours());
            break;
        case 'tokyo': date.setHours(date.getHours() + 7);
            break;
        case 'london': date.setHours(date.getHours() - 2);
            break;
        case 'new-york': date.setHours(date.getHours() - 7);
            break;
        default: break;
    }
    return date.toLocaleTimeString();
}

export {
    getFridays,
    daysInMonth,
    checkWeek,
    getFullWeek,
    getClock,
};
