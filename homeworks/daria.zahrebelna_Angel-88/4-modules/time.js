export function getFridaysOfMonth(date) {
    const inputtedDate = date;
    const fridaysArray = [];
    const daysInMonth = new Date(inputtedDate.getFullYear(),
        inputtedDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = new Date(inputtedDate.getFullYear(), inputtedDate.getMonth(), i);
        if (currentDate.getDay() === 5) {
            fridaysArray.push(currentDate.getDate());
        }
    }
    return fridaysArray;
}

export function isMonthLong(date) {
    return new Date(date.getFullYear(), date.getMonth(), 31).getMonth() === date.getMonth();
}

export function shortestWeekDaysNumber(date) {
    const inputtedDate = date;
    let array = [];
    let minLength = 0;
    const daysInMonth = new Date(inputtedDate.getFullYear(),
        inputtedDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = new Date(inputtedDate.getFullYear(), inputtedDate.getMonth(), i);
        if (currentDate.getDay() === 1) array = [];
        array.push(currentDate.getDay());
        if (currentDate.getDay() === 0 || currentDate.getDate() === daysInMonth) {
            if (!minLength) minLength = array.length;
            minLength = Math.min(minLength, array.length);
        }
    }
    return minLength;
}

export function fullWeeksNumberInMonth(date) {
    const inputtedDate = date;
    let weeks = 1;
    let day = -1;
    const daysInMonth = new Date(inputtedDate.getFullYear(),
        inputtedDate.getMonth() + 1, 0).getDate();

    const firstDay = new Date(inputtedDate.getFullYear(), inputtedDate.getMonth(), 1).getDay();
    const lastDay = new Date(inputtedDate.getFullYear(), inputtedDate.getMonth() + 1, 0).getDay();
    for (let i = 1; i <= daysInMonth; i++) {
        const newDay = new Date(inputtedDate.getFullYear(), inputtedDate.getMonth(), i).getDay();
        if (day === 0 && newDay === 1) {
            weeks += 1;
        }
        day = newDay;
    }
    if (firstDay !== 1) weeks--;
    if (lastDay !== 0) weeks--;
    return weeks;
}
