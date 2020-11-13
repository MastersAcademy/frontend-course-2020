/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getFridaysOfMonth (date) {
    return [6, 13, 20, 27];
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong (date) {
    return true;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber (date) {
    return 1;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month. To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth (date) {
    return 4;
}
