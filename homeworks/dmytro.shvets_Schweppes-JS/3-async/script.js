(function () {
    const middleContainer = document.querySelector('[data-middle-container]');
    const input = document.querySelector('[data-input]');
    const sort = document.querySelector('[data-sort]');
    const preloaderContainer = document.querySelector('[data-preloader-container]');
    const postContainer = document.querySelector('[data-post-container]');

    const requestsOnSort = {
        default: 'https://jsonplaceholder.typicode.com/posts?',
        fromAtoZ: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc',
        fromZtoA: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=desc',
    };

    let deleteButtons = [];
    let animationTimer;
    let inputTimer;

    // Hiding preloading animation
    function stoppingAnimation() {
        clearTimeout(animationTimer);
        animationTimer = setTimeout(() => {
            preloaderContainer.style.display = 'none';
            postContainer.style.display = 'flex';
            middleContainer.style.overflowY = 'auto';
        }, 3000);
    }

    stoppingAnimation();

    // Deleting post on click
    function removingPost(e) {
        console.log(e);
        const postId = e.path[2].getAttribute('data-post');
        (async function () {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                    method: 'DELETE',
                });
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }());

    }

    // Rendering posts
    async function setPosts(url) {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach((post) => {
            // Creating cell fot post
            const postNode = document.createElement('div');
            postNode.classList.add('post');
            postNode.setAttribute('data-post', `${post.id}`);
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
            deleteBtnNode.setAttribute('data-delete-button', '');
            titleContainerNode.append(deleteBtnNode);
            deleteButtons.push(deleteBtnNode);
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
        // Adding event listener on all new posts
        deleteButtons.forEach((button) => button.addEventListener('click', removingPost));
    }

    setPosts(requestsOnSort.default);


    // Displaying preload animation
    function displayingAnimation() {
        postContainer.style.display = 'none';
        preloaderContainer.style.display = 'flex';
        middleContainer.style.overflowY = 'hidden';
    }

    // Sorting posts by request 
    function sorting(filter = '') {
        const posts = document.querySelectorAll('[data-post]');
        displayingAnimation();
        stoppingAnimation();
        // Removing all old post
        posts.forEach((post) => post.remove());
        // Сlearing all old Delete Button's event
        deleteButtons.forEach((button) => button.removeEventListener('click', removingPost));
        deleteButtons = [];
        // Sending query string to get new posts
        switch (sort.value) {
            case 'Default':
                setPosts(`${requestsOnSort.default}${filter}`);
                break;
            case 'From A to Z':
                setPosts(`${requestsOnSort.fromAtoZ}${filter}`);
                break;
            case 'From Z to A':
                setPosts(`${requestsOnSort.fromZtoA}${filter}`);
                break;
        }
    }

    function filtering() {
        clearTimeout(inputTimer);
        inputTimer = setTimeout(() => {
            const queryString = `&title_like=${input.value}`;
            sorting(queryString);
        }, 600);
    }

    sort.addEventListener('change', filtering);
    input.addEventListener('input', filtering);

}());

