const { fromEvent } = window.rxjs;
const {
    map,
    throttleTime,
    pairwise,
    distinctUntilChanged,
    filter,
} = window.rxjs.operators;

const scrolling = fromEvent(document, 'scroll');
const header = document.querySelector('[data-header]');

scrolling.pipe(
    throttleTime(500),
    map(() => window.scrollY),
    pairwise(),
    filter(([a, b]) => (a - b) > 50 || (b - a) > 50),
    map(([a, b]) => (a < b ? 'down' : 'up')),
    distinctUntilChanged(),
)
    .subscribe((event) => {
        if (event === 'up') {
            header.classList.remove('hide');
        } else {
            header.classList.add('hide');
        }
    });
