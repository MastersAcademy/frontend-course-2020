const { fromEvent } = window.rxjs;
const { map, pairwise, filter } = window.rxjs.operators;
const headerElement = document.querySelector('[data-header]');
const scrollEvent = fromEvent(window, 'scroll');
const scrollStep = 50;

scrollEvent.pipe(
    map(() => window.pageYOffset),
    pairwise(),
    filter(([before, after]) => (after - before) > scrollStep || (before - after) > scrollStep),
    map(([before, after]) => before < after),
).subscribe((e) => {
    if (e) {
        headerElement.classList.add('active-menu');
    } else {
        headerElement.classList.remove('active-menu');
    }
});
