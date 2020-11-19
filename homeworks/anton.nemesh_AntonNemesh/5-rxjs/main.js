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

function filterFuncPx([preLastNumb, lastNumb]) {
    let numbOfPix;
    if (preLastNumb > lastNumb) {
        numbOfPix = preLastNumb - lastNumb;
    } else {
        numbOfPix = lastNumb - preLastNumb;
    }
    return numbOfPix > 15;
}

fromEvent(window, 'scroll').pipe(
    getScrollPos(),
    getArrScrollPos(),
    filter(filterFuncPx),
    map(([preLastNumb, lastNumb]) => preLastNumb > lastNumb),
).subscribe((scrollStatus) => {
    headerEl.classList.toggle('active', scrollStatus);
});
