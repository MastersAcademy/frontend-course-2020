/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function fridaysInMonth(date) {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    const fridays = [6 - (new Date(`${month}/01/${year}`).getDay())];
    for (let i = fridays[0] + 7; i < 33; i += 7) {
        fridays.push(i);
    }
    return fridays;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    const dates = new Date(date);
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();
    const daysInMonth = new Date(year, month, 0).getDate();
    if (daysInMonth === 31) {
        return 'true';
    }
    return 'false';
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    const dates = new Date(date);
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();
    const beginningOfTheMonth = new Date(dates.getFullYear(), dates.getMonth(), 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const weeks = [];
    weeks[1] = [];
    weeks[2] = [];
    weeks[3] = [];
    weeks[4] = [];
    weeks[5] = [];
    weeks[6] = [];
    const result = [];
    let currWeek = 1;
    for (let i = 1; i <= daysInMonth; i++) {
        let currDate = beginningOfTheMonth.getDate();
        if (beginningOfTheMonth.getDay() === 1) {
            currWeek += 1;
        }
        weeks[currWeek].push(beginningOfTheMonth.getDay());
        currDate += 1;
        beginningOfTheMonth.setDate(currDate);
    }
    weeks.forEach((value) => {
        if (value.length !== 0) {
            result.push(value.length);
        }
    });
    return Math.min(...result);
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month. To be full,
 *  week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    let week = 0;
    const lastOfMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastOfMonth; i++) {
        const el = new Date(year, month, i);
        if (el.getDay() === 1) {
            el.setDate(el.getDate() + 6);
            if (el.getMonth() === month) {
                week++;
            }
        }
    }
    return week;
}
/**
 *
 * @param date - Date object or a date string of any supported format
 * @param hours - number of hours to subtract
 * @returns {Date} resultDate: date - hours
 */
export function subtractHours(date, hour) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() - hour);
    return resultDate;
}

/**
 *
 * @param date - Date object or a date string of any supported format
 * @param hours - number of hours to add
 * @returns {Date} resultDate: date + hours
 */
export function addHours(date, hour) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() + hour);
    return resultDate;
}
