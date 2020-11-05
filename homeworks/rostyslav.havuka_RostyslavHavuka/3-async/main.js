let store = [];
let defaultData = [];

const Order = Object.freeze({
    ASC: 'asc',
    DESC: 'desc',
    DEFAULT: 'default',
});

/*
 *
 * @param {[]} data
 * @param {Order.ASC || Order.DESC} order
 */
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

function resetStoreToDefault() {
    store = [...defaultData];
}

function prepareInput() {
    return `
        <input type="text" id="searchInput" placeholder="Search">  
  `;
}

function prepareDropDownMenu() {
    return `
        <select id="mySelect">
          <option value="${Order.DEFAULT}">Default</option>
          <option value="${Order.ASC}">A-z</option>
          <option value="${Order.DESC}">Z-a</option>
        </select>
`;
}

function preparePosts(data) {
    const storeArray = `
    <div class="main" id="main">
        ${data.map((element) => `
        <div class="post">
            <p class="title">Title: ${element.title}</p>
            <p>${element.body}</p>
        </div>
        `).join('\n')}
    </div>
    `;
    return storeArray;
}

function renderPosts(data) {
    document.getElementById('main').innerHTML = preparePosts(data);
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function search(data, value) {
    return data.filter((item) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
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

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    store = await response.json();
    defaultData = [...store];
    document.body.innerHTML = '<div class="loader"></div>';

    await timeout(1000);
    document.body.innerHTML = `${prepareDropDownMenu()} ${prepareInput()} ${preparePosts(store)}`;

    document.getElementById('searchInput')
        .addEventListener('keydown', searchHandler);

    const selectElement = document.getElementById('mySelect');

    selectElement.onchange = () => {
        const selected = selectElement.value;
        switch (selected) {
            case Order.DEFAULT:
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
