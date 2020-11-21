const { fromEvent } = window.rxjs;
const { map, bufferCount, scan } = window.rxjs.operators;

const header = document.querySelector('[data-header]');

const startPoint = window.scrollY;

const scrollWindow$ = fromEvent(window, 'scroll');

const scrollTopPos = (data) => data.pipe(
    map((buffer) => {
        const result = {};
        result.scrollTop = buffer[0] < buffer[1];
        Object.assign(result, { scrollY: buffer[1] });
        return result;
    }),
);

const isHiden = (data) => data.pipe(
    scan((acc, curr) => {
        const result = {};
        result.scrollY = curr.scrollY;
        result.scrollTop = curr.scrollTop;
        if (curr.scrollTop && acc.scrollYY < curr.scrollY && !acc.isVisibleHeader) {
            result.isVisibleHeader = true;
        } else {
            result.isVisibleHeader = acc.isVisibleHeader;
            result.scrollYY = acc.scrollYY;
        }
        if (acc.isVisibleHeader && curr.scrollTop) result.scrollYY = curr.scrollY - 50;
        if (!curr.isVisibleHeader && !curr.scrollTop) result.scrollYY = curr.scrollY + 50;
        return result;
    }, { isVisibleHeader: false, scrollYY: startPoint + 50 }),
    map((curr) => {
        let result;
        if ((!curr.scrollTop && curr.scrollYY > curr.scrollY && curr.isVisibleHeader)
        || curr.scrollY <= 50) {
            result = false;
        } else {
            result = curr.isVisibleHeader;
        }
        return result;
    }),
);

const scrolling$ = scrollWindow$.pipe(
    map((event) => event.currentTarget.scrollY),
    bufferCount(2, 1),
    scrollTopPos,
    isHiden,
);

scrolling$.subscribe((res) => {
    header.classList.toggle('header--hiden', res);
});
