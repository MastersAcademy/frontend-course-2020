const header = document.querySelector('[data-header]');

const { fromEvent } = window.rxjs;
/**
 * Оператори які можуть бути корисні:
 * fromEvent +
 * map +
 * filter +
 * throttleTime +
 * distinctUntilChanged +
 * pairwise +
 * debounceTime
 * switchMap
 */

const {
    throttleTime,
    pairwise,
    map,
    distinctUntilChanged,
    filter,
} = window.rxjs.operators;

fromEvent(document, 'scroll').pipe(
    throttleTime(100),
    map(() => window.pageYOffset),
    distinctUntilChanged(),
    pairwise(),
    filter(([a, b]) => Math.abs(a - b) >= 50),
    map(([a, b]) => a > b),
)
    .subscribe((active) => header.classList.toggle('sticky', active));
