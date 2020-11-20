const { fromEvent } = window.rxjs;
const {
    map,
    throttleTime,
    pairwise,
    filter,
    distinctUntilChanged,
} = window.rxjs.operators;

const headerLogo = document.querySelector('.header-logo');

let pixel;

fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    distinctUntilChanged(),
    pairwise(),
    throttleTime(30),
    filter(([num1, num2]) => {
        if (num1 > num2) {
            pixel = num1 - num2;
        } else {
            pixel = num2 - num1;
        }
        return pixel > 50;
    }),
    map(([num1, num2]) => num1 > num2),
).subscribe((v) => {
    headerLogo.classList.toggle('header-sticky', v);
});
