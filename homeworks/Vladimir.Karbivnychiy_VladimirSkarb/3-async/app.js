class Service {
    constructor() {
        this.btn = '';
        this.timer = 0;
        this.data = '';
        this.filterData = '';
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        this.post = document.querySelector('[data-post]');
        this.oneBtn = document.querySelector('[data-btn]');
        this.title = document.querySelector('[data-title]');
        this.option = document.querySelector('[data-sort]');
        this.loader = document.querySelector('[data-loader]');
        this.input = document.querySelector('[data-inputText]');
        this.warning = document.querySelector('[data-warning]');
        this.container = document.querySelector('[data-container]');
        this.description = document.querySelector('[data-description]');
        this.sortReq = 'https://jsonplaceholder.typicode.com/posts?_sort=title&_order=';
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
            const allPosts = document.querySelectorAll('[data-post]');
            const onePost = allPosts.item(id - 1);
            onePost.classList.add('disabled');
            this.warning.textContent = 'Something went wrong';
            this.warning.classList.remove('hidden');
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.warning.classList.add('hidden');
                onePost.classList.remove('disabled');
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
                fetch(`${this.url}?`)
                    .then((response) => response.json())
                    .then((json) => {
                        this.container.innerHTML = '';
                        this.data = json;
                        this.searchPost(this.input.value);
                    });
            } else {
                fetch(`${this.sortReq}${sortValue}`)
                    .then((response) => response.json())
                    .then((json) => {
                        this.container.innerHTML = '';
                        this.data = json;
                        this.searchPost(this.input.value);
                    });
            }
        });
    }
}

const service = new Service();
service.preloader();
