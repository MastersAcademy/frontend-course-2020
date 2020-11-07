const URL = 'https://jsonplaceholder.typicode.com/posts';
const postContainer = document.querySelector('.post-container');
const formSortPosts = document.querySelector('.sort-post');

function renderingElements(data) {
    for (const val in data) {
        const post = `
        <div class="post">
        <h1 class="post-title">${data[val].title}</h1>
        <p>${data[val].body}</p>
        </div>
        `;
        postContainer.insertAdjacentHTML('afterbegin', post);
    }
}

// function filterPosts(data) {
//     for (const val in data) {

//     }
// }


function sortAZ(data) {
    data.sort((a, b) => {
        return a.title === b.title ? 0 : +(a.title < b.title) || -1;
    });
    renderingElements(data);
}

function sortZA(data) {
    data.sort((a, b) => {
        return a.title === b.title ? 0 : +(a.title > b.title) || -1;
    });
    renderingElements(data);
}

function sortPost(data) {
    formSortPosts.addEventListener('change', () => {
        switch (formSortPosts.value) {
            case 'ZA':
                sortZA(data);
                break;
            case 'AZ':
                sortAZ(data);
                break;
            default:
                requestToServer();
                break;
        }
    });
}

async function requestToServer() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        renderingElements(data);
        sortPost(data);
    }
    catch (e) {
        console.error(e);
    }
}

setTimeout(() => {
    document.querySelector('.preloader').hidden = true;
    requestToServer();
}, 1000);
