const preloader = document.querySelector('[data-preloader]');
const list = document.querySelector('[data-list]');
const template = document.querySelector('[data-template]');
const filterInput = document.querySelector('[data-filter]');

async function getResponse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  for (let post of posts) {
    const content = template.content;
    const title = content.querySelector('[data-title]');
    const text = content.querySelector('[data-text]');
    title.innerText = post.title;
    text.innerText = post.body;
    list.appendChild(template.content.cloneNode(true));
  }

  preloader.style.display = 'none';

  postsAZ = posts.slice().sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });

  postsZA = postsAZ.slice().reverse();
}

setTimeout(getResponse, 3000);

filterInput.addEventListener('keyup', function() {
  let filter = filterInput.value.toLowerCase();
  filterElements = document.querySelectorAll('[data-list] li h2');

  filterElements.forEach(element => {
    if (element.innerText.toLowerCase().indexOf(filter) > -1) {
      element.parentElement.style.display = '';
    } else {
      element.parentElement.style.display = 'none';
    }
  })
});
