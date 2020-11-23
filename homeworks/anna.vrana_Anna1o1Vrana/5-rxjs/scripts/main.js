const headerEl = document.querySelector('[data-header]');

const { fromEvent } = window.rxjs;
const {
    throttleTime,
    pairwise,
    map,
    filter,
    distinctUntilChanged,
} = window.rxjs.operators;

fromEvent(document, 'scroll').pipe(
    throttleTime(100),
    map(() => window.pageYOffset),
    pairwise(),
    filter(([previousPosition, currPosition]) => Math.abs(previousPosition - currPosition) >= 50),
    map(([previousPosition, currScrollPosition]) => previousPosition > currScrollPosition),
    distinctUntilChanged(),
)
    .subscribe((active) => headerEl.classList.toggle('sticky', active));
