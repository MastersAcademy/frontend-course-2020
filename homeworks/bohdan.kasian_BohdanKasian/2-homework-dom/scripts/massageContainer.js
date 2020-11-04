/* eslint-disable import/no-cycle, import/extensions */
import { createMassageNode } from './helpers/createMessage.js';
import { messageContainer } from './utils/fields.js';

export const initMassages = (state) => {
    if (state.message) {
        messageContainer.innerHTML = '';
        state.message.forEach((item) => {
            if (item.messageText) {
                messageContainer.appendChild(createMassageNode(item.messageText, item.id));
            }
        });
    }
};
