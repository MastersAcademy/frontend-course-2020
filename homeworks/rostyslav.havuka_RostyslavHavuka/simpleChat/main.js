document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById('button')

    function getValue() {
        let messege = document.getElementById('input').value;
        let li = document.createElement('li');

        if (!messege) return alert('input should not be empty');
        if (!(messege === messege.trim())) return alert('input must not contain spaces')
        
        li.innerHTML = messege;
        
        document.getElementById('messages').appendChild(li)
        document.getElementById('input').value = "";
    }

    function keyboardHandler(event) {
        if (event.key === 'Enter') getValue();
    }

    function clickHandler(event) {
        if (event.type === 'mouseup') getValue()
    }
    button.addEventListener('mouseup', clickHandler);
    input.addEventListener('keypress', keyboardHandler);
});
