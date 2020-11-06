/* eslint-disable import/no-cycle, import/extensions, default-case */
import {
    sortContainerElem,
    sortAzElem,
    sortZaElem,
    sortNoneElem,
    sortTitleElem,
    searchElem,
} from './constantsElem.js';
import { sortAZ, sortZA, searchInTitle } from './helpers.js';

const sort = (getSort) => (e) => {
    const onTarget = e.target;
    const val = document.querySelector('[data-search]');

    switch (onTarget) {
        case sortAzElem:
            sortTitleElem.className = 'dropdown_title sortAzElem';
            sortTitleElem.innerHTML = sortAzElem.textContent;
            getSort(searchInTitle(sortAZ), val.value);
            break;
        case sortZaElem:
            sortTitleElem.className = 'dropdown_title sortZaElem';
            sortTitleElem.innerHTML = sortZaElem.textContent;
            getSort(searchInTitle(sortZA), val.value);
            break;
        case sortNoneElem:
            sortTitleElem.className = 'dropdown_title';
            sortTitleElem.innerHTML = sortNoneElem.textContent;
            getSort(searchInTitle(), val.value);
    }
};

export const onClickSort = (getSort) => {
    sortContainerElem.addEventListener('click', sort(getSort));
};

export const changeSort = (getSort) => {
    searchElem.addEventListener('input', (e) => {
        const sorting = document.querySelector('.dropdown_title');
        const sortingAzElem = document.querySelector(
            '.dropdown_title.sortAzElem',
        );
        const sortingZaElem = document.querySelector(
            '.dropdown_title.sortZaElem',
        );
        switch (sorting) {
            case sortingAzElem:
                getSort(searchInTitle(sortAZ), e.currentTarget.value);
                break;
            case sortingZaElem:
                getSort(searchInTitle(sortZA), e.currentTarget.value);
                break;
            default:
                getSort(searchInTitle(), e.currentTarget.value);
        }
    });
};

export const onDeleteItem = (requestDelete) => {
    const responseText = document.querySelector('[data-response-text]');
    document.querySelectorAll('.content_item').forEach((item) => item.addEventListener('click', (e) => {
        if (e.target.className.includes('delete')) {
            const { target } = e;
            target.style = 'opacity: 0';
            requestDelete(e.currentTarget.id)
                .then(() => {
                    responseText.style = 'visibility: visible';
                    responseText.textContent = 'Success';
                    target.style = 'display: none';
                    setTimeout(() => {
                        responseText.style = 'visibility: hidden';
                    }, 2 * 1000);
                })
                .catch(() => {
                    responseText.style = 'visibility: visible';
                    responseText.textContent = 'Something went wrong';
                    responseText.classList.add('error');
                    target.style = 'display: block; opacity: 1;';
                    setTimeout(() => {
                        responseText.style = 'visibility: hidden';
                        responseText.classList.remove('error');
                    }, 2 * 1000);
                });
        }
    }));
};
