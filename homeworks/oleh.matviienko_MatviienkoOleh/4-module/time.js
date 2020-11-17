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
    const year = data.getFullYear();
    const month = data.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    let fullWeekskNumber = 0;
    for (let i = 1; i <= lastDayOfMonth; i++) {
        const allDays = new Date(year, month, i);
        if (allDays.getDay() === 1) {
            allDays.setDate(allDays.getDate() + 6);
            if (allDays.getMonth() === month) {
                fullWeekskNumber++;
            }
        }
    }
    return fullWeekskNumber;
}

function shortestWeekDaysNumber(data) {
    const year = data.getFullYear();
    const month = data.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDay();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    let firstWeek;
    let lastWeek;
    if (firstDayOfMonth === 0) {
        firstWeek = 1;
    } else {
        firstWeek = 8 - firstDayOfMonth;
    }
    if (lastDay === 0) {
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
