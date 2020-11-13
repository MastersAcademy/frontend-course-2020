function isMonthLong(data) {
    const year = data.getFullYear();
    const month = data.getMonth();
    const numberOfDays = 32 - new Date(year, month, 32).getDate();
    if (numberOfDays === 31) {
        return true;
    }
    return false;
}

function getFridays(time) {
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    const newData = new Date(year, month, day);
    const fridays = [];
    const array = [];
    newData.setDate(1);
    while (newData.getDay() !== 5) {
        newData.setDate(newData.getDate() + 1);
    }
    while (newData.getMonth() === month) {
        fridays.push(new Date(newData.getTime()));
        newData.setDate(newData.getDate() + 7);
    }
    if (fridays.length === 5) {
        array.push(fridays[0].getDate());
        array.push(fridays[1].getDate());
        array.push(fridays[2].getDate());
        array.push(fridays[3].getDate());
        array.push(fridays[4].getDate());
        return array;
    } if (fridays.length === 4) {
        array.push(fridays[0].getDate());
        array.push(fridays[1].getDate());
        array.push(fridays[2].getDate());
        array.push(fridays[3].getDate());
        return array;
    }
    return array;
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
    const y = data.getFullYear();
    const m = data.getMonth();
    const firstDay = new Date(y, m, 1);
    const dayOfWeek = firstDay.getDay();
    const numberOfDays = 32 - new Date(y, m, 32).getDate();
    const aDay = [];
    if (dayOfWeek === 0 && numberOfDays === 28) {
        aDay.push(7);
    } if (dayOfWeek === 0 && numberOfDays === 29) {
        aDay.push(1);
    } if (dayOfWeek === 0 && numberOfDays === 30) {
        aDay.push(2);
    } if (dayOfWeek === 0 && numberOfDays === 31) {
        aDay.push(3);
    } if (dayOfWeek === 1 && numberOfDays === 28) {
        aDay.push(1);
    } if (dayOfWeek === 1 && numberOfDays === 29) {
        aDay.push(2);
    } if (dayOfWeek === 1 && numberOfDays === 30) {
        aDay.push(3);
    } if (dayOfWeek === 1 && numberOfDays === 31) {
        aDay.push(4);
    } if (dayOfWeek === 2 && numberOfDays === 28) {
        aDay.push(2);
    } if (dayOfWeek === 2 && numberOfDays === 29) {
        aDay.push(3);
    } if (dayOfWeek === 2 && numberOfDays === 30) {
        aDay.push(4);
    } if (dayOfWeek === 2 && numberOfDays === 31) {
        aDay.push(5);
    } if (dayOfWeek === 3 && numberOfDays === 28) {
        aDay.push(3);
    } if (dayOfWeek === 3) {
        aDay.push(4);
    } if (dayOfWeek === 4) {
        aDay.push(3);
    } if (dayOfWeek === 5 && numberOfDays === 31) {
        aDay.push(1);
    } if (dayOfWeek === 5) {
        aDay.push(2);
    } if (dayOfWeek === 6) {
        aDay.push(1);
    }
    return aDay;
}

export {
    isMonthLong,
    getFridays,
    fullWeeksNumberInMonth,
    shortestWeekDaysNumber,
};