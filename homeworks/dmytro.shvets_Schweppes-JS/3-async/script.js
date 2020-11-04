const titles = document.querySelectorAll('[data-title]');
const deleteBtn = document.querySelectorAll('[data-delete-button]');
const text = document.querySelectorAll('[data-text]');

const posts = document.querySelectorAll('[data-post]');

// Deleting preloading animation
(function stoppingAnimation() {
   let timer = setTimeout(() => {
      posts.forEach(post => post.remove());
      clearTimeout(timer);
   }, 3000);
})();

(async function setPosts() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   const posts = await response.json();
})();