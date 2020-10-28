const massageText = document.querySelector('#massageText');
const button = document.querySelector('#btn');


massageText.addEventListener("keyup", ({ key }) => key === "Enter" && Submit())
button.addEventListener("click", Submit)

function Submit() {
    const text = massageText.value
    if (!text) return
    massageText.value = ""

    const p = document.createElement('p')
    p.innerText = text.trim();
    p.classList.add('massage')
    document.querySelector('.massageBlok').append(p)
}

let timer = 0;
massageText.oninput = function () {
    const result = document.querySelector('.typing')
    result.innerHTML = 'typing...';
    clearTimeout(timer)
    timer = setTimeout(() => result.innerHTML = '', 3000)
};