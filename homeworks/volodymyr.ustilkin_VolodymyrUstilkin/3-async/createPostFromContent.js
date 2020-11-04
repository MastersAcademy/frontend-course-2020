// eslint-disable-next-line no-unused-vars
function createPostFromContent(id, title, content) {
    function createTitleContainer(_title) {
        const titleContainer = document.createElement('label');
        titleContainer.classList.add('post-title-container');
        titleContainer.innerText = _title;
        return titleContainer;
    }

    function createContentContainer(_content) {
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('post-content-container');
        contentContainer.innerText = _content;
        return contentContainer;
    }

    function createRemoveButton() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('remove-button');
        return btn;
    }

    function createPostContainer() {
        const element = document.createElement('div');
        element.classList.add('post-container');
        return element;
    }

    function createPostHeader() {
        const element = document.createElement('div');
        element.classList.add('post-container-header');
        return element;
    }

    const titleContainer = createTitleContainer(title);
    const removeButton = createRemoveButton();
    const contentContainer = createContentContainer(content);
    const postContainerHeader = createPostHeader();
    const postContainer = createPostContainer();

    postContainerHeader.appendChild(titleContainer);
    postContainerHeader.appendChild(removeButton);

    postContainer.id = id;
    postContainer.appendChild(postContainerHeader);
    postContainer.appendChild(contentContainer);

    return postContainer;
}
