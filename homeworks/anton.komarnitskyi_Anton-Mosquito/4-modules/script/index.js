import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
} from './time.js';

class WorkWithDate {
    constructor() {
        this._inputData = document.querySelector('[data-date="inputData"]');
        this._outPutBox1 = document.querySelector('[data-date="arrayMonth"]');
        this._outPutBox2 = document.querySelector('[data-date="lastDay"]');
        this._outPutBox3 = document.querySelector('[data-date="shortDay"]');
        this._outPutBox4 = document.querySelector('[data-date="fullWeek"]');
        this._dropDown = document.querySelector('[data-date="select"]');
        this._base = ['Current', 'Tokyo', 'London', 'New York'];
        this._mainContainer = null;
        this._secondaryContainer = null;
        this._containerForClock = document.querySelector('[data-date="ContainerForClock"]');
        this._diferenceHours = 0;
        this._timeZone = document.querySelector('[data-date="timezone"]');
    }

    init() {
        this.createElement();
        this.fillSelect();
        this.createClock();
        this.startClock();
        this.createTooltip();
        this.eventListener();
    }

    createElement() {
        const container = document.createElement('div');

        const digitsContainer = document.createElement('span');

        this._mainContainer = container;
        this._secondaryContainer = digitsContainer;
    }

    get mainContainerNode() {
        return this._mainContainer.cloneNode(true);
    }

    get secondaryContainerNode() {
        return this._secondaryContainer.cloneNode(true);
    }

    fillSelect() {
        this._base.forEach((element) => {
            this._dropDown.add(new Option(element));
        });
    }

    createTooltip() {
        const tooltipContainer = this.mainContainerNode;
        tooltipContainer.classList.add('date__function-form-content-tooltip', 'hidden');
        tooltipContainer.dataset.date = 'tooltip';

        this._inputData.parentElement.appendChild(tooltipContainer);
    }

    createClock() {
        const mainContainer = this.mainContainerNode;
        mainContainer.classList.add('date__time-wrapper-time');

        const hourContainer = this.mainContainerNode;

        const hourDigits = this.secondaryContainerNode;
        hourDigits.dataset.date = 'Hours';
        hourDigits.textContent = '';

        const hourSignature = this.secondaryContainerNode;
        hourSignature.textContent = 'Hours';

        const minutesContainer = this.mainContainerNode;

        const minutesDigits = this.secondaryContainerNode;
        minutesDigits.dataset.date = 'Minutes';
        minutesDigits.textContent = '';

        const minutesSignature = this.secondaryContainerNode;
        minutesSignature.textContent = 'Minutes';

        const secondsContainer = this.mainContainerNode;

        const secondsDigits = this.secondaryContainerNode;
        secondsDigits.dataset.date = 'Seconds';
        secondsDigits.textContent = '';

        const secondsSignature = this.secondaryContainerNode;
        secondsSignature.textContent = 'Seconds';

        hourContainer.append(hourDigits, hourSignature);
        minutesContainer.append(minutesDigits, minutesSignature);
        secondsContainer.append(secondsDigits, secondsSignature);

        mainContainer.append(hourContainer, minutesContainer, secondsContainer);

        this._containerForClock.appendChild(mainContainer);
    }

    startClock() {
        const timeNormilize = (digits) => {
            let result = null;
            if (digits < 10) result = `0${digits}`;
            else result = digits;

            return result;
        };

        const hoursContainer = document.querySelector('[data-date="Hours"]');
        const minutesContainer = document.querySelector('[data-date="Minutes"]');
        const secondsContainer = document.querySelector('[data-date="Seconds"]');

        setInterval(() => {
            const hours = new Date().getHours() + this._diferenceHours;
            const minutes = new Date().getMinutes();
            const seconds = new Date().getSeconds();
            hoursContainer.textContent = timeNormilize(hours);
            minutesContainer.textContent = timeNormilize(minutes);
            secondsContainer.textContent = timeNormilize(seconds);
        }, 1000);

    }

    eventListener() {
        document.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        document.addEventListener('click', (e) => {
            const atrributes = e.target.dataset.date;
            if (atrributes === 'arrayMonthAction') this.arrayMonthAction();
            if (atrributes === 'lastDayAction') this.lastDayAction();
            if (atrributes === 'shortDayAction') this.shortDayAction();
            if (atrributes === 'fullWeekAction') this.fullWeekAction();
        });

        document.addEventListener('change', (e) => {
            const atrributes = e.target.dataset.date;
            if (atrributes !== 'select') return;
            this.selectAction();
        });
    }

    checkInput() {
        if (Boolean(this._inputData.value) === false) {
            this.showMessage('This field can not be empty!');
            return false;
        }
        return true;
    }

    arrayMonthAction() {
        if (this.checkInput()) {
            this._outPutBox1.textContent = getFridaysOfMonth(this._inputData.value);
        }
    }

    lastDayAction() {
        if (this.checkInput()) {
            this._outPutBox2.textContent = isMonthLong(this._inputData.value);
        }
    }

    shortDayAction() {
        if (this.checkInput()) {
            this._outPutBox3.textContent = shortestWeekDaysNumber(this._inputData.value);
        }
    }

    fullWeekAction() {
        if (this.checkInput()) {
            this._outPutBox4.textContent = fullWeeksNumberInMonth(this._inputData.value);
        }
    }

    selectAction() {
        const select = this._dropDown.selectedIndex;
        const options = this._dropDown.options[select];

        switch (options.text) {
            case 'Tokyo':
                if (this.checkInput()) {
                    this._timeZone.textContent = addHours(this._inputData.value, 7);
                    this._diferenceHours = 7;
                    this.startClock();
                }
                break;
            case 'London':
                if (this.checkInput()) {
                    this._timeZone.textContent = subtractHours(this._inputData.value, 2);
                    this._diferenceHours = -2;
                    this.startClock();
                }
                break;
            case 'New York':
                if (this.checkInput()) {
                    this._timeZone.textContent = subtractHours(this._inputData.value, 7);
                    this._diferenceHours = -7;
                    this.startClock();
                }
                break;
            default:
                if (this.checkInput()) {
                    this._timeZone.textContent = new Date();
                    this._diferenceHours = 0;this.startClock();
                }
                break;
        }
    }

    showMessage(text) {
        const tooltip = this._inputData.parentElement.querySelector('[data-date="tooltip"]');
        tooltip.innerText = text;
        tooltip.classList.add('visible');

        const timer = setTimeout(() => {
            tooltip.classList.remove('visible');
            tooltip.classList.add('hidden');
            clearTimeout(timer);
        }, 2000);
    }
}

const ex = new WorkWithDate();
ex.init();
