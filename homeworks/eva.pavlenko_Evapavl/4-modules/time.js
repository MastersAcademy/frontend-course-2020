const arrDate = [];

let year;
let month;

function inputParse(date) {
    const arr = date.value.split('-');
    for (let i = 0; i < arr.length; i++) {
        arrDate.push(Number(arr[i]));
    }

    for (let i = 0; i < arrDate.length; i++) {
        year = arrDate[arrDate.length - 3];
        month = arrDate[arrDate.length - 2] - 1;
    }
}

function getLastDayOfMonth(y, m) {
    const d = new Date(y, m + 1, 0);
    return d.getDate();
}

function getNumsOfDay(y, m, numDay) {
    let d = new Date(y, m, numDay);
    d = d.getDay();
    if (d === 0) d = 7;
    return d;
}

function firstElem(arr, firstD) {
    const count = firstD - 1;
    for (let i = 0; i < count; i++) {
        arr.unshift('');
    }
}

function lastElem(arr, lastD) {
    const count = 7 - lastD;
    for (let i = 0; i < count; i++) {
        arr.push('');
    }
}

function segmentArr(arr, resArr) {
    const iterationCount = arr.length / 7;
    for (let i = 0; i < iterationCount; i++) {
        resArr.push(arr.splice(0, 7));
    }
}

function createArr(countDays, firstDay, lastDay) {
    const newArr = [];
    const resArr = [];
    for (let i = 0; i < countDays; i++) {
        let index = i;
        newArr[i] = ++index;
    }
    firstElem(newArr, firstDay);
    lastElem(newArr, lastDay);
    segmentArr(newArr, resArr);
    return resArr;
}

function arrCalendar(date) {
    inputParse(date);

    const countDaysInMonth = getLastDayOfMonth(year, month);
    const firstDayInMonth = getNumsOfDay(year, month, 1);
    const lastDayInMonth = getNumsOfDay(year, month, countDaysInMonth);

    return createArr(countDaysInMonth, firstDayInMonth, lastDayInMonth);
}

export function isMonthLong(date) {
    inputParse(date);
    const lastDay = new Date(year, month + 1, 0);
    if (lastDay.getDate() === 31) {
        return 'true';
    }
    return 'false';
}

export function getFridaysOfMonth(date) {
    const arr = arrCalendar(date);
    const array = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i].length - 3;
        if (arr[i][num]) {
            array.push(arr[i][num]);
        }
    }
    return array;
}

export function shortestWeekDaysNumber(date) {
    const arr = arrCalendar(date);
    const array = arr.map((e) => e.filter((item) => typeof item === 'number'));
    const lengths = array.map((a) => a.length);
    const index = lengths.indexOf(Math.min(...lengths));
    return array[index];
}

export function fullWeeksNumberInMonth(date) {
    const arr = arrCalendar(date);
    const array = arr.map((e) => e.filter((item) => typeof item === 'number'));
    const lengths = array.map((a) => a.length);

    let sum = 0;
    for (let i = 0; i < lengths.length; i++) {
        if (lengths[i] === 7) {
            sum += lengths[i] / 7;
        }
    }
    return sum;
}

export function subtractHours(date, hours) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() - hours);
    return resultDate;
}

export function addHours(date, hours) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() + hours);
    return resultDate;
}
