const middleContainer = document.querySelector('[data-middle-container]');
const sort = document.querySelector('[data-sort]');
const preloaderContainer = document.querySelector('[data-preloader-container]');
const postContainer = document.querySelector('[data-post-container]');

const requestsOnSort = {
    defaul: 'https://jsonplaceholder.typicode.com/posts',
    fromAtoZ: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc',
    fromZtoA: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=desc',
};

// Hiding preloading animation
function stoppingAnimation() {
    const timer = setTimeout(() => {
        preloaderContainer.style.display = 'none';
        postContainer.style.display = 'flex';
        middleContainer.style.overflowY = 'auto';
        clearTimeout(timer);
    }, 3000);
}

stoppingAnimation();

// Rendering posts
async function setPosts(url) {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((post) => {
        // Creating cell fot post
        const postNode = document.createElement('div');
        postNode.classList.add('post');
        postNode.setAttribute('data-post', '');
        postContainer.append(postNode);
        // Creating title container
        const titleContainerNode = document.createElement('div');
        titleContainerNode.classList.add('title-container');
        postNode.append(titleContainerNode);

        const h2Node = document.createElement('h2');
        h2Node.classList.add('h2');
        h2Node.setAttribute('data-title', '');
        h2Node.innerText = post.title;
        titleContainerNode.append(h2Node);

        const deleteBtnNode = document.createElement('i');
        deleteBtnNode.classList.add('fas', 'fa-times-circle');
        titleContainerNode.append(deleteBtnNode);
        // Creating text container
        const textContainerNode = document.createElement('div');
        textContainerNode.classList.add('text-container');
        postNode.append(textContainerNode);

        const textNode = document.createElement('p');
        textNode.classList.add('text');
        textNode.setAttribute('data-text', '');
        textNode.innerHTML = post.body;
        textContainerNode.append(textNode);
    });
}

setPosts(requestsOnSort.defaul);

// Displaying preload animation
function displayingAnimation() {
    postContainer.style.display = 'none';
    preloaderContainer.style.display = 'flex';
    middleContainer.style.overflowY = 'hidden';
}

// Sorting posts by request 
function sorting() {
    // Getting the actual amount of posts
    const posts = document.querySelectorAll('[data-post]');
    switch (sort.value) {
        case 'Default':
            displayingAnimation();
            stoppingAnimation();
            posts.forEach((post) => post.remove());
            setPosts(requestsOnSort.defaul);
            break;
        case 'From A to Z':
            displayingAnimation();
            stoppingAnimation();
            posts.forEach((post) => post.remove());
            setPosts(requestsOnSort.fromAtoZ);
            break;
        case 'From Z to A':
            displayingAnimation();
            stoppingAnimation();
            posts.forEach((post) => post.remove());
            setPosts(requestsOnSort.fromZtoA);
            break;
    }
}

sort.addEventListener('change', sorting);