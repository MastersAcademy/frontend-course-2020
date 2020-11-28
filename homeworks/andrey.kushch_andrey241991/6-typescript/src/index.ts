import { fromEvent, Observable } from 'rxjs'
import { throttleTime, map, pairwise } from 'rxjs/operators'
import Game from './game';
import './style.css'
const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLSpanElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

const startElement = document.querySelector('[data-start]') as HTMLButtonElement;
const finishElement = document.querySelector('[data-finish]') as HTMLButtonElement;
const restartElement = document.querySelector('[data-restart]') as HTMLButtonElement;

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

const subscription = fromEvent(document, 'keypress')
    .pipe(
        throttleTime(1500),
        map((e) => e),
    );


startElement.addEventListener('click', () => {
    game.start(subscription as Observable<KeyboardEvent>)
})

finishElement.addEventListener('click', () => {
    game.stop();
})

restartElement.addEventListener('click', () => {
    game.restart();
})
