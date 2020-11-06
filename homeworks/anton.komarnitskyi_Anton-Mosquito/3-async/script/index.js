class WorkWithPromise {
    constructor() {
        this._mainContainer = document.querySelector('[data-promise="mainContainer"]');
        this._containerForAppedPosts = document.querySelector('[data-promise="post-wrapper-secondary"]');
        this._filterField = document.querySelector('[data-promise="filter"]');
        this._sortField = document.querySelector('[data-promise="sort"]');
        this._loader = document.querySelector('[data-promise="loader"]');
        this._containerOriginal = document.querySelector('[data-promise="post-wrapper-main"]');
        this._baseURL = 'https://jsonplaceholder.typicode.com/posts';
        this._dataBase = null;
        this._intermediateResult = null;
        this._postContainer = null;
        this._postHeader = null;
        this._postDescription = null;
        this._closeNode = null;
    }

    init() {
        this.createElements();
        this.loadPosts();
        this.eventListenet();
        this.createTooltip();
    }

    createElements() {
        const section = document.createElement('div');
        section.classList.add('posts__post-container-body');
        section.dataset.promise = 'post-container-body';

        const h3 = document.createElement('h3');
        h3.classList.add('posts__post-container-header');

        const p = document.createElement('p');
        p.classList.add('posts__post-container-description');

        const div = document.createElement('div');
        div.classList.add('posts__post-container-close');
        div.dataset.promise = 'close';

        this._postContainer = section;
        this._postHeader = h3;
        this._postDescription = p;
        this._closeNode = div;
    }

    get postContainerElement() {
        return this._postContainer.cloneNode(true);
    }

    get postHeaderElement() {
        return this._postHeader.cloneNode(true);
    }

    get postDescriptionElement() {
        return this._postDescription.cloneNode(true);
    }

    get closeElement() {
        return this._closeNode.cloneNode(true);
    }

    createTooltip() {
        const tooltipContainer = this.postContainerElement;
        tooltipContainer.classList.add('posts__container-interface-tooltip', 'hidden');
        tooltipContainer.dataset.promise = 'tooltip';

        this._filterField.parentElement.appendChild(tooltipContainer);
    }

    loadPosts() {
        fetch(this._baseURL)
            .then((response) => response.json())
            .then((data) => {
                this._dataBase = data;
                this.deferredСall(this._dataBase);
            })
            .catch((message) => console.log(message));
    }

    deferredСall(data) {
        const timer = setTimeout(() => {
            this.showArticle();
            this.hideLoader();
            this.inputDataProcessing(data, this._containerOriginal);
            clearTimeout(timer);
        }, 3000);
    }

    showArticle() {
        this._mainContainer.style.visibility = 'visible';
    }

    hideLoader() {
        this._loader.classList.add('hidden');
    }

    inputDataProcessing(arrayData, container) {
        arrayData.forEach((element) => {
            const containerPostsNode = this.postContainerElement;
            containerPostsNode.dataset.id = element.id;

            const titlePostsNode = this.postHeaderElement;
            titlePostsNode.innerText = element.title;

            const descriptionPostsNode = this.postDescriptionElement;
            descriptionPostsNode.innerText = element.body;

            const closeIcon = this.closeElement;

            containerPostsNode.append(titlePostsNode, descriptionPostsNode, closeIcon);

            container.appendChild(containerPostsNode);
        });
    }

    eventListenet() {
        document.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        document.addEventListener('click', (e) => {
            const findAtrributes = e.target.dataset.promise;
            const element = e.target;
            if (findAtrributes !== 'close') return;
            this.closeAction(element);
        });

        document.addEventListener('input', (e) => {
            const findAtrributes = e.target.dataset.promise;
            if (findAtrributes !== 'filter') return;
            this.filterAction();
        });

        document.addEventListener('change', (e) => {
            const findAtrributes = e.target.dataset.promise;
            if (findAtrributes !== 'sort') return;
            this.sortAction();
        });
    }

    filterAction() {
        const filterItem = this._filterField.value.trim().toLowerCase();

        let filterResult = null;

        if (!filterItem) {
            this.removeChildren();

            this.inputDataProcessing(this._dataBase, this._containerOriginal);

            this._containerForAppedPosts.classList.add('hidden');

            this._containerOriginal.classList.remove('hidden');

            this._intermediateResult = null;

            this.sortAction();
        } else {
            filterResult = this._dataBase.filter((obj) => {
                const value = obj.title.toLowerCase().includes(filterItem);
                return value;
            });
            // filterItem.split(" ").some(
            // (value) => new RegExp(value, "i").test(obj.title)
            this._intermediateResult = filterResult;

            this._containerForAppedPosts.innerHTML = '';
            this._containerForAppedPosts.classList.remove('hidden');

            this._containerOriginal.classList.add('hidden');

            this.inputDataProcessing(filterResult, this._containerForAppedPosts);
        }
    }

    sortAction() {
        const findSelectValue = () => {
            const select = this._sortField.selectedIndex;
            const option = this._sortField.options[select];

            return option.value;
        };

        const sortLetter = (flag) => {
            let result = null;
            if (flag === 'down') {
                result = this.howDataBaseUse().sort((current, next) => {
                    const value = current.title > next.title ? 1 : -1;
                    return value;
                });
            } else if (flag === 'up') {
                result = this.howDataBaseUse().sort((current, next) => {
                    const value = current.title < next.title ? 1 : -1;
                    return value;
                });
            }

            return result;
        };

        let sortObjects = null;
        if (findSelectValue() === 'sort_to_lower') {
            sortObjects = sortLetter('down');
        } else if (findSelectValue() === 'sort_to_biger') {
            sortObjects = sortLetter('up');
        } else if (findSelectValue() === '') {
            // this._containerForAppedPosts.classList.add('hidden');

            // this._containerOriginal.classList.remove('hidden');

            return;
        }

        this._intermediateResult = sortObjects;

        this._containerForAppedPosts.innerHTML = '';
        this._containerForAppedPosts.classList.remove('hidden');

        this._containerOriginal.classList.add('hidden');

        this.inputDataProcessing(sortObjects, this._containerForAppedPosts);
    }

    howDataBaseUse() {
        let base = null;
        if (!this._intermediateResult) {
            base = this._dataBase;
        } else {
            base = this._intermediateResult;
        }

        return base;
    }

    closeAction(element) {
        const succesAction = (response, parentElement, id) => {
            this.showMessage('Your action completed successfully');
            if (response.status === 200) {
                parentElement.remove();
                this.removePost(id);
            }
        };

        const errorAction = (parentElement, error) => {
            this.showMessage('An error occurred, the message could not be deleted');
            console.log(error);
            const timer = setTimeout(() => {
                parentElement.classList.add('visible');
                clearTimeout(timer);
            }, 1000);
        };

        const parentElement = element.closest('.posts__post-container-body');

        const [id] = parentElement.dataset.id;

        parentElement.classList.add('hidden');

        fetch(`${this._baseURL}/${id}`, { method: 'DELETE' })
            .then((response) => {
                succesAction(response, parentElement, id);
            })
            .catch((error) => {
                errorAction(parentElement, error);
            });
    }

    showMessage(text) {
        const tooltip = this._mainContainer.querySelector('[data-promise="tooltip"]');
        tooltip.innerText = text;
        tooltip.classList.add('visible');

        const timer = setTimeout(() => {
            tooltip.classList.remove('visible');
            tooltip.classList.add('hidden');
            clearTimeout(timer);
        }, 3000);
    }

    removePost(desiredId) {
        const deleteElement = (base) => {
            const index = base.findIndex((element) => element.id === Number(desiredId));

            base.splice(index, 1);
        };

        if (this._intermediateResult) {
            deleteElement(this._intermediateResult);
            deleteElement(this._dataBase);
        } else {
            deleteElement(this._dataBase);
        }
    }

    removeChildren() {
        const children = this._containerOriginal.children;

        const array = [...children];

        array.forEach((element) => {
            this._containerOriginal.removeChild(element);
        });
    }
}

const exemplar = new WorkWithPromise();
exemplar.init();
