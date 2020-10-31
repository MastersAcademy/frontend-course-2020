let inputNode, send1Node, send2Node;
let typing_indicatorNode;

window.onload = function () {
    /*Инициализация*/
    inputNode = document.querySelector("[msg-input]");
    send1Node = document.querySelector("[msg-send1]");
    send2Node = document.querySelector("[msg-send2]");
    send1Node.addEventListener("click", (event) =>
        receiver(inputNode.value, 0)
    );
    send2Node.addEventListener("click", (event) =>
        receiver(inputNode.value, 1)
    );
    typing_indicatorNode = document.querySelector("[hidden]");

    // для сочетания клавиш (из инета)
    //https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
    let keysPressed = {};
    inputNode.addEventListener("keydown", (event) => {
        // активация индикатора ввода
        //https://shikargar.files.wordpress.com/2010/10/keycodes.png
        if (
            (event.which >= 65 && event.which <= 90) ||
            (event.which >= 48 && event.which <= 57) ||
            (event.which >= 96 && event.which <= 111) ||
            (event.which >= 187 && event.which <= 192) ||
            event.which == 32
        )
            typing_indicator();

        // отправляем через Enter или Ctrl+Enter
        keysPressed[event.key] = true;
        if (!keysPressed["Control"] && event.key == "Enter")
            receiver(inputNode.value, 0);
        else if (keysPressed["Control"] && event.key == "Enter")
            receiver(inputNode.value, 1);
    });
    inputNode.addEventListener("keyup", (event) => {
        delete keysPressed[event.key];
    });
};

// hiding
// Индикатор ввода
let timerId,
    typingStatus = false;
function typing_indicator() {
    if (typingStatus == false) {
        typingStatus = true;
        console.log("do start");
        typing_indicatorNode.classList.remove("hidden");
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
        typingStatus = false;
        typing_indicatorNode.classList.add("hidden");
        console.log("do stop");
    }, 1000);
}

function receiver(text, btnID) {
    inputNode.value = null;
    text = validator(text);
    if (!text) return;
    creater(btnID, text);
}

function validator(text) {
    if (0 == text.replace(/\s+/g, "").length) return false;
    else return text.replace(/\s+/g, " ").trim();
}

function creater(btnID, text) {
    if ("content" in document.createElement("template")) {
        let avatar_color_class = ["color-one", "color-two"];
        let author_name = ["Tom", "Jerry"];

        let msgBodyNode = document.querySelector("[msg-body]");
        let msgTmlpNode = document.querySelector("[msg-tmlp]");
        let clone = msgTmlpNode.content.cloneNode(true);
        let msgAvatar = clone.querySelector(".avatar");
        let msgTitile = clone.querySelector(".msg-title");
        let msgBody = clone.querySelector(".msg-body");

        msgAvatar.classList.add(avatar_color_class[btnID]);
        msgTitile.textContent = author_name[btnID];
        msgBody.textContent = text;

        msgBodyNode.appendChild(clone);
        msgBodyNode.scrollTop = 65535;
    } else alert("Ошибка! Браузер не поддерживает <template>");
}
