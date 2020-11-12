// Determination how many fridays in selected month
function getFridaysOfMonth(date) {
    const fridays = [];
    let day;
    const month = date.getMonth();
    const year = date.getFullYear();
    const amountDays = new Date(year, month + 1, 0).getDate(); // '0' means last day previous month
    for (let i = 1; i <= amountDays; i++) {
        // Determination data for every day in month
        day = new Date(year, month, i).getDay();
        // Cheking if each data is Friday
        if (day === 5) { // '5' means friday in Date object
            fridays.push(new Date(year, month, i).getDate());
        }
    }
    return fridays;
}

// Checking if selected month is long
function isMonthLong(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const amountDays = new Date(year, month + 1, 0).getDate();
    return amountDays === 31;
}

// Determination how many days have the shortest week in selected month
function shortestWeekDaysNumber(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const lastDay = new Date(year, month + 1, 0).getDay();
    const firstDay = new Date(year, month, 1).getDay();
    // comparing position first day and last day of month
    return lastDay < 6 - firstDay ? lastDay + 1 : 7 - firstDay;
}

// Calculation how many full weeks in month
function fullWeeksNumberInMonth(date) {
    const mondays = [];
    let amountWeeks = 0;
    let day;
    const month = date.getMonth();
    const year = date.getFullYear();
    const amountDays = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= amountDays; i++) {
        day = new Date(year, month, i).getDay();
        if (day === 0) { // '0' means monday in Date object
            mondays.push(new Date(year, month, i).getDate());
        }
    }
    mondays.forEach((monday) => (monday + 6 <= amountDays ? amountWeeks++ : false));
    return amountWeeks;
}

function subtractHours(date, hours) {
    const resultDate = date;
    resultDate.setHours((date.getUTCHours() + hours));
    return resultDate;
}

function addHours(date, hours) {
    const resultDate = date;
    resultDate.setHours((date.getUTCHours() + hours));
    return resultDate;
}

export {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
};
