export function getFridays(selectedDate) {
    const daysCount = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0,
    ).getDate();

    const fridayArray = [];
    for (let i = 0; i <= daysCount; i++) {
        const day = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            i,
        );
        if (day.getDay() === 5) {
            fridayArray.push(new Date(day).getDate());
        }
    }
    return fridayArray;
}

export function getMonthIsLong(selectedDate) {
    const daysCont = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0,
    ).getDate();
    return daysCont >= 31;
}

export function getDaysShortestWeek(selectedDate) {
    const daysCount = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0,
    ).getDate();

    const firstDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1,
    ).getDay();

    const lastDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        daysCount,
    ).getDay();

    const firstWeek = firstDay === 0 ? 1 : 8 - firstDay;

    return firstWeek > lastDay ? lastDay : firstDay;
}

export function getFullWeekInMonth(selectedDate) {
    const daysCount = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0,
    ).getDate();

    const firstDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1,
    ).getDay();

    const lastDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        daysCount,
    ).getDay();

    const firstWeek = firstDay === 0 ? 1 : 8 - firstDay;

    return (daysCount - (firstWeek + lastDay)) / 7;
}
