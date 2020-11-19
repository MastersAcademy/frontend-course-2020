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
    const button = document.querySelector('[button]');

    const watchScroll = scroll.pipe(
        throttleTime(100, animationFrameScheduler),
        map(() => window.pageYOffset),
        pairwise(),
        filter(([x]) => x < button.offsetTop),
        map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
        distinctUntilChanged(),
    );

    watchScroll.subscribe((event) => {
        switch (event) {
            case 'Up':
                firstHeader.classList.add('header-first-logo');
                break;
            case 'Down':
                thirdHeader.classList.remove('header-third-logo');
                secondHeader.classList.remove('header-second-logo');
                firstHeader.classList.remove('header-first-logo');
                break;
            default: // do nothing
                break;
        }
    });

    const secondWatchScroll = scroll.pipe(
        throttleTime(50, animationFrameScheduler),
        map(() => window.pageYOffset),
        pairwise(),
        filter(([x]) => x > button.offsetTop),
        map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
        distinctUntilChanged(),
    );

    secondWatchScroll.subscribe((event) => {
        switch (event) {
            case 'Up':
                secondHeader.classList.remove('header-second-logo');
                thirdHeader.classList.add('header-third-logo');
                break;
            case 'Down':
                thirdHeader.classList.remove('header-third-logo');
                secondHeader.classList.add('header-second-logo');
                break;
            default: // do nothing
                break;
        }
    });
}());
