const headerNode = document.querySelector('[data-heaader-content]');
const scrollNode = document.querySelector('[data-scroll]');

const offerWrapperNode = document.querySelector('[data-offer-wrapper]');
const offerNode = document.querySelector('[data-offer]');
const offerTextContentNode = document.querySelector('[data-offer-text]');
const yOfferConst = offerWrapperNode.offsetTop;

const wayLength = 50;
let wayPointer = 'up';
let yPointer = 0;
let watch = false;

const { fromEvent } = window.rxjs;
const {
    throttleTime, pairwise, distinctUntilChanged, map, tap, debounceTime,
} = window.rxjs.operators;

const scroll = fromEvent(scrollNode, 'scroll');

function offerContent(toHide) {
    if (toHide) offerTextContentNode.classList.add('hidden');
    else offerTextContentNode.classList.remove('hidden');
}

function offerMover(offerPosition) {
    if (offerPosition === 'top') {
        offerNode.style.top = '0px';
    }
    if (offerPosition === 'second') {
        offerNode.style.top = `${(headerNode.offsetHeight)}px`;
    }
}

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

            // here offer follows header
            if (yNew > yOfferConst) offerMover(wayPointer === 'down' ? 'top' : 'second');
        }
    }),

    tap(([yOld, yNew]) => {
        // the offer must be on top if we are higher this
        offerContent((yNew - (yOld - yNew)) < yOfferConst);
        if ((yNew - (yOld - yNew)) < yOfferConst) offerMover('top');
    }),

    distinctUntilChanged(),
    tap((([yOld, yNew]) => console.log(`yOld : ${yOld}\t\tнапр : ${getScrollDirection(yOld, yNew)}\nyNew : ${yNew}    \tотслеж : ${watch}`))),
);

scrollStream.subscribe();
