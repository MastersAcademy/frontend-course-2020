const headerNode = document.querySelector('[data-header]');
const logoNode = document.querySelector('[data-logo]');
const buttonNode = document.createElement('button');

const { fromEvent, operators } = window.rxjs;
const {
    map, throttleTime, pairwise,
} = operators;

fromEvent(document, 'scroll').pipe(
    map((e) => e.path[1].pageYOffset),
    throttleTime(200),
    pairwise(),
    map((nums) => {
        if (nums[0] < 100 || nums[1] < 100) {
            return 'static';
        }
        if (nums[0] - nums[1] >= 50 || nums[1] - nums[0] >= 50) {
            return 'active';
        }
        return 'hidden';
    }),
)
    .subscribe((data) => {
        switch (data) {
            case 'active':
                headerNode.classList.add('header_active');
                headerNode.classList.remove('header_hidden');
                break;
            case 'hidden':
                headerNode.classList.add('header_hidden');
                headerNode.classList.remove('header_active');
                break;
            case 'static':
                headerNode.classList.add('header_static');
                headerNode.classList.remove('header_hidden');
                headerNode.classList.remove('header_active');
                break;
            default:
                headerNode.classList.add('header_static');
                break;
        }
    });

fromEvent(document, 'scroll').pipe(
    map((e) => e.path[1].pageYOffset),
    throttleTime(200),
    pairwise(),
    // eslint-disable-next-line consistent-return
    map((nums) => {
        const scrollHeight = document.body.scrollHeight / 2;
        if (nums[0] > scrollHeight || nums[1] > scrollHeight) {
            return 'change';
        }
        if (nums[0] < scrollHeight || nums[1] < scrollHeight) {
            return 'default';
        }
        return 'default';
    }),
)
    .subscribe((data) => {
        if (data === 'change') {
            logoNode.innerText = 'Get an amazing discount';
            headerNode.appendChild(buttonNode);
            buttonNode.innerHTML = 'BUY NOW';
            buttonNode.classList.add('button_header');
        } else if (data === 'default') {
            logoNode.innerText = 'Logo';
            buttonNode.remove();
        }
    });
