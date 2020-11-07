const postsTemplateNode = document.querySelector('[data-template]');
const allPostsArray = [];
console.log(allPostsArray);

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

setTimeout(async () => {
    const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await getPost.json();
    allPostsArray.push(...data);
}, 3000);

function getFullPost(item) {
    const postieItem = [item.userId, item.id, item.title].join('');
    return postieItem;
    // console.log(postieItem);
}

function myFunction() {
    document.querySelector('[data-all-posts]').innerHTML = allPostsArray.map(getFullPost).join();
}
myFunction();

function fun() {
    postsTemplateNode.innerHTML = allPostsArray.map(getFullPost).join('');
}

fun();