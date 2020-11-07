const display = document.getElementById('display');
const url = 'https://jsonplaceholder.typicode.com/posts';

const delay = function timeDelay(ms) {
    return new Promise((response) => setTimeout(() => response(), ms));
};

function fetchPosts() {
    return fetch(url).then((response) => response.json());
}

function createEl(data) {
    for (let i = 0; i < data.length; i++) {
        const newLi = document.createElement('li');
        newLi.setAttribute('class', 'newElement');
        const title = document.createElement('span');
        title.setAttribute('class', 'title');
        const parag = document.createElement('p');
        parag.setAttribute('class', 'paragraf');

        title.innerHTML = data[i].title;
        newLi.prepend(title);
        parag.innerHTML = data[i].body;
        newLi.append(parag);
        display.append(newLi);
    }
}

async function displayPosts() {
    await delay(3000);
    fetchPosts()
        .then((data) => {
            createEl(data);
        });
    document.body.classList.add('loaded_hiding');
    window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

function myFunction() {
    let i;
    const input = document.getElementById('inputOne');
    const filter = input.value.toUpperCase();
    const li = display.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('span')[0];
        const txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function sortList() {
    let i;
    let switching;
    let b;
    let shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        b = display.getElementsByTagName('li');
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function sortListDir() {
    let i;
    let switching;
    let b;
    let shouldSwitch;
    let dir;
    switching = true;
    dir = 'asc';
    while (switching) {
        switching = false;
        b = display.getElementsByTagName('li');
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (dir === 'asc') {
                break;
            } else if (dir === 'desc') {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        } else if (dir === 'asc') {
            dir = 'desc';
            switching = true;
        }
    }
}

sortList();
sortListDir();
displayPosts();
myFunction();
