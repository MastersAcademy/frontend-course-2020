const { fromEvent, asyncScheduler } = window.rxjs;
const {
    map,
    filter,
    pairwise,
    throttleTime,
    distinctUntilChanged,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');

fromEvent(document, 'scroll')
    .pipe(
        throttleTime(100, asyncScheduler, { trailing: true }),
        map(() => window.scrollY),
        pairwise(),
        filter(([current, previous]) => {
            if (current < headerEl.offsetHeight) return true;
            return Math.abs(current - previous) > 50;
        }),
        map(([current, previous]) => {
            if (current < headerEl.offsetHeight) return true;
            return current > previous;
        }),
        distinctUntilChanged(),
    )
    .subscribe((isScrollToTop) => {
        headerEl.classList.toggle('header-hidden', !isScrollToTop);
    });
