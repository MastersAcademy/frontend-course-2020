const chat = document.querySelector('.chat');
const subBtn = document.querySelector('.submit');
const input = document.querySelector('.input');

function sending() {
    const value = document.querySelector('.input').value;
    input.value = '';
    if (value.trim()) {
        const display = `<span class="message">${value}</span>`;
        chat.innerHTML += display;
        document.querySelector('.typing').classList.remove('toggle');
    }
}

subBtn.addEventListener('click', (event) => {
    sending(event);
});
// Shortcut for sending messages
input.addEventListener('focus', (event) => {
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            sending(event);
        }
    });
});

input.addEventListener('input', () => {
    const value = document.querySelector('.input').value;
    if (value.trim()) {
        document.querySelector('.typing').classList.add('toggle');
    } else {
        document.querySelector('.typing').classList.remove('toggle');
    }
});
