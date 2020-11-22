const { fromEvent } = window.rxjs;
const {
    throttleTime, map, pairwise, filter, distinctUntilChanged,
} = window.rxjs.operators;

const documentEl = document.querySelector('[data-sticky-header]');
fromEvent(window, 'scroll')
    .pipe(
        map(() => window.pageYOffset),
        throttleTime(100),
        pairwise(),
        filter(([prevPosition, curPosition]) => Math.abs(prevPosition - curPosition) > 50),
        map(([prevPosition, curPosition]) => prevPosition < curPosition),
        distinctUntilChanged(),
    )
    .subscribe((value) => documentEl.classList.toggle('hide-header', value));
