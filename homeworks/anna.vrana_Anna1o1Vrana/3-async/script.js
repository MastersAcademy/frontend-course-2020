const postsTemplateNode = document.querySelector('[data-template]');
const allPostsArray = [];
console.log(allPostsArray);

// STEP 1 - create preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(() => {
        document.querySelector('[data-preloader]')
            .classList
            .remove('preloader');
        document.querySelector('[data-loader]')
            .classList
            .remove('loader');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

// STEP 2 - get Post from ip with await

setTimeout(async () => {
    const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await getPost.json();
    allPostsArray.push(...data);
}, 3000);

// alternative case to get Posts
// async function getPosts() {
//     const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await getPost.json();
//     console.log(data);
// }
// setTimeout(getPosts, 3000);

// alternative case to get Posts

// const posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// console.log(posts.json);

// console.log(posts); // return object Promise

// STEP 3 - output post into html

function getFullPost(item) {
    const posticItem = [item.userId, item.id, item.title].join('');
    return posticItem;
    // console.log(posticItem);
}

function myFunction() {
    document.querySelector('[data-all-posts]').innerHTML = allPostsArray.map(getFullPost).join();
}
myFunction();

function fun() {
    postsTemplateNode.innerHTML = allPostsArray.map(getFullPost).join('');
}

fun();
