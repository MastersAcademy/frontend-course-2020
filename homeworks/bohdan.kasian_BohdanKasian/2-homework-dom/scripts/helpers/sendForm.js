/* eslint-disable import/extensions */
import store from '../state/reducer.js';
import { SEND_MESSAGE } from '../state/action.js';
import { initMassages } from '../massageContainer.js';
import { messageContainer } from '../utils/fields.js';
import autoScrollToBottom from '../utils/autoScroll.js';

const sendForm = (formNode, textNode) => {
    store.dispatch(SEND_MESSAGE, {
        id: Math.random(),
        messageText: textNode.value.replace(/\s+/g, ' ').trim(),
    });
    initMassages(store.getState());
    autoScrollToBottom(messageContainer);
};
export default sendForm;
