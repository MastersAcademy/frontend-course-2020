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
    filter(([previousScrollPosition, currentScrollPosition]) => Math.abs(previousScrollPosition - currentScrollPosition) >= 50),
    map(([previousScrollPosition, currentScrollPosition]) => previousScrollPosition > currentScrollPosition),
    distinctUntilChanged(),
)
    .subscribe((active) => headerEl.classList.toggle('sticky', active));
