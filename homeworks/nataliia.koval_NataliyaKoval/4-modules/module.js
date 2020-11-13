export function getDaysOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
}

export function getFridaysOfMonth(date) {
    const fridays = [];
    for (let i = 1; i <= getDaysOfMonth(date); i++) {
        const testDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (testDate.getDay() === 5) {
            fridays.push(testDate.getDate());
        }
    }
    return fridays;
}

export function isMonthLong(date) {
    console.log(date);
    return getDaysOfMonth(date) === 31;
}

export function getWeeks(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const weeks = [];
    let start = 1;
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    let end = 7 - firstDate.getDay();

    const numDays = lastDate.getDate();

    while (start <= numDays) {
        weeks.push({ start, end });
        start = end + 1;
        end += 7;
        if (end > numDays) {
            end = numDays;
        }
    }
    return weeks;
}

export function getShortestWeek(date) {
    const weeks = getWeeks(date);
    const lengthOfWeeks = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const week of weeks) {
        const length = week.end - week.start + 1;
        lengthOfWeeks.push(length);
    }
    const min = Math.min.apply(null, lengthOfWeeks);
    return min;
}

export function getFullWeeks(date) {
    const weeks = getWeeks(date);
    let fullWeeks = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const week of weeks) {
        const length = week.end - week.start + 1;
        if (length === 7) {
            fullWeeks += 1;
        }
    }
    return fullWeeks;
}
