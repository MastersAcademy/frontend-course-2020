const { fromEvent } = window.rxjs;
const {
    map,
    filter,
    pairwise,
    throttleTime,
} = window.rxjs.operators;
const headerNode = document.querySelector('[data-header]');
fromEvent(window, 'scroll')
    .pipe(
        throttleTime(150),
        map(() => window.pageYOffset),
        pairwise(),
        map((scrollHeight) => scrollHeight[1] - scrollHeight[0]),
        filter((scrollHeight) => Math.abs(scrollHeight) >= 50),
        map((scrollHeight) => scrollHeight < 0),
    )
    .subscribe((isScrollToTop) => headerNode.classList.toggle('hidden', !isScrollToTop));
