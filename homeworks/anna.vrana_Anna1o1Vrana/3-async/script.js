const FETCH_TIMEOUT = 3000;
const allPosts = [];

const templateContent = document.querySelector('#template').content;
const templatePostTitle = templateContent.querySelector('[data-template-title]');
const templatePostBody = templateContent.querySelector('[data-template-text]');

const postsBody = document.querySelector('[data-all-posts]');

function hideLoader() {
    document.querySelector('[data-preloader]').style.display = 'none';
}

function renderPosts(posts) {
    postsBody.innerHTML = '';

    posts.forEach((post) => {
        templatePostTitle.textContent = post.title;
        templatePostBody.textContent = post.body;
        postsBody.appendChild(templateContent.cloneNode(true));
    });
}

async function fetchPosts() {
    const getPost = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
    const data = await getPost.json();
    allPosts.push(...data);

    renderPosts(allPosts);
    hideLoader();
}

document.querySelector('#input-filter').addEventListener('input', (event) => {
    const patter = new RegExp(event.target.value, 'gi');
    // eslint-disable-next-line max-len
    const filteredPosts = allPosts.filter((post) => patter.test(post.title) || patter.test(post.body));
    renderPosts(filteredPosts);
});

setTimeout(() => {
    fetchPosts();
}, FETCH_TIMEOUT);
