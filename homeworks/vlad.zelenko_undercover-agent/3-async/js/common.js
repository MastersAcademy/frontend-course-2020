const URL = 'https://jsonplaceholder.typicode.com/posts';
const postContainer = document.querySelector('.post-container');
const formSortPosts = document.querySelector('.sort-post');
const inputFilter = document.querySelector('.filter');

function filterValues(data) {
    return data.filter((val) => val.title.includes(inputFilter.value));
}

function sortAZ(data) {
    return [...data].sort((a, b) => (a.title === b.title ? 0 : +(a.title > b.title) || -1));
}

function sortZA(data) {
    return [...data].sort((a, b) => (a.title === b.title ? 0 : +(a.title < b.title) || -1));
}

function sortValues(data) {
    switch (formSortPosts.value) {
        case 'ZA':
            return sortZA(data);
        case 'AZ':
            return sortAZ(data);
        default:
            return data;
    }
}

function renderingElements(response) {
    const data = sortValues(filterValues(response));
    postContainer.innerHTML = data.map((val) => `
        <div class="post">
        <h1 class="post-title">${val.title}</h1>
        <p>${val.body}</p>
        </div>
    `).join('');

    return response;
}

function setEvents(data) {
    formSortPosts.addEventListener('change', () => {
        renderingElements(data);
    });
    inputFilter.addEventListener('input', () => {
        renderingElements(data);
    });
}

const status = function (response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
};

const json = function (response) {
    return response.json();
};

async function requestToServer() {
    await fetch(URL)
        .then(status)
        .then(json)
        .then(renderingElements)
        .then(setEvents)
        .catch((error) => { console.log('error', error); });
}

setTimeout(() => {
    document.querySelector('.preloader').hidden = true;
    requestToServer();
}, 1000);
