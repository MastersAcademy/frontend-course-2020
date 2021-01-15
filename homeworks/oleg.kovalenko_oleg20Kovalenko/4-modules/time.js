/* eslint-disable no-use-before-define */
export function getFridaysOfMonth(date) {
    const friday = [];
    const fridayMonth = getDaysOfMonth(date);
    for (let i = 1; i <= fridayMonth; i++) {
        const dateFridaysOfMonth = new Date(date.getFullYear(), date.getMonth(), i);
        if (dateFridaysOfMonth.getDay() === 5) {
            friday.push(dateFridaysOfMonth.getDate());
        }
    }
    return friday;
}

function getDaysOfMonth(date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
}

export function isMonthLong(date) {
    return getDaysOfMonth(date) === 31;
}

export function shortestWeekDaysNumber(date) {
    const weekDaysNumber = getDaysOfMonth(date);
    let weekDays = 0;
    let daysNumber = 7;
    for (let i = 1; i <= weekDaysNumber; i++) {
        const dateFridaysOfMonth = new Date(date.getFullYear(), date.getMonth(), i);
        if (dateFridaysOfMonth.getDay() === 1) {
            if (daysNumber > weekDays) {
                daysNumber = weekDays;
            }
            weekDays = 0;
        }
        weekDays++;
    }
    return daysNumber;
}

export function fullWeeksNumberInMonth(date) {
    let fullWeeksInMonth = 0;
    const dataDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= dataDaysOfMonth; i++) {
        const newData = new Date(date.getFullYear(), date.getMonth(), i);
        if (newData.getDay() === 1) {
            newData.setDate(newData.getDate() + 6);
            if (newData.getMonth() === date.getMonth()) {
                fullWeeksInMonth++;
            }
        }
    }
    return fullWeeksInMonth;
}
