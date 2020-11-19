const { fromEvent } = window.rxjs;
const {
    filter,
    map,
    debounceTime,
    pairwise,
} = window.rxjs.operators;

const headerNode = document.querySelector('[data-header]');
const headerDescriptionNode = document.querySelector('[data-header-description]');
const btnNode = document.querySelector('[data-btn]');
const copyBtn = btnNode.cloneNode(true);
const btnPosition = btnNode.getBoundingClientRect().top + window.pageYOffset;

fromEvent(window, 'scroll')
    .pipe(
        debounceTime(50),
        map(() => window.pageYOffset),
        pairwise(),
        map((pageYOffset) => pageYOffset[1] - pageYOffset[0]),
        filter((pageYOffset) => Math.abs(pageYOffset) >= 50),
        map((pageYOffset) => pageYOffset > 0),
    )
    .subscribe((isScrolledToBottom) => {
        if (window.pageYOffset >= btnPosition) {
            headerDescriptionNode.innerText = 'get an amazing discount';
            headerNode.appendChild(copyBtn);
            headerNode.className = 'header visible';
            headerDescriptionNode.innerText = isScrolledToBottom ? 'get an amazing discount' : 'Logo';
        } else {
            headerDescriptionNode.innerText = 'Logo';
            if (headerNode.contains(copyBtn)) {
                headerNode.removeChild(copyBtn);
            }
            headerNode.className = isScrolledToBottom ? 'header hidden' : 'header visible';
        }
    });
