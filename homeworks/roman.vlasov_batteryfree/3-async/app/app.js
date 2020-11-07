class App {
    constructor(el) {
        this.el = el;
        this.posts = [];
        this.filtredPosts = [];
        this.findElements();
        this.initRequest();
        this.listenEvents();
        this.sortToggle = null;
    }

    findElements() {
        const template = this.el.querySelector('[data-controls-template]').content.cloneNode(true);
        this.elements = {
            root: this.el,
            loader: this.el.querySelector('[data-loader]'),
            controls: template.querySelector('[data-controls]'),
            input: template.querySelector('[data-filter]'),
            selectSort: template.querySelector('[data-sort]'),
            postTemplate: this.el.querySelector('[data-item-template]').content,
            listPosts: document.createElement('ul'),
        };
    }

    listenEvents() {
        this.elements.input.addEventListener('input', () => {
            this.removePosts();
            this.appendPosts();
        });

        this.elements.selectSort.addEventListener('change', (event) => {
            this.sortToggle = event.target.value;
            this.removePosts();
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
            .catch((error) => { alert(error); });
    }

    removeLoader() {
        this.elements.loader.remove();
    }

    appendControls() {
        this.elements.root.appendChild(this.elements.controls);
    }

    removePosts() {
        this.elements.root.querySelector('[data-posts]').remove();
    }

    searchPosts(input) {
        this.filtredPosts = this.posts.filter(post => post.title.toLowerCase().match(input.value.toLowerCase()));
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
        const cloneElementPosts = this.elements.listPosts.cloneNode(true);
        cloneElementPosts.classList.add('container', 'posts');
        cloneElementPosts.setAttribute('data-posts', '');

        posts.forEach((element) => {
            cloneElementPosts.appendChild(this.renderPost(element));
        });
        return cloneElementPosts;
    }

    renderPost(element) {
        const cloneElementPost = this.elements.postTemplate.cloneNode(true);
        const buttonDelPost = cloneElementPost.querySelector('[data-post-del]');
        cloneElementPost.querySelector('[data-post-header]').innerHTML = element.title;
        cloneElementPost.querySelector('[data-post-txt]').innerHTML = element.body;
        cloneElementPost.querySelector('[data-post]').dataset.post = element.id;
        this.delPost(element, buttonDelPost);
        return cloneElementPost;
    }

    delPost(element, buttonDelPost) {
        buttonDelPost.addEventListener('click', () => {
            buttonDelPost.parentNode.style.display = 'none';
            fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}`, { method: 'DELETE' })
                .then((response) => {
                    if (response.status === 200) {
                        this.posts.splice(this.posts.indexOf(element), 1);
                        this.removePosts();
                        this.appendPosts();
                    } else {
                        buttonDelPost.parentNode.style.display = 'block';
                        alert('Something went wrong');
                    }
                }).catch(() => { alert('Something went wrong'); });
        });
    }

    appendPosts() {
        this.searchPosts(this.elements.input);
        this.sortPosts();
        const posts = this.createListPosts(this.filtredPosts);
        this.elements.root.appendChild(posts);
    }
}

const app = new App(document.querySelector('#root'));
console.dir(app);
