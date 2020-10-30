/* eslint-disable import/extensions */
import {
    SEND_MESSAGE,
    ERROR_MESSAGE,
    DELETE_MESSAGE,
    NOT_ERROR_MESSAGE,
    END_TYPING_MESSAGE,
    START_TYPING_MESSAGE,
} from './action.js';
import { createStore } from './createStore.js';
import { initialState } from './initialState.js';

export function todosReducer(state, { action, payload }) {
    switch (action) {
        case START_TYPING_MESSAGE:
            return {
                ...state,
                typing: true,
            };
        case END_TYPING_MESSAGE:
            return {
                ...state,
                typing: false,
            };
        case SEND_MESSAGE:
            return {
                ...state,
                message: [...state.message, payload],
                error: false,
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                message: payload,
            };
        case ERROR_MESSAGE:
            return {
                ...state,
                error: true,
            };
        case NOT_ERROR_MESSAGE:
            return {
                ...state,
                error: false,
            };
        default:
            return state;
    }
}

const store = createStore(todosReducer, initialState);

export default store;
