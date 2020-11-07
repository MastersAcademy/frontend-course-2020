const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const articleTemplate = document.getElementById('article-template').content;
const contentContainer = document.getElementById('render-content-container');
const loader = document.getElementById('loader');
async function getResponse() {
    const response = await fetch(requestURL);
    const posts = await response.json();
    let myArrayListCopy = [];
    myArrayListCopy = posts.slice();
    loader.style.display = 'none';

    for (let i = 0; i < posts.length; i++) {
        const copyTemplate = document.importNode(articleTemplate, true);
        copyTemplate.querySelector('.article-title').textContent = posts[i].title;
        copyTemplate.querySelector('.article-text').textContent = posts[i].body;
        contentContainer.appendChild(copyTemplate);
    }
    const select = document.getElementById('select');
    function compare(a, b) {
        const optionVal = select.value;
        if (optionVal === 'az') {
            if (a.title < b.title) return -1;
        } else if (optionVal === 'za') {
            if (a.title > b.title) return -1;
        }
        return 0;
    }
    select.addEventListener('change', () => {
        if (select.value ? 'az' : 'za') {
            contentContainer.innerHTML = '';
            for (let i = 0; i < posts.length; i++) {
                posts.sort(compare);
                const copyTemplate = document.importNode(articleTemplate, true);
                copyTemplate.querySelector('.article-title').textContent = posts[i].title;
                copyTemplate.querySelector('.article-text').textContent = posts[i].body;
                contentContainer.appendChild(copyTemplate);
            }
        }
        if (select.value === 'st') {
            contentContainer.innerHTML = '';
            for (let i = 0; i < myArrayListCopy.length; i++) {
                const copyTemplate = document.importNode(articleTemplate, true);
                copyTemplate.querySelector('.article-title').textContent = myArrayListCopy[i].title;
                copyTemplate.querySelector('.article-text').textContent = myArrayListCopy[i].body;
                contentContainer.appendChild(copyTemplate);
            }
        }
    });

    const searchArticle = document.querySelector('#search-users');
    searchArticle.addEventListener('keyup', function () {
        const articleData = document.querySelectorAll('.article-title');
        const articles = document.querySelectorAll('.article');
        const searchVal = this.value.toLowerCase();

        for (let i = 0; i < articles.length; i++) {
            if (!searchVal || articleData[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
                articles[i].style.display = 'block';
                articles[i].classList.add('visible');
            } else {
                articles[i].style.display = 'none';
                articles[i].classList.remove('visible');
            }
        }
    });
}

window.setTimeout(getResponse, 3000);
