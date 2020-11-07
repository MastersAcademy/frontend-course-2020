const contentContainerElem = document.querySelector('[data-content-container]');
const loaderElem = document.querySelector('[data-loader]');
const btnSortElem = document.querySelector('[data-btn-sort]');
const sortContent = document.querySelector('[data-sort-content]');
const searchElem = document.querySelector('[data-search]');
let itemsList = [];
let isToggleSort = false;
const ORIGIN = 'Origin';
const FROM_A_Z = 'A-z';
const FROM_Z_A = 'Z-a';
let sortBy = ORIGIN;
let searchedText = '';
let deletedItem = '';
let deletedItemIndex = '';

class Api {
    constructor() {
        this.BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
        this.id = '';
        this.isError = false;
    }

    removeItem(id) {
        fetch(`${this.BASE_URL}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    alert(`Item with id: ${id} was removed from ItemsList`);
                }
            })
            .catch((error) => {
                alert(
                    `Something went wrong. Error name: ${error.name}, Error message: ${error.message}`,
                );
                returnItem();
            });
    }

    getData() {
        fetch(this.BASE_URL)
            .then((response) => response.json())
            .then((response) => {
                showData(response);
                itemsList = response;
            })
            .catch((error) => {
                alert(
                    `Something went wrong. Error name: ${error.name}, Error message: ${error.message}`,
                );
                this.id = setTimeout(() => {
                    if (!this.isError) {
                        this.getData();
                        clearTimeout(this.id);
                        this.isError = true;
                    }
                }, 2000);
            });
    }
}

const api = new Api();

function searchInItemList(searchValue, sortedList) {
    return sortedList.filter(
        ({ title, body }) => title.indexOf(searchValue) >= 0 || body.indexOf(searchValue) >= 0,
    );
}

function sortItemsList(sortType) {
    switch (sortType) {
        case ORIGIN:
            return [...itemsList];
        case FROM_A_Z:
            return [...itemsList].sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                }
                if (a.title < b.title) {
                    return -1;
                }
                return 0;
            });
        case FROM_Z_A:
            return [...itemsList].sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            });
        default:
            return [...itemsList];
    }
}

function showData(list) {
    contentContainerElem.innerHTML = '';
    list.forEach(({ id, body, title }) => {
        const itemContainerElem = document.createElement('div');
        itemContainerElem.classList.add('item-container');
        itemContainerElem.innerHTML = `<span class='grid-item1'>${title}</span>
        <img class='grid-item2 img' src='./assets/delete.png' onClick='removeItem(${id})'</img>
        <p class='grid-item3'>${body}</p>`;
        contentContainerElem.appendChild(itemContainerElem);
    });
}

function updateItemList() {
    let sortedSearchedList = sortItemsList(sortBy);
    sortedSearchedList = searchInItemList(searchedText, sortedSearchedList);
    showData(sortedSearchedList);
}

function returnItem() {
    itemsList.splice(deletedItemIndex, 0, deletedItem[0]);
    updateItemList();
}

function toggleSort() {
    isToggleSort = !isToggleSort;
    if (isToggleSort) {
        sortContent.style.display = 'flex';
    } else {
        sortContent.style.display = 'none';
    }
}

function removeItem(id) {
    api.removeItem(id);
    deletedItemIndex = itemsList.findIndex((item) => item.id === id);
    deletedItem = itemsList.splice(deletedItemIndex, 1);
    updateItemList();
}

const showLoader = () => {
    loaderElem.style.display = 'flex';
};

const hideLoader = () => {
    loaderElem.style.display = 'none';
};

const loadData = () => {
    showLoader();
    const id = setTimeout(() => {
        api.getData();
        hideLoader();
        clearTimeout(id);
    }, 3000);
};

searchElem.addEventListener('input', (e) => {
    searchedText = e.target.value;
    updateItemList();
});

btnSortElem.addEventListener('click', toggleSort);

sortContent.addEventListener('click', (e) => {
    sortContent
        .querySelectorAll('*')
        .forEach((item) => item.classList.remove('sort-content__item-active'));
    e.target.classList.add('sort-content__item-active');
    sortBy = e.target.innerHTML;
    updateItemList();
    toggleSort();
});

loadData();
