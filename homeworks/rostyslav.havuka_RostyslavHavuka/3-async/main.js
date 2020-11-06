let store = [];
let defaultData = [];

const Order = Object.freeze({
    ASC: 'asc',
    DESC: 'desc',
    DEFAULT: 'default',
});

function sortByOrder(data, order) {
    const newData = data.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (order === Order.ASC) {
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
        } else if (order === Order.DESC) {
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
        }

        return null;
    }).filter(Boolean);

    return newData;
}

function prepareDropDownMenu() {
    return `
    <div class="head">
        <div class="nav">
            <select id="mySelect">
                <option value="${Order.DEFAULT}">Default</option>
                <option value="${Order.ASC}">A-z</option>
                <option value="${Order.DESC}">Z-a</option>
            </select>
            <input class="type-1" type="text" id="searchInput" placeholder="Search">  
        </div>
    </div>
        `;
}

function preparePosts(data) {
    const storeArray = `
    <div class="main" id="main">
        ${data.map((element) => `
        <div class="post">
        <button type="button" class="deletePost" id="${element.id}">Delete</button>
            <p class="title">${element.title}</p>
            <p class="text">${element.body}</p>
        </div>
        `).join('\n')}
    </div>
    `;
    return storeArray;
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function search(data, value) {
    return data.filter((item) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
}

async function deletePostFromAPI(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
}
function resetStoreToDefault() {
    store = [...defaultData];
}

function syncStores(newdData) {
    defaultData = [...newdData];
}

function deletePostFromStore(id) {
    let deletedPost;
    store = store.map((post) => {
        if (id === post.id) {
            deletedPost = { ...post };
            return null;
        }
        return post;
    }).filter(Boolean);

    return deletedPost;
}

async function removePost() {
    const id = Number(this.id);
    const deletedPost = deletePostFromStore(id);
    // порадьте будь ласка як це виправити
    // eslint-disable-next-line no-use-before-define
    renderPosts(store);
    alert('Deleted post');
    try {
        const result = await deletePostFromAPI(id);
        if (!result.ok) throw new Error('post didn\'t deleted');
        syncStores(store);
    } catch (error) {
        store.push(deletedPost);
        // порадьте будь ласка як це виправити
        // eslint-disable-next-line no-use-before-define
        renderPosts(store);
        alert('error when delete post from API');
    }
}
function addHandlers() {
    const deleteButtons = document.querySelectorAll('.deletePost');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', removePost);
    });
}
function renderPosts(data) {
    document.getElementById('main').innerHTML = preparePosts(data);
}

function searchHandler() {
    const selected = document.getElementById('mySelect').value;
    const inputValue = document.getElementById('searchInput').value;

    if (selected === 'default') {
        resetStoreToDefault();
        const result = search(store, inputValue);
        renderPosts(result);
    }
    if (selected === 'asc') {
        const result = search(store, inputValue);
        const filtrerResult = sortByOrder(result, Order.ASC);
        renderPosts(filtrerResult);
    }
    if (selected === 'desc') {
        const result = search(store, inputValue);
        const filtrerResult = sortByOrder(result, Order.DESC);
        renderPosts(filtrerResult);
    }
}
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}
document.addEventListener('DOMContentLoaded', async () => {
    store = await getData();
    defaultData = [...store];
    document.body.innerHTML = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';

    await timeout(3000);
    document.body.innerHTML = `${prepareDropDownMenu()} ${preparePosts(store)}`;
    addHandlers();

    document.getElementById('searchInput')
        .addEventListener('keydown', searchHandler);

    const selectElement = document.getElementById('mySelect');

    selectElement.onchange = () => {
        const selected = selectElement.value;
        switch (selected) {
            case Order.DEFAULT:
                resetStoreToDefault();
                renderPosts(defaultData);
                break;
            case Order.ASC:
                renderPosts(sortByOrder(store, Order.ASC));
                break;
            case Order.DESC:
                renderPosts(sortByOrder(store, Order.DESC));
                break;
            default:
        }
    };
});
