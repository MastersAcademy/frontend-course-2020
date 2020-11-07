function start() {
    const selectEl = document.querySelector('[data-select]');
    const inputFilterEl = document.querySelector('[data-input-filter]');
    const postsNode = document.querySelector('[data-posts]');
    const loadingNode = document.querySelector('[data-loading]');

    const defaultUrl = 'https://jsonplaceholder.typicode.com/posts?';
    const fromAtoZ = `${defaultUrl}_sort=title&_order=asc`;
    const fromZtoA = `${defaultUrl}_sort=title&_order=desc`;

    let timerId;
    let timerPreloader;

    function drawPosts(posts) {
        const rows = posts.map(({ body, title, id }) => `<div data-${id} class="post">
            <h2 class="title">${title}</h2>
            <div class="description">${body}</div>
        </div>`).join('');
        postsNode.innerHTML = rows;
    }

    async function getPosts(url) {
        const response = await fetch(url);
        const posts = await response.json();
        drawPosts(posts);
    }

    function stopPreloader() {
        clearTimeout(timerPreloader);
        timerPreloader = setTimeout(() => {
            loadingNode.hidden = true;
            getPosts(defaultUrl);
        }, 3000);
    }

    stopPreloader();

    function sorting(query) {
        const posts = document.querySelectorAll('.post');
        posts.forEach((post) => post.remove());
        switch (selectEl.value) {
            case 'default':
                getPosts(`${defaultUrl}${query}`);
                break;
            case 'fromAtoZ':
                getPosts(`${fromAtoZ}${query}`);
                break;
            case 'fromZtoA':
                getPosts(`${fromZtoA}${query}`);
                break;
            default:
                break;
        }
    }

    function filterPosts() {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            const query = `&title_like=${inputFilterEl.value}`;
            sorting(query);
        }, 3000);
    }

    selectEl.addEventListener('change', filterPosts);
    inputFilterEl.addEventListener('input', filterPosts);
}

start();
