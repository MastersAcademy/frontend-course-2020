const { fromEvent } = window.rxjs;
const {
    pairwise,
    map,
    distinctUntilChanged,
    debounceTime,
    filter,
} = window.rxjs.operators;

const headerMain = document.querySelector('[data-rxjs="header-main"]');
const headerSecondary = document.querySelector('[data-rxjs="header-secondary"]');
const button = document.querySelector('[data-rxjs="button-visible"]');
const element = document.documentElement;

const checkDirection = (last, current) => {
    let value = null;
    if (current - last >= 50) {
        value = 'downDircetion';
    } else if (last - current >= 50) {
        value = 'UpDircetion';
    } else {
        value = 'withOutAction';
    }

    return value;
};

const checkFlag = (position, flag) => {
    if (flag === 'main') {
        switch (position) {
            case 'downDircetion':
                headerMain.classList.remove('sticky');
                headerMain.classList.add('hidden');
                break;
            case 'UpDircetion':
                headerMain.classList.add('sticky');
                headerMain.classList.remove('hidden');
                button.classList.add('hidden');
                headerSecondary.classList.add('hidden');
                headerSecondary.classList.remove('sticky');
                break;
            default:
                break;
        }
    } else if (flag === 'secondary') {
        switch (position) {
            case 'downDircetion':
                headerMain.classList.remove('sticky');
                headerSecondary.classList.remove('hidden');
                headerMain.classList.add('hidden');
                headerSecondary.classList.add('sticky');
                break;
            case 'UpDircetion':
                headerMain.classList.remove('hidden');
                button.classList.remove('hidden');
                headerSecondary.classList.remove('sticky');
                headerMain.classList.add('sticky');
                headerSecondary.classList.add('hidden');
                break;
            default:
                break;
        }
    }
};

fromEvent(document, 'scroll')
    .pipe(
        map((event) => event.target.scrollingElement.scrollTop),
        filter((scroll) => scroll > 50),
        pairwise(),
        map((scroll) => checkDirection(scroll[0], scroll[1])),
        distinctUntilChanged(),
        debounceTime(50),
    )
    .subscribe((position) => checkFlag(position, 'main'));

fromEvent(document, 'scroll')
    .pipe(
        map((event) => event.target.scrollingElement.scrollTop),
        filter((currentScroll) => currentScroll > element.offsetHeight / 2),
        pairwise(),
        map((scroll) => checkDirection(scroll[0], scroll[1])),
        distinctUntilChanged(),
        debounceTime(50),
    )
    .subscribe((position) => checkFlag(position, 'secondary'));
