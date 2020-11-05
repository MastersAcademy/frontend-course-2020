/* eslint-disable import/extensions,no-restricted-globals */
import {
    ERROR_MESSAGE,
    NOT_ERROR_MESSAGE,
    END_TYPING_MESSAGE,
    START_TYPING_MESSAGE,
} from './state/action.js';
import store from './state/reducer.js';
import sendForm from './helpers/sendForm.js';
import {
    messageForm,
    messageField,
} from './utils/fields.js';
import autoExpand from './utils/autoExpand.js';
import { typing } from './helpers/typing.js';
import { error } from './helpers/errorMassage.js';

const initListener = () => {
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (messageField.value.length > 1) {
            sendForm(messageForm, messageField);
            messageField.value = '';
            typing(store.getState().typing);
        } else {
            store.dispatch(ERROR_MESSAGE);
            error(store.getState().error);
        }
    });

    messageField.addEventListener('input', (e) => {
        store.dispatch(START_TYPING_MESSAGE);
        typing(store.getState().typing);
        autoExpand(messageField);
        if (messageField.value.length > 1) {
            store.dispatch(NOT_ERROR_MESSAGE);
            error(store.getState().error);
        } else {
            store.dispatch(ERROR_MESSAGE);
            error(store.getState().error);
        }
        const val = e.currentTarget.value;
        const currTarget = e.currentTarget;
        setTimeout(() => {
            if (val === currTarget.value) {
                store.dispatch(END_TYPING_MESSAGE);
                typing(store.getState().typing);
            }
        }, 2000);
    });
    messageField.addEventListener('change', () => {
        store.dispatch(END_TYPING_MESSAGE);
        typing(store.getState().typing);
    });
    messageField.addEventListener('keydown', (e) => {
        if ((window.event ? event.keyCode : e.which) === 13) {
            if (messageField.value.length <= 1) {
                store.dispatch(ERROR_MESSAGE);
            } else {
                sendForm(messageForm, messageField);
            }
        }
    });
    // Костыль убирает перенос строки после нажатия enter при отправке сообщения
    messageField.addEventListener('keyup', (e) => {
        if ((window.event ? event.keyCode : e.which) === 13) {
            if (messageField.value) {
                e.currentTarget.value = '';
            }
        }
    });
};

export default initListener;
