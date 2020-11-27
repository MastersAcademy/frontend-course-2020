const { rxjs } = window;
const HEADER = document.querySelector('.header');
rxjs.fromEvent(window, 'scroll').pipe(
    rxjs.operators.throttleTime(300),
    rxjs.operators.map((event) => Math.floor(event.currentTarget.scrollY)),
    rxjs.operators.pairwise(),
    rxjs.operators.filter(([prev, cur]) => (prev - cur) > 50 || (cur - prev) > 50),
    rxjs.operators.map(([a, b]) => (a < b ? 1 : 0)),
    rxjs.operators.distinctUntilChanged(),
).subscribe((e) => { HEADER.style.transform = e ? 'translateY(-101%)' : 'translateY(0)'; });
