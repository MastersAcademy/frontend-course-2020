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
    somethingError: {
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
let sortIndex = 0;
let searchfilter = '';
let deleteElementId = null;

const loaderIteration = (counter) => {
    const loaderEl = document.querySelector('.loader_point');
    loaderEl.style.animationIterationCount = counter;
};

const setModalDisplay = (display) => {
    const modalEl = document.querySelector('.modal_wrapper');
    modalEl.style.display = display;
};

const modalDisplay = (statusCode) => {
    const { message, header } = statusCode;
    document.querySelector('.modal_content').innerHTML = message;
    setModalDisplay('block');
    loaderIteration('infinite');
    const buttonsHidden = (value) => {
        const hiddenValue = value;
        const buttonsEl = document.querySelectorAll('.modal_btn');
        buttonsEl.forEach((item) => {
            const elem = item;
            elem.hidden = hiddenValue;
        });
        return buttonsEl;
    };
    if (header === 'Сonfirmation') {
        buttonsHidden(false);
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
            modalDisplay(modalContent.deleteConfirm);
            deleteElementId = post.id;
        }
    });
    return listEl;
};

const renderPostsList = (index, filter) => {
    const postListEl = document.querySelector('.posts_list');
    postListEl.innerHTML = '';
    const itemsArray = state.slice(0);
    const regExp = new RegExp(filter, 'gi');
    const filteredState = itemsArray.filter((item) => item.title.match(regExp));
    if (index === 0) {
        filteredState.map((item) => {
            postListEl.append(createPostElement(item));
            return item;
        });
    }
    if (index === 1) {
        const newState = filteredState.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
        newState.map((item) => {
            postListEl.append(createPostElement(item));
            return item;
        });
    }
    if (index === 2) {
        const newState = filteredState.sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        });
        newState.map((item) => {
            postListEl.append(createPostElement(item));
            return item;
        });
    }
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
    }).catch((err) => {
        console.error(err);
        modalDisplay(modalContent.somethingError);
    });
}

async function setDeleteItem(requestType, id) {
    const { adress, method } = requestType.delete;
    const deleteURL = `${adress}${id}`;
    await requestData(deleteURL, method).then((result) => {
        if (result.status === 200) {
            modalDisplay(modalContent.deleteSuccess);
            state.map((i, index) => {
                if (i.id === id) {
                    state.splice(index, 1);
                }
                return i;
            });
        }
    }).then(() => {
        renderPostsList(sortIndex, searchfilter);
    }).catch((err) => {
        modalDisplay(modalContent.somethingError);
        console.error(err);
    });
}

document.querySelector('[data-search-filter]').addEventListener('keyup', (e) => {
    searchfilter = e.target.value;
    renderPostsList(sortIndex, searchfilter);
});

document.querySelector('[data-sort-list]').addEventListener('change', () => {
    const currentIndex = document.querySelector('.sort_list').options.selectedIndex;
    sortIndex = currentIndex;
    renderPostsList(sortIndex, searchfilter);
});

document.querySelectorAll('[data-modal-button]').forEach((item) => {
    if (item.hidden === false) {
        item.addEventListener('click', (e) => {
            const btnCancelEl = document.querySelector('.modal_btn_cancel');
            const btnOkEl = document.querySelector('.modal_btn_ok');
            if (e.target === btnCancelEl) {
                loaderIteration('unset');
                setModalDisplay('none');
            } else if (e.target === btnOkEl) {
                setDeleteItem(REQUEST, deleteElementId);
            }
        });
    }
});

setInterval(() => { document.querySelector('[data-loader-date-container]').innerHTML = `<p class="loader_date">${new Date().toLocaleTimeString()}</p>`; }, 1000);
setTimeout(() => {
    renderPostsList(sortIndex, searchfilter);
}, 3000);
setStateData(REQUEST, state);
