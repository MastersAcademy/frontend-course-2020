function getCountDaysOfMonth(date) {
    return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */

export function getFridaysOfMonth(date) {
    const fridays = [];
    for (let i = 1; i <= getCountDaysOfMonth(date); i++) {
        const testDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (testDate.getDay() === 5) fridays.push(testDate.getDate());
    }

    return fridays;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    return getCountDaysOfMonth(date) === 31;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    let shortestWeeksDaysNumber = 7;
    let currentWeekDays = 0;
    const daysInMonth = getCountDaysOfMonth(date);
    for (let i = 1; i <= daysInMonth; i++) {
        const testDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (testDate.getDay() === 1) {
            if (shortestWeeksDaysNumber > currentWeekDays) {
                shortestWeeksDaysNumber = currentWeekDays;
            }
            currentWeekDays = 0;
        }
        currentWeekDays++;
    }

    if (shortestWeeksDaysNumber > currentWeekDays) {
        shortestWeeksDaysNumber = currentWeekDays;
    }

    return shortestWeeksDaysNumber;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month.
 * To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    let fullWeeksNumber = 0;

    let currentWeekDays = 0;
    for (let i = 1; i <= getCountDaysOfMonth(date); i++) {
        const testDate = new Date(date.getFullYear(), date.getMonth(), i);
        currentWeekDays++;

        if (currentWeekDays === 7) {
            fullWeeksNumber++;
        }

        if (testDate.getDay() === 1) {
            currentWeekDays = 0;
        }
    }

    return fullWeeksNumber;
}

export function getTimeWithBind(timeBind) {
    const currentTime = new Date(Date.now());
    const timezoneOffset = currentTime.getTimezoneOffset() / 60;
    currentTime.setHours(currentTime.getHours() + timezoneOffset + Number.parseInt(timeBind, 10));

    return currentTime;
}
