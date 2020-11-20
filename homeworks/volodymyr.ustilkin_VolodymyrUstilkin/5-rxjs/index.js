(function () {
    const {
        fromEvent,
    } = window.rxjs;
    const {
        tap,
        filter,
        map,
        pairwise,
        throttleTime,
    } = window.rxjs.operators;

    const headerShowClass = 'header-show';
    const headerHideClass = 'header-hide';

    const headerEl = document.querySelector('[data-header]');
    const contentEl = document.querySelector('[data-main-container]');
    const buttonEl = document.querySelector('[data-button]');

    function setHeaderButton() {
        headerEl.innerHTML = '<div class="header-inner">Get an amazing<br>discount</div>'
            + '<button class="buy-button header-inner" type="button">BUY NOW</button>';
        console.log('setted button');
    }

    function setHeaderLogo() {
        headerEl.innerHTML = '<div class="header-inner">LOGO</div>';
        console.log('setted logo');
    }

    function showHeader() {
        headerEl.classList.remove(headerHideClass);
        headerEl.classList.add(headerShowClass);
    }

    function hideHeader() {
        headerEl.classList.remove(headerShowClass);
        headerEl.classList.add(headerHideClass);
    }

    function resetHeader() {
        headerEl.classList.remove(headerHideClass);
        headerEl.classList.remove(headerShowClass);
    }

    fromEvent(contentEl, 'scroll') // scroll up (show header)
        .pipe(
            throttleTime(100),
            map((e) => e.currentTarget.scrollTop),
            pairwise(),
            filter((e) => ((e[0] - e[1] > 50 && e[1] > 1) || (buttonEl.offsetTop < e[1]))),
            tap((e) => (buttonEl.offsetTop < e[1] ? setHeaderButton() : setHeaderLogo())),
        )
        .subscribe(() => showHeader());

    fromEvent(contentEl, 'scroll') // scroll down (hide header)
        .pipe(
            throttleTime(100),
            map((e) => e.currentTarget.scrollTop),
            filter((e) => headerEl.classList.contains(headerShowClass) && buttonEl.offsetTop > e),
            pairwise(),
            filter((e) => e[1] - e[0] > 50),
        )
        .subscribe(() => hideHeader());

    fromEvent(contentEl, 'scroll')
        .pipe(
            throttleTime(100),
            map((e) => e.currentTarget.scrollTop),
            filter((e) => e <= 1),
            tap((e) => console.log(e)),
        )
        .subscribe(() => resetHeader());
}());
