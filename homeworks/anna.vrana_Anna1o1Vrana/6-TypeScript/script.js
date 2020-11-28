const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;

    constructor(
        private scoreElement: HTMLHeadingElement,
    private cubeScoreElement: HTMLDivElement,
    private keyElement: HTMLDivElement,
    private cubeElement?: HTMLDivElement,
    private progressBarElement?: HTMLDivElement,
) {}

start() {
    // code...
}

private startKeysInterval() {
    // code...
}

private setScore(score: number) {
    // code...
}

private setKey(key: string) {
    // code...
}

private addScore(score: number) {
    // code...
}

private subscribeOnKeyPress() {
    // code...
}
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();
