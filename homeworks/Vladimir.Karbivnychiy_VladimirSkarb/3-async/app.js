class Service {
    constructor() {
        this.btn = '';
        this.timer = 0;
        this.data = '';
        this.filterData = '';
        this.onePost = '';
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        this.post = document.querySelector('[data-post]');
        this.oneBtn = document.querySelector('[data-btn]');
        this.title = document.querySelector('[data-title]');
        this.option = document.querySelector('[data-sort]');
        this.loader = document.querySelector('[data-loader]');
        this.warning = document.querySelector('[data-warning]');
        this.input = document.querySelector('[data-input-text]');
        this.container = document.querySelector('[data-container]');
        this.description = document.querySelector('[data-description]');
    }

    preloader() {
        const timer = setTimeout(() => {
            this.loader.classList.add('hidden');
            this.init();
            clearTimeout(timer);
        }, 3000);
    }

    init() {
        this.getPosts();
        this.search();
        this.sort();
    }

    getPosts() {
        fetch(this.url)
            .then((response) => response.json())
            .then((json) => {
                this.data = json;
                this.render(this.data);
            });
    }

    render(postList) {
        postList.forEach((post) => {
            this.post.setAttribute('id', post.id);
            this.title.textContent = post.title;
            this.description.textContent = post.body;
            this.oneBtn.setAttribute('id', post.id);
            const copyPost = this.post.cloneNode(true);
            copyPost.classList.remove('hidden');
            this.container.appendChild(copyPost);
        });
        this.initButton();
    }

    initButton() {
        this.btn = document.querySelectorAll('[data-btn]');
        this.btn.forEach((oneBtn) => {
            oneBtn.addEventListener('click', (button) => {
                this.deletePostReq(button.target.id);
            });
        });
    }

    deletePostReq(id) {
        const allPosts = document.querySelectorAll('[data-post]');
        const allPostsArr = Array.from(allPosts);
        this.onePost = allPostsArr.find((post) => post.childNodes[3].attributes[2].value === id);
        this.onePost.classList.add('disabled');
        fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                this.postDelete(response, id);
            });
    }

    postDelete(response, id) {
        if (response.status === 200) {
            const listPosts = this.data.filter((post) => post.id !== +id);
            this.data = listPosts;
            this.warning.textContent = 'Post deleted';
            this.warning.classList.remove('hidden');
            this.container.innerHTML = '';
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.warning.classList.add('hidden');
            }, 2000);
            this.searchPost(this.input.value);
        } else {
            this.warning.textContent = 'Something went wrong';
            this.warning.classList.remove('hidden');
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.warning.classList.add('hidden');
                this.onePost.classList.remove('disabled');
            }, 2000);
        }
    }

    search() {
        this.input.addEventListener('keyup', () => {
            const inputValue = this.input.value.toLowerCase();
            this.searchPost(inputValue);
        });
    }

    searchPost(input) {
        this.filterData = this.data.filter((post) => post.title.includes(input));
        this.container.innerHTML = '';
        this.render(this.filterData);
    }

    sort() {
        this.option.addEventListener('change', (event) => {
            const sortValue = event.target.value;
            if (sortValue === 'default') {
                this.data.sort((post, post2) => post.id - post2.id);
                this.searchPost(this.input.value);
            } else if (sortValue === 'desc') {
                this.data.sort((post, post2) => {
                    if (post.title > post2.title) {
                        return -1;
                    }
                    return 0;
                });
                this.searchPost(this.input.value);
            } else {
                this.data.sort((post, post2) => {
                    if (post.title < post2.title) {
                        return -1;
                    }
                    return 0;
                });
                this.searchPost(this.input.value);
            }
        });
    }
}

const service = new Service();
service.preloader();
