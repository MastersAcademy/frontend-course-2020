(function () {
    function reCreatePosts(posts) {
        const showMessagesContainer = document.getElementById('showMessagesContainer');
        showMessagesContainer.textContent = '';
        posts.forEach((post) => {
            showMessagesContainer.appendChild(
                // eslint-disable-next-line no-undef
                createPostFromContent(post.id, post.title, post.body),
            );
        });
        return posts;
    }

    function filterAndSortPosts() {
        // eslint-disable-next-line no-undef
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
        // eslint-disable-next-line no-undef
        loadedPosts = posts;
        return posts;
    }

    function loadData() {
        const loader = document.getElementById('loader');

        function getData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => savePosts(response))
                .then((responseJson) => reCreatePosts(responseJson));
            loader.style.display = 'none';
        }

        loader.style.display = 'block';
        setTimeout(getData, 3000);
    }

    window.addEventListener('load', loadData);
    document.getElementById('filterInput')
        .addEventListener('input', filterAndSortPosts);
    document.getElementById('titleSortSelect')
        .addEventListener('input', filterAndSortPosts);
}());
