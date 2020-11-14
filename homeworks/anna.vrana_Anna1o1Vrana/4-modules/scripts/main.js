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

// function getDaysOfMonth(date) {
//     const sdate = inputNode.value;
//     const someDay = new Date(sdate.getFullYear(), sdate.getMonth(), 32).getDate();
//     console.log(someDay);
//     return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
// }
//
// function shortestWeek(date) {
//     // eslint-disable-next-line no-undef
//     const weekDaysNumber = getDaysOfMonth(date);
//     let weekDays = 0;
//     let daysNumber = 7;
//     for (let i = 1; i <= weekDaysNumber; i++) {
//         // eslint-disable-next-line no-undef
//         const dateFridays = new Date(date.getFullYear(), date.getMonth(), i);
//         // eslint-disable-next-line no-cond-assign
//         if (dateFridays.getDay() === 1 ? daysNumber > weekDays : daysNumber = weekDays) {
//             weekDays = 0;
//         }
//         weekDays++;
//     }
//     console.log(daysNumber);
//     return daysNumber;
// }

document.querySelector('[data-shortest-week]')
    .addEventListener('click', shortestWeekDaysNumber);
