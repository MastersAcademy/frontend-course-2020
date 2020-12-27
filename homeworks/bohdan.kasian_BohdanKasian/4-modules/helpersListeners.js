import {
    GET_MONTH_FRIDAYS_ELEM,
    SET_MONTH_FRIDAYS_ELEM,
    GET_MONTH_LONG_ELEM,
    SET_MONTH_LONG_ELEM,
    GET_DAYS_ELEM,
    SET_DAYS_ELEM,
    GET_FULL_WEEKS_ELEM,
    SET_FULL_WEEKS_ELEM,
} from './constantsElement.js';
import {
    getFridaysOfMonth, isMonthLong, shortestWeekDaysNumber, fullWeeksNumberInMonth,
} from './helpersDate.js';
import { setValue } from './helpersSetValue.js';

export const listenerInit = () => {
    GET_MONTH_FRIDAYS_ELEM.addEventListener('click', () => {
        const INPUT_DATE_ELEM = document.querySelector('[data-input-date]');

        if (INPUT_DATE_ELEM.value) {
            setValue(INPUT_DATE_ELEM.value, SET_MONTH_FRIDAYS_ELEM, getFridaysOfMonth);
        }
    });

    GET_MONTH_LONG_ELEM.addEventListener('click', () => {
        const INPUT_DATE_ELEM = document.querySelector('[data-input-date]');

        setValue(INPUT_DATE_ELEM.value, SET_MONTH_LONG_ELEM, isMonthLong);
    });

    GET_DAYS_ELEM.addEventListener('click', () => {
        const INPUT_DATE_ELEM = document.querySelector('[data-input-date]');

        setValue(INPUT_DATE_ELEM.value, SET_DAYS_ELEM, shortestWeekDaysNumber);
    });

    GET_FULL_WEEKS_ELEM.addEventListener('click', () => {
        const INPUT_DATE_ELEM = document.querySelector('[data-input-date]');

        setValue(INPUT_DATE_ELEM.value, SET_FULL_WEEKS_ELEM, fullWeeksNumberInMonth);
    });
};
