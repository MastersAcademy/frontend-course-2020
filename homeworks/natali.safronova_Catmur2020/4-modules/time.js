/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getFridaysOfMonth(date) {
    const result = [];
    const d = new Date(date);
    const m = d.getMonth();
    let i = 1;
    do {
        d.setDate(i);
        if ((d.getMonth() === m) && (d.getDay() === 5)) {
            result.push(i);
        }
        i++;
    } while (i <= 31);

    return result;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    const d = new Date(date);
    d.setDate(31);
    return d.getDate() === 31;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    const d = new Date(date);
    d.setDate(1);
    const firstWeekMapping = {
        0: 1, 1: 7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2,
    };
    const firstWeekDays = firstWeekMapping[d.getDay()];

    d.setMonth(d.getMonth() + 1);
    d.setDate(0);
    const lastWeekMapping = {
        0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6,
    };
    const lastWeekDays = lastWeekMapping[d.getDay()];
    return firstWeekDays > lastWeekDays ? lastWeekDays : firstWeekDays;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month.
 * To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + 1);
    d.setDate(0);
    return Math.floor((d.getDate() - d.getDay()) / 7);
}
