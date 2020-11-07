const REQUEST = {
    get: {
        adress: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    },
    delete: {
        adress: 'https://jsonplaceholder.typicode.com/posts/',
        method: 'DELETE',
    },
};

const modalContent = {
    somthingError: {
        message: '<p style="color : rgb(167, 13, 13);">something went wrong!</p>',
        header: 'Error',
    },
    deleteConfirm: {
        message: '<p style="color : rgb(73, 105, 131);">confirm item delete?</p>',
        header: 'Сonfirmation',
    },
    deleteSuccess: {
        message: '<p style="color: rgb(26, 151, 15);">item deleted successfully!</p>',
        header: 'Successfull',
    },
    emptyState: {
        message: '<p style="color : rgb(167, 13, 13);">Any matches!</p>',
        header: 'Error',
    },
};

const state = [];

const loaderIteration = (counter) => {
    const loaderEl = document.querySelector('.loader_point');
    loaderEl.style.animationIterationCount = counter;
    return loaderEl;
};

const setModalDisplay = (display) => {
    const modalEl = document.querySelector('.modal_wrapper');
    modalEl.style.display = display;
    return modalEl;
};

const modalDisplay = (statusCode, postId) => {
    const { message, header } = statusCode;
    const elementId = postId;
    document.querySelector('.modal_content').innerHTML = message;
    setModalDisplay('block');
    loaderIteration('infinite');
    const buttonsHidden = (value) => {
        const hiddenValue = value;
        const buttonsEl = document.querySelectorAll('.modal_btn');
        buttonsEl.forEach((item) => {
            const elem = item;
            elem.hidden = hiddenValue;
            return elem;
        });
        return buttonsEl;
    };
    if (header === 'Сonfirmation') {
        buttonsHidden(false);
        document.querySelectorAll('[data-modal-btn-container]').forEach((buttons) => {
            buttons.addEventListener('click', (e) => {
                const btnCancelEl = document.querySelector('[data-modal-btn-cancel]');
                const btnOkEl = document.querySelector('[data-modal-btn-ok]');
                if (e.target === btnCancelEl) {
                    loaderIteration('unset');
                    setModalDisplay('none');
                } else if (e.target === btnOkEl) {
                    // eslint-disable-next-line no-use-before-define
                    setDeleteItem(REQUEST, elementId);
                }
            });
        });
    } else {
        buttonsHidden(true);
        setTimeout(() => {
            setModalDisplay('none');
            loaderIteration('unset');
        }, 2000);
    }
};

const createPostElement = (item) => {
    const post = item;
    const listEl = document.createElement('li');
    listEl.classList.add('post_element_container');
    listEl.setAttribute('id', `${post.id}`);
    listEl.innerHTML = `
      <div class="post_element">
          <div class="post_body">${post.body}</div>
          <div class="post_title">${post.title}</div>
          <div class="post_info">
          <span class="remove_element_point">X</span>
          <span class="hide_element_point"></span>
          </div>
      </div>`;
    listEl.addEventListener('click', (e) => {
        if (e.target.className === 'hide_element_point') {
            listEl.hidden = true;
        } else if (e.target.className === 'remove_element_point') {
            modalDisplay(modalContent.deleteConfirm, post.id);
        }
    });
    return listEl;
};

const renderPostsList = (stateArray) => {
    const itemsArray = stateArray;
    const postListEl = document.querySelector('.posts_list');
    postListEl.innerHTML = '';
    if (itemsArray.length === 0) {
        modalDisplay(modalContent.somthingError);
    } else {
        itemsArray.map((item) => {
            postListEl.append(createPostElement(item));
            return postListEl;
        });
    }
    return itemsArray;
};

async function requestData(adress, method) {
    const adressUrl = adress;
    const requestMethod = method;
    const response = await fetch(adressUrl, { method: `${requestMethod}` });
    return response;
}

async function setStateData(requestType, stateArray) {
    const { adress, method } = requestType.get;
    const response = await requestData(adress, method);
    const jsonData = response.json();
    jsonData.then((result) => {
        stateArray.push(...result);
        return stateArray;
    }).catch((err) => {
        console.error(err);
        modalDisplay(modalContent.somthingError);
    });
}

async function setDeleteItem(requestType, id) {
    const { adress, method } = requestType.delete;
    const postId = id;
    const deleteURL = `${adress}${postId}`;
    await requestData(deleteURL, method).then((result) => {
        if (result.status === 200) {
            modalDisplay(modalContent.deleteSuccess);
            state.map((i, index) => {
                if (i.id === postId) {
                    state.splice(index, 1);
                }
                return i;
            });
        }
    }).then((result) => {
        renderPostsList(state);
        return result;
    }).catch((err) => {
        modalDisplay(modalContent.somthingError);
        console.error(err);
    });
}

document.querySelector('[data-search-filter]').addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    const regExp = new RegExp(inputValue, 'gi');
    const newState = state.filter((item) => item.body.match(regExp) || item.title.match(regExp));
    if (newState.length === 0) {
        modalDisplay(modalContent.emptyState);
    } else {
        renderPostsList(newState);
    }
});

function sortAlphabet(sortOrder, itemsArray) {
    let newState = itemsArray;
    if (sortOrder === 'alphabet_filter') {
        newState = newState.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
    }
    if (sortOrder === 'alphabet_filter_reverse') {
        newState = newState.sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        });
    }
    return newState;
}

document.querySelectorAll('[data-sort-list]').forEach((item) => {
    item.addEventListener('change', (event) => {
        const defaultState = state;
        const newState = sortAlphabet(event.currentTarget.value, defaultState);
        renderPostsList(newState);
    });
});

try {
    setInterval(() => { document.querySelector('[data-loader-date]').innerText = `${new Date().toLocaleTimeString()}`; }, 1000);
    setTimeout(() => {
        renderPostsList(state);
    }, 3000);
    setStateData(REQUEST, state);
} catch (err) {
    console.error(err);
    modalDisplay(modalContent.somthingError);
}
