/* eslint-disable import/no-cycle, import/extensions */
import { deleteItem } from './deleteItem.js';

export const createMassageNode = (name, id) => {
    const element = document.createElement('li');
    const deleteElementBtn = document.createElement('span');
    element.className = 'content_item';
    element.innerText = name;
    deleteElementBtn.setAttribute('data-delete-message', id);
    deleteElementBtn.addEventListener('click', (e) => deleteItem(e.currentTarget.dataset.deleteMessage));
    deleteElementBtn.innerText = 'x';
    element.appendChild(deleteElementBtn);
    return element;
};
