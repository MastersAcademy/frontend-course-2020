const { fromEvent } = window.rxjs;
const {
    filter, map, throttleTime, pairwise, distinctUntilChanged,
} = window.rxjs.operators;

const scroll = fromEvent(window, 'scroll');
const header = document.querySelector('.header');

scroll.pipe(
    throttleTime(250),
    map(() => window.pageYOffset),
    pairwise(),
    filter(([prev, curr]) => (prev - curr) > 50 || (curr - prev) > 50),
    map(([prev, curr]) => (prev < curr ? 'scrollDown' : 'scrollUp')),
    distinctUntilChanged(),
)
    .subscribe((event) => {
        if (event === 'scrollDown' && window.pageYOffset > 150) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
    });
