const containerEl = document.querySelector('[data-container]');
const templateEl = document.querySelector('[data-template]');
const dropdownSort = document.querySelector('[data-sort]');
const inputSearch = document.querySelector('[data-search]');
const dataBase = [];

function createPostItem(item, i) {
    const postClone = templateEl.content.cloneNode(true);
    const postTitle = postClone.querySelector('h2');
    const postBody = postClone.querySelector('p');
    const buttonDel = postClone.querySelector('button');

    postTitle.textContent = item.title;
    postBody.textContent = item.body;
    buttonDel.setAttribute(`data-del-${i}`, '');
    containerEl.appendChild(postClone);
    const deleteButton = document.querySelector(`[data-del-${i}]`);
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(deleteButton);
    });
}

function toggleLoader() {
    const imageLoaderEl = document.querySelector('[data-loader]');
    if (imageLoaderEl.style.display === 'none') {
        imageLoaderEl.style.display = 'block';
    } else {
        imageLoaderEl.style.display = 'none';
    }
}

function deleteAllPosts() {
    const elements = containerEl.getElementsByClassName('post');
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function sortSort() {
    dataBase.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

function sortReverse() {
    dataBase.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    });
}

function sortDefault() {
    dataBase.sort((a, b) => {
        const nameA = a.id;
        const nameB = b.id;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

function showData() {
    deleteAllPosts();
    dataBase.forEach((item, i) => {
        if (item.visibility) {
            createPostItem(item, i);
        }
    });
}

function sortData(sort) {
    const sortValue = sort || dropdownSort.value;
    switch (sortValue) {
        case 'sort':
            sortSort();
            break;
        case 'reverse':
            sortReverse();
            break;
        case 'default':
            sortDefault();
            break;
        default: break;
    }
}

function filterData() {
    dataBase.forEach((item) => {
        const element = item;
        if (element.title.includes(inputSearch.value)) {
            element.visibility = true;
        } else {
            element.visibility = false;
        }
    });
}

async function saveData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    posts.forEach((item) => {
        const element = item;
        element.visibility = true;
        dataBase.push(element);
    });
}

dropdownSort.addEventListener('change', () => { sortData(); showData(); });
inputSearch.addEventListener('keyup', () => { filterData(); sortData('reverse'); showData(); });

saveData();
setTimeout(() => { showData(); toggleLoader(); }, 1000);
