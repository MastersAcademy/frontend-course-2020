const getDaysInMonth = (date) => {
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return Math.floor((monthEnd - monthStart) / (1000 * 60 * 60 * 24));
};

const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

const getLastDayOfMonth = (date) => {
    const lastDateOfMonth = getDaysInMonth(date);
    return new Date(date.getFullYear(), date.getMonth(), lastDateOfMonth).getDay();
};

const getAmountOfWeeks = (date) => {
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return Math.ceil((lastDate.getDate() - (lastDate.getDay() ? lastDate.getDay() : 7)) / 7) + 1;
};
// numDay: 0:sun...6:sat
const getDateOfDay = (date, numDay) => date.getDate() - ((date.getDay() - numDay) % 7);

const convertDeyOfWeek = (day) => {
    let result;
    if (day > 0) {
        result = day - 1;
    } else {
        result = 6;
    }
    return result;
};

function getFridays(date) {
    let result = [];
    const amountDaysInMonth = getDaysInMonth(date);

    if (date.getDate() <= amountDaysInMonth) {
        const friday = getDateOfDay(date, 5);
        const nextFriday = friday + 7;
        result.push(friday);

        if (nextFriday <= amountDaysInMonth) {
            date.setDate(nextFriday);
            result = result.concat(getFridays(date));
        }
        if (nextFriday <= amountDaysInMonth) {
            date.setDate(nextFriday);
            getFridays(date);
        }
    }
    return result;
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */

export function getFridaysOfMonth(date) {
    const parseDate = Date.parse(date);
    const data = new Date(parseDate);
    let result;
    if (parseDate >= 0) {
        result = getFridays(new Date(data.getFullYear(), data.getMonth(), 1));
    }
    console.log(result);
    return result;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */

export function isMonthLong(date) {
    const parseDate = Date.parse(date);
    const result = parseDate >= 0 ? (getDaysInMonth(new Date(parseDate)) === 31) : undefined;
    return result;
}

/*
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */

export function shortestWeekDaysNumber(date) {
    const parseDate = Date.parse(date);
    let result;
    if (parseDate >= 0) {
        const data = new Date(parseDate);
        const countDaysInFirstWeek = 7 - convertDeyOfWeek(getFirstDayOfMonth(data));
        const countDaysInLastWeek = convertDeyOfWeek(getLastDayOfMonth(data)) + 1;
        if (countDaysInFirstWeek >= countDaysInLastWeek) {
            result = countDaysInLastWeek;
        } else {
            result = countDaysInFirstWeek;
        }
    }
    return result;
}

/*
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month.
 * To be full, week should start and end in the same month
 */

export function fullWeeksNumberInMonth(date) {
    const parseDate = Date.parse(date);
    let result;
    if (parseDate >= 0) {
        const data = new Date(parseDate);
        let fullWeeks = getAmountOfWeeks(data);
        if (getFirstDayOfMonth(data) !== 1) fullWeeks--;
        if (getLastDayOfMonth(data) !== 0) fullWeeks--;
        result = fullWeeks;
    }
    return result;
}
