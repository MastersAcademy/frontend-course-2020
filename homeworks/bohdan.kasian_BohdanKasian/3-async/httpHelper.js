/* eslint-disable import/no-cycle, import/extensions */
import { renderPosts, loader, removePosts } from './helpers.js';

export const mainUrl = 'https://jsonplaceholder.typicode.com';

const httpHelper = async (url, method) => {
    const response = await fetch(`${mainUrl}${url}`, {
        method,
    });
    return response.json();
};

export const getPosts = (url) => {
    removePosts();
    httpHelper(url, 'GET')
        .then((data) => {
            loader();
            renderPosts(data);
        })
        .catch((error) => {
            loader();
            console.log(error);
        });
};

export const sortPosts = (url) => (method, val) => {
    removePosts();
    httpHelper(url, 'GET')
        .then((data) => {
            if (val) {
                renderPosts(method(data, val));
            } else {
                renderPosts(method(data));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deletePosts = (url) => (id) => httpHelper(`${url}${id}`, 'DELETE');
