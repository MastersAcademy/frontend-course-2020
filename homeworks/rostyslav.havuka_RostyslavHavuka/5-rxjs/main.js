(function () {
    const {
        fromEvent,
        animationFrameScheduler,
    } = window.rxjs;

    const {
        pairwise,
        map,
        distinctUntilChanged,
        throttleTime,
        filter,
    } = window.rxjs.operators;

    const scroll = fromEvent(window, 'scroll');
    const firstHeader = document.querySelector('[data-first-header]');
    const secondHeader = document.querySelector('[data-second-header]');
    const thirdHeader = document.querySelector('[data-third-header]');
    const button = document.querySelector('[data-button]');

    function watchScroll() {
        return scroll.pipe(
            throttleTime(100, animationFrameScheduler),
            map(() => window.pageYOffset),
            pairwise(),
            map(([prev, curr]) => {
                if (prev > button.offsetTop) {
                    return curr < prev ? 'showBuyNow' : 'showLogoBuyNow';
                }
                if (Math.abs((prev - curr)) > 50) {
                    return prev < curr ? 'hideLogo' : 'showLogo';
                }
                return null;
            }),
            filter(Boolean),
            distinctUntilChanged(),
        );
    }

    watchScroll().subscribe((eventName) => {
        switch (eventName) {
            case 'showLogo':
                thirdHeader.classList.add('hidden');
                secondHeader.classList.add('hidden');
                firstHeader.classList.remove('hidden');
                firstHeader.classList.add('header-first-logo');
                break;
            case 'hideLogo':
                firstHeader.classList.add('hidden');
                thirdHeader.classList.add('hidden');
                secondHeader.classList.add('hidden');
                break;
            case 'showBuyNow':
                firstHeader.classList.add('hidden');
                secondHeader.classList.add('hidden');
                thirdHeader.classList.remove('hidden');
                thirdHeader.classList.add('header-third-logo');
                break;
            case 'showLogoBuyNow':
                firstHeader.classList.add('hidden');
                thirdHeader.classList.add('hidden');
                secondHeader.classList.remove('hidden');
                secondHeader.classList.add('header-second-logo');
                break;
            default:
                // do Nothing
                break;
        }
    });
}());
