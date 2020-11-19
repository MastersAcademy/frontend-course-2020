const mainNode = document.querySelector('[data-main]');
const headerNode = document.querySelector('[data-heaader]');
const scrollNode = document.querySelector('[data-scroll]');

headerNode.style.width = `${scrollNode.clientWidth}px`;
mainNode.style.paddingTop = `${headerNode.offsetHeight + 1}px`;

// Да уж, та еще задачка, ехеххе 😵
function doLittleMagic(action) {
    switch (action) {
        case 'close':
            headerNode.style.top = `${(headerNode.offsetHeight - 2) * -1}px`;
            // todo '- 2' -> '+ n'                              ☝
            // ой на что же готов человек без интернета...
            break;
        case 'open':
            headerNode.style.top = `${scrollNode.offsetTop}px`;
            break;
        default:
            headerNode.style.top = `${scrollNode.offsetTop}px`;
            break;
    }
} doLittleMagic();

/**
 * model without internet and rxjs
 *
 */

// scrollNode.addEventListener('scroll', (e) => {
//     console.log(scrollNode.scrollTop);
//     // console.log(scrollNode.scrollTop);
// });

// const { fromEvent } = window.rxjs;
// const { map } = window.rxjs.operators;

// const subscription = fromEvent(scrollNode, 'scroll');

// const subscription = myObservable.subscribe((event) => console.log(event));

// const subscription = myObservable.subscribe({
//     // on successful emissions
//     next: (event) => console.log(event),
//     // on errors
//     error: (error) => console.log(error),
//     // called once on completion
//     complete: () => console.log('complete!')
//   });
