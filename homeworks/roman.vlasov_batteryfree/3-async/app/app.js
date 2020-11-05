const el = document.querySelector('#root');
const controls = document.querySelector('[data-ctrls-tmp]').content.querySelector('[data-ctrls]');
const input = controls.querySelector('[data-filter]');
const post = document.querySelector('[data-ctrls-tmp]').content.querySelector('[data-post]');
const listPosts = document.createElement('ul');
const selectSort = controls.querySelector('[data-sort]');

listPosts.setAttribute('class', 'container posts');

let posts = [];
let filtredPosts = [];
let sortToggle;

function sortPosts() {
    switch (sortToggle) {
        case '2':
            filtredPosts.sort((post1, post2) => {
                if (post1.title < post2.title) return -1;
                return 0;
            });
            break;
        case '3':
            filtredPosts.sort((post1, post2) => {
                if (post1.title > post2.title) return -1;
                return 0;
            });
            break;
        default:
        // do nothing
    }
}

function removePosts() {
    if (listPosts.firstChild) listPosts.innerHTML = '';
}

function searchPosts(element) {
    filtredPosts = [].concat(posts.filter((postItem) => {
        const result = postItem.title.toLowerCase().match(element.value.toLowerCase());
        return result;
    }));
}

function createListPosts(data) {
    removePosts();
    data.forEach((element) => {
        const cloneElement = document.importNode(post, true);
        cloneElement.dataset.post = element.id;
        cloneElement.querySelector('[data-post-header]').innerHTML = element.title;
        cloneElement.querySelector('[data-post-txt]').innerHTML = element.body;
        const buttonDel = cloneElement.querySelector('[data-post-del]');
        buttonDel.addEventListener('click', () => {
            buttonDel.parentNode.style.display = 'none';
            const id = buttonDel.parentNode.dataset.post;
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
                .then((response) => {
                    if (response.status === 200) {
                        posts.splice(posts.indexOf(element), 1);
                        searchPosts(input);
                        sortPosts();
                        createListPosts(filtredPosts);
                    } else {
                        buttonDel.parentNode.style.display = 'block';
                        alert('Something went wrong');
                    }
                }).catch(() => { alert('Something went wrong'); });
        });
        listPosts.appendChild(cloneElement);
    });
    el.appendChild(listPosts);
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (response.status !== 200) alert('Something went 11wrong');
            return response.json();
        })
        .then((json) => {
            if (json) {
                posts = json;
                el.removeChild(el.firstElementChild);
                el.appendChild(controls);
                createListPosts(posts);
            }
        }).catch((error) => { alert(error); });
}

setTimeout(() => {
    getPosts();
}, 5000);

input.addEventListener('input', () => {
    searchPosts(input);
    sortPosts();
    createListPosts(filtredPosts);
});

selectSort.addEventListener('change', (event) => {
    sortToggle = event.target.value;
    searchPosts(input);
    sortPosts();
    createListPosts(filtredPosts);
});
