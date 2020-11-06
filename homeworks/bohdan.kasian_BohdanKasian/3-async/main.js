/* eslint-disable import/extensions */
import { getPosts, sortPosts } from './httpHelper.js';
import { onClickSort, changeSort } from './eventLisnteners.js';

setTimeout(() => {
    getPosts('/posts');
    onClickSort(sortPosts('/posts'));
    changeSort(sortPosts('/posts'));
}, 3);
