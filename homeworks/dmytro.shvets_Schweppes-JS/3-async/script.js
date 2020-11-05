const middleContainer = document.querySelector('[data-middle-container]');
const posts = document.querySelectorAll('[data-post]');

// Deleting preloading animation
(function stoppingAnimation() {
    const timer = setTimeout(() => {
        posts.forEach((post) => post.remove());
        middleContainer.style.overflowY = 'auto';
        clearTimeout(timer);
    }, 3000);
}());

// Rendering posts
(async function setPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    data.forEach((post) => {
        // Creating cell fot post
        const postNode = document.createElement('div');
        postNode.classList.add('post');
        postNode.setAttribute('data-post', '');
        middleContainer.append(postNode);
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
}());
