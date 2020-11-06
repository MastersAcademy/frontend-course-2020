(async () => {
    const templateNode = document.querySelector('[data-template]');
    const postsPlaceNode = document.querySelector('[data-posts-place]');
    const spinnerNode = document.querySelector('[data-spinner]');
    const sortAZNode = document.querySelector('[data-sort-a-z]');
    const sortZANode = document.querySelector('[data-sort-z-a]');
    const inputSortNode = document.querySelector('[data-filter]');

    const URL = 'https://jsonplaceholder.typicode.com/posts';

    const timeOut = (delay) => new Promise((r) => setTimeout(() => r(), delay));

    const getPostsWithDelay = async () => {
        await timeOut(3000);
        const posts = await (await fetch(URL)).json();

        spinnerNode.classList.add('hide');
        return posts;
    };

    const putPostsToPostsNode = (posts) => {
        postsPlaceNode.innerHTML = '';

        posts.forEach((post) => {
            const liNode = templateNode.content.firstElementChild.cloneNode(true);
            const liTitleNode = liNode.querySelector('[data-post-title]');
            const liBodyNode = liNode.querySelector('[data-post-body]');

            liTitleNode.innerText = post.title;
            liBodyNode.innerText = post.body;

            postsPlaceNode.appendChild(liNode);
        });
    };

    const sortAZ = (posts) => [...posts].sort((a, b) => (a.title < b.title ? -1 : 1));
    const sortZA = (posts) => [...posts].sort((a, b) => (a.title > b.title ? -1 : 1));

    const filterByString = (string, postPlaceNode) => {
        const postsTitleArrayNode = postPlaceNode.querySelectorAll('[data-post-title]');

        Array.from(postsTitleArrayNode).forEach((postNode) => {
            if (postNode.innerText.indexOf(string) !== -1) {
                postNode.parentNode.classList.remove('hide');
                return;
            }

            postNode.parentNode.classList.add('hide');
        });
    };

    const posts = await getPostsWithDelay();
    putPostsToPostsNode(posts);

    sortAZNode.addEventListener('change', (e) => {
        sortZANode.checked = false;

        if (!e.target.checked) {
            putPostsToPostsNode(posts);
            filterByString(inputSortNode.value, postsPlaceNode);
            return;
        }

        putPostsToPostsNode(sortAZ(posts));
        filterByString(inputSortNode.value, postsPlaceNode);
    });

    sortZANode.addEventListener('change', (e) => {
        sortAZNode.checked = false;

        if (!e.target.checked) {
            putPostsToPostsNode(posts);
            filterByString(inputSortNode.value, postsPlaceNode);
            return;
        }

        putPostsToPostsNode(sortZA(posts));
        filterByString(inputSortNode.value, postsPlaceNode);
    });

    inputSortNode.addEventListener('input', (e) => {
        const inputValue = e.target.value;

        filterByString(inputValue, postsPlaceNode);
    });
})();
