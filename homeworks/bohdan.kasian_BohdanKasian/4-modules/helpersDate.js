export const getFridaysOfMonth = (date) => {
    const d = new Date(date);
    const month = d.getMonth();
    const fridays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Fridays in the month
    while (d.getMonth() === month) {
        fridays.push(new Date(d.getTime()).getDate());
        d.setDate(d.getDate() + 7);
    }
    return fridays;
};

export const isMonthLong = (date) => {
    const newDate = new Date(date);
    return 33 - new Date(newDate.getFullYear(), newDate.getMonth(), 33).getDate() === 31;
};

export const shortestWeekDaysNumber = (date) => {
    const newDate = new Date(date);
    let arr = [];
    let min = 0;
    const daysArr = new Array(new Date(newDate.getFullYear(),
        newDate.getMonth() + 1, 0).getDate());

    for (let i = 1; i <= daysArr.length; i++) {
        const currentDate = new Date(newDate.getFullYear(), newDate.getMonth(), i);
        if (currentDate.getDay() === 1) arr = [];
        arr.push(currentDate.getDay());
        if (currentDate.getDay() === 0 || currentDate.getDate() === daysArr.length) {
            if (!min) min = arr.length;
            min = Math.min(min, arr.length);
        }
    }

    return min;
};

export const fullWeeksNumberInMonth = (date) => {
    let result = 0;
    const daysMonthArr = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysMonthArr; i++) {
        const dayDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (dayDate.getDay() === 1) {
            dayDate.setDate(dayDate.getDate() + 6);
            if (dayDate.getMonth() === date.getMonth()) {
                result++;
            }
        }
    }
    return result;
};
