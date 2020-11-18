const { fromEvent } = window.rxjs;
const {
    pairwise, map, distinctUntilChanged, animationFrame, throttleTime,
} = window.rxjs.operators;

const scroll = fromEvent(window, 'scroll');
const header = document.querySelector('header');

const watchScroll = scroll.pipe(
    throttleTime(100, animationFrame),
    map(() => window.pageYOffset),
    pairwise(),
    map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
    distinctUntilChanged(),
);

watchScroll.subscribe((event) => {
    if (event === 'Up') header.classList.add('header-logo');
    if (event === 'Down') header.classList.remove('header-logo');
});
