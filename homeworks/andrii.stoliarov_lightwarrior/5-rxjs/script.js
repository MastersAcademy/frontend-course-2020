const { fromEvent } = window.rxjs;
const {
    debounceTime,
    map,
    filter,
    pairwise,
} = window.rxjs.operators;

const wallNode = document.querySelector('[data-wall]');
const paneHeaderNode = document.querySelector('[data-pane-header]');

const source = fromEvent(wallNode, 'scroll');

source.pipe(
    debounceTime(50),
    map(() => wallNode.scrollTop),
    pairwise(),
    filter((pxArr) => pxArr[1] - pxArr[0] >= 50),
)
    .subscribe(() => paneHeaderNode.classList.add('hidden-pane-header'));

source.pipe(
    debounceTime(50),
    map(() => wallNode.scrollTop),
    pairwise(),
    filter((pxArr) => pxArr[0] - pxArr[1] >= 50),
)
    .subscribe(() => paneHeaderNode.classList.remove('hidden-pane-header'));
