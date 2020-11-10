const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const articleTemplateEl = document.querySelector('[data-article-template]').content;
const contentContainerEl = document.querySelector('[data-render-content-container]');
const loaderEl = document.querySelector('[data-loader]');
async function getResponse() {
    const response = await fetch(requestURL);
    const initialPosts = await response.json();
    const posts = initialPosts.slice();
    loaderEl.classList.add('hidden');
    function renderInitialPosts() {
        contentContainerEl.innerHTML = '';
        for (let i = 0; i < initialPosts.length; i++) {
            const copyTemplate = articleTemplateEl.cloneNode(true);
            copyTemplate.querySelector('.article-title').textContent = initialPosts[i].title;
            copyTemplate.querySelector('.article-text').textContent = initialPosts[i].body;
            contentContainerEl.appendChild(copyTemplate);
        }
    }
    function compare(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    }
    function renderPosts() {
        contentContainerEl.innerHTML = '';
        for (let i = 0; i < posts.length; i++) {
            const copyTemplate = articleTemplateEl.cloneNode(true);
            copyTemplate.querySelector('.article-title').textContent = posts[i].title;
            copyTemplate.querySelector('.article-text').textContent = posts[i].body;
            contentContainerEl.appendChild(copyTemplate);
        }
    }
    const searchArticleEl = document.querySelector('[data-search-article]');
    function search() {
        const articleDataEl = document.querySelectorAll('.article-title');
        const articlesEl = document.querySelectorAll('.article');
        const searchVal = searchArticleEl.value.toLowerCase();
        for (let i = 0; i < articlesEl.length; i++) {
            if (!searchVal || articleDataEl[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
                articlesEl[i].classList.remove('hidden');
            } else {
                articlesEl[i].classList.add('hidden');
            }
        }
    }
    const select = document.querySelector('[data-select]');
    select.addEventListener('change', () => {
        if (select.value === 'az') {
            initialPosts.sort(compare);
            renderInitialPosts();
            search();
        } else if (select.value === 'za') {
            initialPosts.sort(compare).reverse();
            renderInitialPosts();
            search();
        } else {
            renderPosts();
            search();
        }
    });
    searchArticleEl.addEventListener('keyup', () => {
        search();
    });
    renderPosts();
}
window.setTimeout(getResponse, 3000);
