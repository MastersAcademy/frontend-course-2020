const { Observable, fromEvent } = window.rxjs;
const { throttleTime, map, pairwise, take, filter } = window.rxjs.operators;

const headerElem = document.querySelector('[data-header]');

fromEvent(window, 'scroll')
    .pipe(
        throttleTime(200),
        map((ev) => ev.path[1].scrollY),
        pairwise(),
        map((ev) => {
            const prevY = ev[0];
            const nextY = ev[1];
            if (prevY - nextY <= -50) {
                return false;
            }
            if (prevY - nextY >= 50) {
                return true;
            }
        })
    )
    .subscribe((show) => {
        if (show) {
            headerElem.classList.add('header__active');
            headerElem.classList.remove('header__not-active');
        }

        if (show === false) {
            headerElem.classList.add('header__not-active');
            headerElem.classList.remove('header__active');
        }
    });
