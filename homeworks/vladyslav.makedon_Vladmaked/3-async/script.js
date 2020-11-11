const loadingNode = document.querySelector('[data-loading]');
const postsNode = document.querySelector('[data-posts]');
const postsTemplateNode = document.querySelector('[data-posts-template]');
const postTitleNode = postsTemplateNode.content.querySelector('[data-post-title]');
const postBodyNode = postsTemplateNode.content.querySelector('[data-post-body]');
const filterInputNode = document.querySelector('[data-filter-input]');
const sortSelectNode = document.querySelector('[data-sort-select]');
const postsItemNode = postsTemplateNode.content.querySelector('[data-posts-item]');
let allPostsArray = [];
let filteredPostsArray = [];

async function getPosts() {
    return (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

async function delayAndGetPosts() {
    return new Promise((resolve) => setTimeout(
        async () => {
            const posts = await getPosts();
            allPostsArray.push(...posts);
            resolve(allPostsArray);
        }, 3000,
    ));
}

function createPosts(postsArray) {
    if (postsNode.textContent) postsNode.textContent = '';
    if (!postsArray.length) return;
    postsArray.forEach((post) => {
        postTitleNode.textContent = post.title;
        postBodyNode.textContent = post.body;
        postsItemNode.dataset.id = post.id;
        const postCopy = document.importNode(postsTemplateNode.content, true);
        postsNode.appendChild(postCopy);
    });
}

async function firstRenderPosts() {
    createPosts(await delayAndGetPosts());
    loadingNode.classList.add('preloader_loaded');
    setTimeout(() => {
        loadingNode.hidden = true;
    }, 300); // waiting for the end of the hide animation
}

firstRenderPosts()
    .then();

function filter(inputText) {
    if (!inputText.trim()) return allPostsArray;
    filteredPostsArray = allPostsArray.filter((post) => post.title.trim()
        .toLocaleLowerCase()
        .includes(inputText.trim()
            .toLocaleLowerCase()));
    return filteredPostsArray;
}

function sort(option, filteredArray) {
    const sortedPostsArray = [];
    sortedPostsArray.push(...filteredArray);
    sortedPostsArray.sort((a, b) => a.title.trim()
        .toLowerCase()
        .localeCompare(b.title.trim()
            .toLowerCase()));
    switch (option) {
        case 1:
            return sortedPostsArray;
        case 2:
            return sortedPostsArray.reverse();
        default:
            return filteredArray;
    }
}

async function deletePost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const message = `Something went wrong: ${response.status}`;
        throw new Error(message);
    }
}

filterInputNode.addEventListener('input', (evt) => {
    evt.preventDefault();
    createPosts(sort(sortSelectNode.options.selectedIndex, filter(filterInputNode.value)));
});

sortSelectNode.addEventListener('change', () => {
    createPosts(sort(sortSelectNode.options.selectedIndex, filter(filterInputNode.value)));
});

postsNode.addEventListener('click', (evt) => {
    if (!evt.target.closest('[data-btn-delete-post]')) {
        return;
    }
    const postsItem = evt.target.closest('[data-posts-item]');
    postsItem.hidden = true;
    const postId = postsItem.dataset.id;
    deletePost(postId)
        .then(() => {
            allPostsArray = allPostsArray.filter((p) => p.id !== +postId);
            filteredPostsArray = filteredPostsArray.filter((p) => p.id !== +postId);
            postsItem.remove();
            alert('Post deleted');
        })
        .catch((error) => {
            postsItem.hidden = false;
            alert('Ops, Something went wrong');
            console.log(error.message);
        });
});
