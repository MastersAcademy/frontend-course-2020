const getDate = (date) => {return new Date(date);};

const getfirstDay = (now) => {return new Date(now.getFullYear(), now.getMonth(), 1);};

const getlastDay = (now) => {return new Date(now.getFullYear(), now.getMonth() + 1, 0);};

const howManyDaysOfFirstWeek = (day, flag) => {
    let quantity = null;

    if (day === 0) return 1;
    if (flag === 'first') quantity = 7 - (day - 1);
    else if (flag === 'last') quantity = day;

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

    const quantityDaysFirstWeek = howManyDaysOfFirstWeek(
        firstDay.getDay(),
        'first',
    );

    const quantityDaysLastWeek = howManyDaysOfFirstWeek(lastDay.getDay(), 'last');

    if (quantityDaysFirstWeek < quantityDaysLastWeek) number = quantityDaysFirstWeek;
    else if (quantityDaysFirstWeek > quantityDaysLastWeek) number = quantityDaysLastWeek;
    else number = quantityDaysFirstWeek;

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
    const firstDay = howManyDaysOfFirstWeek(
        getfirstDay(now).getDay(),
        'first',
    );
    const lastDay = howManyDaysOfFirstWeek(
        getlastDay(now).getDay(),
        'last',
    );

    if (isMonthLong(now)) number = (31 - firstDay - lastDay) / 7;
    else number = (30 - firstDay - lastDay) / 7;

    return Math.floor(number);
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
