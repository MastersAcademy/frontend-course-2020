const { fromEvent } = window.rxjs;
const {
    throttleTime,
    map,
    distinctUntilChanged,
    pairwise,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');

function getScrollPosition() {
    return (source) => source.pipe(
        map((event) => event.path[1].pageYOffset),
        distinctUntilChanged(),
    );
}

function createArrayForScrollPositions() {
    return (source) => source.pipe(
        pairwise(),
        throttleTime(100),
    );
}

function headerVisibility() {
    return (source) => source.pipe(
        getScrollPosition(),
        createArrayForScrollPositions(),
        map((array) => {
            if (array[0] > array[1]) {
                headerEl.classList.add('active');
            } else {
                headerEl.classList.remove('active');
            }
        }),
    );
}

const stream$ = fromEvent(window, 'scroll');

stream$.pipe(
    headerVisibility(),
).subscribe();
