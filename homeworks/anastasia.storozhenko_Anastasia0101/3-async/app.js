const listItemPosts = document.querySelector('[data-posts]');
let posts = [];

async function deletePost(el, deletingPost) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${deletingPost.id}`, {
        method: 'DELETE',
    });
    posts = posts.filter((post) => post.id !== deletingPost.id);
    el.remove();
}

function showPosts(array) {
    array.forEach((item) => {
        const postElement = document.createElement('li');
        postElement.className = 'list-item';
        postElement.innerHTML = `<div class="list-item__header"><h4>${item.title}</h4> <button class="btn-delete" data-post-delete>Delete</button></div><p>${item.body}</p>`;
        postElement.querySelector('[data-post-delete]').addEventListener('click', () => deletePost(postElement, item));
        listItemPosts.appendChild(postElement);
    });
}

function filteringPosts() {
    const input = document.querySelector('[data-filter]').value.toUpperCase();
    return posts.filter((post) => post.title.toUpperCase().includes(input));
}

function sortPosts(array) {
    const chosenMethodOfSort = document.querySelector('[data-sort]').value;

    if (chosenMethodOfSort == 'a-z') {
        array.sort((u1, u2) => {
            if (u1.title > u2.title) return 1;
            if (u2.title > u1.title) return -1;
            return 0;
        });
        return;
    }
    if (chosenMethodOfSort == 'z-a') {
        array.sort((u1, u2) => {
            if (u1.title < u2.title) return 1;
            if (u2.title < u1.title) return -1;
            return 0;
        });
    }
}

function updatePosts() {
    listItemPosts.innerHTML = '';
    const filteredPosts = filteringPosts();
    sortPosts(filteredPosts);
    showPosts(filteredPosts);
}

document.querySelector('[data-sort]').addEventListener('change', updatePosts);
document.querySelector('[data-filter]').addEventListener('input', updatePosts);

setTimeout(() => {
    document.querySelector('[data-loader]').hidden = true;

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((success) => { posts = success; })
        .then(() => showPosts(posts));
}, 3000);
