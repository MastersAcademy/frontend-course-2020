const { fromEvent } = window.rxjs;
const {
    filter,
    map,
    throttleTime,
    pairwise,
} = window.rxjs.operators;

const defaultHeaderNode = document.querySelector('[data-header]');
const additionalHeaderNode = document.querySelector('[data-header-with-btn]');
const headerDescriptionNode = document.querySelector('[data-header-description]');
const additionalHeaderDescriptionLogoNode = document.querySelector('[data-additional-header-description-logo]');
const btnNode = document.querySelector('[data-btn]');
const btnPosition = btnNode.getBoundingClientRect().top + window.pageYOffset;

fromEvent(window, 'scroll')
    .pipe(
        throttleTime(150),
        map(() => window.pageYOffset),
        pairwise(),
        map((scrolledHeight) => scrolledHeight[1] - scrolledHeight[0]),
        filter((scrolledHeight) => Math.abs(scrolledHeight) >= 50),
        map((scrolledHeight) => {
            if (scrolledHeight > 0 && window.pageYOffset < btnPosition) {
                return 'defaultHeaderHidden';
            }
            if (scrolledHeight < 0 && window.pageYOffset < btnPosition) {
                return 'defaultHeaderVisible';
            }
            if (scrolledHeight > 0 && window.pageYOffset >= btnPosition) {
                return 'additionalHeaderVisible';
            }
            if (scrolledHeight < 0 && window.pageYOffset >= btnPosition) {
                return 'additionalHeaderDescriptionVisible';
            }
            return '';
        }),
    )
    .subscribe((evt) => {
        switch (evt) {
            case 'defaultHeaderHidden':
                defaultHeaderNode.className = 'header hidden';
                additionalHeaderNode.className = 'header hidden';
                break;
            case 'defaultHeaderVisible':
                defaultHeaderNode.className = 'header visible';
                additionalHeaderNode.className = 'header hidden';
                break;
            case 'additionalHeaderVisible':
                defaultHeaderNode.className = 'header hidden';
                additionalHeaderNode.className = 'header visible';
                headerDescriptionNode.className = 'header__description visibleText';
                additionalHeaderDescriptionLogoNode.className = 'header__description hiddenText';
                break;
            case 'additionalHeaderDescriptionVisible':
                additionalHeaderDescriptionLogoNode.className = 'header__description visibleText';
                headerDescriptionNode.className = 'header__description hiddenText';
                break;
            default:
                break;
        }
    });
