let wallNode = document.querySelector('[data-wall]');

function insertMessage() {
    let text = publish.message.value;
    
    // function trim to remove spaces at the beginning and end of a line 
    let trimStr = text.trim();
    
    // empty line check
    if (trimStr.length == 0) return;

    let messageNode = document.querySelector('[data-message-template]');     
    let p = messageNode.content.querySelector('[data-message]');

    p.textContent = trimStr;

    let clone = messageNode.content.cloneNode(true);
    
    wallNode.append(clone);

    autoScrollMessages();

    // clear the input field 
    publish.message.value = "";
}

function autoScrollMessages() {      
    let scrollHeight = Math.max(wallNode.scrollHeight, wallNode.offsetHeight, wallNode.clientHeight);
    wallNode.scrollTop = scrollHeight;     
}

function showStatus() {
    let tooltip = document.querySelector('[data-tooltip]');
    
    tooltip.classList.remove("tooltip");
    
    setTimeout( () => tooltip.classList.add("tooltip"), 1000);      
}

publish.message.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {        
      event.preventDefault();
      insertMessage();
    }        
});

publish.button.addEventListener('click', insertMessage);

publish.message.addEventListener('input', showStatus);