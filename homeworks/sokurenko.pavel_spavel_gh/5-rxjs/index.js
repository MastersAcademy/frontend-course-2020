const headerNode = document.querySelector('[data-heaader-content]');
const scrollNode = document.querySelector('[data-scroll]');

const wayLength = 50;
let wayPointer = 'up';
let yPointer = 0;
let watch = false;

const { fromEvent } = window.rxjs;
const {
    throttleTime, pairwise, distinctUntilChanged, map, tap, debounceTime,
} = window.rxjs.operators;

const scroll = fromEvent(scrollNode, 'scroll');

function headerHideShow(action) {
    headerNode.style.top = '0px';
    if (action === 'hide') {
        headerNode.style.top = `${(headerNode.offsetHeight + 2) * -1}px`;
    }
}

function getScrollDirection(yOld, yNew) {
    return (yNew > yOld ? 'down' : 'up');
}

function setTrackingStatus(status, yNewPointer) {
    if (status) {
        watch = true;
        yPointer = yNewPointer;
    } else watch = false;
}

const opener = scroll.pipe(
    debounceTime(100),
    map(() => scrollNode.scrollTop),
    map((y) => y < 20),
);

opener.subscribe((event) => {
    if (event) {
        setTrackingStatus(false);
        wayPointer = 'up';
        headerHideShow('open');
        console.log('Yeah!');
    }
});

const scrollStream = scroll.pipe(
    throttleTime(80),
    map(() => scrollNode.scrollTop),
    map((y) => Math.round(y)),
    distinctUntilChanged(),
    pairwise(),

    tap(([yOld, yNew]) => { // start tracking trigger
        if (wayPointer !== getScrollDirection(yOld, yNew)) {
            if (watch === false) setTrackingStatus(true, yNew);
        }
    }),

    tap((yOld, yNew) => { // stop tracking trigger
        if (!watch) return;
        if (wayPointer === 'down' && yNew > yPointer) setTrackingStatus(false);
        if (wayPointer === 'up' && yNew < yPointer) setTrackingStatus(false);
    }),

    tap(([yOld, yNew]) => { // stop tracking trigger  and release header
        if (!watch) return;
        if (Math.abs(yPointer - yNew) > wayLength) {
            wayPointer = getScrollDirection(yOld, yNew);
            headerHideShow(wayPointer === 'down' ? 'hide' : 'show');
            setTrackingStatus(false);
        }
    }),

    distinctUntilChanged(),
    tap((([yOld, yNew]) => console.log(`yOld : ${yOld}\t\tнапр : ${getScrollDirection(yOld, yNew)}\nyNew : ${yNew}    \tотслеж : ${watch}`))),
);

scrollStream.subscribe();
