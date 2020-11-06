/* eslint-disable import/no-cycle, import/extensions */
import { postsContainerElem } from './constantsElem.js';
import { onDeleteItem } from './eventLisnteners.js';
import { deletePosts } from './httpHelper.js';

const createItemPost = (title, id, content) => {
    const item = document.createElement('li');
    item.id = id;
    item.className = 'content_item';
    item.innerHTML = `
    <div class="content_item_header">
        <h3 class="content_item_header_title">${title}</h3>
        <span class="delete">x</span>
    </div>
    <p class="content_item_text">${content}</p>
    `;
    return item;
};

export const renderPosts = (posts) => {
    posts.forEach(({ title, id, body }) => {
        postsContainerElem.appendChild(createItemPost(title, id, body));
    });
    onDeleteItem(deletePosts('/posts/'));
};

export const removePosts = () => {
    postsContainerElem.innerHTML = '';
};

export const loader = () => {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1000);
};

export const sortAZ = (arr) => arr.sort((a, b) => new Intl.Collator().compare(a.title, b.title));
export const sortZA = (arr) => arr.sort((a, b) => new Intl.Collator().compare(b.title, a.title));

export const searchInTitle = (method) => (arr, val) => {
    if (method) {
        return val
            ? method(
                arr.filter(({ title }) => title.toLowerCase().includes(val.toLowerCase())),
            )
            : method(arr);
    }
    return val
        ? arr.filter(({ title }) => title.toLowerCase().includes(val.toLowerCase()))
        : arr;
};
