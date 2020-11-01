/* eslint-disable import/extensions */
import { typingNode } from '../utils/fields.js';

export const typing = (active) => {
    if (active) {
        typingNode.classList.add('active');
    } else {
        typingNode.classList.remove('active');
    }
};
