export function getFridaysOfMonth(date) {
    const fridays = [];
    const month = date.getMonth();

    date.setDate(1);

    while (date.getDay() !== 5) {
        date.setDate(date.getDate() + 1);
    }

    while (date.getMonth() === month) {
        fridays.push((new Date(date.getTime())).getDate());
        date.setDate(date.getDate() + 7);
    }
    return fridays;
}

export function isMonthLong(date) {
    const number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let result;
    if (number === 31) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

export function fullWeeksNumberInMonth(date) {
    const lastSunday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstMonday = new Date(date.getFullYear(), date.getMonth(), 1);

    while (firstMonday.getDay() !== 1) {
        firstMonday.setDate(firstMonday.getDate() + 1);
    }

    if (lastSunday.getDay() < 0) {
        lastSunday.setDate(lastSunday.getDate() - 7);
    }
    lastSunday.setDate(lastSunday.getDate() - (lastSunday.getDay() - 0));

    const number = lastSunday.getDate() - firstMonday.getDate() + 1;
    return Math.floor(number / 7);
}

export function shortestWeekDaysNumber(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastSunday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstMonday = new Date(date.getFullYear(), date.getMonth(), 1);

    while (firstMonday.getDay() !== 1) {
        firstMonday.setDate(firstMonday.getDate() + 1);
    }

    if (lastSunday.getDay() < 0) {
        lastSunday.setDate(lastSunday.getDate() - 7);
    }
    lastSunday.setDate(lastSunday.getDate() - (lastSunday.getDay() - 0));

    const resultFirst = firstMonday.getDate() - firstDay.getDate();
    const resultLast = lastDay.getDate() - lastSunday.getDate();

    if (resultFirst > resultLast) {
        return resultLast;
    }
    return resultFirst;
}
