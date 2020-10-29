function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector('ul.message-list');

    function createToDo() {
        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.classList.add('todo-text');
        const newTodo = input.value;
        textSpan.append(newTodo);
        input.addEventListener('keypress', (keypassed) => {
            const keyEnter = 13;
            if (keyPressed.which == keyEnter) {
                createTodo();
            }
        });
        ul.addEventListener('DOMContentLoaded', onDPageLoaded);
    }




    //const inputNode = document.querySelector('[data-inputTxt]');
    //messageNode = document.querySelector('[data-message-line]');

    //const btnSandNode = document.querySelector('[data-send]');

    //  btnSandNode.addEventListener('click', getValue);

    // function getValue() {
    //    if (!inputNode.value || inputNode.value.trim().length === 0) {
    //         inputNode.value = '';
    //    } else {
    //       const copyLi = messageNode.cloneNode();
    //       copyLi.textContent = inputNode.value.trim();
    //      copyLi.classList.remove('hidden');
    //       ulNode.appendChild(copyLi);
    //       inputNode.value = '';
    //   }
}