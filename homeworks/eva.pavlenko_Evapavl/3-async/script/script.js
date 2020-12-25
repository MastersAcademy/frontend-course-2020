function start() {
    const selectEl = document.querySelector('[data-select]');
    const inputFilterEl = document.querySelector('[data-input-filter]');
    const postsNode = document.querySelector('[data-posts]');
    const loadingNode = document.querySelector('[data-loading]');

    const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts?';

    let timerId;
    let timerPreloader;

    function drawPosts(posts) {
        postsNode.innerHTML = posts.map(({ body, title, id }) => `<div data-post=“${id}” class="post">
            <h2 class="title">${title}</h2>
            <div class="description">${body}</div>
        </div>`).join('');
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
            getPosts(POSTS_API_URL);
        }, 3000);
    }

    stopPreloader();

    function sorting(query) {
        const posts = document.querySelectorAll('.post');
        posts.forEach((post) => post.remove());
        switch (selectEl.value) {
            case 'default':
                getPosts(`${POSTS_API_URL}${query}`);
                break;
            case 'fromAtoZ':
                getPosts(`${POSTS_API_URL}_sort=title&_order=asc${query}`);
                break;
            case 'fromZtoA':
                getPosts(`${POSTS_API_URL}_sort=title&_order=desc${query}`);
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
