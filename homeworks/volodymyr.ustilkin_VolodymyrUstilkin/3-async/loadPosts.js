(function () {
    let loadedPosts;
    function removePost(event) {
        function removePostErrorHandler(postContainer) {
            const _postContainer = postContainer;
            console.log(`Error on delete post with id: ${_postContainer.id}`);
            _postContainer.style.display = 'block';
            _postContainer.innerText = 'Something wrong';
        }

        function removePostFromLoadedPosts(id) {
            loadedPosts = loadedPosts.filter((e) => e.id.toString() !== id);
            return id;
        }

        async function removePostFromServer(postContainer) {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${postContainer.id}`, {
                method: 'DELETE',
            })
                .then(() => removePostFromLoadedPosts(postContainer.id))
                .catch(() => removePostErrorHandler(postContainer));
        }

        const button = event.target;
        const postContainerHeader = button.parentNode;
        const postContainer = postContainerHeader.parentNode;
        postContainer.style.display = 'none';

        setTimeout(removePostFromServer, 3000, postContainer);
    }

    function createPostFromContent(id, title, content) {
        function createTitleContainer(_title) {
            const titleContainer = document.createElement('label');
            titleContainer.classList.add('post-title-container');
            titleContainer.innerText = _title;
            return titleContainer;
        }

        function createContentContainer(_content) {
            const contentContainer = document.createElement('div');
            contentContainer.classList.add('post-content-container');
            contentContainer.innerText = _content;
            return contentContainer;
        }

        function createRemoveButton() {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.classList.add('remove-button');
            btn.addEventListener('click', removePost);
            return btn;
        }

        function createPostContainer() {
            const element = document.createElement('div');
            element.classList.add('post-container');
            return element;
        }

        function createPostHeader() {
            const element = document.createElement('div');
            element.classList.add('post-container-header');
            return element;
        }

        const titleContainer = createTitleContainer(title);
        const removeButton = createRemoveButton();
        const contentContainer = createContentContainer(content);
        const postContainerHeader = createPostHeader();
        const postContainer = createPostContainer();

        postContainerHeader.appendChild(titleContainer);
        postContainerHeader.appendChild(removeButton);

        postContainer.id = id;
        postContainer.appendChild(postContainerHeader);
        postContainer.appendChild(contentContainer);

        return postContainer;
    }
    function reCreatePosts(posts) {
        const showMessagesContainer = document.getElementById('showMessagesContainer');
        showMessagesContainer.textContent = '';
        posts.forEach((post) => {
            showMessagesContainer.appendChild(
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
        const loader = document.getElementById('loader');

        async function getData() {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => savePosts(response))
                .then((responseJson) => reCreatePosts(responseJson));
            loader.style.display = 'none';
        }

        setTimeout(getData, 3000);
        loader.style.display = 'block';
    }

    window.addEventListener('load', loadData);
    document.getElementById('filterInput')
        .addEventListener('input', filterAndSortPosts);
    document.getElementById('titleSortSelect')
        .addEventListener('input', filterAndSortPosts);
}());
