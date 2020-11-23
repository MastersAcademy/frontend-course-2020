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
const firstHeader = document.querySelector('[data-first-header]');
const thirdHeader = document.querySelector('[data-third-header]');
const secondHeader = document.querySelector('[data-second-header]');

scrollEvent.pipe(
    map((event) => event.path[1].pageYOffset),
    throttleTime(300),
    pairwise(),
    filter(([previousHeight, currentHeight]) => Math.abs(previousHeight - currentHeight) > 50),
    map(([previousHeight, currentHeight]) => {
        let res = '';
        if (currentHeight < button.offsetTop) {
            res = previousHeight > currentHeight ? 'scrollUp' : 'scrollDown';
        } else {
            res = previousHeight > currentHeight ? 'showBtn' : 'showThirdHeader';
        }
        return res;
    }),
    distinctUntilChanged(),
)
    .subscribe((event) => {
        switch (event) {
            case 'scrollUp':
                firstHeader.classList.remove('hidden');
                thirdHeader.classList.add('hidden');
                secondHeader.classList.add('hidden');
                break;
            case 'scrollDown':
                firstHeader.classList.add('hidden');
                break;
            case 'showBtn':
                secondHeader.classList.remove('hidden');
                thirdHeader.classList.add('hidden');
                break;
            default:
                thirdHeader.classList.remove('hidden');
                break;
        }
    });
