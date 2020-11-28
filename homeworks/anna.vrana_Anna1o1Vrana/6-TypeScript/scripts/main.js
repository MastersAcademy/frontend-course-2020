const scoreElement = document.querySelector('[data-score]');
const cubeElement = document.querySelector('[data-cube]');
const cubeScoreElement = document.querySelector('[data-cube-score]');
const keyElement = document.querySelector('[data-key]');
const progressBarElement = document.querySelector('[data-progress-bar]');
const startBtnElement = document.querySelector('[data-button]');

let score = 100;
let currentlyKey = '';
let intervalNumber = 2000;
let isGameStarted = false;

function getLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
}

function move() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let width = 1;
        let id = setInterval(frame, 2);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                progressBarElement.style.width = width + '%';
            }

        }
    }
}

function startGame() {
    isGameStarted = true;
    console.log('start Game');
    keyElement.innerHTML = getLetter();
    move();

    // code...
}

function handleBoxPress(event) {
    if (!isGameStarted) {
        return;
    }
    if (event.target.dataset) {
        score++;
        getLetter();
    }
}

function endGame() {
    isGameStarted = false;
}
//
// function startKeysInterval() {
//     // code...
// }
//
// function setScore(score: number) {
//     // code...
// }
//
// function setKey(key: string) {
//     // code...
// }
//
// function addScore(score: number) {
//     // code...
// }
//
// function subscribeOnKeyPress() {
//     // code...
// }

// const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

function keyPress(e) {
    let keyNum;
    if (window.event) {
        keyNum = window.event.keyCode;
    } else if (e) {
        keyNum = e.which;
    }
    console.log(keyNum);
}
document.onkeydown = keyPress;

startBtnElement.addEventListener('click', startGame);

// keyElement.addEventListener(onkeypress(), handleBoxPress);
