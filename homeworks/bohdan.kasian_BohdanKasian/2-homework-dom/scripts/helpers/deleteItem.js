/* eslint-disable import/no-cycle, import/extensions */
import store from '../state/reducer.js';
import { DELETE_MESSAGE } from '../state/action.js';
import { initMassages } from '../massageContainer.js';

export const deleteItem = (id) => {
    const messages = store.getState().message.filter((item) => item.id !== Number(id));
    store.dispatch(DELETE_MESSAGE, messages);
    initMassages(store.getState());
};
