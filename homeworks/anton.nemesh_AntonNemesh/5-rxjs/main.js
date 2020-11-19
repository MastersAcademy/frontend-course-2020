const { fromEvent } = window.rxjs;
const {
    throttleTime,
    map,
    distinctUntilChanged,
    pairwise,
    filter,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');

function getScrollPos() {
    return (source) => source.pipe(
        map((event) => event.path[1].pageYOffset),
        distinctUntilChanged(),
    );
}

function getArrScrollPos() {
    return (source) => source.pipe(
        pairwise(),
        throttleTime(100),
    );
}

function getScrollStatus() {
    return (source) => source.pipe(
        map((array) => array[0] > array[1]),
    );
}

function getMoreThan15px() {
    return (source) => source.pipe(
        filter((array) => {
            let numbOfPix;
            if (array[0] > array[1]) {
                numbOfPix = array[0] - array[1];
            } else {
                numbOfPix = array[1] - array[0];
            }
            return numbOfPix > 15;
        }),
    );
}

fromEvent(window, 'scroll').pipe(
    getScrollPos(),
    getArrScrollPos(),
    getMoreThan15px(),
    getScrollStatus(),
).subscribe((scrollStatus) => {
    if (scrollStatus) {
        headerEl.classList.add('active');
    } else {
        headerEl.classList.remove('active');
    }
});
