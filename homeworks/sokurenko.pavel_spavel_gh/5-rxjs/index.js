const headerNode = document.querySelector('[data-heaader-content]');
const scrollNode = document.querySelector('[data-scroll]');

function headerWork(action) {
    switch (action) {
        case 'close':
            headerNode.style.top = '0px';
            headerNode.style.top = `${(headerNode.offsetHeight + 2) * -1}px`;
            break;
        case 'open':
            headerNode.style.top = '0px';
            break;
        default: break;
    }
}

function whereScroll(yOld, yNew) {
    return (yNew > yOld ? 'down' : 'up');
}

const wayLength = 50;
let wayPointer = 'up';
let yPointer = 0;
let watch = false;
function makeTrackingStatus(command, yNewPointer) {
    switch (command) {
        case true:
            watch = true;
            yPointer = yNewPointer;
            break;
        case false:
            watch = false;
            break;
        default: break;
    }
}

const { fromEvent } = window.rxjs;
const {
    throttleTime, pairwise, distinctUntilChanged, map, tap, debounceTime,
} = window.rxjs.operators;

const scroll = fromEvent(scrollNode, 'scroll');

const opener = scroll.pipe(
    debounceTime(100),
    map(() => scrollNode.scrollTop),
    map((y) => y < 20),
);

opener.subscribe((event) => {
    if (event) {
        makeTrackingStatus(false);
        wayPointer = 'up';
        headerWork('open');
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
        if (wayPointer !== whereScroll(yOld, yNew)) {
            if (watch === false) {
                makeTrackingStatus(true, yNew);
            }
        }
    }),

    tap((yOld, yNew) => { // stop tracking trigger
        if (watch === true) {
            if (wayPointer === 'down') {
                if (yNew > yPointer) {
                    makeTrackingStatus(false);
                }
            } else if (wayPointer === 'up') {
                if (yNew < yPointer) {
                    makeTrackingStatus(false);
                }
            }
        }
    }),

    tap(([yOld, yNew]) => { // stop tracking trigger  and release header
        if (watch === true) {
            if (Math.abs(yPointer - yNew) > wayLength) {
                wayPointer = whereScroll(yOld, yNew);
                headerWork(wayPointer === 'down' ? 'close' : 'open');
                makeTrackingStatus(false);
            }
        }
    }),

    distinctUntilChanged(),
    tap((([yOld, yNew]) => console.log(`yOld : ${yOld}\t\tнапр : ${whereScroll(yOld, yNew)}\nyNew : ${yNew}    \tотслеж : ${watch}`))),
    // map(([yOld, yNew]) => whereScroll(yOld, yNew)),
);

scrollStream.subscribe((/* event */) => {
    // todo: do pretty code
    // if (event === 'up') headerWork('open');
    // if (event === 'down') headerWork('close');
});
