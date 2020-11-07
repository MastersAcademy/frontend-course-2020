const URL = 'https://jsonplaceholder.typicode.com/posts';
const postContainer = document.querySelector('.post-container');
const filterPost = document.querySelector('.filter-post');
let listPost;


async function requestToServer() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        renderingElements(data);
        sortPost(data);
    }
    catch (e) {
        console.error(e);
    }

};

function renderingElements(data) {
    for (let val in data) {
        const post = `
        <div class="post">
        <h1 class="post-title">${data[val].title}</h1>
        <p>${data[val].body}</p>
        </div>
        `
        postContainer.insertAdjacentHTML('afterbegin', post);
    }
}

// function sortPost(data) {
//     filterPost.addEventListener('change', () => {
//         if (filterPost.value === "ZA") {
//             data.sort(function (a, b) {
//                 return a.title == b.title ? 0 : +(a.title > b.title) || -1;
//             });
//             renderingElements(data);
//         } else if (filterPost.value === "AZ") {
//             data.sort(function (a, b) {
//                 return a.title == b.title ? 0 : +(a.title < b.title) || -1;
//             });
//             renderingElements(data);
//         } else {

//         }
//     })
// }

setTimeout(() => {
    document.querySelector(".preloader").hidden = true
    requestToServer();
}, 1000);