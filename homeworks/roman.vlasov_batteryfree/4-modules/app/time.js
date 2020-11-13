const getWeek = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

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
    const startWeek = getWeek(new Date(date.getFullYear(), date.getMonth(), 1));
    const lastWeek = getWeek(new Date(date.getFullYear(), date.getMonth() + 1, 0));
    return lastWeek - startWeek + 1;
};
// numDay: 0:sun...6:sat
const getDateOfDay = (date, numDay) => date.getDate() - ((date.getDay() - numDay) % 7);

function getFridays(date) {
    let result = [];
    const amountDaysInMonth = getDaysInMonth(date);

    if (date.getDate() <= amountDaysInMonth) {
        const friday = getDateOfDay(date, 6);
        const nextFriday = friday + 7;

        if (friday >= date.getDate() && amountDaysInMonth >= friday) {
            result.push(friday);

            if (nextFriday <= amountDaysInMonth) {
                date.setDate(nextFriday);
                result = result.concat(getFridays(date));
            }
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
    const result = parseDate >= 0 ? (getFridays(new Date(parseDate))) : undefined;
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

/** US Calendar format
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */

export function shortestWeekDaysNumber(date) {
    const parseDate = Date.parse(date);
    let result;
    if (parseDate >= 0) {
        const data = new Date(parseDate);
        const countDaysInFirstWeek = 7 - getFirstDayOfMonth(data);
        const countDaysInLastWeek = getLastDayOfMonth(data) + 1;
        if (countDaysInFirstWeek >= countDaysInLastWeek) {
            result = countDaysInLastWeek;
        } else {
            result = countDaysInFirstWeek;
        }
    }
    return result;
}

/** US Calendar format
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
        if (getFirstDayOfMonth(data) !== 0) fullWeeks--;
        if (getLastDayOfMonth(data) !== 6) fullWeeks--;
        result = fullWeeks;
    }
    return result;
}
