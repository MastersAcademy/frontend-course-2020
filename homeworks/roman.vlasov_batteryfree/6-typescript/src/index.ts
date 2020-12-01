import { interval, fromEvent, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ElementsHTML } from './html-elements';

class Game {
    private iskeyDownBlock: boolean = false;
    private interval: number = 2000;
    private score: number = 100;
    private progressBarValue: number = 0;
    private currentKey: string = '';
    private el: HTMLElement;
    private elements: ElementsHTML;
    private timerProgressBar$: any;
    private timerKeysInterval$: any;

    constructor(el: HTMLElement) {
        this.el = el;
        this.setKey(this.getCurrentKey());
        this.findElements();
        this.subscribeOnKeyPress()
    }

    start(): void {
        Game.renderKeyEl(this.elements.keyEl, this.currentKey);
        this.startKeysInterval();
        this.runProgressBar();
    }

    private findElements(): void {
        this.elements = {
            scoreEl: this.el.querySelector<HTMLParagraphElement>('[data-score]'),
            cubeScoreEl: this.el.querySelector<HTMLDivElement>('[data-cube-score]'),
            cubeEl: this.el.querySelector<HTMLDivElement>('[data-cube]'),
            keyEl: this.el.querySelector<HTMLSpanElement>('[data-key]'),
            progressBarEl: this.el.querySelector<HTMLDivElement>('[data-progress]'),
        };
    }

    private subscribeOnKeyPress(): void {
        const keyDown$: Observable<Event> = fromEvent(window, 'keydown');
        keyDown$
            .pipe(
                map((keyEvent: KeyboardEvent) => {
                    let result: boolean | undefined;
                    if (keyEvent.location === 0) {
                        if (keyEvent.key.toUpperCase() === this.currentKey.toUpperCase()) {
                            result = true;
                        } else {
                            result = false;
                        }
                    }
                    return result;
                }))
            .subscribe((res: boolean | undefined) => {
                if (!this.iskeyDownBlock && typeof res === 'boolean') {
                    const pointsReceived: number = this.calculateScore(this.progressBarValue, res);
                    this.setScore(pointsReceived);
                    this.iskeyDownBlock = !this.iskeyDownBlock;
                    const color: string = (res) ? '#0F0' : '#F00';
                    Game.renderCubeColor(this.elements.cubeEl, color);
                    Game.renderPointsReceived(this.elements.cubeScoreEl, pointsReceived);
                    Game.renderPointsReceivedVisible(this.elements.cubeScoreEl, true);
                    Game.renderScore(this.elements.scoreEl, this.score);
                    if (this.isGameOver()) {
                        this.stopGame();
                    }
                }
            }
            );
    }

    private startKeysInterval(): void {
        const timer$ = interval(this.interval);
        this.timerKeysInterval$ = timer$.subscribe(() => {
            this.progressBarValue = 0;
            Game.renderProgressBar(this.elements.progressBarEl, this.progressBarValue);
            this.setKey(this.getCurrentKey());
            Game.renderCubeColor(this.elements.cubeEl, '#CCC');
            this.iskeyDownBlock = false;
            Game.renderKeyEl(this.elements.keyEl, this.currentKey);
            this.runProgressBar();
            Game.renderPointsReceivedVisible(this.elements.cubeScoreEl, false);
        });
    }

    private isGameOver(): boolean {
        return this.score >= 200 || this.score <= 0;
    }

    private stopGame(): void {
        this.timerProgressBar$.unsubscribe();
        this.timerKeysInterval$.unsubscribe();
        alert('*GAME OVER*');
    }

    private setKey(key: string): void {
        this.currentKey = key;
    }

    private getCurrentKey(): string {
        const symbols: string = '0123456789abcdefghijklmnopqrstuvwxyz';
        return symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    private runProgressBar(): void {
        const timeInterval: number = 100;
        const endCount: number = this.interval / timeInterval;
        const timer$ = interval(timeInterval);
        this.timerProgressBar$ = timer$.pipe(
            take(endCount))
            .subscribe((index: number) => {
                this.progressBarValue = Math.ceil((100 / endCount) * (index + 1));
                Game.renderProgressBar(this.elements.progressBarEl, this.progressBarValue);
            });
    }

    private setScore(score: number): void {
        this.score += score;
    }

    private calculateScore(data: number, isCurrentKey: boolean): number {
        let score: number = Math.ceil((100 - data) / 10);
        if (score <= 5) score = 5;
        if (!isCurrentKey) {
            score -= 30;
        }
        return score;
    }

    static renderCubeColor(el: HTMLElement, color: string): void {
        el.style.setProperty('--cube-color', color);
    }

    static renderKeyEl(el: HTMLElement, currentKey: string): void {
        el.innerHTML = currentKey;
    }

    static renderProgressBar(el: HTMLElement, value: number): void {
        let progress: number = value;
        if (progress > 100) progress = 100;
        if (progress < 0) progress = 0;
        el.style.setProperty('--progress', `${progress}%`);
    }

    static renderScore(el: HTMLElement, score: number): void {
        el.innerHTML = score.toString();
    }

    static renderPointsReceived(el: HTMLElement, points: number): void {
        el.style.setProperty('--content-cube', points < 0 ? `"${points}"` : `"+${points}"`);
    }

    static renderPointsReceivedVisible(el: HTMLElement, toggle: boolean): void {
        el.classList.toggle('cube-score--opacity', toggle);
    }
}

const game = new Game(document.querySelector('[data-game]'));

game.start();
