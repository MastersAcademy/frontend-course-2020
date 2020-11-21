const { fromEvent } = window.rxjs;
const { filter, map, pairwise, startWith } = window.rxjs.operators;

const header = document.querySelector('[data-header]');
const scrollEvent = fromEvent(window, 'scroll');

scrollEvent.pipe(
    map(() => window.pageYOffset),
    pairwise(),
).subscribe(([before, after]) => {
    if (before > after) {
        header.classList.add('active-menu');
    } else {
        header.classList.remove('active-menu');
    }
});