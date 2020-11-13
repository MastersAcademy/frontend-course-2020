const input = document.querySelector('[data-input]');
const buttonFridays = document.querySelector('[data-button="fridays"]');
const resultFridays = document.querySelector('[data-fridays]');
const buttonLong = document.querySelector('[data-button="long"]');
const resultLong = document.querySelector('[data-long]');
const buttonShortest = document.querySelector('[data-button="shortest"]');
const resultShortest = document.querySelector('[data-shortest]');
const buttonFull = document.querySelector('[data-button="full"]');
const resultFull = document.querySelector('[data-full]');

function getDaysOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
}

function getFridaysOfMonth(date) {
    const fridays = [];
    for (let i = 1; i <= getDaysOfMonth(date); i++) {
        const testDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (testDate.getDay() === 5) {
            fridays.push(testDate.getDate());
        }
    }
    return fridays;
}

function isMonthLong(date) {
    console.log(date);
    return getDaysOfMonth(date) === 31;
}

function getWeeks(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const weeks = [];
    let start = 1;
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    let end = 7 - firstDate.getDay();

    const numDays = lastDate.getDate();

    while (start <= numDays) {
        weeks.push({ start, end });
        start = end + 1;
        end += 7;
        if (end > numDays) {
            end = numDays;
        }
    }
    return weeks;
}

function getShortestWeek(date) {
    const weeks = getWeeks(date);
    const lengthOfWeeks = [];
    for (const week of weeks) {
        const length = week.end - week.start + 1;
        lengthOfWeeks.push(length);
    }
    const min = Math.min.apply(null, lengthOfWeeks);
    return min;
}

function getFullWeeks(date) {
    const weeks = getWeeks(date);
    let fullWeeks = 0;
    for (const week of weeks) {
        const length = week.end - week.start + 1;
        if (length === 7) {
            fullWeeks += 1;
        }
    }
    return fullWeeks;
}

buttonFridays.addEventListener('click', () => {
    const date = new Date(input.value);
    resultFridays.innerText = getFridaysOfMonth(date);
});

buttonLong.addEventListener('click', () => {
    const date = new Date(input.value);
    resultLong.innerText = isMonthLong(date);
});

buttonShortest.addEventListener('click', () => {
    const date = new Date(input.value);
    resultShortest.innerText = getShortestWeek(date);
});

buttonFull.addEventListener('click', () => {
    const date = new Date(input.value);
    resultFull.innerText = getFullWeeks(date);
});
