const { fromEvent } = window.rxjs;
const {
    pairwise,
    distinctUntilChanged,
    map,
    throttleTime,
    filter,
} = window.rxjs.operators;
const scrollEvent = fromEvent(window, 'scroll');
const button = document.querySelector('[data-btn]');
const header = document.querySelector('[data-header]');
const headerButton = document.querySelector('[data-header-btn]');
const firstHeader = document.querySelector('[data-first-header]');
const thirdHeader = document.querySelector('[data-third-header]');

scrollEvent.pipe(
    map((event) => event.path[1].pageYOffset),
    throttleTime(500),
    pairwise(),
    filter(([num1, num2]) => (num1 - num2) > 50 || (num2 - num1) > 50),
    map(([num1, num2]) => {
        let res = '';
        if (num2 < button.offsetTop) {
            res = num1 > num2 ? 'scrollUp' : 'scrollDown';
        } else {
            res = num1 > num2 ? 'showBtn' : 'showThirdHeader';
        }
        return res;
    }),
    distinctUntilChanged(),
).subscribe((event) => {
    switch (event) {
        case 'scrollUp':
            header.classList.add('sticky');
            headerButton.classList.add('hidden');
            thirdHeader.classList.add('hidden');
            break;
        case 'scrollDown':
            header.classList.remove('sticky');
            break;
        case 'showBtn':
            header.classList.add('sticky');
            firstHeader.classList.remove('hidden');
            headerButton.classList.remove('hidden');
            thirdHeader.classList.add('hidden');
            break;
        default:
            header.classList.add('sticky');
            firstHeader.classList.add('hidden');
            thirdHeader.classList.remove('hidden');
            headerButton.classList.remove('hidden');
            break;
    }
});
