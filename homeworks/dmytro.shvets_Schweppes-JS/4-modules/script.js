import { getFridaysOfMonth, isMonthLong, shortestWeekDaysNumber, fullWeeksNumberInMonth } from './time.js';

(function() {
  const formNode = document.querySelector('[data-form]');
  const inputDateNode = document.querySelector('[data-input]');
  const inputZoneNode = document.querySelector('[data-select]');
  const isLongMonthNode = document.querySelector('[data-is-long]');
  const amountFridaysNode = document.querySelector('[data-amount-fridays]');
  const sizeWeekNode = document.querySelector('[data-size-week]');
  const weeksAmountNode = document.querySelector('[data-weeks-amount]');
  const timeNode = document.querySelector('[data-time]');

  let currentTime = setInterval(() => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    timeNode.innerText = `${hours < 10 ? `0${hours}` : hours}  : ${minutes < 10 ? `0${minutes}` : minutes}`;
  }, 1000);
  let value = '';
  let date = '';

  // Setting defaults texts when user chose another date
  function clearingNodesValue() {
    amountFridaysNode.innerText = '';
    isLongMonthNode.innerText = 'Unknown';
    sizeWeekNode.innerText = '';
    weeksAmountNode.innerText = '';
  }

  // Processing the data that was entered
  function submiting(e) {
    e.preventDefault();
    if (e.target[0].value) {
      value = new Date(e.target[0].value);
      date = new Date(value);
      switch(e.submitter.value) {
        case 'getFridays':
          amountFridaysNode.innerText = getFridaysOfMonth(date).toString();
          break;
        case 'isLong':
          isLongMonthNode.innerText = isMonthLong(date);
          break;
        case 'shortestWeek':
          sizeWeekNode.innerText = shortestWeekDaysNumber(date);
          break;
        case 'fullWeeks':
          weeksAmountNode.innerText = fullWeeksNumberInMonth(date);
          break;
        default: break;
      }
    } else alert('please, choose date');
  }

  // Getting current time or changing to selected
  function gettingTime() {
    inputZoneNode.value;
  }

  // gettingTime();

  // Adding event listener
  inputDateNode.addEventListener('change', clearingNodesValue);
  formNode.addEventListener('submit', submiting);
  inputZoneNode.addEventListener('change', gettingTime);
})();