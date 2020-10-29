(function () {
    function stopTyping() {
        const typingNowContainer = document.getElementById('typing-now-container');

        typingNowContainer.innerHTML = '';
    }

    const debounce = (func, wait) => {
        let timerId;

        return function executedFunction() {
            clearTimeout(timerId);
            timerId = setTimeout(func, wait);
        };
    };

    const stopType = debounce(stopTyping, 1000);

    function setTyping() {
        const typingNowContainer = document.getElementById('typing-now-container');

        typingNowContainer.innerHTML = '<p>Typing...</p>';
        stopType();
    }

    document.getElementById('inputted-text')
        .addEventListener('input', setTyping);
}());
