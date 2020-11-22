const headerEl = document.querySelector('[data-header]');

const { fromEvent } = window.rxjs;
const {
    throttleTime,
    pairwise,
    map,
    filter,
} = window.rxjs.operators;

fromEvent(document, 'scroll').pipe(
    throttleTime(100),
    map(() => window.pageYOffset),
    pairwise(),
    // eslint-disable-next-line max-len
    filter(([previousScrollPosition, currentScrollPosition]) => Math.abs(previousScrollPosition - currentScrollPosition) >= 50),
    // eslint-disable-next-line max-len
    map(([previousScrollPosition, currentScrollPosition]) => previousScrollPosition > currentScrollPosition),
)
    .subscribe((active) => headerEl.classList.toggle('sticky', active));
