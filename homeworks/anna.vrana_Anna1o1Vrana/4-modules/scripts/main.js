const inputNode = document.querySelector('[data-date]');
const getFridaysNode = document.querySelector('[data-get-fridays]');
const fridaysResultNode = document.querySelector('[date-fridays]');

function getFridays() {
    console.log('get fridays');
    const date = inputNode.value;
    console.log(date);
    const currentDate = new Date(date);
    const currentMonth = currentDate.getMonth();
    console.log(currentMonth);
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
    console.log(monthFridays);
    // return monthFridays;
    const allFridays = [];
    for (let i = 0; i < monthFridays.length; i++) {
        allFridays.push(monthFridays[i].getDate());
    }
    fridaysResultNode.classList.add('result-friday');
    fridaysResultNode.innerHTML = allFridays;
    // console.log(allFridays);
    return allFridays;
}

getFridaysNode.addEventListener('click', getFridays);
