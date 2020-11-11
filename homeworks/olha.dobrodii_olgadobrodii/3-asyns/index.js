(() => {
    const FORM_SELECTOR = '#header-form';
    const POSTS_WRAPPER_SELECTOR = '.posts-wrapper';

    const SORTING_ASC_VALUE = 'ASC';
    const SORTING_DESC_VALUE = 'DESC';

    const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

    const POST_TEMPLATE = `
    <div class="post">
      <div class="post__header">
        <h1 class="post__title">
          <%- title %>
        </h1>
        <span class="post__remove">x</span>
      </div>

      <div class="post__content">
        <%= htmlBody %>
      </div>
    </div>
`;

    class HomePage {
        constructor() {
            this.form = this.findForm();
            this.filterControl = this.findFilter(this.form);
            this.sortingControl = this.findSorting(this.form);

            this.buildPost = window._.template(POST_TEMPLATE);
            this.contentElement = document.querySelector(POSTS_WRAPPER_SELECTOR);

            this.posts = [];
        }

        init() {
            this.preventFormSubmit();
            this.fetchData();
        }

        findForm() {
            const form = document.querySelector(FORM_SELECTOR);

            if (!form) {
                throw new Error(`Form with selector \`${FORM_SELECTOR}\` is not found`);
            }

            return form;
        }

        findFilter(form) {
            const filterEl = form.filter;

            if (!filterEl) {
                throw new Error('"Filter" field is not found');
            }

            filterEl.addEventListener('input', this.renderPosts.bind(this));

            return filterEl;
        }

        findSorting(form) {
            const collection = form.sorting;

            collection.forEach(
                (radioEl) => radioEl.addEventListener('change', this.renderPosts.bind(this)),
            );

            return collection;
        }

        // preventFormSubmit(event) {
        //    this.form.addEventListener('submit', (event) => event.preventDefault());
        // }

        async fetchData() {
            try {
                const response = await fetch(URL_POSTS);
                this.renderPosts();
                this.posts = await response.json();
            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        }

        renderPosts() {
            const readyPosts = this._processPosts();
            const postsHTML = readyPosts
                .map((post) => this.buildPost(post))
                .join('');

            this.contentElement.innerHTML = postsHTML;
        }

        _processPosts() {
            const posts = [...this.posts];
            const sortedPosts = this._sortPosts(posts);
            const filteredPosts = this._filterPosts(sortedPosts);

            const replaceLineBreaks = (post) => {
                const htmlBody = post.body.replace(/\n/g, '<br>');

                return { ...post, htmlBody };
            };

            return filteredPosts.map(replaceLineBreaks);
        }

        _sortPosts(posts) {
            const sorting = this.sortingControl
                ? this.sortingControl.value
                : '';

            switch (sorting) {
                case SORTING_ASC_VALUE:
                    return window._.sortBy(posts, ['title']);

                case SORTING_DESC_VALUE:
                    return window._.sortBy(posts, ['title']).reverse();

                default:
                    return posts;
            }
        }

        _filterPosts(posts) {
            const filter = this.filterControl
                ? this.filterControl.value
                : '';

            if (filter === '') {
                return posts;
            }
            const findIncluded = ({ body, title }) => (
                body.includes(filter) || title.includes(filter)
            );

            return posts.filter(findIncluded);
        }
    }
    new HomePage().init();
})();
