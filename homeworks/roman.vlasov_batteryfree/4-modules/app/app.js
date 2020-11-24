import * as time from './time.js';

class App {
    constructor(el) {
        this.el = el;
        this.findElements();
        this.listenEvents();
    }

    findElements() {
        this.elements = {
            input: this.el.querySelector('[data-input]'),
            findFridays: this.el.querySelector('[data-get-fridays]'),
            monthLong: this.el.querySelector('[data-get-month-long]'),
            shortestWeek: this.el.querySelector('[data-get-shortest-week]'),
            fullWeeks: this.el.querySelector('[data-get-full-weeks]'),
            fridayText: this.el.querySelector('[data-fridays]'),
            monthLongText: this.el.querySelector('[ data-month-long]'),
            shortestWeekText: this.el.querySelector('[data-shortest-week]'),
            fullWeekText: this.el.querySelector('[data-full-week]'),
        };
    }

    listenEvents() {
        this.elements.fullWeeks.addEventListener('click', () => {
            const fullWeeks = time.fullWeeksNumberInMonth(this.elements.input.value);
            App.renderText(this.elements.fullWeekText, fullWeeks);
        });

        this.elements.shortestWeek.addEventListener('click', () => {
            const shortestWeek = time.shortestWeekDaysNumber(this.elements.input.value);
            App.renderText(this.elements.shortestWeekText, shortestWeek);
        });

        this.elements.monthLong.addEventListener('click', () => {
            const isMonthLong = time.isMonthLong(this.elements.input.value);
            App.renderText(this.elements.monthLongText, isMonthLong);
        });

        this.elements.findFridays.addEventListener('click', () => {
            const fridays = time.getFridaysOfMonth(this.elements.input.value);
            App.renderText(this.elements.fridayText, fridays);
        });
    }

    static renderText(element, data) {
        const el = element;
        if (data !== undefined) {
            el.innerHTML = data;
        } else {
            el.innerHTML = '';
        }
    }
}

// eslint-disable-next-line no-unused-vars
const app = new App(document.querySelector('#root'));
