const userText = document.querySelector('#userText');

function Submit() {
    const text = userText.value;
    if (!text) return;
    userText.value = '';
    const li = document.createElement('li');
    li.innerText = text.trim();
    document.getElementById('pechat').appendChild(li);
}

document.getElementById('submit').addEventListener('click', Submit);
