const containerEl = document.querySelector('[data-container]');
const templateEl = document.querySelector('[data-template]');
const dropdownSort = document.querySelector('[data-sort]');
// const inputSearch = document.querySelector('[data-search]');

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

function sortUp(posts) {
    return posts.sort((a, b) => {
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

function sortDown(posts) {
    return posts.sort((a, b) => {
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

function sortOff(posts) { return posts; }

function sort(posts) {
    switch (dropdownSort.value) {
        case 'sort':
            sortUp(posts);
            break;
        case 'reverse':
            sortDown(posts);
            break;
        case 'default':
            sortOff(posts);
            break;
        default: break;
    }
}

async function showData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    deleteAllPosts();
    sort(posts);
    posts.forEach((item, i) => {
        createPostItem(item, i);
    });
}

// function dataSearch() {
// const filter = inputSearch.value;
// const filterItems = document.querySelectorAll('.post');
// filterItems.forEach((item) => {
//     console.log(item.getElementsByTagName('h2')[0].textContent.toLowerCase());
// });
// console.log(filter);
// }
dropdownSort.addEventListener('change', () => { showData(); });
// inputSearch.addEventListener('keyup', () => { dataSearch(); });
setTimeout(() => { showData().then(toggleLoader); }, 1000);
