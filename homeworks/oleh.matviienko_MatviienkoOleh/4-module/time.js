function isMonthLong(data) {
    const year = data.getFullYear();
    const month = data.getMonth();
    return 32 - new Date(year, month, 32).getDate() === 31;
}

function getFridays(time) {
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    const newData = new Date(year, month, day);
    const fridays = [];
    newData.setDate(1);
    while (newData.getDay() !== 5) {
        newData.setDate(newData.getDate() + 1);
    }
    while (newData.getMonth() === month) {
        fridays.push(new Date(newData.getTime()).getDate());
        newData.setDate(newData.getDate() + 7);
    }
    return fridays;
}

function fullWeeksNumberInMonth(data) {
    const y = data.getFullYear();
    const m = data.getMonth();
    const firstDay = new Date(y, m, 1);
    const dayOfWeek = firstDay.getDay();
    const numberOfDays = 32 - new Date(y, m, 32).getDate();
    let aDay;
    if (dayOfWeek === 1) {
        aDay = 3;
    } if (dayOfWeek === 2 || dayOfWeek === 3) {
        aDay = 3;
    } if (dayOfWeek === 4 && numberOfDays === 31) {
        aDay = 4;
    } if (dayOfWeek === 4) {
        aDay = 3;
    } if (dayOfWeek === 5 && numberOfDays === 31) {
        aDay = 4;
    } if (dayOfWeek === 5 && numberOfDays === 30) {
        aDay = 4;
    } if (dayOfWeek === 5) {
        aDay = 3;
    } if (dayOfWeek === 6 && numberOfDays === 28) {
        aDay = 3;
    } if (dayOfWeek === 6) {
        aDay = 4;
    } if (dayOfWeek === 0) {
        aDay = 4;
    }
    return aDay;
}

function shortestWeekDaysNumber(data) {
    const year = data.getFullYear();
    const month = data.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDay();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    let firstWeek;
    let lastWeek;
    if (firstDayOfMonth === 0){
        firstWeek = 1;
    } else {
        firstWeek = 8 - firstDayOfMonth;
    }
    if (lastDay === 0){
        lastWeek = 7;
    } else {
        lastWeek = lastDay;
    }
    if (firstWeek >= lastWeek) {
        return lastWeek;
    }
    return firstWeek;
}

export {
    isMonthLong,
    getFridays,
    fullWeeksNumberInMonth,
    shortestWeekDaysNumber,
};
