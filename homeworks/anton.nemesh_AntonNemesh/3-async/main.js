function createPostItem(item, i) {
    const containerEl = document.querySelector('[data-container]');
    const templateEl = document.querySelector('[data-template]');
    const postClone = templateEl.content.cloneNode(true);
    const postTitle = postClone.querySelector('h2');
    const postBody = postClone.querySelector('p');
    const buttonDel = postClone.querySelector('button');
    postTitle.textContent = item.title;
    postBody.textContent = item.body;
    buttonDel.setAttribute(`data-del-${i}`, '');
    containerEl.appendChild(postClone);
    const deleteButton = document.querySelector(`[data-del-${i}]`);
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(deleteButton);
    });
}

function toggleLoader() {
    const imageLoaderEl = document.querySelector('.loader');
    if (imageLoaderEl.style.display === 'none') {
        imageLoaderEl.style.display = 'block';
    } else {
        imageLoaderEl.style.display = 'none';
    }
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    posts.forEach((item, i) => {
        createPostItem(item, i);
    });
    toggleLoader();
}

setTimeout(getData, 1000);
