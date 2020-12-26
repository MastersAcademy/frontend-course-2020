class App {
    constructor(el) {
        this.el = el;
        this.posts = [];
        this.filtredPosts = [];
        this.templateEl();
        this.findElements();
        this.initRequest();
        this.listenEvents();
        this.sortToggle = null;
    }

    templateEl() {
        this.templateElements = {
            listPosts: document.createElement('ul'),
            controls: this.el.querySelector('[data-controls-template]'),
            post: this.el.querySelector('[data-item-template]'),
        };
    }

    findElements() {
        const cloneElementControls = this.templateElements.controls.content.cloneNode(true);
        this.elements = {
            root: this.el,
            loader: this.el.querySelector('[data-loader]'),
            controls: cloneElementControls.querySelector('[data-controls]'),
            input: cloneElementControls.querySelector('[data-filter]'),
            selectSort: cloneElementControls.querySelector('[data-sort]'),
            listPosts: this.templateElements.listPosts.cloneNode(true),
        };
    }

    listenEvents() {
        this.elements.input.addEventListener('input', () => {
            this.removePosts();
            this.clearListPosts();
            this.appendPosts();
        });

        this.elements.selectSort.addEventListener('change', (event) => {
            this.sortToggle = event.target.value;
            this.removePosts();
            this.clearListPosts();
            this.appendPosts();
        });
    }

    initRequest() {
        setTimeout(() => {
            this.getPosts();
        }, 3000);
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (response.status !== 200) alert('Something went wrong');
                return response.json();
            })
            .then((json) => {
                this.posts = json;
                this.removeLoader();
                this.appendControls();
                this.appendPosts();
            })
            .catch((error) => {
                alert(`Something went wrong ${error}`);
            });
    }

    removeLoader() {
        this.elements.loader.remove();
    }

    appendControls() {
        this.elements.root.appendChild(this.elements.controls);
    }

    removePosts() {
        this.elements.listPosts.remove();
    }

    clearListPosts() {
        this.elements.listPosts.innerHTML = '';
    }

    searchPosts(input) {
        const query = input.value.toLowerCase();
        this.filtredPosts = this.posts.filter((post) => {
            const result = post.title.toLowerCase().match(query);
            return result;
        });
    }

    sortPosts() {
        switch (this.sortToggle) {
            case '2':
                this.filtredPosts.sort((post1, post2) => {
                    if (post1.title < post2.title) return -1;
                    return 0;
                });
                break;
            case '3':
                this.filtredPosts.sort((post1, post2) => {
                    if (post1.title > post2.title) return -1;
                    return 0;
                });
                break;
            default:
            // do nothing
        }
    }

    createListPosts(posts) {
        this.elements.listPosts.classList.add('container', 'posts');
        this.elements.listPosts.setAttribute('data-posts', '');

        posts.forEach((element) => {
            this.elements.listPosts.appendChild(this.renderPost(element));
        });
    }

    renderPost(element) {
        const cloneElementPost = this.templateElements.post.content.cloneNode(true);
        cloneElementPost.querySelector('[data-post-header]').innerHTML = element.title;
        cloneElementPost.querySelector('[data-post-txt]').innerHTML = element.body;
        cloneElementPost.querySelector('[data-post]').dataset.post = element.id;
        this.deletePost(element, cloneElementPost.querySelector('[data-post]'));
        return cloneElementPost;
    }

    deletePost(element, post) {
        const postElement = post;
        const buttonDeletePost = postElement.querySelector('[data-post-delete]');
        buttonDeletePost.addEventListener('click', () => {
            postElement.style.display = 'none';
            fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}`, { method: 'DELETE' })
                .then((response) => {
                    if (response.status === 200) {
                        this.posts.splice(this.posts.indexOf(element), 1);
                        this.removePosts();
                        this.clearListPosts();
                        this.appendPosts();
                    } else {
                        postElement.style.display = 'block';
                        alert('Something went wrong');
                    }
                }).catch(() => { alert('Something went wrong'); });
        });
    }

    appendPosts() {
        this.searchPosts(this.elements.input);
        this.sortPosts();
        this.createListPosts(this.filtredPosts);
        this.elements.root.appendChild(this.elements.listPosts);
    }
}

const app = new App(document.querySelector('#root'));
console.dir(app);
