/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getFridaysOfMonth() {
    const showMonth = document.getElementById('showMonth');
    showMonth.innerText = fridaysInMonth()
}

function fridaysInMonth() {
    const inputValue = document.getElementById('inputDate').value
    let month = new Date(inputValue).getMonth() + 1
    let year = new Date(inputValue).getFullYear()
    let fridays = [6 - (new Date(month + '/01/' +year).getDay())];
    for (let i = fridays[0] + 7; i < 33; i += 7) {
        fridays.push(i);
    }
    return fridays;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong() {
    const showIsLong = document.getElementById('showIsLong');
    showIsLong.innerText = daysInMonthLong()
}


function daysInMonthLong() {
    const inputValue = document.getElementById('inputDate').value
    let date = new Date(inputValue);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(date);
    console.log(daysInMonth);
    if (daysInMonth === 31) {
        return 'true'
    } else {
        return 'false'
    }
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    return 1;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month. To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    return 4;
}