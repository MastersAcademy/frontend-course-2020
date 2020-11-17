export function getFridaysOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const arrayOfAllFridaysOfMonth = [];

    for (let i = 1; i <= lastDayOfMonth; i++) {
        const newDate = new Date(year, month, i);
        if (newDate.getDay() === 5) {
            arrayOfAllFridaysOfMonth.push(` ${newDate.getDate()}`);
        }
    }
    return arrayOfAllFridaysOfMonth;
}

export function isMonthLong(date) {
    return new Date(date.getFullYear(), date.getMonth(), 31).getMonth() === date.getMonth();
}

export function shortestWeekDaysNumber(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    let countDaysOfFirstWeek = 0;
    let countDaysOfLastWeek = 0;

    for (let i = 1; countDaysOfFirstWeek === 0; i++) {
        const newDate = new Date(year, month, i);
        if (newDate.getDay() === 0 && countDaysOfFirstWeek === 0) {
            countDaysOfFirstWeek = i;
        }
    }

    for (let i = lastDayOfMonth; countDaysOfLastWeek === 0; i--) {
        const newDate = new Date(year, month, i);
        if (newDate.getDay() === 1 && countDaysOfLastWeek === 0) {
            countDaysOfLastWeek = lastDayOfMonth - i + 1;
        }
    }
    return Math.min(countDaysOfFirstWeek, countDaysOfLastWeek);
}

export function fullWeeksNumberInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    let week = 0;
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDayOfMonth; i++) {
        const newData = new Date(year, month, i);
        if (newData.getDay() === 1) {
            newData.setDate(newData.getDate() + 6);
            if (newData.getMonth() === month) {
                week++;
            }
        }
    }
    return week;
}

export function subtractHours(date, hours) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() - hours);
    return resultDate;
}

export function addHours(date, hours) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() + hours);
    return resultDate;
}
