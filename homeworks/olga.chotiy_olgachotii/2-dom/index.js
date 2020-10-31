const elem = document.querySelector('[name="elem"]');
const textContent = document.querySelector('[name="textContent"]');
elem.onclick = function (event) {
event.preventDefault();
const text = textContent.value;
if (text) {
const list = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = text.replace(/ +/g, ' ').trim();
list.appendChild(newItem);
}
textContent.value = '';
};
  


    
           

        