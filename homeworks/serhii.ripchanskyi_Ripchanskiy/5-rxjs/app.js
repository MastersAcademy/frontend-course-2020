const { fromEvent } = window.rxjs;
const {
    throttleTime,
    pairwise,
    map,
    filter,
} = window.rxjs.operators;

const getNode = (selector) => document.querySelector(selector);
const headerLogoNode = getNode('[data-header-logo]');

fromEvent(window, 'scroll')
    .pipe(
        throttleTime(250),
        map(() => window.pageYOffset),
        pairwise(),
        filter(([firstHeight, secondHeight]) => Math.abs((firstHeight - secondHeight)) > 50),
        map(([firstHeight, secondHeight]) => (firstHeight < secondHeight)),
    )
    .subscribe((isSticky) => {
        headerLogoNode.classList.toggle('sticky-header', isSticky);
    });
