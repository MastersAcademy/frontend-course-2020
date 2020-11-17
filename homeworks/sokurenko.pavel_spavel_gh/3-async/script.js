const delay = 1000 * 3;
const lockNode = document.querySelector('[data-lock]');
const templatePostNode = document.querySelector('[data-post="template"]');
const filterInputNode = document.querySelector('[data-filter-input]');
const sortSelectNode = document.querySelector('[data-sort-select]');
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const posts = [];

function lock(action) {
    if (action === 'lock') lockNode.classList.replace('lock-off', 'lock-on');
    else if (action === 'unlock') lockNode.classList.replace('lock-on', 'lock-off');
    else console.log('error -> function lock(action)');
}

function createPost(title, body) {
    const clone = templatePostNode.content.cloneNode(true);
    clone.querySelector('[data-post="title"]').textContent = title;
    clone.querySelector('[data-post="body"]').textContent = body;
    templatePostNode.parentNode.appendChild(clone);
}

function renderPosts(somePosts) {
    let incoming = false;
    if (typeof somePosts !== 'undefined' && somePosts.length >= 0) incoming = true;
    if ('content' in document.createElement('template')) {
        document.querySelectorAll('[data-post="article"]').forEach((post) => post.remove());
        (incoming ? somePosts : posts).forEach((post) => createPost(`${post.id} - ${post.title}`, post.body));
    } else alert('Error! This browser does not support <template>');
}

async function getDataJSON(url) {
    lock('lock');
    await new Promise((resolve) => setTimeout(resolve, delay));
    const response = await fetch(url);
    const dataJSON = await response.json();
    posts.push(...dataJSON);
    lock('unlock');
}

// main
(async function () {
    await getDataJSON(postsURL);
    renderPosts();
}());

// filtering the output
filterInputNode.addEventListener('input', (event) => {
    lock('lock');
    const filterValue = event.target.value.toLowerCase().trim();
    renderPosts(
        posts.filter((post) => {
            const titleString = post.title.toLowerCase().trim();
            return titleString.match(filterValue);
        }), // <- зачем тут ESLint просит ставить запятую? \_ о_О) _/
    );
    lock('unlock');
});

// sorting the output
sortSelectNode.addEventListener('change', async (event) => {
    lock('lock');
    let sorted = false;
    await new Promise((resolve) => setTimeout(resolve, delay / 2));
    switch (event.target.value) {
        case 'az':
            posts.sort((a, b) => (a.title > b.title ? 1 : -1));
            sorted = true;
            break;
        case 'za':
            posts.sort((a, b) => (a.title < b.title ? 1 : -1));
            sorted = true;
            break;
        case 'default':
            posts.sort((a, b) => (a.id > b.id ? 1 : -1));
            sorted = true;
            break;
        default:
            console.log('error -> switch (event.target.value)');
            break;
    }
    if (sorted) renderPosts();
    lock('unlock');
});
