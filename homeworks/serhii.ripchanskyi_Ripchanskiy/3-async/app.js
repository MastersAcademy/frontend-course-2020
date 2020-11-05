const getNode = (selector) => document.querySelector(selector);
const postsListNode = getNode('[data-posts-list]');
const loaderNode = getNode('[data-loader]');
const dataSortNode = getNode('[data-sort]');
const dataSearchInputNode = getNode('[data-search-input]');
const posts = [];
let sortBy = 'asc';
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

const search = (searchString) => {
    const keyWords = searchString.trim().toLowerCase().split(' ');
    const filteredPosts = [];

    posts.forEach((post) => {
        let previousSubWordPosition = 0;
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

const appendPosts = () => {
    getPosts()
        .then((data) => {
            const sortedAscArray = data.sort(sortNamesByAsc);
            postsListNode.insertAdjacentHTML('beforeend', renderPostsList(sortedAscArray));
            loaderNode.classList.toggle('loader-disable');
            posts.push(...data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

setTimeout(appendPosts, 3000);

dataSortNode.addEventListener('change', (event) => {
    const sortingPattern = event.currentTarget.value;
    const searchedData = searchValue ? search(searchValue) : posts;
    postsListNode.querySelectorAll('li').forEach((n) => n.remove());

    if (sortingPattern === 'desc') {
        sortBy = 'desc';
        const postSortedDesc = searchedData.sort(sortNamesByAsc).reverse();
        postsListNode.insertAdjacentHTML('beforeend', renderPostsList(postSortedDesc));
    } else {
        sortBy = 'asc';
        const postSortedAsc = searchedData.sort(sortNamesByAsc);
        postsListNode.insertAdjacentHTML('beforeend', renderPostsList(postSortedAsc));
    }
});

['input', 'paste'].forEach((evt) => dataSearchInputNode.addEventListener(evt, (event) => {
    searchValue = dataSearchInputNode.value;

    if (event.type === 'paste') {
        searchValue += event.clipboardData.getData('text');
    }
    postsListNode.querySelectorAll('li').forEach((n) => n.remove());

    const searchedData = searchValue.length ? search(searchValue) : posts;

    if (sortBy === 'asc') {
        const postSortedAsc = searchedData.sort(sortNamesByAsc);
        postsListNode.insertAdjacentHTML('beforeend', renderPostsList(postSortedAsc));
    } else {
        const postSortedDesc = searchedData.sort(sortNamesByAsc).reverse();
        postsListNode.insertAdjacentHTML('beforeend', renderPostsList(postSortedDesc));
    }
}));
