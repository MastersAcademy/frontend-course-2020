const postsNode = document.querySelector('[data-posts]');
const postTemplateNode = document.querySelector('[data-template]');
const postTitleNode = postTemplateNode.content.querySelector('[data-post-title]');
const postBodyNode = postTemplateNode.content.querySelector('[data-post-body]');
const filterInputNode = document.querySelector('[data-filter-input]');
const sortNode = document.querySelector('[data-sort]');
const posts = [];

async function getPosts() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    await fetch(' https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((jsonObject) => {
            posts.push(...jsonObject);
        })
        .catch((e) => {
            console.log(`Error: ${e}`);
        });
}

function createPosts(array) {
    if (postsNode.textContent) postsNode.textContent = '';
    if (!array) {
        return;
    }
    array.forEach((post) => {
        postTitleNode.textContent = post.title;
        postBodyNode.textContent = post.body;
        const postCopy = document.importNode(postTemplateNode.content, true);
        postsNode.appendChild(postCopy);
    });
}

async function renderPosts() {
    await getPosts();
    createPosts(posts);
}

renderPosts()
    .then();

let filterPostsArr = [];

function filterPosts(text) {
    if (!text.trim()) {
        return posts;
    }
    filterPostsArr = posts.filter((post) => post.title.trim()
        .toLocaleLowerCase()
        .includes(text.trim()
            .toLocaleLowerCase()));
    return filterPostsArr;
}

function sortPosts(options) {
    const newArray = [];
    if (filterPostsArr.length) {
        newArray.push(...filterPostsArr);
    } else if (!filterInputNode) {
        newArray.push(...posts);
    } else {
        return newArray;
    }
    if (filterPostsArr.length) {
        if (options === 0) {
            return newArray;
        }
        if (options === 1) {
            newArray.sort((a, b) => a.title.trim()
                .toLocaleLowerCase()
                .localeCompare(b.title.trim()
                    .toLocaleLowerCase()));
        }
        if (options === 2) {
            newArray.sort((a, b) => b.title.trim()
                .toLocaleLowerCase()
                .localeCompare(a.title.trim()
                    .toLocaleLowerCase()));
        }
    }
    return newArray;
}

function sortAndFilter() {
    filterPosts(filterInputNode.value);
    createPosts(sortPosts(sortNode.options.selectedIndex));
}

filterInputNode.addEventListener('input', () => {
    sortAndFilter();
});

sortNode.addEventListener('change', () => {
    sortAndFilter();
});
