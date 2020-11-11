// const delay = 1 * 1000;
// setTimeout(() => { console.log(`Таймер сработал спустя ${delay}`); }, delay);
// console.log('Lets start!');
// console.log(delay);
// setTimeout(() => { console.log(dataJSON); }, delay);

const templatePostNode = document.querySelector('[data-post="template"]');
// const articlePostNode = document.querySelector('[data-post="article"]');
// const titlePostNode = document.querySelector('[data-post="title"]');
// const bodyPostNode = document.querySelector('[data-post="body"]');

function createPost(title, body) {
    if ('content' in document.createElement('template')) {
        const clone = templatePostNode.content.cloneNode(true);
        clone.querySelector('[data-post="title"]').textContent = title;
        clone.querySelector('[data-post="body"]').textContent = body;
        templatePostNode.parentNode.appendChild(clone);
    } else alert('Ошибка! Браузер не поддерживает <template>');
}

const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const arrr = [];
async function getDataJSON(url) {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('готово!'), 2000);
    });
    await promise;

    const response = await fetch(url);
    const dataJSON = await response.json();
    arrr.push(...dataJSON);

    arrr.forEach((post) => {
        createPost(post.title, post.body);
    });
}

getDataJSON(postsURL);

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//     alert( i + ": " + item + " (массив:" + arr + ")" );
// });
