function getFridaysOfMonth(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();

    const dayInMonth = (32 - new Date(year, month, 32).getDate());

    // created array for current month
    const monthArr = [];
    for (let i = 1; i <= dayInMonth; i++) {
        monthArr.push(new Date(year, month, i));
    }

    const fridays = monthArr
        .filter((item) => item.getDay() === 5)
        .map((item) => item.getDate());

    return fridays;
}

function isMonthLong(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();

    const dayInMonth = (32 - new Date(year, month, 32).getDate());

    return (dayInMonth === 31) ? 'true' : 'false';
}

function shortestWeekDaysNumber(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();

    const dayInMonth = (32 - new Date(year, month, 32).getDate());

    // created array for current month
    const monthArr = [];
    for (let i = 1; i <= dayInMonth; i++) {
        monthArr.push(new Date(year, month, i));
    }

    const weeks = [[], [], [], [], [], []];
    let countWeek = 0;

    for (let i = 0; i < monthArr.length; i++) {
        if (monthArr[i].getDay() === 1) countWeek++;

        weeks[countWeek].push(monthArr[i]);
    }

    const weeksArr = weeks
        .map((item) => item.length)
        .filter((item) => item !== 0);

    return Math.min(...weeksArr);
}

function fullWeeksNumberInMonth(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();

    const dayInMonth = (32 - new Date(year, month, 32).getDate());

    // created array for current month
    const monthArr = [];
    for (let i = 1; i <= dayInMonth; i++) {
        monthArr.push(new Date(year, month, i));
    }

    const weeks = [[], [], [], [], [], []];
    let countWeek = 0;
    for (let i = 0; i < monthArr.length; i++) {
        if (monthArr[i].getDay() === 1) countWeek++;

        weeks[countWeek].push(monthArr[i]);
    }

    const fullWeeksArr = weeks
        .map((item) => item.length)
        .filter((item) => item === 7)
        .length;

    return fullWeeksArr;
}

function subtractHours(date, hours) {
    const currentHours = date - hours;
    const resultDate = new Date();
    resultDate.setHours(currentHours);

    return resultDate;
}

function addHours(date, hours) {
    const currentHours = date + hours;
    const resultDate = new Date();
    resultDate.setHours(currentHours);

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
