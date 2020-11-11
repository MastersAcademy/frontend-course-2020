import {getFridaysOfMonth, isMonthLong} from './time.js';
const getMonthButton = document.getElementById('getMonth')
const getIsLongButton = document.getElementById('getIsLong')
const getShortestButton = document.getElementById('getShortest')
const getFullWeeksButton = document.getElementById('getFullWeeks')
const showIsLong = document.getElementById('showIsLong')
const showShortest = document.getElementById('showShortest')
const showFullWeeks = document.getElementById('showFullWeeks')

getMonthButton.addEventListener('click', getFridaysOfMonth);
getIsLongButton.addEventListener('click', isMonthLong)
// getShortestButton.addEventListener('click',)
// getFullWeeksButton.addEventListener('click',)

