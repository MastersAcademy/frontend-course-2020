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
    return getDaysOfMonth(date) === 31;
}

export function getWeeks(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weeks = [];
    const lastDate = new Date(year, month + 1, 0);
    let start = 0;
    let end;

    for (let i = 1; i < lastDate.getDate() + 1; i++) {
        if (daysName[Number(new Date(year, month, i).getDay())] === 'Sunday' || i === lastDate.getDate()) {
            end = i;
            weeks.push({
                start: start + 1,
                end,
            });
            start = i;
        }
    }
    return weeks;
}

export function getShortestWeek(date) {
    const weeks = getWeeks(date);
    const lengthOfWeeks = [];

    weeks.forEach((week) => {
        const length = week.end - week.start + 1;
        if (length > 0) {
            lengthOfWeeks.push(length);
        }
    });

    const min = Math.min.apply(null, lengthOfWeeks);
    return min;
}

export function getFullWeeks(date) {
    const weeks = getWeeks(date);
    let fullWeeks = 0;

    weeks.forEach((week) => {
        const length = week.end - week.start + 1;
        if (length === 7) {
            fullWeeks += 1;
        }
    });

    return fullWeeks;
}
