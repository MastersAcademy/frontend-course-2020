const loaderSelector = document.querySelector(".loader");
const itemsSelector = document.querySelector(".items");
const boxSelector = document.querySelector(".box");
const boxSelectSort = document.querySelector(".box-select-sort");
const input = document.querySelector('.box-input-filter');
let items = [];
let sortedItems = [];

input.addEventListener('keyup', (e) => {
    filterByTitle(e);
});

boxSelectSort.addEventListener('change', (e) => {
    sortByTitle(e);
});

const delay = (ms) => {
    return new Promise((r) => setTimeout(() => r(), ms));
};
const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
    await delay(2000);
    const response = await fetch(url);
    items = await response.json();

    if (response.ok) {
        const arr = Object.keys(items).map((key) => items[key]);
        let output = ``;
        arr.forEach((item) => {
            return (output += `<li class="item-list">
                                            <div class="item-title">${item.title}</div></br>${item.body}</li>`);
        });
        itemsSelector.innerHTML = output;
    }
}

function init() {
    const promise = fetchPosts();

    promise.then(
        (_result) => {
            loaderSelector.classList.add("hidden");
            boxSelector.classList.add("visible");
        },
        (_error) => {}
    );
}
init();

function sortByTitle(e) {
    let sortOrder = e.target.options[e.target.selectedIndex].value;
    sortedItems = [...items];
    sortedItems.sort((a, b) => {
        switch (sortOrder) {
            case "A":
                return a["title"].localeCompare(b["title"]);
            case "Z":
                return b["title"].localeCompare(a["title"]);
            default:
        }
    });

    const arr = Object.keys(sortedItems).map((key) => sortedItems[key]);
    let output = ``;
    arr.forEach((item) => {
        return (output += `<li class="item-list">
                                <div class="item-title">${item.title}</div></br>${item.body}</li>`);
    });

    itemsSelector.innerHTML = output;
}

function filterByTitle(e) {
    const regex = new RegExp(e.target.value, 'gi');
    const s = [...items].filter(({
        title
    }) => regex.test(title));

    const arr = Object.keys(s).map((key) => s[key]);
    let output = ``;
    arr.forEach((item) => {
        return (output += `<li class="item-list">
                                <div class="item-title">${item.title}</div></br>${item.body}</li>`);
    });

    itemsSelector.innerHTML = output;
    sortedItems = [...s]
}
