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

const wayLength = 50;
let wayPointer = 'up';
let yPointer = 0;
let watch = false;
function makeTrackingStatus(command, newYPointer) {
    switch (command) {
        case true:
            watch = true;
            yPointer = newYPointer;
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
        doLittleMagic('open');
        console.log('Yeah!');
    }
});

const scrollStream = scroll.pipe(
    throttleTime(80),
    map(() => scrollNode.scrollTop),
    map((y) => Math.round(y)),
    distinctUntilChanged(),
    pairwise(),

    tap(([oldY, newY]) => { // тригер начала отслеживания
        if (wayPointer !== whereScroll(oldY, newY)) { // если новое направление
        // ? направление будет новым, пока не пройдём по нему 50пкс
            if (watch === false) { // если еще не отслеживаем
                makeTrackingStatus(true, newY);
            }
        }
    }),

    tap((oldY, newY) => { // прекратить отслеживать если движимся как раньше
        if (watch === true) {
            if (wayPointer === 'down') { // если базовое направление вниз
                if (newY > yPointer) { // если мы ниже точки
                    makeTrackingStatus(false);
                }
            } else if (wayPointer === 'up') { // если базовое направление вверх
                if (newY < yPointer) { // мы выше точки
                    makeTrackingStatus(false);
                }
            }
        }
    }),

    tap((oldY, newY) => {
        if (oldY > newY) {
            if (newY <= (oldY - newY)) {
                makeTrackingStatus(false);
                wayPointer = 'up';
                doLittleMagic('open');
                console.log('yeah!');
            }
        }
    }),

    tap(([oldY, newY]) => {
        if (watch === true) {
            if (Math.abs(yPointer - newY) > wayLength) { // если прошли путь
                wayPointer = whereScroll(oldY, newY);
                // открываем/закрываем хеадер
                doLittleMagic(wayPointer === 'down' ? 'close' : 'open');
                makeTrackingStatus(false);
            }
        }
    }),

    distinctUntilChanged(),
    tap((([oldY, newY]) => console.log(`oldY : ${oldY}\t\tнапр : ${whereScroll(oldY, newY)}\nnewY : ${newY}    \tотслеж : ${watch}`))),
    map(([oldY, newY]) => whereScroll(oldY, newY)),
);

scrollStream.subscribe((/* event */) => {
    // todo: do pretty code
    // if (event === 'up') doLittleMagic('open');
    // if (event === 'down') doLittleMagic('close');
});
