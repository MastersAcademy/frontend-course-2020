import { fromEvent } from 'rxjs';
import {
    debounceTime, map, pairwise, filter, distinctUntilChanged,
} from 'rxjs/operators';

const documentEl = document.querySelector('[data-sticky-header]');
fromEvent(window, 'scroll')
    .pipe(
        map(() => window.pageYOffset),
        debounceTime(100),
        pairwise(),
        filter(([prevPos, curPos]) => (prevPos - curPos) > 50 || (curPos - prevPos) > 50),
        map(([prevPos, curPos]) => prevPos < curPos),
        distinctUntilChanged(),
    )
    .subscribe((result) => documentEl.classList.toggle('sticky-header', result));
