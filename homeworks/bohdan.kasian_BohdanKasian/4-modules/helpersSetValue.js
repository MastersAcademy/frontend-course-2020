/* eslint-disable no-param-reassign */
export const setValue = (date, elem, method) => {
    elem.innerHTML = `[${method(date)}]`;
};
