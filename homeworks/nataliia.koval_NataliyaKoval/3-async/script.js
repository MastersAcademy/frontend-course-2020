const preloader = document.querySelector('[data-preloader]');
const list = document.querySelector('[data-list]');
const template = document.querySelector('[data-template]');
const filterInput = document.querySelector('[data-filter]');

async function getResponse() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // eslint-disable-next-line no-restricted-syntax
    for (const post of posts) {
        const { content } = template;
        const title = content.querySelector('[data-title]');
        const text = content.querySelector('[data-text]');
        title.innerText = post.title;
        text.innerText = post.body;
        list.appendChild(template.content.cloneNode(true));
    }

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
