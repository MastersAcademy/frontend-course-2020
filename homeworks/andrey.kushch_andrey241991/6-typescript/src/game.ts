import { fromEvent, BehaviorSubject, Subject, interval, pipe } from 'rxjs';
import { throttleTime, map, takeUntil } from 'rxjs/operators'
import { getRandomKey, getRandomPoints } from './helpers/helpers';

export class Game {
    private score$ = new BehaviorSubject(100);
    private stop$ = new Subject<void>();
    private currentKey: string = '';
    private isPressed = false;
    private isFinished = false;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLSpanElement,
        private keyElement: HTMLDivElement,
        private cubeElement: HTMLDivElement,
        private progressBarElement: HTMLDivElement,
    ) { }


    start() {
        this.init();
    }

    stop() {
        this.clearData();
        this.stop$.next();
        this.stop$.complete();
        this.isFinished = true;
    }

    restart() {
        this.stop();
        setTimeout(() => this.init(), 1000);
    }

    private init() {
        this.stop$ = new Subject<void>()
        this.stop$.next();
        this.isFinished = false;

        interval(2000).pipe(
            takeUntil(this.stop$)
        ).subscribe(() => {
            this.currentKey = getRandomKey()
            this.keyElement.innerHTML = this.currentKey;
            this.progressBarElement.style.animation = '2s infinite progrees-bar-animation';

            setTimeout(() => {
                if (!this.isPressed && !this.isFinished) {
                    this.onKeyPress();
                }
                this.isPressed = false;
            }, 2000)
        });

        fromEvent(document, 'keypress').pipe(
            throttleTime(1500),
            takeUntil(this.stop$),
            map(e => (e as KeyboardEvent).key.toUpperCase() === this.currentKey),
        ).subscribe((isKeyRight) => this.onKeyPress(isKeyRight));

        this.score$.pipe(takeUntil(this.stop$)).subscribe((score) => this.showResult(score));
    }

    private onKeyPress(isKeyRight?: boolean) {
        this.isPressed = true;
        const points = getRandomPoints(isKeyRight)
        this.cubeScoreElement.innerHTML = `${isKeyRight ? '+' : '-'}${points}`
        const keyElementStyle = isKeyRight ? 'key-container__key--pass' : 'key-container__key--fail'
        this.keyElement.classList.remove('key-container__key--pass', 'key-container__key--fail');
        this.keyElement.classList.add(keyElementStyle);
        setTimeout(() => {
            this.cubeScoreElement.innerHTML = '';
            this.keyElement.classList.remove('key-container__key--pass', 'key-container__key--fail');
        }, 1000)
        this.score$.next(isKeyRight ? this.score$.value + points : this.score$.value - points);
    }

    private showResult(score: number) {
        this.scoreElement.innerHTML = String(score);
        this.cubeElement.style.width = `${score + 100}px`;
        this.cubeElement.style.height = `${score + 100}px`;
        if (score >= 200) {
            this.stop();
            alert('You are winner =)');
        }
        if (score <= 0) {
            this.stop();
            alert('You are looser =(');
        }
    }

    private clearData() {
        this.score$.next(100);
        this.currentKey = '';
        this.keyElement.innerHTML = '';
        this.cubeElement.style.width = '200px';
        this.cubeElement.style.height = '200px';
        this.progressBarElement.style.animation = '';
    }

}
