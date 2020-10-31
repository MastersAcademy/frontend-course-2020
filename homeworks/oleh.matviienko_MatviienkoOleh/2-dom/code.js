(function () {
    const someMessage = document.getElementById('typePlace');
    const button = document.getElementById('button');
    const a = document.getElementById('dotOne');
    const b = document.getElementById('dotTwo');
    const c = document.getElementById('dotThree');
    const whileTyping = document.getElementById('symbolTyping');

    function textOutPut() {
        const chat = document.getElementById('chat');

        if (!/^\s*$/.test(someMessage.value)) {
            const newLi = document.createElement('li');
            newLi.innerHTML = someMessage.value;
            chat.prepend(newLi);
        }
        someMessage.value = '';
    }
    function typing() {
        whileTyping.innerHTML = 'Typing';
        a.innerHTML = '.';
        b.innerHTML = '.';
        c.innerHTML = '.';
    }
    function noTyping() {
        whileTyping.innerHTML = '';
        a.innerHTML = '.';
        b.innerHTML = '.';
        c.innerHTML = '.';
    }

    someMessage.addEventListener('keydown', typing);
    setInterval(noTyping, 3000);
    button.addEventListener('click', textOutPut);
}());
