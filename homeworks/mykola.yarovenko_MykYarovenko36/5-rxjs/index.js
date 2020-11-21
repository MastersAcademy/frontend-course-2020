const { fromEvent } = window.rxjs;
const {
    map, pairwise, filter,
} = window.rxjs.operators;

const wrapperScroll$ = fromEvent(document.querySelector('[data-wrapper]'), 'scroll');
const headerEl = document.querySelector('.wrapper_header');
const saleBtnPosition = document.querySelector('.wpapper-sale_btn').offsetTop;
const headerSaleContent = (pairScrollValue, btnPosition) => {
    if (pairScrollValue[1] > btnPosition || pairScrollValue[1] > btnPosition - 20) {
        if (pairScrollValue[0] > pairScrollValue[1]) {
            headerEl.innerHTML = `
            <p class='header_logo'>Logo</p>
            <button class='header-sale_btn sale_btn'>BUY NOW</button>`;
        } else {
            headerEl.innerHTML = `
            <p class='header_logo'>Get an amazing discount</p>
            <button class='header-sale_btn sale_btn'>BUY NOW</button>`;
        }
    } else {
        headerEl.innerHTML = `
        <p class='header_logo'>Logo</p>`;
    }
};

wrapperScroll$.pipe(
    map((event) => event.target.scrollTop),
    filter((val) => val > 50),
    pairwise(),
).subscribe(
    (val) => {
        headerSaleContent(val, saleBtnPosition);
        if (val[0] < val[1] && val[1] < saleBtnPosition) {
            headerEl.classList.toggle('active', false);
        } else {
            headerEl.classList.toggle('active', true);
        }
    },
);
