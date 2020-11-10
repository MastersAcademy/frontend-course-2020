(function () {
    const containerNodes = document.querySelector('[data-container]');
    const filterNodes = document.querySelector('[data-filter]');
    const sortNodes = document.querySelector('[data-sort]');

    let unsortedPostsArr;
    let postsArr;

    function insertMessage(posts) {
        const messageNode = document.querySelector('[data-message-template]');

        posts.forEach((item) => {
            const clone = messageNode.content.cloneNode(true);
            const h = clone.querySelector('[data-title]');
            const p = clone.querySelector('[data-message]');

            h.textContent = item.title;
            p.textContent = item.body;

            containerNodes.append(clone);
        });
    }

    function sortAndFilterPanes(posts) {
        let filterPostsArr = posts;

        if (filterNodes.value !== '') {
            const toLowerFilterText = filterNodes.value.toLowerCase();
            filterPostsArr = posts.filter((item) => item.title.indexOf(toLowerFilterText) !== -1);
        }

        containerNodes.innerHTML = '';

        switch (sortNodes.value) {
            case '19':
                filterPostsArr.sort((a, b) => (a.title > b.title ? 1 : -1));
                insertMessage(filterPostsArr);
                break;
            case '91':
                filterPostsArr.sort((a, b) => (a.title < b.title ? 1 : -1));
                insertMessage(filterPostsArr);
                break;
            case '0':
                insertMessage(unsortedPostsArr);
                break;
            default:
                break;
        }

        if (filterNodes.value !== '') {
            containerNodes.innerHTML = '';
            insertMessage(filterPostsArr);
        }
    }

    async function loadData() {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        unsortedPostsArr = Array.from(json);
        postsArr = Array.from(json);
        insertMessage(postsArr);

        document.querySelector('[data-loading]').remove();
    }

    containerNodes.addEventListener('click', (event) => {
        if (event.target.className !== 'remove-button') return;

        event.target.closest('.pane').classList.add('hidden-pane');
        const currentTitle = event.target.closest('.pane').querySelector('[data-title]').textContent;
        const currentPaneId = postsArr.find((item) => item.title === currentTitle).id;

        fetch(`https://jsonplaceholder.typicode.com/posts/${currentPaneId}`, {
            method: 'DELETE',
        }).then(() => {
            setTimeout(() => event.target.closest('.pane').remove(), 1000);
            alert('Element deleted');
        }).catch(() => {
            setTimeout(() => event.target.closest('.pane').classList.remove('hidden-pane'), 1000);
            alert('Something went wrong');
        });
    });

    window.addEventListener('load', loadData);

    sortNodes.addEventListener('change', () => {
        sortAndFilterPanes(postsArr);
    });

    filterNodes.addEventListener('input', () => {
        sortAndFilterPanes(postsArr);
    });
}());
