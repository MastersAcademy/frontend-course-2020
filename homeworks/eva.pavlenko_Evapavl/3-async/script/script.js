function start() {
    const select = document.querySelector('.select');
    const inputFilter = document.querySelector('.input_filter');
    const postsNode = document.querySelector('.posts');
    const loadingNode = document.querySelector('.loading');

    const defaultUrl = 'https://jsonplaceholder.typicode.com/posts?';
    const fromAtoZ = 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc';
    const fromZtoA = 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=desc';

    let timerId;
    let timerPreloader;

    function drawPosts(title, body, id) {
        const postNode = document.createElement('div');
        postNode.classList.add('post');
        postNode.setAttribute('data-id', `${id}`);
        postsNode.appendChild(postNode);
        const titleNode = document.createElement('h2');
        titleNode.classList.add('title');
        const descriptionNode = document.createElement('div');
        descriptionNode.classList.add('description');
        titleNode.textContent = title;
        postNode.appendChild(titleNode);
        descriptionNode.textContent = body;
        postNode.appendChild(descriptionNode);
    }

    async function getPosts(url) {
        const response = await fetch(url);
        const posts = await response.json();
        posts.map((post) => drawPosts(post.title, post.body, post.id));
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
        if (select.value === 'default') {
            getPosts(`${defaultUrl}${query}`);
        } else if (select.value === 'fromAtoZ') {
            getPosts(`${fromAtoZ}${query}`);
        } else if (select.value === 'fromZtoA') {
            getPosts(`${fromZtoA}${query}`);
        }
    }

    function filterPosts() {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            const query = `&title_like=${inputFilter.value}`;
            sorting(query);
        }, 3000);
    }

    select.addEventListener('change', filterPosts);
    inputFilter.addEventListener('input', filterPosts);
}

start();
