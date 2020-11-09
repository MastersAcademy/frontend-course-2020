const preloader = document.querySelector('[data-preloader]');
const list = document.querySelector('[data-list]');
const template = document.querySelector('[data-template]');
const filterInput = document.querySelector('[data-filter]');
const selectMenu = document.querySelector('[data-select]');
const { content } = template;
const title = content.querySelector('[data-title]');
const text = content.querySelector('[data-text]');

async function getResponse() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const postsA = posts.slice().sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    const postsZ = postsA.slice().reverse();

    // eslint-disable-next-line no-restricted-syntax
    for (const post of posts) {
        title.innerText = post.title;
        text.innerText = post.body;
        list.appendChild(template.content.cloneNode(true));
    }

    function sortPosts() {
        list.innerHTML = '';
        if (selectMenu.value === 'A') {
            // eslint-disable-next-line no-restricted-syntax
            for (const post of postsA) {
                title.innerText = post.title;
                text.innerText = post.body;
                list.appendChild(template.content.cloneNode(true));
            }
        } else if (selectMenu.value === 'Z') {
            // eslint-disable-next-line no-restricted-syntax
            for (const post of postsZ) {
                title.innerText = post.title;
                text.innerText = post.body;
                list.appendChild(template.content.cloneNode(true));
            }
        } else {
            // eslint-disable-next-line no-restricted-syntax
            for (const post of posts) {
                title.innerText = post.title;
                text.innerText = post.body;
                list.appendChild(template.content.cloneNode(true));
            }
        }
    }

    selectMenu.addEventListener('click', sortPosts);

    preloader.style.display = 'none';
}

setTimeout(getResponse, 3000);

filterInput.addEventListener('keyup', () => {
    const filter = filterInput.value.toLowerCase();
    const filterElements = document.querySelectorAll('[data-list] li h2');

    filterElements.forEach((element) => {
        if (element.innerText.toLowerCase().indexOf(filter) > -1) {
            // eslint-disable-next-line no-param-reassign
            element.parentElement.style.display = '';
        } else {
            // eslint-disable-next-line no-param-reassign
            element.parentElement.style.display = 'none';
        }
    });
});
