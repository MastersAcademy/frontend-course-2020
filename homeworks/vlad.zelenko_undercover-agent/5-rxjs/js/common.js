const { fromEvent } = window.rxjs;
const { map, pairwise, filter } = window.rxjs.operators;
const headerElement = document.querySelector('[data-header]');
const scrollEvent = fromEvent(window, 'scroll');
const scrollStep = 50;

scrollEvent.pipe(
    map(() => window.pageYOffset),
    pairwise(),
    filter(([before, after]) => Math.abs(before - after) > scrollStep),
    map(([before, after]) => before < after),
).subscribe((activeStatus) => {
    if (activeStatus) {
        headerElement.classList.add('header--hidden');
    } else {
        headerElement.classList.remove('header--hidden');
    }
});
