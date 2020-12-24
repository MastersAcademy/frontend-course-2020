export function getFridays(date) {
    const dateInput = date;
    const arrayFriday = [];
    const monthData = new Date(dateInput.getFullYear(),
        dateInput.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= monthData; i++) {
        const currentData = new Date(dateInput.getFullYear(), dateInput.getMonth(), i);
        if (currentData.getDay() === 5) {
            arrayFriday.push(currentData.getDate());
        }
    }
    return arrayFriday;
}

export function longMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 31).getMonth() === date.getMonth();
}

export function shortestWeek(date) {
    const dateInput = date;
    let array = [];
    let minLength = 0;
    const monthData = new Date(dateInput.getFullYear(),
        dateInput.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= monthData; i++) {
        const currentData = new Date(dateInput.getFullYear(), dateInput.getMonth(), i);
        if (currentData.getDay() === 1) array = [];
        array.push(currentData.getDay());
        if (currentData.getDay() === 0 || currentData.getDate() === monthData) {
            if (!minLength) minLength = array.length;
            minLength = Math.min(minLength, array.length);
        }
    }
    return minLength;
}

export function fullWeeks(date) {
    const dateInput = date;
    let weeks = 1;
    let day = -1;
    const monthData = new Date(dateInput.getFullYear(),
        dateInput.getMonth() + 1, 0).getDate();

    const firstDay = new Date(dateInput.getFullYear(), dateInput.getMonth(), 1).getDay();
    const lastDay = new Date(dateInput.getFullYear(), dateInput.getMonth() + 1, 0).getDay();
    for (let i = 1; i <= monthData; i++) {
        const newDay = new Date(dateInput.getFullYear(), dateInput.getMonth(), i).getDay();
        if (day === 0 && newDay === 1) {
            weeks += 1;
        }
        day = newDay;
    }
    if (firstDay !== 1) weeks--;
    if (lastDay !== 0) weeks--;
    return weeks;
}
