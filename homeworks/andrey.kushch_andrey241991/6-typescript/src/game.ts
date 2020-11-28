import { Observable, Subscription } from 'rxjs';
import { getRandomKey, getRandomPoints } from './helpers/helpers';

const PressedKeyPoint = {
    rightKey: [5, 10],
    wrongKey: [20, 25],
    noKey: [10, 15],
}

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private timeoutId: any;
    private subscriptionId: Subscription = new Subscription;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLSpanElement,
        private keyElement: HTMLDivElement,
        private cubeElement: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) { }

    start(subscription: Observable<KeyboardEvent>) {
        this.subscribeOnKeyPress(subscription)
        this.startKeysInterval(this.interval);
    }

    stop() {
        this.unsubscribeOnKeyPress()
        this.stopKeysInterval(this.timeoutId);
        this.clearData();
    }

    restart() {
        this.stopKeysInterval(this.timeoutId);
        this.clearData();
        setTimeout(() => {
            this.startKeysInterval(this.interval);
        }, 1300);
    }

    private clearData() {
        this.score = 100;
        this.currentKey = '';
        this.keyElement.innerHTML = '';
        this.cubeElement.style.width = '200px';
        this.cubeElement.style.height = '200px';
    }

    private startKeysInterval(interval: number) {
        this.timeoutId = setInterval(() => {
            this.setKey(getRandomKey())
        }, interval)
    }

    private stopKeysInterval(timeoutId: number) {
        clearInterval(timeoutId)
    }

    private setKey(key: string) {
        this.currentKey = key;
        this.keyElement.innerHTML = key;
    }

    private addScore(score: number) {
        this.score = score;
    }

    private subscribeOnKeyPress(subscription: Observable<KeyboardEvent>) {
        this.subscriptionId = subscription.subscribe((e) => {
            this.showResult(e.key)
        })
    }

    private unsubscribeOnKeyPress() {
        this.subscriptionId.unsubscribe();
    }

    private showResult(key: string) {
        const result = key.toUpperCase() === this.currentKey;
        let score: number;
        switch (result) {
            case true:
                score = getRandomPoints(PressedKeyPoint.rightKey);
                this.cubeScoreElement.innerHTML = `+ ${score}`
                this.addScore(this.score + score)
                if (this.score >= 200) {
                    this.stop();
                    alert('You are winner =)')
                    return;
                }
                this.scoreElement.innerHTML = String(this.score);
                this.keyElement.classList.add('key-container__key--pass');
                setTimeout(() => {
                    this.cubeScoreElement.innerHTML = '';
                    this.keyElement.classList.remove('key-container__key--pass');
                }, 1000);
                this.cubeElement.style.width = `${this.score + 100}px`;
                this.cubeElement.style.height = `${this.score * 0.8 + 100} px`;
                break
            case false:
                score = getRandomPoints(PressedKeyPoint.wrongKey);
                this.cubeScoreElement.innerHTML = `- ${score}`
                this.addScore(this.score - score)
                if (this.score <= 0) {
                    this.stop();
                    alert('You are looser =(')
                    return;
                }
                this.scoreElement.innerHTML = String(this.score);
                this.keyElement.classList.add('key-container__key--fail');
                setTimeout(() => {
                    this.cubeScoreElement.innerHTML = '';
                    this.keyElement.classList.remove('key-container__key--fail');
                }, 1000)
                this.cubeElement.style.width = `${this.score + 100}px`;
                this.cubeElement.style.height = `${this.score * 0.8 + 100} px`;
                break
            default: {

            }
        }
    }

}

export default Game;