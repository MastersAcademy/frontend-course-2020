const { fromEvent } = window.rxjs;
const { map, pairwise, filter } = window.rxjs.operators;
const headerElement = document.querySelector('[data-header]');
const scrollEvent = fromEvent(window, 'scroll');
const step = 50;

scrollEvent.pipe(
    map(() => window.pageYOffset),
    pairwise(),
    filter(([before, after]) => Math.abs((after - before) > step || (before - after) > step)),
    map(([before, after]) => before < after),
).subscribe((activeStatus) => {
    if (activeStatus) {
        headerElement.classList.add('hide-header');
    } else {
        headerElement.classList.remove('hide-header');
    }
});
