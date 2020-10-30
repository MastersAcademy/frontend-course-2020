var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function() {
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    if (!textbox.value) {
        alert("Type your messege!!");
        return;
    }
    messages.appendChild(newMessage);
    textbox.value = "";

});