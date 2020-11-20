const { fromEvent } = window.rxjs;
const {
    throttleTime,
    map,
    filter,
    pairwise,
} = window.rxjs.operators;

const wallNode = document.querySelector('[data-wall]');
const paneHeaderNode = document.querySelector('[data-pane-header]');

const source = fromEvent(wallNode, 'scroll');

source.pipe(
    throttleTime(150),
    map((event) => event.target.scrollTop),
    pairwise(),
    filter(([previousY, currentY]) => Math.abs(currentY - previousY) >= 50),
    map(([previousY, currentY]) => currentY > previousY),
)
    .subscribe((isActive) => paneHeaderNode.classList.toggle('hidden-pane-header', isActive));
