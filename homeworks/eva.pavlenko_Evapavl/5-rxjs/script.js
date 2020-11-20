const headerNode = document.querySelector('[data-header]');
const logoNode = document.querySelector('[data-logo]');
const buttonNode = document.createElement('button');

const { fromEvent, operators } = window.rxjs;
const {
    map, throttleTime, pairwise, filter,
} = operators;

fromEvent(document, 'scroll').pipe(
    throttleTime(100),
    map(() => window.pageYOffset),
    pairwise(),
    map((nums) => nums[0] - nums[1]),
    filter((num) => num >= 50 || num <= -50),
    map((num) => num > 0),
)
    .subscribe((result) => {
        const scrollHeight = document.body.scrollHeight / 2;
        headerNode.classList.toggle('header_active', result);
        headerNode.classList.toggle('header_hidden', !result);
        if (window.pageYOffset > scrollHeight) {
            logoNode.innerText = result ? 'Logo' : 'Get an amazing discount';
            headerNode.appendChild(buttonNode);
            buttonNode.className = 'button_header';
            buttonNode.innerText = 'BUY NOW';
            headerNode.className = 'header header_active';
            headerNode.classList.remove('header_hidden');
        } else {
            logoNode.innerText = 'Logo';
            buttonNode.remove();
        }
    });
