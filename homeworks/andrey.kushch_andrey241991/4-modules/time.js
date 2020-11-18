function getDaysInMonthCount(selectedDate) {
    return new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0,
    ).getDate();
}

function getFirstDayInMonth(selectedDate) {
    const firstDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1,
    ).getDay();

    return firstDay === 0 ? 7 : firstDay;
}

function getLastDayInMonth(selectedDate) {
    const lastDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        getDaysInMonthCount(selectedDate),
    ).getDay();

    return lastDay === 0 ? 7 : lastDay;
}

export function getMonthIsLong(selectedDate) {
    return getDaysInMonthCount(selectedDate) >= 31;
}

export function getFridays(selectedDate) {
    const FRIDAY = 5;
    const daysCount = getDaysInMonthCount(selectedDate);

    const fridayArray = [];
    for (let i = 0; i <= daysCount; i++) {
        const day = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            i,
        );
        if (day.getDay() === FRIDAY) {
            fridayArray.push(new Date(day).getDate());
        }
    }
    return fridayArray;
}

export function getDaysShortestWeek(selectedDate) {
    const FULL_WEEK_INCLUSIVE = 8;
    const firstWeek = FULL_WEEK_INCLUSIVE - getFirstDayInMonth(selectedDate);
    const lastDay = getLastDayInMonth(selectedDate);
    return firstWeek > lastDay ? lastDay : firstWeek;
}

export function getFullWeekInMonth(selectedDate) {
    const FULL_WEEK = 7;
    const FULL_WEEK_INCLUSIVE = 8;
    const daysCount = getDaysInMonthCount(selectedDate);
    let firstWeek = FULL_WEEK_INCLUSIVE - getFirstDayInMonth(selectedDate);
    let lastDay = getLastDayInMonth(selectedDate);

    if (firstWeek === FULL_WEEK) {
        firstWeek = 0;
    }

    if (lastDay === FULL_WEEK) {
        lastDay = 0;
    }

    return (daysCount - (firstWeek + lastDay)) / 7;
}
