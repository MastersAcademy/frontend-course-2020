const inputNode = document.querySelector('[data-date]');
const getFridaysNode = document.querySelector('[data-get-fridays]');
const fridaysResultNode = document.querySelector('[data-fridays]');

// Get month fridays
function getFridays() {
    const date = inputNode.value;
    const currentDate = new Date(date);
    const currentMonth = currentDate.getMonth();
    const monthFridays = [];

    currentDate.setDate(1);

    // Get the first Monday in the month
    while (currentDate.getDay() !== 5) {
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Get all the other Fridays in the month
    while (currentDate.getMonth() === currentMonth) {
        monthFridays.push(new Date(currentDate.getTime()));
        currentDate.setDate(currentDate.getDate() + 7);
    }
    // get and render fridays array
    const fridaysArr = [];
    for (let i = 0; i < monthFridays.length; i++) {
        fridaysArr.push(monthFridays[i].getDate());
    }
    fridaysResultNode.classList.add('result-friday');
    fridaysResultNode.innerHTML = fridaysArr;
    return fridaysArr;
}

getFridaysNode.addEventListener('click', getFridays);

// Is month long?
function isMonthLong() {
    // const currentDate = new Date(inputNode.value);
    // const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    // console.log(lastDay);
    // let resultMonthLong = '';
    // if (lastDay === 31) {
    //     resultMonthLong = 'month long';
    // } else {
    //     resultMonthLong = 'month short';
    // }
    // document.querySelector('[data-result-month-long]').innerHTML = (resultMonthLong);
    //
    // return resultMonthLong;

    const currentDate = new Date(inputNode.value);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthLength = new Date(currentYear, currentMonth, 0).getDate();
    let resultMonthLong = '';
    if (monthLength < 31) {
        resultMonthLong = 'month long';
    } else {
        resultMonthLong = 'month short';
    }
    document.querySelector('[data-result-month-long]').innerHTML = (resultMonthLong);

    return resultMonthLong;
}

document.querySelector('[data-month-long]')
    .addEventListener('click', isMonthLong);

// Days of shortest week in month

function shortestWeekDaysNumber() {
    const currentDate = new Date(inputNode.value);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const firstWeek = 7 - firstDay.getDay();
    const lastWeek = lastDay.getDay() + 1;
    let shortestWeek = '';
    if (firstWeek > lastWeek) {
        shortestWeek = lastWeek;
    } else {
        shortestWeek = firstWeek;
    }
    document.querySelector('[data-result-shortest-week]').innerHTML = shortestWeek;
    return shortestWeek;
}

document.querySelector('[data-shortest-week]')
    .addEventListener('click', shortestWeekDaysNumber);

function fullWeeksNumberInMonth() {
    const currentDate = new Date(inputNode.value);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstWeek = 7 - firstDay.getDay();
    console.log(firstWeek);
    const lastWeek = lastDay.getDay() + 1;
    console.log(lastWeek);
    console.log(lastDay);
    // eslint-disable-next-line max-len
    const monthLength = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    console.log(monthLength);
    const fullWeeks = (monthLength - firstWeek - lastWeek) / 7;
    console.log(fullWeeks);
    let countFullWeeks = 0;
    if (firstWeek || lastWeek === 7) {
        countFullWeeks = fullWeeks + 1;
    } else if (lastWeek + firstWeek === 14) {
        countFullWeeks = fullWeeks + 2;
    } else {
        countFullWeeks = fullWeeks;
    }
    document.querySelector('[data-result-full-weeks]').innerHTML = countFullWeeks;
    return countFullWeeks;
}

document.querySelector('[data-full-weeks]')
    .addEventListener('click', fullWeeksNumberInMonth);
