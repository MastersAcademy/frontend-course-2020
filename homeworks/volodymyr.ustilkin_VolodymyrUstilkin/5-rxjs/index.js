(function () {
    const {
        fromEvent,
    } = window.rxjs;
    const {
        tap,
        filter,
        map,
        // throttleTime,
        // distinctUntilChanged,
        pairwise,
        debounceTime,
        // switchMap,
    } = window.rxjs.operators;

    const headerShowClass = 'header-show';
    const headerHideClass = 'header-hide';

    const headerEl = document.querySelector('[data-header]');
    const contentEl = document.querySelector('[data-main-container]');

    function showHeader() {
        headerEl.classList.remove(headerHideClass);
        headerEl.classList.add(headerShowClass);
    }

    function hideHeader() {
        headerEl.classList.remove(headerShowClass);
        headerEl.classList.add(headerHideClass);
    }

    // function resetHeader() {
    //     headerEl.classList.remove(headerHideClass);
    //     headerEl.classList.remove(headerShowClass);
    // }

    fromEvent(contentEl, 'scroll')
        .pipe(
            map((e) => e.currentTarget.scrollTop),
            debounceTime(500),
            pairwise(),
            filter((e) => e[0] - e[1] > 50 && e[1] > 1),
            tap((e) => console.log(e)),
        )
        .subscribe(() => showHeader());

    fromEvent(contentEl, 'scroll')
        .pipe(
            map((e) => e.currentTarget.scrollTop),
            debounceTime(500),
            filter(() => headerEl.classList.contains(headerShowClass)),
            pairwise(),
            filter((e) => e[1] - e[0] > 50),
            tap((e) => console.log(e)),
        )
        .subscribe(() => hideHeader());
}());
