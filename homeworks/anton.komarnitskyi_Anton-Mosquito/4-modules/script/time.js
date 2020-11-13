const getDate = (date) => new Date(date);

const getfirstDay = (now) => new Date(now.getFullYear(), now.getMonth(), 1);

const getlastDay = (now) => new Date(now.getFullYear(), now.getMonth() + 1, 0);

const howManyDaysOfWeek = (day, flag) => {
    let quantity = null;

    switch (flag) {
        case 'first':
            if (day === 0) quantity = 1;
            else if (day === 1) quantity = 0;
            else quantity = 7 - (day - 1);
            break;
        case 'last':
            if (day === 0) quantity = 0;
            else quantity = day;
            break;
        default:
            break;
    }

    return quantity;
};

const timeDiference = (date, hours, flag) => {
    const innerDate = getDate(date);
    const currenеDate = new Date();
    const now = Date.parse(new Date(
        innerDate.getFullYear(),
        innerDate.getMonth(),
        innerDate.getDate(),
        currenеDate.getHours(),
        currenеDate.getMinutes(),
        currenеDate.getSeconds(),
    ));

    const currentHours = hours * (1000 * 60 * 60);

    let result = null;

    if (flag === 'add') result = new Date(now + currentHours);
    if (flag === 'subtract') result = new Date(now - currentHours);

    return result;
};

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
function isMonthLong(date) {
    const now = getDate(date);
    const checkMonth = getlastDay(now);

    let result = null;

    if (checkMonth.getDate() === 31) result = true;
    else result = false;

    return result;
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
function getFridaysOfMonth(date) {
    const array = [];
    const now = getDate(date);

    const findFridays = (day) => {
        for (let index = 1; index <= day; index++) {
            const newDate = new Date(now.getFullYear(), now.getMonth(), index);
            if (newDate.getDay() === 5) {
                array.push(newDate.getDate());
            }
        }
    };

    if (isMonthLong(now)) findFridays(31);
    else findFridays(30);

    return array;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
function shortestWeekDaysNumber(date) {
    let number = null;
    const now = getDate(date);
    const firstDay = getfirstDay(now);
    const lastDay = getlastDay(now);

    const quantityDaysFirstWeek = howManyDaysOfWeek(
        firstDay.getDay(),
        'first',
    );

    const quantityDaysLastWeek = howManyDaysOfWeek(lastDay.getDay(), 'last');

    if (quantityDaysFirstWeek < quantityDaysLastWeek) number = quantityDaysLastWeek;
    else if (quantityDaysFirstWeek > quantityDaysLastWeek) number = quantityDaysFirstWeek;
    else number = quantityDaysFirstWeek || quantityDaysLastWeek;

    return number;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month. To be full,
 * week should start and end in the same month
 */
function fullWeeksNumberInMonth(date) {
    let number = null;
    const now = getDate(date);
    const firstDay = howManyDaysOfWeek(
        getfirstDay(now).getDay(),
        'first',
    );
    const lastDay = howManyDaysOfWeek(
        getlastDay(now).getDay(),
        'last',
    );

    number = (getlastDay(now).getDate() - firstDay - lastDay) / 7;

    return number;
}

/**
 *
 * @param date - Date object or a date string of any supported format
 * @param hours - number of hours to subtract
 * @returns {Date} resultDate: date - hours
 */
function subtractHours(date, hours) {
    const resultDate = timeDiference(date, hours, 'subtract');
    return resultDate;
}

/**
 *
 * @param date - Date object or a date string of any supported format
 * @param hours - number of hours to add
 * @returns {Date} resultDate: date + hours
 */
function addHours(date, hours) {
    const resultDate = timeDiference(date, hours, 'add');
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
