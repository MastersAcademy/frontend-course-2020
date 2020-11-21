const { fromEvent } = window.rxjs;
const {
    debounceTime, map, pairwise, filter, distinctUntilChanged,
} = window.rxjs.operators;

const documentEl = document.querySelector('[data-sticky-header]');
fromEvent(window, 'scroll')
    .pipe(
        map(() => window.pageYOffset),
        debounceTime(100),
        pairwise(),
        filter(([prevPos, curPos]) => Math.abs(prevPos - curPos) > 50),
        map(([prevPos, curPos]) => prevPos < curPos),
        distinctUntilChanged(),
    )
    .subscribe((result) => documentEl.classList.toggle('sticky-header', result));
