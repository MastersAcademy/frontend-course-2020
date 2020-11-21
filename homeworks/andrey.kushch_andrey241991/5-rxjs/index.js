const { Observable, fromEvent } = window.rxjs;

const headerElem = document.querySelector("[data-header]");

let scrollPossition = 0;
let currentScrollPossition = 0;
fromEvent(window, "scroll").subscribe(() => {
    currentScrollPossition = window.scrollY;
});

const stream = new Observable((observer) => {
    setInterval(() => {
        observer.next(currentScrollPossition);
    }, 400);
});

function toggleHeader(currentSP) {
    if (scrollPossition - currentSP <= -50) {
        scrollPossition = currentSP;
        headerElem.classList.add("header__not-active");
        headerElem.classList.remove("header__active");
    }

    if (scrollPossition - currentSP >= 50) {
        scrollPossition = currentSP;
        headerElem.classList.add("header__active");
        headerElem.classList.remove("header__not-active");
    }
}

stream.subscribe((val) => toggleHeader(val));
