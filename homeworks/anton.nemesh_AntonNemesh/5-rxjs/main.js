const { fromEvent } = window.rxjs;
const {
    throttleTime,
    map,
    distinctUntilChanged,
    pairwise,
    filter,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');
const headerLogoEl = document.querySelector('[data-header-section-logo]');
const headerBuyEl = document.querySelector('[data-header-section-buy]');
const buyBlockEl = document.querySelector('[data-section-buy]');
const addButtonEl = document.querySelector('[data-add-button]');

function filterFuncPx([preLastNumb, lastNumb]) {
    let numbOfPix;
    if (preLastNumb > lastNumb) {
        numbOfPix = preLastNumb - lastNumb;
    } else {
        numbOfPix = lastNumb - preLastNumb;
    }
    return numbOfPix > 30;
}

fromEvent(window, 'scroll').pipe(
    map((event) => event.path[1].pageYOffset),
    pairwise(),
    throttleTime(100),
    filter(filterFuncPx),
    map(([preLastNumb, lastNumb]) => preLastNumb > lastNumb),
    distinctUntilChanged(),
).subscribe((scrollStatus) => {
    headerEl.classList.toggle('active', scrollStatus);
});

fromEvent(window, 'scroll').pipe(
    map((event) => event.path[1].pageYOffset),
    pairwise(),
    throttleTime(100),
    map(([preLastNumb, lastNumb]) => {
        const scrollDirection = preLastNumb > lastNumb;
        const partOfThePage = buyBlockEl.getBoundingClientRect().y < 0;
        return [scrollDirection, partOfThePage];
    }),
).subscribe(([scrollDirection, partOfThePage]) => {
    if (!partOfThePage) {
        headerBuyEl.classList.add('hidden');
        headerLogoEl.classList.remove('hidden');
        addButtonEl.classList.add('hidden');
    } else if (scrollDirection) {
        headerBuyEl.classList.add('hidden');
        headerLogoEl.classList.remove('hidden');
        addButtonEl.classList.remove('hidden');
    } else {
        headerBuyEl.classList.remove('hidden');
        headerLogoEl.classList.add('hidden');
        addButtonEl.classList.remove('hidden');
    }
});
