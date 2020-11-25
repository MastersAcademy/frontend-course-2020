const { fromEvent } = window.rxjs;
const { throttleTime, map, pairwise } = window.rxjs.operators;

const headerElem = document.querySelector("[data-header]");
const btnElem = document.querySelector("[data-btn]");
const txtElem = document.querySelector("[data-text]");

function createNewSubscription() {
    headerElem.classList.add("header__active");
    headerElem.classList.remove("header__not-active");
    const subscription = fromEvent(window, "scroll")
        .pipe(
            throttleTime(100),
            map((ev) => {
                if (ev.path[1].scrollY < window.outerHeight / 2) {
                    subscription.unsubscribe();
                    createSubscription();
                }
                return ev.path[1].scrollY;
            }),
            pairwise(),
            map((v) => v[1] > v[0])
        )
        .subscribe((up) => {
            if (up) {
                btnElem.style = 'visibility: hidden;';
                txtElem.style = 'visibility: visible;';
            } else {
                btnElem.style = 'visibility: visible;';
                txtElem.style = 'visibility: visible;';
            }
        });
}

function createSubscription() {
    btnElem.style = "visibility: hidden;";
    txtElem.style = "visibility: hidden;";
    const subscription = fromEvent(window, "scroll")
        .pipe(
            throttleTime(100),
            map((ev) => {
                if (ev.path[1].scrollY > window.outerHeight / 2) {
                    subscription.unsubscribe();
                    createNewSubscription();
                }
                return ev.path[1].scrollY;
            }),
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

                return undefined;
            })
        )
        .subscribe((show) => {
            if (show) {
                headerElem.classList.add("header__active");
                headerElem.classList.remove("header__not-active");
            }

            if (show === false) {
                headerElem.classList.add("header__not-active");
                headerElem.classList.remove("header__active");
            }
        });
}

createSubscription();
