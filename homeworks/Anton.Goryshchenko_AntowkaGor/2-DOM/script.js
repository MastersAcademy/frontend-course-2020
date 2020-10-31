const massageText = document.getElementById('js-massage-text');
const form = document.getElementById('js-block');

function submit(event) {
    event.preventDefault();
    const text = massageText.value;
    if (!text) return;
    massageText.value = '';

    const p = document.createElement('p');
    p.innerText = text.trim();
    p.classList.add('massage');
    document.querySelector('.js-massage-blok').append(p);
}

let timer = 0;
massageText.oninput = function () {
    const result = document.querySelector('.js-typing');
    result.innerHTML = 'typing...';
    clearTimeout(timer);
    timer = setTimeout(() => { result.innerHTML = ''; }, 1000);
};

massageText.addEventListener('keyup', ({ key }) => key === 'Enter' && submit());
form.addEventListener('submit', submit);
