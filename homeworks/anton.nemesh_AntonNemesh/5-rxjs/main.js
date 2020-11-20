const { fromEvent, combineLatest } = window.rxjs;
const {
    throttleTime,
    map,
    distinctUntilChanged,
    pairwise,
    filter,
} = window.rxjs.operators;

const headerLogoEl = document.querySelector('[data-header-logo]');
const headerBuyEl = document.querySelector('[data-header-buy]');
const addButtonEl = document.querySelector('[data-add-button]');
const buyBlockEl = document.querySelector('[data-section-buy]');

function filterFuncPx([preLastNumb, lastNumb]) {
    let numbOfPix;
    if (preLastNumb > lastNumb) {
        numbOfPix = preLastNumb - lastNumb;
    } else {
        numbOfPix = lastNumb - preLastNumb;
    }
    return numbOfPix > 30;
}

const streamPage = fromEvent(window, 'scroll').pipe(
    map((event) => event.path[1].pageYOffset),
    pairwise(),
    throttleTime(100),
    map(([preLastNumb, lastNumb]) => {
        const scrollDirection = preLastNumb > lastNumb;
        const partOfThePage = buyBlockEl.getBoundingClientRect().y > 0;
        const topOfThePage = buyBlockEl.getBoundingClientRect().y > 1000;
        return [scrollDirection, partOfThePage, topOfThePage];
    }),
);

const streamHead = fromEvent(window, 'scroll').pipe(
    map((event) => event.path[1].pageYOffset),
    pairwise(),
    throttleTime(100),
    filter(filterFuncPx),
    map(([preLastNumb, lastNumb]) => preLastNumb > lastNumb),
    distinctUntilChanged(),
);

combineLatest(
    streamPage,
    streamHead,
).subscribe(([[scrollDirection, partOfThePage, topOfThePage], scrollStatus]) => {
    headerBuyEl.classList.toggle('hidden', topOfThePage);
    if (partOfThePage) {
        headerLogoEl.classList.toggle('active', scrollStatus);
        headerBuyEl.classList.remove('active');
        addButtonEl.classList.add('hidden');
    } else if (scrollDirection) {
        headerBuyEl.classList.remove('active');
        headerLogoEl.classList.add('active');
        addButtonEl.classList.remove('hidden');
    } else {
        headerBuyEl.classList.add('active');
        headerLogoEl.classList.remove('active');
        addButtonEl.classList.remove('hidden');
    }
});
