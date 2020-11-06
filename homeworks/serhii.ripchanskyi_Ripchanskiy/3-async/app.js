const getNode = (selector) => document.querySelector(selector);
const postsListNode = getNode('[data-posts-list]');
const loaderNode = getNode('[data-loader]');
const dataSortNode = getNode('[data-sort]');
const dataSearchInputNode = getNode('[data-search-input]');
const posts = [];
const initialPosts = [];
let sortBy = 'default';
let searchValue = '';

const handleErrors = (res) => {
    if (!res.ok) throw new Error('Something went wrong');
    return res;
};

const sortNamesByAsc = (a, b) => {
    const aFirstTitleWord = a.title.split(' ')[0].toLowerCase();
    const bFirstTitleWord = b.title.split(' ')[0].toLowerCase();
    if (aFirstTitleWord < bFirstTitleWord) {
        return -1;
    }
    if (aFirstTitleWord > bFirstTitleWord) {
        return 1;
    }
    return 0;
};

const search = (searchString, data) => {
    const keyWords = searchString.trim().toLowerCase().split(' ');
    const filteredPosts = [];

    data.forEach((post) => {
        let previousSubWordPosition = -1;
        const postTitle = post.title.trim().toLowerCase();
        const isSubWordValid = (subWord) => {
            const currentSubWordPosition = postTitle.indexOf(subWord);
            if (currentSubWordPosition !== -1 && currentSubWordPosition > previousSubWordPosition) {
                previousSubWordPosition = currentSubWordPosition;
                return true;
            }
            return false;
        };

        if (keyWords.every(isSubWordValid)) {
            filteredPosts.push(post);
        }
    });

    return filteredPosts;
};

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    handleErrors(response);
    return response.json();
}

const renderPostsList = (postsData) => postsData.map(({ body, title }) => `<li>${title}<p>${body}</p></li>`).join('');

const insertPosts = (postsData) => {
    postsListNode.insertAdjacentHTML('beforeend', renderPostsList(postsData));
};

const appendPosts = () => {
    getPosts()
        .then((data) => {
            postsListNode.insertAdjacentHTML('beforeend', renderPostsList(data));
            loaderNode.classList.toggle('loader-disable');
            posts.push(...data);
            initialPosts.push(...data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

setTimeout(appendPosts, 3000);

dataSortNode.addEventListener('change', (event) => {
    const sortingPattern = event.currentTarget.value;
    postsListNode.querySelectorAll('li').forEach((n) => n.remove());

    if (sortingPattern === 'desc') {
        sortBy = 'desc';
        const searchedData = searchValue ? search(searchValue, posts) : posts;
        const postSortedDesc = searchedData.sort(sortNamesByAsc).reverse();
        insertPosts(postSortedDesc);
    } else if (sortingPattern === 'asc') {
        sortBy = 'asc';
        const searchedData = searchValue ? search(searchValue, posts) : posts;
        const postSortedAsc = searchedData.sort(sortNamesByAsc);
        insertPosts(postSortedAsc);
    } else {
        sortBy = 'default';
        insertPosts(searchValue ? search(searchValue, initialPosts) : initialPosts);
    }
});

['input', 'paste'].forEach((evt) => dataSearchInputNode.addEventListener(evt, (event) => {
    searchValue = dataSearchInputNode.value;

    if (event.type === 'paste') {
        searchValue += event.clipboardData.getData('text');
    }
    postsListNode.querySelectorAll('li').forEach((n) => n.remove());

    if (sortBy === 'asc') {
        const searchedData = searchValue.length ? search(searchValue, posts) : posts;
        const postSortedAsc = searchedData.sort(sortNamesByAsc);
        insertPosts(postSortedAsc);
    } else if (sortBy === 'desc') {
        const searchedData = searchValue.length ? search(searchValue, posts) : posts;
        const postSortedDesc = searchedData.sort(sortNamesByAsc).reverse();
        insertPosts(postSortedDesc);
    } else {
        insertPosts(searchValue ? search(searchValue, initialPosts) : initialPosts);
    }
}));
