import './style.css';
import { Game } from './Game';

const winnerScreenElement = document.querySelector<HTMLParagraphElement>('[data-winner-screen]');
const loserScreenElement = document.querySelector<HTMLParagraphElement>('[data-loser-screen]');
const gameScreenElement = document.querySelector<HTMLDivElement>('[data-game-screen]');

const game = new Game(
    winnerScreenElement!,
    loserScreenElement!,
    gameScreenElement!
)

game.start();
