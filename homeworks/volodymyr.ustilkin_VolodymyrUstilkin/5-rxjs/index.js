(function () {
    const {
        fromEvent,
    } = window.rxjs;
    const {
        filter,
        // map,
        // throttleTime,
        // distinctUntilChanged,
        // pairwise,
        // debounceTime,
        // switchMap,
    } = window.rxjs.operators;

    const headerShowClass = 'header-show';
    const headerHideClass = 'header-hide';

    const headerEl = document.querySelector('[data-header]');
    const contentEl = document.querySelector('[data-main-container]');
    let lastKnownScrollPosition = contentEl.scrollTop;

    function changeHeader() {
        if (contentEl.scrollTop < 1) {
            headerEl.classList.remove(headerHideClass);
            headerEl.classList.remove(headerShowClass);
            lastKnownScrollPosition = contentEl.scrollTop;
        } else if (lastKnownScrollPosition > contentEl.scrollTop
            && !headerEl.classList.contains(headerShowClass)) {
            headerEl.classList.remove(headerHideClass);
            headerEl.classList.add(headerShowClass);
            lastKnownScrollPosition = contentEl.scrollTop;
        } else if (lastKnownScrollPosition < contentEl.scrollTop
            && headerEl.classList.contains(headerShowClass)) {
            headerEl.classList.remove(headerShowClass);
            headerEl.classList.add(headerHideClass);
            lastKnownScrollPosition = contentEl.scrollTop;
        }

        lastKnownScrollPosition = contentEl.scrollTop;
        console.log(`old/new: ${lastKnownScrollPosition}/${contentEl.scrollTop}`);
    }

    fromEvent(contentEl, 'scroll')
        .pipe(
            filter(() => Math.abs(lastKnownScrollPosition - contentEl.scrollTop) > 50
                || contentEl.scrollTop < 1),
            // map((event) => `Event time: ${event.timeStamp}`),
            // throttleTime(200),
            // tap()
        )
        .subscribe(() => changeHeader());
}());
