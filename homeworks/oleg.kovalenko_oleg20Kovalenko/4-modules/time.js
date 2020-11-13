/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
export function getFridaysOfMonth(date) {
    const friday = [];
    const fridayMonth = getDaysOfMonth(date);
    // eslint-disable-next-line no-undef
    for (let i = 1; i <= fridayMonth; i++) {
        // eslint-disable-next-line no-undef
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

// eslint-disable-next-line no-unused-vars
export function isMonthLong(date) {
    // eslint-disable-next-line no-undef
    return getDaysOfMonth(date) === 31;
}

// eslint-disable-next-line no-unused-vars
export function shortestWeekDaysNumber(date) {
    // eslint-disable-next-line no-undef
    const weekDaysNumber = getDaysOfMonth(date);
    let weekDays = 0;
    let daysNumber = 7;
    for (let i = 1; i <= weekDaysNumber; i++) {
        // eslint-disable-next-line no-undef
        const dateFridaysOfMonth = new Date(date.getFullYear(), date.getMonth(), i);
        // eslint-disable-next-line no-cond-assign
        if (dateFridaysOfMonth.getDay() === 1 ? daysNumber > weekDays : daysNumber = weekDays) {
            weekDays = 0;
        }
        weekDays++;
    }
    return daysNumber;
}

export function fullWeeksNumberInMonth(date) {
    let fullWeeksInMonth = 0;
    // eslint-disable-next-line no-shadow
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
