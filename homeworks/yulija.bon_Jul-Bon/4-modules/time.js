const dateInput = document.querySelector('input[type="date"]');

function daysInThisMonth(date) {
    const currentDate = new Date(date);
    const days = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    return days;
}

function isMonthLong(daysNumber) {
    if (daysNumber === 31) {
        return true;
    }
    return false;
}

function getFridaysOfMonth(days) {
    const currentDate = new Date(dateInput.value);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    let newData = new Date(year, month, day);
    const fridaysArr = [];
    for (let i = 1; i <= days; i++) {
        newData = new Date(year, month, i);
        let thisDate = newData.getDate();
        if (newData.getDay() === 5) {
            fridaysArr.push(newData.getDate());
        }
        thisDate += 1;
        newData.setDate(thisDate);
    }

    return fridaysArr;
}

function fulWeeksCount(days) {
    const currentDate = new Date(dateInput.value);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    let weeksCount = 0;

    for (let i = 1; i <= days; i++) {
        const newDate = new Date(year, month, i);
        const lastDate = new Date(year, month, i + 6);

        if (newDate.getDay() === 1) {
            if (lastDate.getDay() === 0 && month === lastDate.getMonth()) {
                weeksCount += 1;
            }
        }
    }

    return weeksCount;
}

function shortestWeekDaysNumber(days) {
    const currentDate = new Date(dateInput.value);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstMonthDay = new Date(year, month, 1);
    const lastMonthDay = new Date(year, month, days);
    const dayOfFirstWeek = firstMonthDay.getDay();
    const lastWeekDaysCount = lastMonthDay.getDay();
    let firstWeekDaysCount = 0;
    let daysCount = 0;
    if (dayOfFirstWeek > 1) {
        firstWeekDaysCount = (7 - dayOfFirstWeek + 1);
    } else if (dayOfFirstWeek === 0) {
        firstWeekDaysCount = 1;
    }

    if (firstWeekDaysCount >= lastWeekDaysCount && lastWeekDaysCount !== 0) {
        daysCount = lastWeekDaysCount;
    } else {
        daysCount = firstWeekDaysCount;
    }

    return daysCount;
}

export {
    daysInThisMonth,
    isMonthLong,
    getFridaysOfMonth,
    shortestWeekDaysNumber,
    fulWeeksCount,
};
