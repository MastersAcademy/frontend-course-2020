function daysInMonth(obj) {
    return new Date(obj.year, obj.month, 0).getDate();
}

function parseInputDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    return { month, year };
}

export function getFridaysOfMonth(date) {
    const objMonthAndYear = parseInputDate(date);
    const numberOfDaysInMonth = daysInMonth(objMonthAndYear);
    const result = [];
    for (let day = 1; day <= numberOfDaysInMonth; day++) {
        const dateObj = new Date(objMonthAndYear.year, objMonthAndYear.month, day);
        if (dateObj.toString().toLowerCase().includes('fri')) result.push(day);
    }
    return result;
}

export function isMonthLong(date) {
    const days = daysInMonth(parseInputDate(date));
    if (days <= 30) return true;
    return false;
}

export function shortestWeekDaysNumber(date) {
    //  найти дни первой недели и сравнить
    const objMonthAndYear = parseInputDate(date);
    const lastWeek = new Date(objMonthAndYear.year, objMonthAndYear.month + 1, 0);
    console.log(lastWeek.getDay());
    return lastWeek.getDay();
}

export function fullWeeksNumberInMonth(date) {
    const objMonthAndYear = parseInputDate(date);
    const numberOfDaysInMonth = daysInMonth(objMonthAndYear);
    let result = 0;
    let firstMondayInMonth;
    for (let day = 1; day <= numberOfDaysInMonth; day++) {
        const dateObj = new Date(objMonthAndYear.year, objMonthAndYear.month, day);
        if (dateObj.toString().toLowerCase().includes('mon')) {
            firstMondayInMonth = day;
            for (let i = firstMondayInMonth; i <= numberOfDaysInMonth; i++) {
                const dateObj2 = new Date(objMonthAndYear.year, objMonthAndYear.month, i);
                if (dateObj2.toString().toLowerCase().includes('sun')) {
                    result += 1;
                }
            }
            break;
        }
    }
    return result;
}
