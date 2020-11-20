const { fromEvent } = window.rxjs;
const {
    filter,
    map,
    throttleTime,
    pairwise,
} = window.rxjs.operators;

const defaultHeaderNode = document.querySelector('[data-default-header]');
const additionalHeaderNode = document.querySelector('[data-additional-header]');
const btnNode = document.querySelector('[data-btn]');
const btnInHeaderNode = document.querySelector('[data-btn-in-header]');

fromEvent(window, 'scroll')
    .pipe(
        throttleTime(150),
        map(() => window.pageYOffset),
        pairwise(),
        map((scrolledHeight) => scrolledHeight[1] - scrolledHeight[0]),
        filter((scrolledHeight) => Math.abs(scrolledHeight) >= 50),
        map((scrolledHeight) => ({
            isScrolledToTop: scrolledHeight < 0,
            isScrolledBuyButton: btnNode.getBoundingClientRect().top < 0,
        })),
    )
    .subscribe((evt) => {
        defaultHeaderNode.classList.toggle('hidden', !evt.isScrolledToTop);
        additionalHeaderNode.classList.toggle('hidden', !evt.isScrolledBuyButton || evt.isScrolledToTop);
        btnInHeaderNode.classList.toggle('hidden', !evt.isScrolledBuyButton);
    });
