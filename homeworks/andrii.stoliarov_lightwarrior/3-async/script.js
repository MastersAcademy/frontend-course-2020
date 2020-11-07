(function () {
    const container = document.querySelector('[data-container]');

    let postsArray;

    function initPostsArray(posts) {
        postsArray = Array.from(posts);
    }

    function insertMessage(posts) {
        const messageNode = document.querySelector('[data-message-template]');

        posts.forEach((item) => {
            const clone = messageNode.content.cloneNode(true);
            const h = clone.querySelector('[data-title]');
            const p = clone.querySelector('[data-message]');

            h.textContent = item.title;
            p.textContent = item.body;

            container.append(clone);
        });
    }

    function sortPanes(event, posts) {
        if (event === '19') {
            posts.sort((a, b) => (a.title > b.title ? 1 : -1));
        }

        if (event === '91') {
            posts.sort((a, b) => (a.title < b.title ? 1 : -1));
        }

        container.innerHTML = '';

        insertMessage(posts);
    }

    function filterPanes(posts) {
        const toLowerFilterText = document.querySelector('[data-filter]').value.toLowerCase();

        const filterPostsArr = posts.filter((item) => item.title.indexOf(toLowerFilterText) !== -1);

        container.innerHTML = '';

        insertMessage(filterPostsArr);
    }

    async function loadData() {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        await initPostsArray(json);
        await insertMessage(json);

        document.querySelector('[data-loading]').remove();
    }

    container.addEventListener('click', (event) => {
        if (event.target.className !== 'remove-button') return;

        event.target.closest('.pane').remove();
    });

    window.addEventListener('load', loadData);

    document.querySelector('[data-sort]').addEventListener('change', (event) => {
        sortPanes(event.target.value, postsArray);
    });

    document.querySelector('[data-filter]').addEventListener('input', () => {
        filterPanes(postsArray);
    });
}());
