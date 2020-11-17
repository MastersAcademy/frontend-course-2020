/**
 * @param date - date string of any supported format
 * @returns how many days is this month of the year
 */
function getAmountDays(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * @param date - date string of any supported format
 * @param day - overrides the day in this variable -> date
 * @returns - day number of this week
 */
function getDayId(date, day) {
    let id;
    if (day > 0) id = new Date(date.getFullYear(), date.getMonth(), day).getDay();
    else id = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getDay();
    return id === 0 ? 7 : id;
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getFridaysOfMonth(date) {
    const days = getAmountDays(date);
    const fridays = [];
    for (let index = 1; index <= days; index++) {
        if (getDayId(date, index) === 5) fridays.push(index);
    }
    return fridays;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    return getAmountDays(date) === 31;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    let counterUp = 1;
    let counterDown = 1;
    for (let index = 1; getDayId(date, index + 1) > getDayId(date, index); index++) counterUp++;
    let index = getAmountDays(date);
    for (index; getDayId(date, index - 1) < getDayId(date, index); index--) counterDown++;
    return counterUp < counterDown ? counterUp : counterDown;
}

/**
 * @param date - date string of any supported format
 * @returns {number}
 * number of full weeks in the date month. To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    let tmp = getAmountDays(date);
    if (getDayId(date, tmp) !== 7) tmp -= getDayId(date, tmp);
    if (getDayId(date, 1) !== 1) tmp -= 8 - getDayId(date, 1);
    return tmp / 7;
}
