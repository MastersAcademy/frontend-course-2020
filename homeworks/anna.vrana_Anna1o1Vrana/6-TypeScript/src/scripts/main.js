const scoreElement = document.querySelector('[data-score]');
const cubeElement = document.querySelector('[data-cube]');
const cubeScoreElement = document.querySelector('[data-cube-score]');
const keyElement = document.querySelector('[data-key]');
const progressBarElement = document.querySelector('[data-progress-bar]');
const startBtnElement = document.querySelector('[data-button]');

let score = 100;
let currentlyKey = '';
let pressedKey = '';
let intervalNumber = 2000;
let isGameStarted = false;


function progressBar() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let width = 1;
        let id = setInterval(frame, 20);

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

function getLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    currentlyKey = letters[Math.floor(Math.random() * letters.length)];
    keyElement.innerHTML = currentlyKey;
    progressBar();
}

setInterval(getLetter, intervalNumber);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getKey(event) {
    const keyName = event.key;
    if (keyName.toLowerCase() === currentlyKey.toLowerCase()) {
        score += getRandom(5, 10);
        scoreElement.innerHTML = score;
    } else if (keyName.toLowerCase() !== currentlyKey.toLowerCase()) {
        score -= getRandom(20, 25);
        scoreElement.innerHTML = score;
    } else {
        score -= getRandom(10, 15);
        scoreElement.innerHTML = score;
    }
    console.log(score);
    console.log(keyName.toLowerCase(), currentlyKey.toLowerCase());
}

document.addEventListener('keydown', getKey, false);

function endGame() {
    if (score >= 200) {
        alert('You win!!!');
        isGameStarted = false;
    } else if (score <= 0) {
        alert('You lose XD');
        isGameStarted = false;
    } else {
        isGameStarted = true;
    }
}

document.addEventListener('keypress', endGame);


function startGame() {
    isGameStarted = true;
    console.log('start Game');
}

startBtnElement.addEventListener('click', startGame);
