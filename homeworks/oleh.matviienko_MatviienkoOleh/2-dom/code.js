(function () {
    const someMessage = document.getElementById('typePlace');
    const button = document.getElementById('button');

    function textOutPut() {
        const chat = document.getElementById('chat');

        if (!/^\s*$/.test(someMessage.value)) {
            const newLi = document.createElement('li');
            newLi.setAttribute('class', 'newElement');
            newLi.innerHTML = someMessage.value;
            chat.prepend(newLi);
        }
        someMessage.value = '';
    }
    button.addEventListener('click', textOutPut);
}());
