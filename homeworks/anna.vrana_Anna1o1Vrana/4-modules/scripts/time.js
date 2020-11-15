/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */

// Get month fridays
export function getFridays(date) {
    const currentDate = new Date(date);
    const currentMonth = currentDate.getMonth();
    const monthFridays = [];
    currentDate.setDate(1);

    // Get the first Monday in the month
    while (currentDate.getDay() !== 5) {
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Get all the other Fridays in the month
    while (currentDate.getMonth() === currentMonth) {
        monthFridays.push(new Date(currentDate.getTime()));
        currentDate.setDate(currentDate.getDate() + 7);
    }
    // get and render fridays array
    const fridaysArr = [];
    for (let i = 0; i < monthFridays.length; i++) {
        fridaysArr.push(monthFridays[i].getDate());
    }

    return fridaysArr;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
// export function isMonthLong (date) {
//     return true;
// }

// Is month long?
export function isMonthLong(date) {
    const currentDate = new Date(date);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthLength = new Date(currentYear, currentMonth, 0).getDate();
    let resultMonthLong = '';
    if (monthLength < 31) {
        resultMonthLong = true;
    } else {
        resultMonthLong = false;
    }
    return resultMonthLong;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */

// Days of shortest week in month
export function shortestWeekDaysNumber(date) {
    const currentDate = new Date(date);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    let firstWeek = 0;
    const lastWeek = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
    let shortestWeek = 0;

    if (firstDay === 0) {
        firstWeek = 1;
    } else if (firstDay > 1) {
        firstWeek = 7 - firstDay + 1;
    }

    if (firstWeek >= lastWeek) {
        shortestWeek = lastWeek || firstWeek;
    } else {
        shortestWeek = firstWeek || lastWeek;
    }

    if (firstWeek === 0 && lastWeek === 0) {
        shortestWeek = 7;
    }

    return shortestWeek;
}

/**
 * @param date - date string of any supported format
 * @returns {string} number of full weeks in the date month.
 * To be full, week should start and end in the same month
 */
// Count of full weeks

export function fullWeeksNumberInMonth(date) {
    const currentDate = new Date(date);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    // eslint-disable-next-line max-len
    const monthLength = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    let firstWeek = 0;

    if (firstDay === 0) {
        firstWeek = 1;
    } else if (firstDay > 1) {
        firstWeek = 7 - firstDay + 1;
    }
    return ((monthLength - firstWeek) / 7).toFixed();
}
