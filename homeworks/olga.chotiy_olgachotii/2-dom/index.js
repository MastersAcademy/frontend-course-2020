const elem = document.getElementById('elem');
const textContent = document.getElementById('textContent');
elem.addEventListener('click', function(event) {
    event.preventDefault();
    const text = textContent.value;
    if (text) {
        const list = document.getElementById('list');
        const newItem = document.createElement('li');
        newItem.textContent = text.replace(/ +/g, ' ').trim();
        list.appendChild(newItem);
        document.body.children[0].lastElementChild.classList.add('article');
    }
    textContent.value = '';
});
