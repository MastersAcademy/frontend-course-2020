(function () {
    const middleContainer = document.querySelector('[data-middle-container]');
    const input = document.querySelector('[data-input]');
    const sort = document.querySelector('[data-sort]');
    const preloaderContainer = document.querySelector('[data-preloader-container]');
    const postContainer = document.querySelector('[data-post-container]');
    const postTamplate = document.querySelector('[data-tamplate-post]');

    const requestsOnSort = {
        default: 'https://jsonplaceholder.typicode.com/posts?',
        fromAtoZ: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc',
        fromZtoA: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=desc',
    };

    let deleteButtons;
    let animationTimer;
    let inputTimer;

    // Hiding preloading animation
    function stoppingAnimation() {
        clearTimeout(animationTimer);
        animationTimer = setTimeout(() => {
            preloaderContainer.classList.add('hidden');
            postContainer.classList.remove('hidden');
            middleContainer.classList.add('overflow-scroll');
        }, 3000);
    }

    stoppingAnimation();

    // Deleting post on click
    function removingPost(e) {
        const parent = e.currentTarget.parentNode.parentNode;
        const postId = parent.getAttribute('data-post');
        parent.classList.add('hidden');
        (async function () {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                    method: 'DELETE',
                });
                if (response.status === 200) {
                    parent.children[0].classList.add('hidden');
                    parent.children[1].innerText = 'Post deleted';
                    parent.classList.remove('hidden');
                } else {
                    alert('Something went wrong');
                    parent.classList.remove('hidden');
                }
            } catch (err) {
                alert('Something went wrong');
                parent.classList.remove('hidden');
            }
        }());
    }

    // Rendering posts
    async function setPosts(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            data.forEach((post) => {
                // Creating cell fot post
                const { content } = postTamplate;
                content.querySelector('[data-post]').setAttribute('data-post', `${post.id}`);
                // Inserting title text
                content.querySelector('[data-title]').innerText = post.title;
                // Inserting main post text
                content.querySelector('[data-text]').innerHTML = post.body;
                // Pushing in DOM
                const postNode = content.cloneNode(true);
                postContainer.append(postNode);
            });
            // Adding event listener on all new posts
            deleteButtons = document.querySelectorAll('[data-delete-button]');
            deleteButtons.forEach((button) => button.addEventListener('click', removingPost));
        } catch (error) {
            alert(error);
        }
    }

    setPosts(requestsOnSort.default);

    // Displaying preload animation
    function displayingAnimation() {
        postContainer.classList.add('hidden');
        preloaderContainer.classList.remove('hidden');
        middleContainer.classList.add('overflow-scroll');
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
            default: break;
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
