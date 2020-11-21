// header variables
const headerNode = document.querySelector('[data-heaader-content]');
const headerLogoNode = document.querySelector('[data-header-logo]');
const headerTextNode = document.querySelector('[data-header-text]');
const headerButtonNode = document.querySelector('[data-header-button]');
let headerContentStatus = 0;

// offer variables
const offerWrapperNode = document.querySelector('[data-offer-wrapper]');
let yOffer = 0;

// scroll variables
const scrollNode = document.querySelector('[data-scroll]');
const wayLength = 50;
let wayPointer = 'up';
let yPointer = 0;
let watch = false;

// RxJS initialization
const { fromEvent } = window.rxjs;
const {
    throttleTime, pairwise, distinctUntilChanged, map, tap, debounceTime, filter,
} = window.rxjs.operators;
const scroll = fromEvent(scrollNode, 'scroll');

function getYOffer() {
    if (yOffer === 0) yOffer = offerWrapperNode.offsetTop;
    return yOffer;
}

/**
 * @param {*} action - 'hide' or 'show'
 */
function headerHideShow(action) {
    headerNode.style.top = '0px';
    if (action === 'hide') headerNode.style.top = `${(headerNode.offsetHeight + 2) * -1}px`;
}
/**
 * This function creates a header content for the context.
 */
function changeHeaderContent(yOld, yNew) {
    let id;
    if (yNew < getYOffer()) id = 0; // before offer
    if (yNew > getYOffer() && yOld > yNew) id = 1;
    if (yNew > getYOffer() && yOld < yNew) id = 2;

    if (id === 0 && id !== headerContentStatus) {
        headerLogoNode.classList.remove('hidden');
        headerTextNode.classList.add('hidden');
        headerButtonNode.classList.add('hidden');
        headerContentStatus = 0;
    }
    if (id === 1 && id !== headerContentStatus) {
        headerLogoNode.classList.remove('hidden');
        headerTextNode.classList.add('hidden');
        headerButtonNode.classList.remove('hidden');
        headerContentStatus = 1;
        headerHideShow('show');
    }
    if (id === 2 && id !== headerContentStatus) {
        headerLogoNode.classList.add('hidden');
        headerTextNode.classList.remove('hidden');
        headerButtonNode.classList.remove('hidden');
        headerContentStatus = 2;
        headerHideShow('show');
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
    if (!event) return;
    setTrackingStatus(false);
    wayPointer = 'up';
    headerHideShow('show');
});

const scrollStreamBeforeOffer = scroll.pipe(
    throttleTime(80),
    map(() => scrollNode.scrollTop),
    map((y) => Math.round(y)),
    filter((y) => y < getYOffer()), // before offer
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
            changeHeaderContent(yOld, yNew);
        }
    }),
    tap(([yOld, yNew]) => changeHeaderContent(yOld, yNew)),
);
scrollStreamBeforeOffer.subscribe();

const scrollStreamAfterOffer = scroll.pipe(
    throttleTime(80),
    map(() => scrollNode.scrollTop),
    map((y) => Math.round(y)),
    filter((y) => y > getYOffer()), // after offer
    distinctUntilChanged(),
    pairwise(),
    tap(([yOld, yNew]) => changeHeaderContent(yOld, yNew)),

);
scrollStreamAfterOffer.subscribe();
