var elem = document.querySelector('[name="elem"]');
var textContent = document.querySelector('[name="textContent"]');
elem.onclick = function (event) {
    event.preventDefault();
    let text = textContent.value;
    if (text) {       
        const list = document.querySelector('ul');      
        const newItem = document.createElement('li');
        newItem.textContent = text.replace(/ +/g, ' ').trim();      
        list.appendChild(newItem);        
    };
    textContent.value = '';
};
   


    
           

        