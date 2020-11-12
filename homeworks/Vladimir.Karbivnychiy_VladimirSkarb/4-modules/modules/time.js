export function getFridays(date) {
    const time = new Date(date.value);
    const lastDay = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate();
    const fridays = [];
    let i = 1;
    while (i <= lastDay) {
        const day = new Date(time.getFullYear(), time.getMonth(), i);
        if (day.getDay() === 5) {
            fridays.push(day.getDate());
        }
        ++i;
    }
    return fridays;
}

export function isMonthLong(date) {
    const time = new Date(date.value);
    let monthLong = '';
    const day = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate();
    monthLong = day === 31;
    return monthLong;
}

export function shortestWeekDaysNumber(date) {
    const time = new Date(date.value);
    const firstDay = new Date(time.getFullYear(), time.getMonth(), 1).getDay();
    const lastDay = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDay();
    const firstWeek = firstDay === 0 ? 1 : 8 - firstDay;
    const lastWeek = lastDay === 0 ? 7 : lastDay;
    const result = firstWeek > lastWeek ? lastWeek : firstWeek;
    return result;
}

export function fullWeeksNumberInMonth(date) {
    const time = new Date(date.value);
    const firstDay = new Date(time.getFullYear(), time.getMonth(), 1).getDay();
    const lastDay = new Date(time.getFullYear(), time.getMonth() + 1, 0);
    let fullWeeksInMonth;
    const daysInFirstWeek = firstDay === 0 ? 1 : 8 - firstDay;
    if (daysInFirstWeek === 7) {
        fullWeeksInMonth = Math.floor((lastDay.getDate()) / 7);
    } else {
        fullWeeksInMonth = Math.floor((lastDay.getDate() - daysInFirstWeek) / 7);
    }
    return fullWeeksInMonth;
}

export function updateTime(optionValue) {
    const resultDate = new Date();
    if (optionValue === 'kyiv') {
        resultDate.setHours(resultDate.getHours());
    } else if (optionValue === 'tokyo') {
        resultDate.setHours(resultDate.getHours() + 7);
    } else if (optionValue === 'london') {
        resultDate.setHours(resultDate.getHours() + 2);
    } else if (optionValue === 'newYork') {
        resultDate.setHours(resultDate.getHours() - 7);
    }
    return resultDate.toTimeString().replace(/ .*/, '');
}
