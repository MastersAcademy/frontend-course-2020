const { fromEvent } = window.rxjs;
const { map, pairwise, filter } = window.rxjs.operators;
const header = document.querySelector('[data-header]');
const scrollEvent = fromEvent(window, 'scroll');
const scrollStep = 50;

scrollEvent.pipe(
    map(() => window.pageYOffset),
    pairwise(),
    filter(([before, after]) => (before - after) > scrollStep),
    map(([before, after]) => before > after),
).subscribe((e) => {
    if (e) {
        header.classList.add('active-menu');
    } else {
        header.classList.remove('active-menu');
    }
});