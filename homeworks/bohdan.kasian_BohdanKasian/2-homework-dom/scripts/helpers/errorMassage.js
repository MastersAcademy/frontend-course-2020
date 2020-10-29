/* eslint-disable import/extensions */
import { errorNode } from '../utils/fields.js';

export const error = (errorBool) => {
    if (errorBool) {
        errorNode.classList.add('active');
    } else {
        errorNode.classList.remove('active');
    }
};
