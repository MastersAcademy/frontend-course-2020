// const mainNode = document.querySelector('[data-main]');
// const headerTTTNode = document.querySelector('[data-heaader]');
const headerNode = document.querySelector('[data-heaader-content]');
const scrollNode = document.querySelector('[data-scroll]');

// headerNode.style.width = `${scrollNode.clientWidth}px`;
// mainNode.style.paddingTop = `${headerNode.offsetHeight + 1}px`;

// Да уж, та еще задачка, ехеххе 😵
function doLittleMagic(action) {
    switch (action) {
        case 'close':
            headerNode.style.top = '0px';
            headerNode.style.top = `${(headerNode.offsetHeight - 2) * -1}px`;
            // todo '- 2' -> '+ n'                              ☝
            // ой на что же готов человек без интернета...
            break;
        case 'open':
            headerNode.style.top = '0px';
            break;
        default:
            break;
    }
} doLittleMagic();
// headerTTTNode.classList.remove('header-content-sticky-top0');
// headerTTTNode.classList.add('header-content-sticky-top0');

//
// scrollNode.addEventListener('scroll', (e) => {
//     console.log(scrollNode.scrollTop);
//     // console.log(scrollNode.scrollTop);
// });
//

function whereScroll(oldY, newY) {
    return (newY > oldY ? 'down' : 'up');
}

// 2
// 2
// 2
// 2

const { fromEvent } = window.rxjs;
const {
    throttleTime, pairwise, distinctUntilChanged, map, /* tap */
} = window.rxjs.operators;

const scroll = fromEvent(scrollNode, 'scroll');

// let scrollPointer = scrollNode.scrollTop;

// let wP = "up";
// let pointerY = 0;
// let watch = false;

const ddd = scroll.pipe(
    throttleTime(80),
    map(() => scrollNode.scrollTop),
    distinctUntilChanged(),
    pairwise(),

    // tap(([oldY, newY]) => {
    //     if (wP !== whereScroll(oldY, newY)) { //если новое направление
    //         if (watch === false) { // если мы еще не отслеживаем
    //             watch = true; // начинаем отслеживать
    //             wP = newY;
    //         }
    //     }
    // }),

    map(([oldY, newY]) => whereScroll(oldY, newY)),
    // distinctUntilChanged(),
);

ddd.subscribe((event) => {
    if (event === 'up') doLittleMagic('open');
    if (event === 'down') doLittleMagic('close');
});
