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

function sortByFilter() {
    const input = document.getElementById('inputOne');
    const filter = input.value.toUpperCase();
    const li = display.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
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
    const li = display.getElementsByTagName('li');
    const htmlArray = Array.from(li);
    htmlArray.sort((a, b) => {
        const titleA = a.innerHTML.toLowerCase();
        const titleB = b.innerHTML.toLowerCase();
        if (titleA < titleB) {
            return -1;
        } if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    for (let i = 0; i < htmlArray.length; i++) {
        htmlArray[i].parentNode.insertBefore(htmlArray[i], htmlArray[i + 300]);
    }
}

function sortListDir() {
    const li = display.getElementsByTagName('li');
    const htmlArray = Array.from(li);
    htmlArray.sort((a, b) => {
        const titleA = a.innerHTML.toLowerCase();
        const titleB = b.innerHTML.toLowerCase();
        if (titleA < titleB) {
            return -1;
        } if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    htmlArray.reverse();
    for (let i = 0; i < htmlArray.length; i++) {
        htmlArray[i].parentNode.insertBefore(htmlArray[i], htmlArray[i + 300]);
    }
}

sortList();
sortListDir();
displayPosts();
sortByFilter();
