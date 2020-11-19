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
            throttleTime(0, animationFrameScheduler),
            map(() => window.pageYOffset),
            pairwise(),
            filter(([x]) => x < button.offsetTop),
            map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
            distinctUntilChanged(),
        );
    }

    watchScroll().subscribe((event) => {
        switch (event) {
            case 'Up':
                thirdHeader.classList.remove('header-third-logo');
                secondHeader.classList.remove('header-second-logo');
                firstHeader.classList.add('header-first-logo');
                console.log('up before button');
                break;
            case 'Down':
                thirdHeader.classList.remove('header-third-logo');
                secondHeader.classList.remove('header-second-logo');
                firstHeader.classList.remove('header-first-logo');
                console.log('down before button');
                break;
            default: // do nothing
                break;
        }
    });

    function secondWatchScroll() {
        return scroll.pipe(
            throttleTime(100, animationFrameScheduler),
            map(() => window.pageYOffset),
            pairwise(),
            filter(([x]) => x > button.offsetTop),
            map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
            distinctUntilChanged(),
        );
    }
    secondWatchScroll().subscribe((event) => {
        switch (event) {
            case 'Up':
                firstHeader.classList.remove('header-first-logo');
                secondHeader.classList.remove('header-second-logo');
                thirdHeader.classList.add('header-third-logo');
                console.log('up after button');
                break;
            case 'Down':
                firstHeader.classList.remove('header-first-logo');
                thirdHeader.classList.remove('header-third-logo');
                secondHeader.classList.add('header-second-logo');
                console.log('down after button');
                break;
            default: // do nothing
                break;
        }
    });
}());
