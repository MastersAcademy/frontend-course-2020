/* eslint-disable array-callback-return */
const loaderSelector = document.querySelector('.loader');
const itemsSelector = document.querySelector('.items');
const boxSelector = document.querySelector('.box');
const boxSelectSort = document.querySelector('.box-select-sort');
const input = document.querySelector('.box-input-filter');
let items = [];
let sortedItems = [];

const delay = (ms) => new Promise((r) => setTimeout(() => r(), ms));
const url = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
    await delay(2000);
    const response = await fetch(url);
    items = await response.json();

    if (response.ok) {
        const arr = Object.keys(items).map((key) => items[key]);
        let output = '';
        // eslint-disable-next-line no-return-assign
        arr.forEach((item) => (output += `<li class="item-list"><div class="item-title">${item.title}</div></br>${item.body}</li>`));
        itemsSelector.innerHTML = output;
    }
}

function init() {
    const promise = fetchPosts();
    promise.then(() => {
        loaderSelector.classList.add('hidden');
        boxSelector.classList.add('visible');
    });
}
init();

boxSelectSort.addEventListener('change', (e) => {
    const sortOrder = e.target.options[e.target.selectedIndex].value;
    const copiedItems = [...items];

    // eslint-disable-next-line consistent-return
    const s = copiedItems.sort((a, b) => {
        switch (sortOrder) {
            case 'A':
                return a.title.localeCompare(b.title);
            case 'Z':
                return b.title.localeCompare(a.title);
            default:
        }
    });
    const arr = Object.keys(s).map((key) => s[key]);
    let output = '';
    // eslint-disable-next-line no-return-assign
    arr.forEach((item) => (output += `<li class="item-list"><div class="item-title">${item.title}</div></br>${item.body}</li>`));
    // eslint-disable-next-line no-unused-expressions
    itemsSelector.innerHTML = output;
    sortedItems = [...s];
});

input.addEventListener('keyup', (e) => {
    const regex = new RegExp(e.target.value, 'gi');
    const s = [...items].filter(({ title }) => regex.test(title));
    const arr = Object.keys(s).map((key) => s[key]);
    let output = '';
    // eslint-disable-next-line no-return-assign
    arr.forEach((item) => (output += `<li class="item-list"><div class="item-title">${item.title}</div></br>${item.body}</li>`));
    // eslint-disable-next-line no-unused-expressions
    itemsSelector.innerHTML = output;
    // eslint-disable-next-line no-unused-vars
    sortedItems = [...s];
});
