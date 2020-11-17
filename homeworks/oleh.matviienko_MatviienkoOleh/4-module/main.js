import {
    isMonthLong,
    getFridays,
    fullWeeksNumberInMonth,
    shortestWeekDaysNumber,
} from './time.js';

function myFun() {
    const input = document.getElementById('inputData').value;
    const data = new Date(input);
    return data;
}

function getMonthFridays() {
    const datefrominput = myFun();
    const someData = getFridays(datefrominput);
    const areaSetFridays = document.getElementById('setFridays');
    areaSetFridays.innerHTML = someData;
}

function daysOfMonth() {
    const datefrominput = myFun();
    const days = isMonthLong(datefrominput);
    const daysOfM = document.getElementById('daysOfMonth');
    daysOfM.innerHTML = days;
}

function daysOfShortestWeekInMonth() {
    const datefrominput = myFun();
    const number = shortestWeekDaysNumber(datefrominput);
    const daysOfShortestWeek = document.getElementById('daysOfShortestWeek');
    daysOfShortestWeek.innerHTML = number;
}

function fullWeeksInMonth() {
    const datefrominput = myFun();
    const fullWeeks = fullWeeksNumberInMonth(datefrominput);
    const outPutWeeks = document.getElementById('fullWeeksInMonth');
    outPutWeeks.innerHTML = fullWeeks;
}

daysOfMonth();
getMonthFridays();
daysOfShortestWeekInMonth();
fullWeeksInMonth();
