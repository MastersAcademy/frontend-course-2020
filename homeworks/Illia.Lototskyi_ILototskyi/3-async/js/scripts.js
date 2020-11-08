(function () {
    let loadedPosts;
    function removePost(event) {
        function removePostError(postContainerElement) {
            const postContainer = postContainerElement;
            console.log(`Error on delete post with id: ${postContainer.id}`);
            postContainer.classList.remove('hidden');
            postContainer.innerText = 'Something wrong';
        }

        function removePostFromLoadedPosts(id) {
            loadedPosts = loadedPosts.filter((e) => e.id.toString() !== id);
        }

        async function removePostFromServer(postContainerElement) {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${postContainerElement.id}`, {
                method: 'DELETE',
            })
                .then(() => removePostFromLoadedPosts(postContainerElement.id))
                .catch(() => removePostError(postContainerElement));
        }

        const buttonElement = event.target;
        const postContainerElement = buttonElement.closest('.post-container');
        postContainerElement.classList.add('hidden');

        setTimeout(removePostFromServer, 3000, postContainerElement);
    }

    function createPostFromContent(id, title, content) {
        function createTitleContainer() {
            const titleContainerElement = document.createElement('label');
            titleContainerElement.classList.add('post-title-container');
            titleContainerElement.innerText = title;
            return titleContainerElement;
        }

        function createContentContainer() {
            const contentContainerElement = document.createElement('div');
            contentContainerElement.classList.add('post-content-container');
            contentContainerElement.innerText = content;
            return contentContainerElement;
        }

        function createRemoveButton() {
            const buttonElement = document.createElement('button');
            buttonElement.type = 'button';
            buttonElement.classList.add('delete-button');
            buttonElement.addEventListener('click', removePost);
            return buttonElement;
        }

        function createPostContainer() {
            const postContainerElement = document.createElement('div');
            postContainerElement.classList.add('post-container');
            return postContainerElement;
        }

        function createPostHeader() {
            const postHeaderElement = document.createElement('div');
            postHeaderElement.classList.add('post-container-header');
            return postHeaderElement;
        }

        const titleContainerElement = createTitleContainer();
        const removeButtonElement = createRemoveButton();
        const contentContainerElement = createContentContainer();
        const postContainerHeaderElement = createPostHeader();
        const postContainerElement = createPostContainer();

        postContainerHeaderElement.appendChild(titleContainerElement);
        postContainerHeaderElement.appendChild(removeButtonElement);

        postContainerElement.id = id;
        postContainerElement.appendChild(postContainerHeaderElement);
        postContainerElement.appendChild(contentContainerElement);

        return postContainerElement;
    }
    function reCreatePosts(posts) {
        const showMessagesContainerElement = document.querySelector('[data-messages-container]');
        showMessagesContainerElement.textContent = '';
        posts.forEach((post) => {
            showMessagesContainerElement.appendChild(
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
            return posts.sort((post1, post2) => (post1.title > post2.title ? sortType : -sortType));
        }

        let posts = loadedPosts.slice(0);
        const sortType = parseInt(document.querySelector('[data-sort-select]').value, 10);
        const filterString = document.querySelector('[data-filter-input]')
            .value
            .trim()
            .toLowerCase();

        // if (filterString) { posts = filterPosts(posts, filterString);
        // } if (sortType !== 0) { posts = sortPosts(posts, sortType);
        // };
        if (filterString) posts = filterPosts(posts, filterString);
        if (sortType !== 0) posts = sortPosts(posts, sortType);

        reCreatePosts(posts);
    }

    function savePosts(posts) {
        loadedPosts = posts;
    }

    function loadData() {
        const loaderContainerElement = document.querySelector('[data-loader-container]');

        async function getData() {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => savePosts(response))
                .then(() => reCreatePosts(loadedPosts));
            loaderContainerElement.classList.add('hidden');
        }

        setTimeout(getData, 3000);
        loaderContainerElement.classList.remove('hidden');
    }

    loadData();

    document.querySelector('[data-filter-input]')
        .addEventListener('input', filterAndSortPosts);
    document.querySelector('[data-sort-select]')
        .addEventListener('input', filterAndSortPosts);
}());
