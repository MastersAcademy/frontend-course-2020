(function () {
    let loadedPosts;
    function removePost(event) {
        function removePostErrorHandler(postContainerEl) {
            const postContainer = postContainerEl;
            console.log(`Error on delete post with id: ${postContainer.id}`);
            postContainer.style.display = 'block';
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
        const postContainerHeaderEl = buttonEl.parentNode;
        const postContainerEl = postContainerHeaderEl.parentNode;
        postContainerEl.style.display = 'none';

        setTimeout(removePostFromServer, 3000, postContainerEl);
    }

    function createPostFromContent(id, postTitle, postContent) {
        function createTitleContainer(title) {
            const titleContainerEl = document.createElement('label');
            titleContainerEl.classList.add('post-title-container');
            titleContainerEl.innerText = title;
            return titleContainerEl;
        }

        function createContentContainer(content) {
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

        const titleContainerEl = createTitleContainer(postTitle);
        const removeButtonEl = createRemoveButton();
        const contentContainerEl = createContentContainer(postContent);
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
        const showMessagesContainerEl = document.getElementById('showMessagesContainer');
        showMessagesContainerEl.textContent = '';
        posts.forEach((post) => {
            showMessagesContainerEl.appendChild(
                createPostFromContent(post.id, post.title, post.body),
            );
        });
        return posts;
    }

    function filterAndSortPosts() {
        const posts = loadedPosts;
        const sortType = parseInt(document.getElementById('titleSortSelect').value, 10);
        const filterString = document.getElementById('filterInput')
            .value
            .trim()
            .toLowerCase();
        let filteredPosts;
        if (filterString) {
            filteredPosts = posts.filter((post) => post.title.toLowerCase()
                .includes(filterString));
        } else {
            filteredPosts = posts;
        }

        if (sortType !== 0) {
            filteredPosts = filteredPosts.sort((post1, post2) => (post1.title > post2.title
                ? sortType
                : -sortType));
        }

        reCreatePosts(filteredPosts);
    }

    function savePosts(posts) {
        loadedPosts = posts;
        return posts;
    }

    function loadData() {
        const loaderEl = document.getElementById('loader');

        async function getData() {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => savePosts(response))
                .then((responseJson) => reCreatePosts(responseJson));
            loaderEl.style.display = 'none';
        }

        setTimeout(getData, 3000);
        loaderEl.style.display = 'block';
    }

    window.addEventListener('load', loadData);
    document.getElementById('filterInput')
        .addEventListener('input', filterAndSortPosts);
    document.getElementById('titleSortSelect')
        .addEventListener('input', filterAndSortPosts);
}());
