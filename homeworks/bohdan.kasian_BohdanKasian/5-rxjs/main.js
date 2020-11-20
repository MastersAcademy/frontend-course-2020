const { rxjs } = window;
const HEADER = document.querySelector('.header');
rxjs.fromEvent(window, 'scroll').pipe(
    rxjs.operators.map((event) => Math.floor(event.currentTarget.scrollY)),
    rxjs.operators.pairwise(),
    rxjs.operators.filter(([prev, cur]) => (prev - cur) > 50 || (cur - prev) > 50),
    rxjs.operators.distinctUntilChanged(),
    rxjs.operators.scan((acc, [prev, cur]) => (prev < cur ? 1 : 0), []),
).subscribe((e) => { HEADER.style.transform = e ? 'translateY(-101%)' : 'translateY(0)'; });
