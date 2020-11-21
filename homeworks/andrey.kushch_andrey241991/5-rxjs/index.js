(function () {
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

    stream.subscribe((val) => toggleHeader(val));

    function toggleHeader(currentScrollPossition) {
        if (scrollPossition - currentScrollPossition <= -50) {
            scrollPossition = currentScrollPossition;
            console.log("Event: hide ");
            headerElem.classList.add("header__not-active");
            headerElem.classList.remove("header__active");
        }

        if (scrollPossition - currentScrollPossition >= 50) {
            scrollPossition = currentScrollPossition;
            console.log("Event: show ");
            headerElem.classList.add("header__active");
            headerElem.classList.remove("header__not-active");
        }
    }
})();
