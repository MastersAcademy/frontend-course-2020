(function () {
    const { fromEvent } = window.rxjs;
    const {
        throttleTime,
        pairwise,
        map,
        filter,
    } = window.rxjs.operators;

    const getNode = (selector) => document.querySelector(selector);
    const headerLogoNode = getNode('[data-header-logo]');
    const headerByNowNode = getNode('[data-header-by-now]');
    const byNowBtnNode = getNode('[data-by-now-button]');
    const headerLogoBtnNode = getNode('[data-header-logo-btn]');

    fromEvent(window, 'scroll')
        .pipe(
            throttleTime(250),
            map(() => window.pageYOffset),
            pairwise(),
            filter(([firstHeight, secondHeight]) => Math.abs((firstHeight - secondHeight)) > 50),
            map(([firstHeight, secondHeight]) => {
                const isBottomScroll = firstHeight < secondHeight;
                const clientRectTop = byNowBtnNode.getBoundingClientRect().top;

                return ({
                    isHeaderWithLogoSticky: isBottomScroll,
                    isHeaderByNowVisible: clientRectTop < 0 && isBottomScroll,
                    isHeaderLogoBtnVisible: clientRectTop > 0,
                });
            }),
        )
        .subscribe((cssState) => {
            headerLogoNode.classList.toggle('sticky-header', cssState.isHeaderWithLogoSticky);
            headerByNowNode.classList.toggle('sticky-header', !cssState.isHeaderByNowVisible);
            headerLogoBtnNode.classList.toggle('hidden', cssState.isHeaderLogoBtnVisible);
        });
}());
