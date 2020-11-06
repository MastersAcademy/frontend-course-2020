(function () {
    let loadedPosts;
    function removePost(event) {
        function removePostErrorHandler(postContainerEl) {
            const postContainer = postContainerEl;
            console.log(`Error on delete post with id: ${postContainer.id}`);
            postContainer.classList.remove('hidden');
            postContainer.innerText = 'Something wrong';
        }

        function removePostFromLoadedPosts(id) {
            loadedPosts = loadedPosts.filter((e) => e.id.toString() !== id);
        }

        async function removePostFromServer(postContainerEl) {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${postContainerEl.id}`, {
                method: 'DELETE',
            })
                .then(() => removePostFromLoadedPosts(postContainerEl.id))
                .catch(() => removePostErrorHandler(postContainerEl));
        }

        const buttonEl = event.target;
        const postContainerEl = buttonEl.closest('.post-container');
        postContainerEl.classList.add('hidden');

        setTimeout(removePostFromServer, 3000, postContainerEl);
    }

    function createPostFromContent(id, title, content) {
        function createTitleContainer() {
            const titleContainerEl = document.createElement('label');
            titleContainerEl.classList.add('post-title-container');
            titleContainerEl.innerText = title;
            return titleContainerEl;
        }

        function createContentContainer() {
            const contentContainerEl = document.createElement('div');
            contentContainerEl.classList.add('post-content-container');
            contentContainerEl.innerText = content;
            return contentContainerEl;
        }

        function createRemoveButton() {
            const buttonEl = document.createElement('button');
            buttonEl.type = 'button';
            buttonEl.classList.add('remove-button');
            buttonEl.addEventListener('click', removePost);
            return buttonEl;
        }

        function createPostContainer() {
            const postContainerEl = document.createElement('div');
            postContainerEl.classList.add('post-container');
            return postContainerEl;
        }

        function createPostHeader() {
            const postHeaderEl = document.createElement('div');
            postHeaderEl.classList.add('post-container-header');
            return postHeaderEl;
        }

        const titleContainerEl = createTitleContainer();
        const removeButtonEl = createRemoveButton();
        const contentContainerEl = createContentContainer();
        const postContainerHeaderEl = createPostHeader();
        const postContainerEl = createPostContainer();

        postContainerHeaderEl.appendChild(titleContainerEl);
        postContainerHeaderEl.appendChild(removeButtonEl);

        postContainerEl.id = id;
        postContainerEl.appendChild(postContainerHeaderEl);
        postContainerEl.appendChild(contentContainerEl);

        return postContainerEl;
    }
    function reCreatePosts(posts) {
        const showMessagesContainerEl = document.querySelector('.show-messages-container');
        showMessagesContainerEl.textContent = '';
        posts.forEach((post) => {
            showMessagesContainerEl.appendChild(
                createPostFromContent(post.id, post.title, post.body),
            );
        });
    }

    function filterAndSortPosts() {
        function filterPosts(posts, filterString) {
            return posts.filter((post) => post.title.toLowerCase()
                .includes(filterString));
        }

        function sortPosts(posts, sortType) {
            return posts.sort((post1, post2) => (post1.title > post2.title
                ? sortType
                : -sortType));
        }

        let posts = loadedPosts.slice(0);
        const sortType = parseInt(document.querySelector('.title-sort-select').value, 10);
        const filterString = document.querySelector('.filter-input')
            .value
            .trim()
            .toLowerCase();

        if (filterString) posts = filterPosts(posts, filterString);
        if (sortType !== 0) posts = sortPosts(posts, sortType);

        reCreatePosts(posts);
    }

    function savePosts(posts) {
        loadedPosts = posts;
    }

    function loadData() {
        const loaderEl = document.querySelector('.loader');

        async function getData() {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => savePosts(response))
                .then(() => reCreatePosts(loadedPosts));
            loaderEl.classList.add('hidden');
        }

        setTimeout(getData, 3000);
        loaderEl.classList.remove('hidden');
    }

    loadData();
    document.querySelector('.filter-input')
        .addEventListener('input', filterAndSortPosts);
    document.querySelector('.title-sort-select')
        .addEventListener('input', filterAndSortPosts);
}());
