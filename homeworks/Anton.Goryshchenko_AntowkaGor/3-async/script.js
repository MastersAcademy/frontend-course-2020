/* eslint-disable no-param-reassign */
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

function createPost(title, body) {
    const postDiv = document.createElement('div');
    const button = document.createElement('button');

    postDiv.className = 'postBlock';
    button.innerText = 'click';

    const post = `<h5>${title}</h5> <div>${body}</div>`;
    postDiv.insertAdjacentHTML('beforeend', post);
    postDiv.appendChild(button);

    return postDiv;
}

async function renderPosts(posts) {
    posts.forEach(({ title, body }) => {
        const post = createPost(title, body);
        document.querySelector('.js-posts').appendChild(post);
    });
}

function hidePreloader() {
    document.body.classList.add('loaded_hiding');
    const id = setTimeout(() => {
        clearTimeout(id);
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

const later = (time) => new Promise((res) => setTimeout(res, time));

later(3000)
    .then(fetchPosts)
    .then(renderPosts)
    .then(hidePreloader);

function postsComparator(a, b) {
    const { innerText: firstTitle } = a.querySelector('h5');
    const { innerText: secondTitle } = b.querySelector('h5');
    if (firstTitle < secondTitle) return -1;
    if (firstTitle > secondTitle) return 1;
    return 0;
}

function filterPosts({ target: { value } }) {
    const filter = value.trim().toLowerCase();
    const posts = document.querySelectorAll('.js-posts .postBlock');
    posts.forEach((post) => {
        const { innerText: title } = post.querySelector('h5');
        if (title.match(filter)) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });
}
function sortPosts({ target: { value } }) {
    const posts = [...document.querySelectorAll('.js-posts .postBlock')];
    switch (value) {
        case 'asc':
            posts.sort(postsComparator);
            posts.forEach(({ style }, i) => { style.order = i; });
            break;

        case 'desc':
            posts.sort((a, b) => -postsComparator(a, b));
            posts.forEach(({ style }, i) => { style.order = i; });
            break;

        default:
            posts.forEach(({ style }) => { style.order = null; });
            break;
    }
}
document.querySelector('.js-posts .filter').addEventListener('input', filterPosts);
document.querySelector('.js-posts .sort').addEventListener('change', sortPosts);
