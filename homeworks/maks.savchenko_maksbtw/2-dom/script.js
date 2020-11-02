const chat = document.querySelector('#chat');
const subBtn = document.querySelector('#submit');
const input = document.querySelector('#input');

function sending(e) {
    const { value } = document.querySelector('#input');
    input.value = '';
    if (value.trim()) {
        const display = `<span class="message">${value}</span>`;
        chat.innerHTML += display;
        document.querySelector('#typing').classList.remove('toggle');
    } else {

    }
}

subBtn.addEventListener('click', (e) => {
    sending(e);
});
/* Shortcut for sending messages */
input.addEventListener('focus', (event) => {
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            sending(e);
        } else {

        }
    });
});

input.addEventListener('input', (e) => {
    const { value } = document.querySelector('#input');
    if (value.trim()) {
        document.querySelector('#typing').classList.add('toggle');
    } else {
        document.querySelector('#typing').classList.remove('toggle');
    }
});
