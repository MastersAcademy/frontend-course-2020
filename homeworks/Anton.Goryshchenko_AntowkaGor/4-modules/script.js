function getFridaysInMonth(date) {
    const month = date.getMonth();
    const fridays = [];
    date.setDate(1);
    while (date.getDay() !== 5) {
        date.setDate(date.getDate() + 1);
    }
    while (date.getMonth() === month) {
        fridays.push(new Date(date.getTime()).getDate());
        date.setDate(date.getDate() + 7);
    }
    return fridays;
}

function isMonthLong(date) {
    return new Date(date.getFullYear(), date.getMonth(), 31).getMonth() === date.getMonth();
}

function getWeekOfMonth(date) {
    const firstWeekday = new Date(date.getFullYear(), date.getMonth()).getDay() || 7;
    const offsetDate = date.getDate() + firstWeekday - 1;
    return Math.floor(offsetDate / 7);
}

function aboutShortWeek(date) {
    const firstWeek = new Date(date.getFullYear(), date.getMonth());
    const lastWeek = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const countOfDaysAtStart = 8 - (firstWeek.getDay() || 7);
    const countOfDaysAtEnd = lastWeek.getDay() || 7;
    return (countOfDaysAtStart < countOfDaysAtEnd) ? countOfDaysAtStart : countOfDaysAtEnd;
}

function aboutFullWeeks(date) {
    const month = date.getMonth();
    let fullWeeks = 0;
    date.setDate(1);

    const lastWeek = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const countOfDaysAtStart = 8 - (date.getDay() || 7);
    const countOfDaysAtEnd = lastWeek.getDay() || 7;

    if (countOfDaysAtStart === 7) {
        fullWeeks++;
    }
    if (countOfDaysAtEnd === 7) {
        fullWeeks++;
    }

    date.setDate(date.getDate() + 7);
    while (date.getMonth() === month) {
        fullWeeks++;
        date.setDate(date.getDate() + 7);
    }
    return fullWeeks;
}

export {
    getFridaysInMonth,
    isMonthLong,
    getWeekOfMonth,
    aboutShortWeek,
    aboutFullWeeks,
};
