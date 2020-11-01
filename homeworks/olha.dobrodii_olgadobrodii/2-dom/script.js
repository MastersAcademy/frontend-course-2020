const elem = document.querySelector('#elem');
elem.onclick = function () {
    const newElem = document.createElement('li');
    const text = document.createTextNode('lola hi');
    newElem.appendChild(text);
    document.body.appendChild(newElem);
};
